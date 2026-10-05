// How close a composite's Hao-shuo-de is to the real Mandarin word: the
// "naturalness" the composite dictionary shows and the rebalancing report
// (scripts/report-heads.js) sums up. Derived from the entry's own fields, so
// it moves by itself when a form or the vocabulary changes:
//
//   5 own word      a form is Mandarin's own word (its hanzi is the entry's)
//   4 inside        a form contains Mandarin's word (上课 for 课)
//   3 same core     the form's head is Mandarin's head morpheme (the last
//                   hanzi of a noun, the first of a verb): 早饭 as ... fàn
//   2 shares        a form shares some hanzi with Mandarin's word
//   1 described     a description with nothing in common
// Gaps and skips have no form, so no score.
//
// Pure: the app and the scripts use it.

export const NATURALNESS = {
  5: { key: 'own', eng: "Mandarin's own word", rus: 'слово самого китайского' },
  4: { key: 'inside', eng: "Contains Mandarin's word", rus: 'содержит китайское слово' },
  3: { key: 'core', eng: 'Same core as Mandarin', rus: 'то же ядро, что в китайском' },
  2: { key: 'shares', eng: 'Shares some hanzi', rus: 'есть общие иероглифы' },
  1: { key: 'described', eng: 'Described', rus: 'описание' },
};

// -> the hanzi Mandarin builds the word around: the first of a verb, else the last.
export const coreHanzi = (entry) => (entry.pos === 'verb' ? entry.zh[0] : entry.zh[entry.zh.length - 1]);

// -> 1..5, or null for an entry with no form. headHanzi: the hanzi of the
// entry's head (src/lib/heads.js), when known.
export function naturalness(entry, headHanzi) {
  if (!entry.hsd || !entry.tts) return null;
  const forms = entry.tts.split(' / ').map((s) => s.replace(/[，。？！、\s]/g, ''));
  const zh = entry.zh;
  if (forms.includes(zh)) return 5;
  if (forms.some((f) => f.includes(zh))) return 4;
  if (headHanzi && headHanzi.includes(coreHanzi(entry))) return 3;
  if (forms.some((f) => [...zh].some((c) => f.includes(c)))) return 2;
  return 1;
}

// -> { average, counts: {1..5}, weighted } over entries with a score; weighted
// favours common words (1000 / rank), so the top of the list counts most.
export function naturalnessSummary(scored) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let sum = 0;
  let wsum = 0;
  let w = 0;
  let n = 0;
  for (const { entry, score } of scored) {
    if (score == null) continue;
    counts[score]++;
    sum += score;
    n++;
    const weight = 1000 / entry.rank;
    wsum += score * weight;
    w += weight;
  }
  return { average: n ? sum / n : 0, weighted: w ? wsum / w : 0, counts, n };
}
