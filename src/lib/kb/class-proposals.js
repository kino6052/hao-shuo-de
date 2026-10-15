// Word classes the parser can propose (KB_PLAN.md K6). A word lists the classes it fills: its part of
// speech, and the classes it lists besides (`classes` in its data, each with a why and an example). A
// sentence that does not parse may only be missing one: if a word filling one more class would make it
// parse, that (word, class) is a proposal. The author decides; a refactor list (op `classes`) records it.
// Pure; it never changes data.
//
//   classProposals({ parser, words, pieces, rejected })   -> { proposals, unexplained }
//     rejected     [{ id, cls?, why }] the author said no (kb/class-rejections.json): that word is not tried as that class (or as any, without cls), so the proposal does not come back
//     pieces       [{ text, where, forms? }] sentences that do not parse (word refs); forms: true for a composite's description
//     proposals    [{ id, term, pos, meaning, classes: [{ cls, reading }], sentences: [{ text, where }] }], most sentences first;
//                  classes that fix the same sentences of the same word are one proposal (bǐ as a verb, a noun, an
//                  adjective: which one is for the reader to say, with the meaning in view)
//     unexplained  the pieces no single extra class fixes
//   classesWaiting(words)                       -> [{ id, term, cls, why, example }] classes marked `proposed`
//   classProblems({ words, patterns, composites }) -> { listed, errors } the check of scripts/check-classes.js: a listed
//                                                  class is one a rule asks for, not a part of speech the word has, and its
//                                                  example names the word, parses, and does not parse without the class
//   renderClassProposals(result, words, waiting, { limit })

import { classesOf, posClasses } from '../grammar/lexicon.js';
import { pinyinToRefs } from '../pinyin-refs.js';
import { isNonterminal, classRef } from '../grammar/earley.js';
import { createParser, bracket } from '../grammar/parser.js';
import { wordRefIds, replaceWordRefs, refTerm } from '../word-refs.js';
import { splitSentences } from './parse.js';

// the classes the rules ask for, except the ones the lexicon makes up itself
const MADE_UP = new Set(['comma', 'colon', 'quoted', 'unknown', 'again', 'slot']);
export function ruleClasses(rules) {
  const out = new Set();
  for (const r of rules) for (const sym of r.rhs) if (!isNonterminal(sym) && sym.startsWith('@')) out.add(classRef(sym).name);
  return [...out].filter((c) => !MADE_UP.has(c)).sort();
}

export function classProposals({ parser, words, pieces, rejected = [] }) {
  const candidates = ruleClasses(parser.rules);
  const refused = (id, cls) => rejected.some((r) => r.id === id && (!r.cls || r.cls === cls));
  const found = new Map(); // word -> class -> [{ text, where, reading }]
  const unexplained = [];
  for (const piece of pieces) {
    let any = false;
    for (const id of new Set(wordRefIds(piece.text))) {
      if (!words[id]) continue;
      const has = new Set(classesOf(words[id]));
      for (const cls of candidates) {
        if (has.has(cls) || refused(id, cls)) continue;
        const r = parser.parse(piece.text, { extra: { [id]: [cls] }, forms: piece.forms });
        if (!r.ok) continue;
        any = true;
        const byClass = found.get(id) ?? found.set(id, new Map()).get(id);
        (byClass.get(cls) ?? byClass.set(cls, []).get(cls)).push({ text: piece.text, where: piece.where, reading: bracket(r, 0) });
      }
    }
    if (!any) unexplained.push(piece);
  }
  // per word, the classes that fix the same sentences go together
  const proposals = [];
  for (const [id, byClass] of found) {
    const groups = new Map();
    for (const [cls, rows] of byClass) {
      const key = rows.map((x) => `${x.where}|${x.text}`).join(' // ');
      if (!groups.has(key)) groups.set(key, { id, term: words[id].term, pos: words[id].pos?.eng ?? '', meaning: words[id].definition?.eng ?? '', classes: [], sentences: rows.map(({ text, where }) => ({ text, where })) });
      groups.get(key).classes.push({ cls, reading: rows[0].reading });
    }
    proposals.push(...groups.values());
  }
  proposals.sort((x, y) => y.sentences.length - x.sentences.length || (x.term < y.term ? -1 : 1));
  return { proposals, unexplained };
}

// -> the classes the data marks `proposed`: the parser uses them, the author has not accepted them yet
export function classesWaiting(words) {
  const out = [];
  for (const [id, w] of Object.entries(words)) {
    for (const [cls, c] of Object.entries(w.classes ?? {})) if (c !== 'main' && c.proposed) out.push({ id, term: w.term, cls, why: c.why?.eng ?? '', example: c.example ?? '' });
  }
  return out.sort((a, b) => (a.term < b.term ? -1 : 1));
}

export function classProblems({ words, patterns = [], composites = [] }) {
  const parser = createParser({ patterns, words, composites });
  const asked = new Set(ruleClasses(parser.rules));
  const errors = [];
  let listed = 0;
  for (const [id, w] of Object.entries(words)) {
    const own = new Set(posClasses(w.pos?.eng));
    for (const [cls, c] of Object.entries(w.classes ?? {})) {
      const at = `${w.term} (${id}) class "${cls}"`;
      listed++;
      if (own.has(cls)) errors.push(`${at}: already one of its parts of speech (${w.pos.eng}); take it out of classes`);
      else if (c === 'main') errors.push(`${at}: "main" is for a part of speech; give a why and an example`);
      else if (!asked.has(cls)) errors.push(`${at}: no grammar rule asks for @${cls}`);
      else {
        let refs;
        try {
          refs = pinyinToRefs(c.example, words);
        } catch (e) {
          errors.push(`${at}: the example "${c.example}" cannot be read: ${e.message}`);
          continue;
        }
        if (!wordRefIds(refs).includes(id)) errors.push(`${at}: the example "${c.example}" does not use ${w.term}`);
        const sentences = splitSentences(refs);
        if (!sentences.every((s) => parser.parse(s).ok)) {
          errors.push(`${at}: the example "${c.example}" does not parse`);
          continue;
        }
        const { [cls]: _gone, ...rest } = w.classes;
        const without = createParser({ patterns, words: { ...words, [id]: { ...w, classes: Object.keys(rest).length ? rest : undefined } }, composites });
        if (sentences.every((s) => without.parse(s).ok)) errors.push(`${at}: the example "${c.example}" parses without the class, so it does not show what the class is for`);
      }
    }
  }
  return { listed, errors };
}

const pinOf = (words) => (t) => replaceWordRefs(t, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export function renderClassProposals(result, words = {}, waiting = [], { limit = 20 } = {}) {
  const pin = pinOf(words);
  const out = ['Class proposals: a word that would make a sentence parse if it also filled one more class.', ''];
  if (!result.proposals.length) out.push('None: no single extra class fixes a sentence that does not parse.');
  for (const p of result.proposals.slice(0, limit)) {
    const named = p.classes.map((c) => c.cls.replace(/_/g, ' '));
    out.push(`${p.term} (${p.pos}: ${pin(p.meaning)}) as ${named.join(' or ')}: fixes ${p.sentences.length} sentence${p.sentences.length === 1 ? '' : 's'}`);
    for (const s of p.sentences.slice(0, 3)) out.push(`    ${pin(s.text)}  (${s.where})`);
    if (p.sentences.length > 3) out.push(`    … and ${p.sentences.length - 3} more`);
    for (const c of p.classes.slice(0, 2)) out.push(`    as ${c.cls.replace(/_/g, ' ')}: ${pin(c.reading)}`);
  }
  if (result.proposals.length > limit) out.push(`… and ${result.proposals.length - limit} more proposals`);
  if (result.unexplained.length) {
    out.push('', `No single class fixes ${result.unexplained.length} sentence${result.unexplained.length === 1 ? '' : 's'}: a rule is missing, or the sentence should be reworded.`);
    for (const s of result.unexplained.slice(0, limit)) out.push(`    ${pin(s.text)}  (${s.where})`);
  }
  if (waiting.length) {
    out.push('', `Classes in the data that wait for the author (${waiting.length}):`);
    for (const w of waiting) out.push(`    ${w.term} as ${w.cls.replace(/_/g, ' ')}: ${pin(w.why)}  e.g. ${w.example}`);
  }
  out.push('', 'To add one: a refactor list with { op: "classes", id, add: { <class>: { why: { eng, rus }, example, proposed: true } } }.');
  return out.join('\n');
}
