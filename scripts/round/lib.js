// Checks one composite spec of a yardstick round and writes the round's refactor list and review batch. The pipeline
// K10–K14 ran from a scratchpad; it is kept here (KB_PLAN.md Phase 9, K30) so every round is the same few commands
// (round.js). A round is about 500 new composites: Claude or a subagent writes each one as a spec, the checker says what
// is wrong with it, and the maker writes the refactor list and the review batch, all `proposed`.
//
// A spec is one Chinese word and the forms that say it (a JSON file holds a list of them):
//   { zh, py, en, ru, pos, forms: [[plain pinyin, hanzi], ...], literal?, fit, topics: [leaf topic], isA: [kind],
//     transparent?, note?, synonyms?: [zh, ...], why? }
//   forms     most natural first; plain pinyin with tone marks ("shuō X yǒu duō hǎo"), the hanzi of each in step ("说X有多好")
//   fit       plain (a description), natural (the usual way to say it), word (a core word), name, skip or gap (no forms, a note)
//   topics    the page of the categorical dictionary it is listed on (leaf ids of src/data/maps/topics.ts), isA what it is
//             (src/data/maps/kinds.ts): every composite has both (K31), so a round never adds an entry the page cannot show
//   synonyms  composites that mean the same; the review page shows them so they share one form
//   why       why it was picked ("mandarin 1616", "english both"): kept on the review extras
//
//   specProblems(spec, ctx) -> what is wrong with one spec ([] when it is fine) and its forms as word refs
//     ctx = { words, have, parse, topicNet, kindNet }
//       words    the core words by id (kb.source.words)
//       have     the hanzi the dictionary already has an entry for
//       parse    refs -> { ok, why } (the patterns read the description: kb.parser with forms: true)
//   entryOf(spec, refs, rank) -> the composite entry the refactor list creates
//   refactorText({ name, batch, entries, about, date }) / batchText({ name, batch, entries, synonyms, date })
//   sameForms(entries, composites) -> descriptions said by more than one entry, new or old: hints for `synonyms`

import { checkForm } from '../../src/lib/kb/check-form.js';
import { isWordForm } from '../../src/lib/kb/form-report.js';
import { compositeProblems } from '../../src/lib/categorical-entries.js';
import { wordRefIds } from '../../src/lib/word-refs.js';
import { refSenses } from '../../src/lib/senses.js';

export const POS = ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'number', 'classifier', 'conjunction', 'preposition', 'auxiliary', 'phrase', 'suffix', 'prefix', 'interjection'];
export const FITS = ['plain', 'natural', 'word', 'name', 'skip', 'gap'];
const NO_FORMS = new Set(['skip', 'gap']);
// `file` is where the spec was read from (round.js adds it)
const KEYS = new Set(['zh', 'py', 'en', 'ru', 'pos', 'forms', 'literal', 'fit', 'topics', 'isA', 'transparent', 'note', 'synonyms', 'why', 'file']);

export function specProblems(s, { words, have, parse, topicNet, kindNet }) {
  const out = [];
  for (const k of Object.keys(s)) if (!KEYS.has(k)) out.push(`unknown field "${k}"`);
  for (const k of ['zh', 'py', 'en', 'ru']) if (!String(s[k] ?? '').trim()) out.push(`no ${k}`);
  if (!POS.includes(s.pos)) out.push(`pos "${s.pos}" is not one of ${POS.join(', ')}`);
  if (!FITS.includes(s.fit)) out.push(`fit "${s.fit}" is not one of ${FITS.join(', ')}`);
  if (have.has(s.zh)) out.push('the dictionary already has an entry for it');

  // the tags: a page (a leaf, so the entry is listed where a reader looks) and a kind
  const topics = s.topics ?? [];
  const kinds = s.isA ?? [];
  if (!topics.length) out.push('no topics (a leaf of src/data/maps/topics.ts)');
  if (!kinds.length) out.push('no isA (a kind of src/data/maps/kinds.ts)');
  for (const t of topics) {
    if (!topicNet.has(t)) out.push(`topic "${t}" is not in maps/topics.ts`);
    else if (topicNet.children(t).length) out.push(`topic "${t}" has pages under it: pick one of ${topicNet.children(t).join(', ')}`);
  }
  for (const t of kinds) if (!kindNet.has(t)) out.push(`kind "${t}" is not in maps/kinds.ts`);

  // the forms: dictionary words, hanzi in step, the compound first, read by the patterns
  const forms = s.forms ?? [];
  let refs = [];
  if (NO_FORMS.has(s.fit)) {
    if (forms.length) out.push(`fit "${s.fit}" takes no forms`);
    if (!String(s.note ?? '').trim()) out.push(`fit "${s.fit}" needs a note saying why`);
    return { problems: out, refs };
  }
  if (!forms.length) return { problems: [...out, 'no forms'], refs };
  if (forms.some((f) => !Array.isArray(f) || f.length !== 2 || !f[0] || !f[1])) return { problems: [...out, 'each form is [pinyin, hanzi]'], refs };
  const checked = checkForm(words, { forms: forms.map((f) => f[0]), tts: forms.map((f) => f[1]), zh: s.zh, py: s.py });
  out.push(...checked.problems);
  refs = checked.forms.map((f) => f.refs);
  if (refs.some((r) => !r)) return { problems: out, refs };
  refs.forEach((r, i) => {
    if (isWordForm(r)) return;
    const p = parse(r);
    if (!p.ok) out.push(`"${forms[i][0]}" does not parse -- ${p.why}`);
  });
  if (new Set(refs).size !== refs.length) out.push('a form is written twice');
  if (s.fit === 'plain' && !String(s.literal ?? '').trim()) out.push('a plain description needs its literal English');

  // check-book: a colloquial form alone (two words, or a word in one of its senses) needs a constructive one after it
  if (['natural', 'word'].includes(s.fit) && !s.transparent && refs.length === 1 && (wordRefIds(refs[0]).length > 1 || refSenses(refs[0], words).some((u) => u.sense))) {
    out.push('the only form is a colloquial one: add a constructive form after it, or "transparent": true when it is plain enough alone');
  }
  // the categorical dictionary lists it by its description (categorical-entries.js)
  const termOf = (id) => words[id]?.term;
  for (const p of compositeProblems(entryOf(s, refs, 0), termOf)) out.push(`the categorical page cannot list it: ${p}`);
  return { problems: out, refs };
}

export function entryOf(s, refs, rank) {
  const formed = !NO_FORMS.has(s.fit);
  return {
    rank,
    phase: 4,
    zh: s.zh,
    py: String(s.py).replace(/‑/g, '-').replace(/\s+/g, ''),
    en: s.en,
    ru: s.ru,
    pos: s.pos,
    ...(formed ? { hsd: refs, tts: s.forms.map((f) => f[1]) } : {}),
    ...(s.literal ? { literal: s.literal } : {}),
    fit: s.fit,
    ...(s.transparent ? { transparent: true } : {}),
    topics: s.topics,
    isA: s.isA,
    ...(s.note ? { note: s.note } : {}),
    proposed: true,
  };
}

const said = (e) => (e.hsd ? `${e.tts.join(' / ')}${e.literal ? ` (${e.literal})` : ''}` : (e.note ?? ''));

export function refactorText({ name, batch, entries, about, date }) {
  const lines = entries.map((e) => {
    const { rank, phase, zh, py, en, ru, ...set } = e;
    return `  { op: "composite", zh: ${JSON.stringify(zh)}, create: { rank: ${rank}, phase: ${phase}, py: ${JSON.stringify(py)}, en: ${JSON.stringify(en)}, ru: ${JSON.stringify(ru)} }, set: ${JSON.stringify(set)} },`;
  });
  return `// ${name}: ${entries.length} composite entries for the yardsticks (KB_PLAN.md Phase 9, K30: the dictionary says every word of the
// Mandarin and English word lists). ${about}
// Each is "proposed" (the author has not reviewed it), tagged with its page and kind (K31), and every form was checked by
// scripts/round/round.js check (kb_check_form, the patterns, the categorical page). Made by Claude on ${date} without a
// review by the author. Review it at /__review/?batch=${batch}.
// Run: npm run refactor -- refactors/${name}.ts [--diff] [--write]

export default [
${lines.join('\n')}
];
`;
}

export function batchText({ name, batch, entries, whyOf = () => '', synonyms = {}, date }) {
  const extras = {};
  for (const e of entries) {
    const why = whyOf(e.zh);
    extras[e.rank] = `${name}, for the yardsticks${why ? ` (${why})` : ''}. Claude's description, not yet seen by the author: ${said(e)}.`;
  }
  return `// Review batch ${batch}: the ${entries.length} composites of refactors/${name}.ts (Claude, ${date}, KB_PLAN.md Phase 9). They have no
// frequency rank window, so they are listed as \`extras\`; each is shown with its description as it stands. Shown at
// /__review/?batch=${batch}. Decisions go to review/decisions/batch-${batch}.json. An entry you approve loses its \`proposed\` mark
// when the batch is applied.
export default {};

export const title = '${entries.length} new composites to review (${name})';
export const carriedLabel = 'New entry';
export const extras = ${JSON.stringify(extras, null, 2)};

// entries that mean the same as another composite (any rank): zh -> [zh, ...]
export const synonyms = ${JSON.stringify(synonyms, null, 2)};
`;
}

// -> [{ form, zh: [...] }] for every description (as word refs) that two or more entries give
export function sameForms(entries, composites = []) {
  const by = new Map();
  const add = (zh, form) => (by.get(form) ?? by.set(form, new Set()).get(form)).add(zh);
  for (const c of composites) for (const f of typeof c.hsd === 'string' ? c.hsd.split(' / ') : (c.hsd ?? [])) add(c.zh, f);
  const fresh = new Set(entries.map((e) => e.zh));
  for (const e of entries) for (const f of e.hsd ?? []) add(e.zh, f);
  return [...by]
    .filter(([, zh]) => zh.size > 1 && [...zh].some((z) => fresh.has(z)))
    .map(([form, zh]) => ({ form, zh: [...zh] }));
}
