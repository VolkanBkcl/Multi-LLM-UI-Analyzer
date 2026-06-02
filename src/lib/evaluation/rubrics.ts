import { readFileSync } from 'fs';
import path from 'path';
import type { MetricKey } from './types';

/**
 * Rubrik markdown dosyalarını okur ve önbelleğe alır.
 * Yalnızca Node.js runtime'ında çağrılmalıdır (route.ts içinde `export const runtime = 'nodejs'`).
 */

const METRIC_TO_FILE: Record<MetricKey, string> = {
  readability: 'readability',
  performance: 'performance',
  security: 'security',
  maintainability: 'maintainability',
  promptAdherence: 'prompt-alignment',
};

const RUBRICS_DIR = path.join(process.cwd(), 'src', 'lib', 'evaluation', 'rubrics');

const cache = new Map<MetricKey, string>();

export function loadRubric(metric: MetricKey): string {
  const cached = cache.get(metric);
  if (cached) return cached;

  const fileName = METRIC_TO_FILE[metric];
  const content = readFileSync(path.join(RUBRICS_DIR, `${fileName}.md`), 'utf-8');
  cache.set(metric, content);
  return content;
}

/** Tahkimci promptu için tüm rubrikleri tek metinde birleştirir. */
export function loadAllRubrics(): string {
  return (Object.keys(METRIC_TO_FILE) as MetricKey[])
    .map((metric) => `### ${metric.toUpperCase()}\n${loadRubric(metric)}`)
    .join('\n\n');
}
