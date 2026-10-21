// kb_lookup (TRANSLATOR_PLAN.md C1): an English word or phrase -> Hao-shuo-de forms straight away (never the
// Mandarin headword itself), each with its tier (gloss, same sense, kind of), the lesson it can be read from, its
// length in words, and a book sentence that uses it. Wraps kb_english (the three tiers), kb_built (a composite's
// own descriptions) and the dictionary words directly, for the few core words no composite repeats (word-entries.js)
// -- what kb_word would otherwise be asked for. Once E1 (the glossary) exists this reads it first; there is none
// yet, so every call goes straight to the dictionary.
//
//   askLookup(kb, { word }) -> { data, text }

import { replaceWordRefs, refTerm } from '../word-refs.js';

const lessonIdOf = (lessons, n) => (n === null || n === undefined ? null : lessons.find((l) => l.number === n)?.id ?? null);

const render = (kb, words, zh) => {
  const built = kb.built();
  const row = built.row(zh);
  if (row) {
    const readable = row.forms.filter((f) => f.shape !== 'unread').sort((a, b) => (a.reach ?? Infinity) - (b.reach ?? Infinity) || a.words.length - b.words.length);
    const f = readable[0] ?? row.forms[0];
    if (!f) return null;
    return {
      pinyin: replaceWordRefs(f.form, (id, kind) => refTerm(words[id]?.term ?? id, kind)),
      hanzi: replaceWordRefs(f.form, (id) => words[id]?.hanzi ?? id),
      words: f.words.length,
      lesson: lessonIdOf(kb.lessons(), f.reach),
    };
  }
  const id = built.wordId(zh);
  const w = id ? words[id] : null;
  return w ? { pinyin: w.term, hanzi: w.hanzi, words: 1, lesson: lessonIdOf(kb.lessons(), kb.wordLesson(id)) } : null;
};

const exampleOf = (kb, words, zh) => {
  const ex = (kb.source.composites ?? []).find((c) => c.zh === zh)?.examples?.[0];
  if (!ex) return null;
  const say = (fn) => replaceWordRefs(ex.pinyin, fn);
  return { pinyin: say((id, kind) => refTerm(words[id]?.term ?? id, kind)), hanzi: say((id) => words[id]?.hanzi ?? id), en: ex.en };
};

const toRow = (kb, words, tier, e) => {
  const form = render(kb, words, e.zh);
  return form ? { tier, zh: e.zh, py: e.py, en: e.en, ...form, example: exampleOf(kb, words, e.zh) } : null;
};

export function askLookup(kb, { word } = {}) {
  if (!word) throw new Error('word is required (an English word or short phrase)');
  const r = kb.english(word);
  const words = kb.source.words;
  const rows = [
    ...r.glosses.map((e) => toRow(kb, words, 'gloss', e)),
    ...r.sameSense.flatMap((s) => s.entries.map((e) => toRow(kb, words, 'same-sense', e))),
    ...r.kindOf.map((e) => toRow(kb, words, 'kind-of', e)),
  ].filter(Boolean);
  const out = [`English "${r.query}": ${rows.length} form(s)`];
  if (!rows.length) out.push(r.note ?? 'Nothing says it yet.');
  for (const row of rows) {
    out.push('', `[${row.tier}] ${row.pinyin}  ${row.hanzi}   (from ${row.zh} ${row.py}: ${row.en})`, `  ${row.words} word(s); lesson ${row.lesson ?? 'none'}`);
    if (row.example) out.push(`  e.g. ${row.example.pinyin}  "${row.example.en}"`);
  }
  return { data: { query: r.query, rows, note: rows.length ? null : (r.note ?? null) }, text: out.join('\n') };
}
