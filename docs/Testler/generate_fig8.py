#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Loomina — Fig. 8'in yeni versiyonu.

Bu betik, docs/Testler/ altındaki 60 test dosyasından (4 tema x 3 zorluk x 5 tekrar)
her modelin (DeepSeek V4 Pro, Qwen3.6 Plus, Gemini 3.5 Flash) ürettiği kodun satır
sayısı (LOC) ile API yanıt süresini (Üretim Süresi, saniye) çıkarır ve bunların
ilişkisini gösteren bir scatter + trend grafiği üretir.

Çıktılar (docs/Testler/ içine):
  - fig8-loc-vs-latency.png   (300 dpi, sunum/önizleme)
  - fig8-loc-vs-latency.svg   (vektör, yayın kalitesi)
  - fig8-data.csv             (180 satır ham veri; tekrarlanabilirlik / makale eki)

Kullanım:
  python docs/Testler/generate_fig8.py
"""

import csv
import glob
import os
import re
import sys

import numpy as np
import matplotlib

matplotlib.use("Agg")  # başsız (headless) — pencere açmadan dosyaya yazar
import matplotlib.pyplot as plt

# --- Sabitler -------------------------------------------------------------

HERE = os.path.dirname(os.path.abspath(__file__))

# Model adı -> (renk, marker). Adlar test md başlıklarındaki tam adlardır.
MODEL_STYLE = {
    "DeepSeek V4 Pro":  {"color": "#c0392b", "marker": "o"},  # kırmızı, daire
    "Qwen3.6 Plus":     {"color": "#2c6fbb", "marker": "s"},  # mavi, kare
    "Gemini 3.5 Flash": {"color": "#27893f", "marker": "^"},  # yeşil, üçgen
}

# Bölüm ayırıcı: "# Loomina Analiz Raporu — <Model>"
SECTION_RE = re.compile(r"^# Loomina Analiz Raporu — ", re.M)
TIME_RE = re.compile(r"Üretim Süresi:\*\*\s*([0-9]+(?:\.[0-9]+)?)\s*ms")
# Kod, "## Üretilen Kod" ile "## Hakem Skor" başlıkları arasından alınır
# (iç ``` fence'lerine karşı dayanıklı; naif fence eşleştirmesi yapılmaz).
CODE_RE = re.compile(r"##\s*Üretilen Kod(.*?)##\s*Hakem Skor", re.S)
FENCE_RE = re.compile(r"^\s*```[a-zA-Z0-9]*\s*$", re.M)


def count_loc(code_section: str) -> int:
    """Kod bölümündeki ``` fence satırlarını atıp boş olmayan satırları sayar (standart LOC)."""
    body = FENCE_RE.sub("", code_section)
    return sum(1 for line in body.splitlines() if line.strip())


def parse_folder_id(path: str):
    """'docs/Testler/4.3/test2.md' -> (tema=4, zorluk=3, test_no=2)."""
    rel = os.path.relpath(path, HERE)
    parts = rel.replace("\\", "/").split("/")
    theme, difficulty = (parts[0].split(".") + ["", ""])[:2]
    m = re.search(r"test(\d+)", parts[-1])
    test_no = m.group(1) if m else ""
    return theme, difficulty, test_no


def extract() -> list:
    """Tüm test md dosyalarını parse edip kayıt listesi döndürür."""
    records = []
    miss = 0
    files = sorted(glob.glob(os.path.join(HERE, "**", "*.md"), recursive=True))
    for f in files:
        with open(f, encoding="utf-8") as fh:
            txt = fh.read()
        theme, difficulty, test_no = parse_folder_id(f)
        sections = SECTION_RE.split(txt)
        for sec in sections[1:]:  # ilk parça başlık öncesi (karşılaştırma tablosu) — atla
            model = sec.splitlines()[0].strip()
            if model not in MODEL_STYLE:
                continue
            mt = TIME_RE.search(sec)
            cm = CODE_RE.search(sec)
            if not mt or not cm:
                miss += 1
                print(f"  MISS: {os.path.relpath(f, HERE)} — {model} "
                      f"(süre={bool(mt)}, kod={bool(cm)})", file=sys.stderr)
                continue
            seconds = float(mt.group(1)) / 1000.0
            loc = count_loc(cm.group(1))
            records.append({
                "model": model, "loc": loc, "seconds": seconds,
                "theme": theme, "difficulty": difficulty, "test": test_no,
            })
    return records, miss


def main():
    records, miss = extract()

    # --- Doğrulama özeti -------------------------------------------------
    print("Çıkarılan veri özeti:")
    for model in MODEL_STYLE:
        rows = [r for r in records if r["model"] == model]
        if rows:
            locs = [r["loc"] for r in rows]
            secs = [r["seconds"] for r in rows]
            print(f"  {model:18} n={len(rows):3}  "
                  f"LOC[{min(locs)}–{max(locs)}]  saniye[{min(secs):.1f}–{max(secs):.1f}]")
    print(f"  TOPLAM={len(records)}  MISS={miss}")

    # --- CSV --------------------------------------------------------------
    csv_path = os.path.join(HERE, "fig8-data.csv")
    with open(csv_path, "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=["model", "loc", "seconds", "theme", "difficulty", "test"])
        w.writeheader()
        w.writerows(records)
    print(f"Yazıldı: {os.path.relpath(csv_path, HERE)} ({len(records)} satır)")

    # --- Çizim ------------------------------------------------------------
    plt.rcParams.update({"font.size": 11, "font.family": "DejaVu Sans"})
    fig, ax = plt.subplots(figsize=(9, 5.6))

    all_loc = [r["loc"] for r in records]
    x_line = np.linspace(min(all_loc), max(all_loc), 100)

    for model, style in MODEL_STYLE.items():
        rows = [r for r in records if r["model"] == model]
        if not rows:
            continue
        loc = np.array([r["loc"] for r in rows], dtype=float)
        sec = np.array([r["seconds"] for r in rows], dtype=float)

        # Pearson korelasyonu (LOC ile log10(süre) arası — log eksenle tutarlı)
        log_sec = np.log10(sec)
        r = np.corrcoef(loc, log_sec)[0, 1]

        # Scatter (60 nokta)
        ax.scatter(loc, sec, s=42, alpha=0.6, color=style["color"],
                   marker=style["marker"], edgecolors="white", linewidths=0.4,
                   label=f"{model}  (n={len(rows)}, r={r:.2f})", zorder=3)

        # Trend: log uzayında lineer regresyon -> log eksende düz çizgi
        a, b = np.polyfit(loc, log_sec, 1)
        y_line = 10 ** (a * x_line + b)
        ax.plot(x_line, y_line, color=style["color"], lw=1.8, ls="--",
                alpha=0.9, zorder=2)

    ax.set_yscale("log")
    ax.set_xlabel("Number of Lines of Code Generated (LOC)")
    ax.set_ylabel("API Response Time (seconds, log scale)")
    ax.grid(True, which="both", ls=":", lw=0.5, alpha=0.5)

    # Log ekseninde okunabilir saniye etiketleri (sabit ara değerler, düz sayı)
    yticks = [20, 50, 100, 200, 500]
    ax.set_yticks(yticks)
    ax.set_yticklabels([str(t) for t in yticks])
    ax.yaxis.set_minor_formatter(plt.NullFormatter())

    for spine in ("top", "right"):
        ax.spines[spine].set_visible(False)

    ax.legend(loc="lower right", frameon=True, framealpha=0.9, fontsize=9.5)
    fig.tight_layout()

    png_path = os.path.join(HERE, "fig8-loc-vs-latency.png")
    svg_path = os.path.join(HERE, "fig8-loc-vs-latency.svg")
    fig.savefig(png_path, dpi=300)
    fig.savefig(svg_path)
    print(f"Yazıldı: {os.path.relpath(png_path, HERE)}")
    print(f"Yazıldı: {os.path.relpath(svg_path, HERE)}")


if __name__ == "__main__":
    main()
