// The translator's test set and its numbers (TRANSLATOR_PLAN.md F1-F3, Q8). The ten stories (src/content/appendix-stories.ts)
// have the book's own Hao-shuo-de to compare with; the everyday sentences (kb/yardsticks/sentences.json, English and Mandarin
// pairs) have none, so only the checks and the blind reader judge them. Pure: the caller reads the files.
//
//   storyItems(entries) -> [{ id, kind: 'story', title, english, book }]     book: the story's own sentences as word refs
//   sentenceItems(pairs, { limit }) -> [{ id, kind: 'sentence', english, zh }]
//   wordIdsOf(text, words, composites) -> [word id]                          a text in pinyin or refs, as dictionary words
//   overlap(a, b) -> 0..1                                                    the share of words two texts have in common
//   setScore(results) -> { texts, sentences, hsdOnly, parses, meant, readings, words, kept, sentencesKept, added, pass, passes }
//
// Q8's bar over a set: every sentence uses only Hao-shuo-de words and has its meant reading, and in at least 9 of 10 sentences
// the blind reader keeps every needed idea the sentence carries.

import { pinyinProblems } from '../pinyin-refs.js';
import { wordRefIds } from '../word-refs.js';
import { scoreOf } from './output.js';

export const BAR_SENTENCES_KEPT = 0.9;

// The stories' own lines in the kb pool. The test hides them from kb_memory (HAOSHUODE_MEMORY_SKIP) while it runs, so a
// session cannot copy the book's text it is then compared with.
export const STORY_LINES = 'sentence:story:appendix-stories/';

const joinEn = (e) => (Array.isArray(e.en) ? e.en.join(' ') : String(e.en ?? '')).trim();

export function storyItems(entries) {
  const items = [];
  let current = null;
  for (const e of entries) {
    const heading = e.type === 'prose' && joinEn(e).match(/^##\s*(\d+)\.\s*(.+)$/);
    if (heading) {
      current = { id: `story-${heading[1]}`, kind: 'story', title: heading[2].trim(), english: [], book: [] };
      items.push(current);
    } else if (e.type === 'story' && current) {
      current.english.push(joinEn(e));
      current.book.push(e.pinyin);
    }
  }
  return items.map((s) => ({ ...s, english: s.english.join(' '), book: s.book.join(' ') }));
}

export const sentenceItems = (pairs, { limit = 100 } = {}) => pairs.slice(0, limit).map((p) => ({ id: `sentence-${p.id}`, kind: 'sentence', english: p.en, zh: p.zh }));

export function wordIdsOf(text, words, composites = []) {
  const t = String(text ?? '');
  return wordRefIds(t.includes('{{') ? t : pinyinProblems(t, words, { composites }).refs);
}

export function overlap(a, b) {
  const x = new Set(a);
  const y = new Set(b);
  if (!x.size && !y.size) return 1;
  let both = 0;
  for (const w of x) if (y.has(w)) both++;
  return Math.round((both / (x.size + y.size - both)) * 1000) / 1000;
}

// the sentences whose needed ideas all came back kept (a sentence carrying no needed idea counts as kept)
function sentenceKept(result) {
  const verdict = new Map((result.sketch ?? []).map((s) => [s.id, s]));
  return (result.sentences ?? []).filter((s) => (s.ideas ?? []).every((id) => !verdict.get(id)?.needed || verdict.get(id)?.verdict === 'kept')).length;
}

export function setScore(results) {
  const scores = results.map(scoreOf);
  const n = scores.reduce((sum, s) => sum + s.sentences, 0);
  const weighted = (key) => (n ? Math.round((scores.reduce((sum, s) => sum + s[key] * s.sentences, 0) / n) * 1000) / 1000 : 0);
  const judged = results.filter((r) => (r.sketch ?? []).some((s) => s.verdict));
  const needed = scores.reduce((sum, s) => sum + (s.kept === null ? 0 : s.needed), 0);
  const kept = scores.reduce((sum, s) => sum + (s.kept === null ? 0 : Math.round(s.kept * s.needed)), 0);
  const judgedSentences = judged.reduce((sum, r) => sum + (r.sentences ?? []).length, 0);
  const sentencesKept = judgedSentences ? Math.round((judged.reduce((sum, r) => sum + sentenceKept(r), 0) / judgedSentences) * 1000) / 1000 : null;
  const hsdOnly = weighted('hsdOnly');
  const meant = weighted('meant');
  return {
    texts: results.length,
    sentences: n,
    hsdOnly,
    parses: weighted('parses'),
    meant,
    readings: weighted('readings'),
    words: weighted('words'),
    kept: needed ? Math.round((kept / needed) * 1000) / 1000 : null,
    sentencesKept,
    added: scores.reduce((sum, s) => sum + s.added, 0),
    passes: scores.filter((s) => s.pass).length,
    pass: n > 0 && hsdOnly === 1 && meant === 1 && judged.length === results.length && sentencesKept >= BAR_SENTENCES_KEPT,
  };
}
