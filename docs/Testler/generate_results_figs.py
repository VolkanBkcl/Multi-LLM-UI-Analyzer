#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Loomina — Sonuç (Results & Findings) figürleri.

docs/Testler/ altındaki 60 test dosyasından (4 tema x 3 zorluk x 5 tekrar x 3 model
= 180 değerlendirme) toplu istatistikleri çıkarır ve makaleye hazır 3 figür üretir:

  fig-metric-bars.{png,svg}   Model x 5 metrik ortalama (gruplu bar)
  fig-arbitration.{png,svg}   (a) model basina tahkim%  (b) metrik basina J3 tetikleme
  fig-difficulty.{png,svg}    Zorluk (low/med/high) vs genel skor (model basina cizgi)

Ayrica konsola, loomina-results-findings.md tablolariyla birebir tutmasi icin sayisal
ozet yazar.

Kullanim:  python docs/Testler/generate_results_figs.py
"""

import re
import statistics
import collections
from pathlib import Path

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

HERE = Path(__file__).resolve().parent

MODELS = ["DeepSeek V4 Pro", "Qwen3.6 Plus", "Gemini 3.5 Flash"]
COLORS = {"DeepSeek V4 Pro": "#c0392b", "Qwen3.6 Plus": "#2c6fbb", "Gemini 3.5 Flash": "#27893f"}

# İngilizce metrik etiketleri (md tablo başlıklarındaki Türkçe -> İngilizce)
METRICS_TR = ["Okunabilirlik", "Performans", "Güvenlik", "Sürdürülebilirlik", "Prompt Uyumu"]
METRICS_EN = ["Readability", "Performance", "Security", "Maintainability", "Prompt Adh."]

SEC = re.compile(r"^# Loomina Analiz Raporu — ", re.M)
OVR = re.compile(r"Genel Skor:\*\*\s*([0-9]+)")
DEC = re.compile(r"Karar Yöntemi:\*\*\s*(.+)")
J3 = re.compile(r"J3 \(Tahkimci\) çağrılan metrikler:\*\*\s*(.+)")
TIME = re.compile(r"Üretim Süresi:\*\*\s*([0-9]+(?:\.[0-9]+)?)\s*ms")
CODE = re.compile(r"##\s*Üretilen Kod(.*?)##\s*Hakem Skor", re.S)
FENCE = re.compile(r"^\s*```[a-zA-Z0-9]*\s*$", re.M)
ROW = re.compile(
    r"^\|\s*([A-Za-zÇĞİÖŞÜçğıöşü ]+?)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([\d—-]+)\s*\|\s*\*\*(\d+)\*\*",
    re.M,
)


def _loc(code_section: str) -> int:
    body = FENCE.sub("", code_section)
    return sum(1 for line in body.splitlines() if line.strip())


def collect():
    """Tüm test dosyalarını parse edip toplu yapıları döndürür."""
    overall = collections.defaultdict(list)          # model -> [genel skor]
    metric_final = collections.defaultdict(lambda: collections.defaultdict(list))  # model -> metrik -> [final]
    arb = collections.defaultdict(collections.Counter)   # model -> {Tahkim,Konsensüs}
    j3trig = collections.Counter()                    # metrik -> J3 tetikleme sayısı
    by_diff = collections.defaultdict(lambda: collections.defaultdict(list))  # model -> zorluk -> [genel]
    # per-zorluk: latency(s), LOC, security final — multidim figürü için
    diff_time = collections.defaultdict(lambda: collections.defaultdict(list))
    diff_loc = collections.defaultdict(lambda: collections.defaultdict(list))
    diff_sec = collections.defaultdict(lambda: collections.defaultdict(list))
    miss = 0

    for f in sorted(HERE.glob("**/*.md")):
        txt = f.read_text(encoding="utf-8")
        folder = f.parts[len(HERE.parts)]            # örn "4.3"
        theme, diff = (folder.split(".") + [""])[:2]
        for sec in SEC.split(txt)[1:]:
            model = sec.splitlines()[0].strip()
            if model not in MODELS:
                continue
            ov = OVR.search(sec)
            if not ov:
                miss += 1
                continue
            overall[model].append(int(ov.group(1)))
            by_diff[model][diff].append(int(ov.group(1)))

            mt = TIME.search(sec)
            if mt:
                diff_time[model][diff].append(float(mt.group(1)) / 1000.0)
            cd = CODE.search(sec)
            if cd:
                diff_loc[model][diff].append(_loc(cd.group(1)))

            dc = DEC.search(sec)
            if dc:
                d = "Tahkim" if "Tahkim" in dc.group(1) else "Konsensüs"
                arb[model][d] += 1

            jt = J3.search(sec)
            if jt:
                v = jt.group(1).strip()
                if not v.lower().startswith("yok"):
                    for x in re.split(r"[,]", v):
                        name = x.strip()
                        if name in METRICS_TR:
                            j3trig[name] += 1

            for mm in ROW.finditer(sec):
                name = mm.group(1).strip()
                if name in METRICS_TR:
                    metric_final[model][name].append(int(mm.group(5)))
                    if name == "Güvenlik":
                        diff_sec[model][diff].append(int(mm.group(5)))

    return (overall, metric_final, arb, j3trig, by_diff,
            diff_time, diff_loc, diff_sec, miss)


def print_summary(overall, metric_final, arb, j3trig, by_diff):
    print("=== Overall ===")
    for m in MODELS:
        v = overall[m]
        print(f"  {m:18} n={len(v)} mean={statistics.mean(v):.1f} sd={statistics.pstdev(v):.1f} "
              f"median={statistics.median(v):.0f} min={min(v)} max={max(v)}")
    print("=== Per-metric (final) ===")
    for m in MODELS:
        vals = [statistics.mean(metric_final[m][k]) for k in METRICS_TR]
        print(f"  {m:18} " + "  ".join(f"{en}={v:.1f}" for en, v in zip(METRICS_EN, vals)))
    print("=== Arbitration rate ===")
    for m in MODELS:
        c = arb[m]; tot = sum(c.values())
        print(f"  {m:18} arb={c['Tahkim']}/{tot} ({100*c['Tahkim']/tot:.0f}%)")
    tot_arb = sum(arb[m]["Tahkim"] for m in MODELS); tot_all = sum(sum(arb[m].values()) for m in MODELS)
    print(f"  OVERALL arb {tot_arb}/{tot_all} ({100*tot_arb/tot_all:.0f}%)")
    print("=== J3 trigger by metric ===", {k: j3trig[k] for k in METRICS_TR})
    print("=== Difficulty (low/med/high) ===")
    for m in MODELS:
        print(f"  {m:18}", {d: round(statistics.mean(v), 1) for d, v in sorted(by_diff[m].items())})


def fig_metric_bars(metric_final):
    fig, ax = plt.subplots(figsize=(9, 5.2))
    x = np.arange(len(METRICS_EN)); w = 0.26
    for i, m in enumerate(MODELS):
        means = [statistics.mean(metric_final[m][k]) for k in METRICS_TR]
        bars = ax.bar(x + (i - 1) * w, means, w, label=m, color=COLORS[m], alpha=0.9,
                      edgecolor="white", linewidth=0.5)
        ax.bar_label(bars, fmt="%.0f", padding=2, fontsize=8)
    ax.set_xticks(x); ax.set_xticklabels(METRICS_EN)
    ax.set_ylabel("Mean Final Score (0–100)")
    ax.set_ylim(0, 100)
    ax.set_title("Per-Metric Mean Scores by Model (n=60 each)")
    ax.axhspan(0, 55, color="#cc0000", alpha=0.04)  # zayıf bölge hafif vurgusu
    ax.grid(True, axis="y", ls=":", lw=0.5, alpha=0.5)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    ax.legend(loc="lower left", fontsize=9, frameon=True, framealpha=0.9)
    fig.tight_layout()
    _save(fig, "fig-metric-bars")


def fig_arbitration(arb, j3trig):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(11, 4.6))

    # (a) model başına tahkim%
    rates = [100 * arb[m]["Tahkim"] / sum(arb[m].values()) for m in MODELS]
    bars = ax1.bar(MODELS, rates, color=[COLORS[m] for m in MODELS], alpha=0.9,
                   edgecolor="white", linewidth=0.5)
    ax1.bar_label(bars, fmt="%.0f%%", padding=3, fontsize=10)
    ax1.set_ylabel("Arbitration Rate (% of evaluations → J3)")
    ax1.set_ylim(0, 60)
    ax1.set_title("(a) Arbitration Rate by Model")
    ax1.tick_params(axis="x", labelrotation=12)
    ax1.grid(True, axis="y", ls=":", lw=0.5, alpha=0.5)

    # (b) metrik başına J3 tetikleme
    counts = [j3trig[k] for k in METRICS_TR]
    order = np.argsort(counts)[::-1]
    labels = [METRICS_EN[i] for i in order]; vals = [counts[i] for i in order]
    bars = ax2.bar(labels, vals, color="#6c5ce7", alpha=0.85, edgecolor="white", linewidth=0.5)
    ax2.bar_label(bars, fmt="%d", padding=3, fontsize=10)
    ax2.set_ylabel("Times Metric Triggered Arbitration (count)")
    ax2.set_title("(b) Disagreement Source by Metric (all models)")
    ax2.tick_params(axis="x", labelrotation=18)
    ax2.grid(True, axis="y", ls=":", lw=0.5, alpha=0.5)

    for ax in (ax1, ax2):
        for s in ("top", "right"):
            ax.spines[s].set_visible(False)
    fig.tight_layout()
    _save(fig, "fig-arbitration")


def fig_difficulty(by_diff):
    fig, ax = plt.subplots(figsize=(7.6, 5.0))
    levels = ["1", "2", "3"]; xlabels = ["Low", "Medium", "High"]
    x = np.arange(len(levels))
    for m in MODELS:
        y = [statistics.mean(by_diff[m][d]) for d in levels]
        ax.plot(x, y, marker="o", lw=2, color=COLORS[m], label=m)
        for xi, yi in zip(x, y):
            ax.annotate(f"{yi:.1f}", (xi, yi), textcoords="offset points",
                        xytext=(0, 7), ha="center", fontsize=8, color=COLORS[m])
    ax.set_xticks(x); ax.set_xticklabels(xlabels)
    ax.set_xlabel("Task Difficulty Tier")
    ax.set_ylabel("Mean Overall Score (0–100)")
    ax.set_title("Overall Score vs Task Difficulty (n=20 per cell)")
    ax.grid(True, ls=":", lw=0.5, alpha=0.5)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    ax.legend(loc="lower left", fontsize=9, frameon=True, framealpha=0.9)
    fig.tight_layout()
    _save(fig, "fig-difficulty")


def fig_metric_heatmap(metric_final):
    """Fig 11 yerine: 3 model x 5 metrik ortalama ısı haritası (gerçek veri)."""
    data = np.array([[statistics.mean(metric_final[m][k]) for k in METRICS_TR] for m in MODELS])
    fig, ax = plt.subplots(figsize=(8.6, 4.4))
    im = ax.imshow(data, cmap="Blues", aspect="auto", vmin=40, vmax=100)
    ax.set_xticks(np.arange(len(METRICS_EN))); ax.set_xticklabels(METRICS_EN)
    ax.set_yticks(np.arange(len(MODELS))); ax.set_yticklabels(MODELS)
    for i in range(len(MODELS)):
        for j in range(len(METRICS_EN)):
            val = data[i, j]
            ax.text(j, i, f"{val:.1f}", ha="center", va="center",
                    color="white" if val >= 78 else "#1a1a1a", fontsize=11, fontweight="bold")
    cbar = fig.colorbar(im, ax=ax, fraction=0.046, pad=0.04)
    cbar.set_label("Mean Final Score (0–100)")
    ax.set_title("Per-Metric Mean Scores by Model (n=60 each)")
    fig.tight_layout()
    _save(fig, "fig-metric-heatmap")


def fig_multidim(diff_time, diff_loc, diff_sec):
    """Fig 12 yerine: 4 panel (response time / LOC / time trend / security) — gerçek veri."""
    levels = ["1", "2", "3"]; xlabels = ["Low", "Medium", "High"]
    x = np.arange(len(levels)); w = 0.26
    fig, axes = plt.subplots(2, 2, figsize=(11, 8))
    (axA, axB), (axC, axD) = axes

    def grouped(ax, src, agg=statistics.mean):
        for i, m in enumerate(MODELS):
            y = [agg(src[m][d]) for d in levels]
            ax.bar(x + (i - 1) * w, y, w, label=m, color=COLORS[m], alpha=0.9,
                   edgecolor="white", linewidth=0.5)
        ax.set_xticks(x); ax.set_xticklabels(xlabels)

    # (a) Response time by difficulty
    grouped(axA, diff_time)
    axA.set_title("(a) Response Time by Difficulty"); axA.set_ylabel("Time (seconds)")

    # (b) Generated LOC by difficulty
    grouped(axB, diff_loc)
    axB.set_title("(b) Generated Lines of Code (LOC)"); axB.set_ylabel("Number of Lines")

    # (c) Response time trend (line)
    for m in MODELS:
        y = [statistics.mean(diff_time[m][d]) for d in levels]
        axC.plot(x, y, marker="o", lw=2, color=COLORS[m], label=m)
    axC.set_xticks(x); axC.set_xticklabels(xlabels)
    axC.set_title("(c) Response Time Trend"); axC.set_ylabel("Time (seconds)")

    # (d) Security by difficulty — DÜZELTİLMİŞ (gerçek, yüksek)
    grouped(axD, diff_sec)
    axD.axhline(60, color="#cc0000", ls="-.", lw=1.2, alpha=0.7)
    axD.set_title("(d) Security Score by Difficulty"); axD.set_ylabel("Security Score (%)")
    axD.set_ylim(0, 100)

    for ax in (axA, axB, axC, axD):
        ax.grid(True, axis="y", ls=":", lw=0.5, alpha=0.5)
        for s in ("top", "right"):
            ax.spines[s].set_visible(False)
    axA.legend(loc="upper left", fontsize=8, frameon=True, framealpha=0.9)
    fig.tight_layout()
    _save(fig, "fig-multidim")


def _save(fig, stem):
    png = HERE / f"{stem}.png"; svg = HERE / f"{stem}.svg"
    fig.savefig(png, dpi=300); fig.savefig(svg)
    print(f"Yazıldı: {png.name}, {svg.name}")
    plt.close(fig)


def main():
    plt.rcParams.update({"font.size": 11, "font.family": "DejaVu Sans"})
    (overall, metric_final, arb, j3trig, by_diff,
     diff_time, diff_loc, diff_sec, miss) = collect()
    print_summary(overall, metric_final, arb, j3trig, by_diff)
    print(f"MISS={miss}")
    fig_metric_bars(metric_final)
    fig_arbitration(arb, j3trig)
    fig_difficulty(by_diff)
    fig_metric_heatmap(metric_final)
    fig_multidim(diff_time, diff_loc, diff_sec)


if __name__ == "__main__":
    main()
