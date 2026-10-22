// kb_lookup (TRANSLATOR_PLAN.md C1): an English word or phrase -> Hao-shuo-de forms straight away (never the
// Mandarin headword itself), each with its tier (gloss, same sense, kind of), the lesson it can be read from, its
// length in words, and a book sentence that uses it. Wraps kb_english (the three tiers), kb_built (a composite's
// own descriptions) and the dictionary words directly, for the few core words no composite repeats (word-entries.js)
// -- what kb_word would otherwise be asked for. The translator's glossary (E1, maps/translation-glossary.ts) comes
// first: a form a translation already chose for this English, tier "glossary".
//
//   askLookup(kb, { word }) -> { data, text }

import { replaceWordRefs, refTerm, wordRefIds } from '../word-refs.js';
import { pinyinProblems } from '../pinyin-refs.js';
import { matchConstructions } from './constructions.js';

const lessonIdOf = (lessons, n) => (n === null || n === undefined ? null : lessons.find((l) => l.number === n)?.id ?? null);

// -> a word's or composite's Hao-shuo-de form: the readable one with the earliest lesson, then the fewest words
export function formOf(kb, zh) {
  const words = kb.source.words;
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
}

const exampleOf = (kb, words, zh) => {
  const ex = (kb.source.composites ?? []).find((c) => c.zh === zh)?.examples?.[0];
  if (!ex) return null;
  const say = (fn) => replaceWordRefs(ex.pinyin, fn);
  return { pinyin: say((id, kind) => refTerm(words[id]?.term ?? id, kind)), hanzi: say((id) => words[id]?.hanzi ?? id), en: ex.en };
};

const toRow = (kb, words, tier, e) => {
  const form = formOf(kb, e.zh);
  return form ? { tier, zh: e.zh, py: e.py, en: e.en, ...form, example: exampleOf(kb, words, e.zh) } : null;
};

// the glossary's rows for this English: its form as written, with the hanzi, the length and the lesson of its latest word
function glossaryRows(kb, words, query) {
  const want = String(query).trim().toLowerCase();
  return (kb.source.maps?.glossary ?? [])
    .filter((g) => g.en === want)
    .map((g) => {
      const { refs } = pinyinProblems(g.form, words, { composites: kb.source.composites });
      const ids = wordRefIds(refs);
      const reach = ids.reduce((most, id) => Math.max(most, kb.wordLesson(id) ?? Infinity), 0);
      return {
        tier: 'glossary', zh: g.zh ?? null, py: '', en: g.en, why: g.why, proposed: !!g.proposed, source: g.source ?? null,
        pinyin: g.form, hanzi: replaceWordRefs(refs, (id) => words[id]?.hanzi ?? id), words: ids.length,
        lesson: lessonIdOf(kb.lessons(), Number.isFinite(reach) ? reach : null), example: null,
      };
    });
}

export function askLookup(kb, { word } = {}) {
  if (!word) throw new Error('word is required (an English word or short phrase)');
  const r = kb.english(word);
  const words = kb.source.words;
  const rows = [
    ...glossaryRows(kb, words, word),
    ...r.glosses.map((e) => toRow(kb, words, 'gloss', e)),
    ...r.sameSense.flatMap((s) => s.entries.map((e) => toRow(kb, words, 'same-sense', e))),
    ...r.kindOf.map((e) => toRow(kb, words, 'kind-of', e)),
  ].filter(Boolean);
  // a grammar word (so, than, still) is said by a pattern more often than by a word: name the rows kb_constructions has
  const grammar = matchConstructions(kb.source.maps?.constructions ?? [], word).map((h) => h.row.id);
  const out = [`English "${r.query}": ${rows.length} form(s)`];
  if (!rows.length) out.push(r.note ?? 'Nothing says it yet.');
  if (grammar.length) out.push(`Said by grammar too: kb_constructions ${grammar.map((g) => `"${g}"`).join(', ')}`);
  for (const row of rows) {
    if (row.tier === 'glossary') {
      out.push('', `[glossary${row.proposed ? ', proposed' : ''}] ${row.pinyin}  ${row.hanzi}${row.zh ? `   (says ${row.zh})` : ''}`, `  ${row.words} word(s); lesson ${row.lesson ?? 'none'}; why: ${row.why}`);
      continue;
    }
    out.push('', `[${row.tier}] ${row.pinyin}  ${row.hanzi}   (from ${row.zh} ${row.py}: ${row.en})`, `  ${row.words} word(s); lesson ${row.lesson ?? 'none'}`);
    if (row.example) out.push(`  e.g. ${row.example.pinyin}  "${row.example.en}"`);
  }
  return { data: { query: r.query, rows, note: rows.length ? null : (r.note ?? null), constructions: grammar }, text: out.join('\n') };
}
