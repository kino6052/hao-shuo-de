// Measures how much of the word lists in kb/yardsticks/ (Mandarin, English, Basic English, everyday sentences) the dictionary can say.
// KB_PLAN.md phase 6, K12. Nothing here changes data.
//
//   yardstickReport({ composites, english, mandarin, basic, top }) -> { mandarin, englishTop, basic }
//   renderYardsticks(report, { limit }) -> the report as text
//
// composites  the dictionary's entries [{ zh, ... }]: the composites and the core words no composite repeats (word-entries.js)
// english     the English lookup (english.js): lookup(word) -> { glosses, sameSense, kindOf }
// mandarin    the common Mandarin words [{ zh, py, rank }], most common first
// basic       Basic English [{ en, group, zh: [...] }]
// top         the common English words ['the', 'be', ...], most common first
// sentences   everyday sentences [{ zh, en }] (kb/yardsticks/sentences.json, from Tatoeba)
// explained   kb/yardsticks/english-explained.json: { words: { the: { how, say?, base?, note } } }, the English words that
//             are not an entry, each with how the language says it or why it has none (K30)
//
// An English word is `said` when an entry's gloss has it or an entry shares its WordNet sense, `explained` when the
// explained list has it, `near` when only a walk up
// "is a kind of" finds a starting point (…-de X), `missing` when nothing does. A Mandarin word is said when the dictionary has
// an entry for it. A sentence is said when entries cover every one of its characters (longest entry first; grammar is not
// checked here), and each character no entry covers is shown with the sentences it alone holds back. The bands (first 500, 1000, 3000, 4000, and the whole list) show whether the gaps are among the common words or only far down (K30 finishes all 5329 Mandarin words).

const BANDS = [500, 1000, 3000, 4000];
const MAX_ENTRY = 6; // the longest entry the cut looks for, in characters
const PUNCTUATION = /[，。！？、；：“”‘’…—\s]/;

// -> the characters of a sentence that no entry covers, cutting it greedily into the longest entries
export function uncovered(zh, have) {
  const chars = [...zh].filter((c) => !PUNCTUATION.test(c));
  const out = [];
  for (let i = 0; i < chars.length; ) {
    let took = 0;
    for (let n = Math.min(MAX_ENTRY, chars.length - i); n >= 1 && !took; n--) if (have.has(chars.slice(i, i + n).join(''))) took = n;
    if (took) i += took;
    else out.push(chars[i++]);
  }
  return out;
}

function sentenceReport(sentences, have) {
  const rows = sentences.map((s) => ({ ...s, left: [...new Set(uncovered(s.zh, have))] }));
  const said = rows.filter((r) => !r.left.length).length;
  const tally = new Map();
  for (const r of rows) for (const c of r.left) tally.set(c, { char: c, sentences: 0, unlocks: 0 });
  for (const r of rows) {
    for (const c of r.left) tally.get(c).sentences++;
    if (r.left.length === 1) tally.get(r.left[0]).unlocks++;
  }
  // the characters that would make the most sentences sayable alone, then the ones in the most sentences
  const missing = [...tally.values()].sort((a, b) => b.unlocks - a.unlocks || b.sentences - a.sentences || a.char.localeCompare(b.char));
  const oneAway = rows.filter((r) => r.left.length === 1).length;
  return { total: rows.length, said, oneAway, missing, examples: rows.filter((r) => r.left.length === 1).slice(0, 5).map((r) => ({ zh: r.zh, en: r.en, char: r.left[0] })) };
}

// how one English word is said: 'said' | 'explained' | 'near' | 'missing'. An entry wins; then the explained list
// (kb/yardsticks/english-explained.json: a grammar word, a name, an inflected form, with how it is said or why it has no
// entry), which goes before a "kind of" because someone looked at the word
export function englishVerdict(english, word, explained = {}) {
  const r = english.lookup(word);
  if (r.glosses.length || r.sameSense.length) return 'said';
  if (explained[word]) return 'explained';
  return r.kindOf.length ? 'near' : 'missing';
}

function bands(items, verdictOf) {
  // the bands under the list's length, then the whole list
  const cuts = [...new Set([...BANDS.filter((n) => n < items.length), items.length])];
  const out = cuts.map((n) => ({ upTo: n, said: 0, explained: 0, near: 0, missing: 0, total: 0 }));
  const verdicts = items.map(verdictOf);
  for (const b of out) {
    for (let i = 0; i < b.upTo; i++) {
      b[verdicts[i]]++;
      b.total++;
    }
  }
  return { bands: out, verdicts };
}

export function yardstickReport({ composites, english, mandarin = [], basic = [], top = [], sentences = [], explained = {} }) {
  const have = new Set(composites.map((c) => c.zh));
  const words = explained.words ?? {};
  const m = bands(mandarin, (w) => (have.has(w.zh) ? 'said' : 'missing'));
  const e = bands(top, (w) => englishVerdict(english, w, words));
  const basicVerdicts = basic.map((b) => ({ ...b, verdict: englishVerdict(english, b.en, words), zhSaid: b.zh.some((z) => have.has(z)) }));
  const count = (list, f) => list.filter(f).length;
  return {
    sentences: sentenceReport(sentences, have),
    mandarin: { total: mandarin.length, bands: m.bands, missing: mandarin.filter((_, i) => m.verdicts[i] === 'missing') },
    englishTop: {
      total: top.length,
      bands: e.bands,
      missing: top.filter((_, i) => e.verdicts[i] === 'missing'),
      near: top.filter((_, i) => e.verdicts[i] === 'near'),
      // explained words an entry now says: the explanation can go
      stale: Object.keys(words).filter((w) => englishVerdict(english, w) === 'said'),
    },
    basic: {
      total: basic.length,
      said: count(basicVerdicts, (b) => b.verdict === 'said'),
      explained: count(basicVerdicts, (b) => b.verdict === 'explained'),
      near: count(basicVerdicts, (b) => b.verdict === 'near'),
      missing: count(basicVerdicts, (b) => b.verdict === 'missing'),
      // the author's own Mandarin for the word is in the dictionary even when the English lookup does not reach it
      zhSaid: count(basicVerdicts, (b) => b.zhSaid),
      words: basicVerdicts.filter((b) => b.verdict === 'missing').map((b) => ({ en: b.en, group: b.group, zh: b.zh, zhSaid: b.zhSaid })),
    },
  };
}

const pct = (n, of) => (of ? `${Math.round((100 * n) / of)}%` : '-');

export function renderYardsticks(r, { limit = 15 } = {}) {
  const out = ['Yardsticks: how much of each list the dictionary can say'];
  out.push('', `Mandarin, the ${r.mandarin.total} common words (an entry for the word):`);
  for (const b of r.mandarin.bands) out.push(`  first ${String(b.upTo).padStart(4)}: ${pct(b.said, b.total)} said, ${b.missing} missing`);
  out.push(`  most common missing: ${r.mandarin.missing.slice(0, limit).map((w) => `${w.zh} ${w.py}`).join(', ')}`);
  out.push('', `English, the ${r.englishTop.total} common words (gloss, same sense, or a kind of):`);
  for (const b of r.englishTop.bands) out.push(`  first ${String(b.upTo).padStart(4)}: ${pct(b.said, b.total)} said, ${b.explained} explained, ${pct(b.near, b.total)} only as a kind of, ${b.missing} missing`);
  out.push(`  most common missing: ${r.englishTop.missing.slice(0, limit).join(', ')}`);
  if (r.englishTop.stale.length) out.push(`  explained, but an entry says it now (drop the explanation): ${r.englishTop.stale.join(', ')}`);
  const b = r.basic;
  out.push('', `Basic English, ${b.total} words: ${pct(b.said, b.total)} said, ${b.explained} explained, ${pct(b.near, b.total)} as a kind of, ${b.missing} missing (the author's Mandarin for the word is an entry: ${pct(b.zhSaid, b.total)})`);
  out.push(`  missing, with the author's Mandarin: ${b.words.slice(0, limit).map((w) => `${w.en} (${w.zh.join('/') || '-'}${w.zhSaid ? ', has entry' : ''})`).join(', ')}`);
  const s = r.sentences;
  if (s.total) {
    out.push('', `Everyday sentences, ${s.total} (entries cover every character; grammar not checked): ${pct(s.said, s.total)} said, ${pct(s.oneAway, s.total)} one character away`);
    out.push(`  the characters that would unlock the most: ${s.missing.slice(0, limit).map((m) => `${m.char} (${m.unlocks} alone, ${m.sentences} in all)`).join(', ')}`);
    for (const e of s.examples) out.push(`  one away: ${e.zh}  ${e.en}  (needs ${e.char})`);
  }
  return out.join('\n');
}
