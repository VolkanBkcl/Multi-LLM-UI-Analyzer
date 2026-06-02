/**
 * Programatik prompt-uyum denetimi (Kategori A kısıtları).
 * IFEval "verifiable instruction" metodolojisine göre, kesin olarak string analizi ile
 * tespit edilebilen kısıtları denetler. LLM çağrısı yapmaz; anlık ve nesneldir.
 *
 * Ölçek 0-100'dür: programmaticScore = round(passedRules / totalRules * 100).
 */

export interface ProgrammaticCheckResult {
  programmaticScore: number; // 0-100
  violations: string[];
  totalRules: number;
  passedRules: number;
}

export function checkProgrammaticRules(
  code: string,
  userPrompt: string,
  systemPrompt: string,
): ProgrammaticCheckResult {
  const violations: string[] = [];
  let totalRules = 0;
  const combinedPrompt = `${userPrompt} ${systemPrompt}`.toLowerCase();
  const trimmedCode = (code ?? '').trim();

  // --- Kural 1: Sadece kod döndür (Loomina sabit sistem kısıtı) ---
  totalRules++;
  const hasMarkdownFence = /```/.test(trimmedCode);
  const hasExplanation = /^(here('s| is)|this (code|component|is)|the following|below (is|you)|işte|aşağıda)/i.test(
    trimmedCode,
  );
  if (hasMarkdownFence || hasExplanation) {
    violations.push('explanation_or_markdown_in_output');
  }

  // --- Kural 2: Tailwind CSS zorunlu mu? ---
  if (combinedPrompt.includes('tailwind')) {
    totalRules++;
    const usesTailwind = /class(Name)?=["'][^"']*\b(flex|grid|p-|m-|bg-|text-|border|rounded|w-|h-|gap-|items-|justify-)/i.test(
      code,
    );
    if (!usesTailwind) violations.push('tailwind_not_detected');
  }

  // --- Kural 3: React zorunlu mu? ---
  if (combinedPrompt.includes('react')) {
    totalRules++;
    const usesReact = /from ['"]react['"]|import React/i.test(code);
    if (!usesReact) violations.push('react_not_detected');
  }

  // --- Kural 4: HTML + Inline CSS zorunlu mu? ---
  if (combinedPrompt.includes('inline css') || combinedPrompt.includes('clean html')) {
    totalRules++;
    const usesInlineStyle = /style\s*=\s*["']/i.test(code);
    if (!usesInlineStyle) violations.push('inline_css_not_detected');
  }

  // --- Kural 5: Sadece HTML mi? (React yasak) ---
  if (
    (combinedPrompt.includes('html') || combinedPrompt.includes('clean html')) &&
    !combinedPrompt.includes('react')
  ) {
    totalRules++;
    const usesReactInHtmlOnly = /import React|from ['"]react['"]/i.test(code);
    if (usesReactInHtmlOnly) violations.push('react_used_in_html_only_task');
  }

  const passedRules = totalRules - violations.length;
  const programmaticScore =
    totalRules > 0 ? Math.round((passedRules / totalRules) * 100) : 100; // Kural yoksa tam puan

  return { programmaticScore, violations, totalRules, passedRules };
}
