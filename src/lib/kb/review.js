// The word and kinds review (KB_PLAN.md phase 2): what the review pages show
// for a batch, and what the author's decisions turn into. Pure: the dev-server
// plugin (vite-plugin-review.js) and scripts/review-batch.js give it the
// `source` (scripts/kb-source.js), Claude's proposals and the decisions.
//
//   wordBatch(source, n, { proposals, decisions })   the page's data for word batch n
//   kindsBatch(source, n, { proposals, decisions })  the same for kinds batch n
//   checkParaphrase(words, id, forms)                plain pinyin -> refs, with every problem
//   wordOps(source, n, proposals, decisions)         -> { ops, undecided }  the refactor list
//   kindsOps(source, n, proposals, decisions)        -> { ops, undecided }
//
// Word batches follow the category order, so related words are reviewed
// together: WORD_BATCH words each. Kinds batches are the composites with a
// Mandarin compound form that the rule can't decide (the `transparent` ones
// are decided), in rank order, KIND_BATCH each. A decided entry stays in its
// batch, so batch numbers never shift while the review goes on.
//
// Claude's proposals, review/proposals/words-<n>.mjs (default export):
//   { zou3: { forms: ['yòng jiǎo qù'], why: '…' },                          a fine paraphrase
//     qu4:  { forms: ['…'], verdict: 'clumsy', note: '…', why: '…' },        a clumsy one
//     wo3:  { atom: { eng: '…', rus: '…' }, why: '…' } }                      an atom
// and review/proposals/kinds-<n>.mjs:
//   { '东西': { as: 'spelled', why: '…' } }                                   built or spelled
//
// The decisions, review/decisions/words-<n>.json and kinds-<n>.json:
//   words:  { id: { status: 'approve' | 'edit' | 'clumsy' | 'atom', forms?, verdict?, eng?, rus?, note? } }
//   kinds:  { zh: { status: 'built' | 'spelled', note? } }
// approve takes the proposal as it is; edit takes the author's own forms (plain
// pinyin, several separated by " / "); clumsy takes the proposal's or the
// author's forms and marks them clumsy, and its note is kept as the reason.

import { pinyinToRefs } from '../pinyin-refs.js';
import { formProblems, paraphraseStatus } from '../paraphrase.js';
import { FORM_KINDS, formKinds, isMandarinCompound } from '../form-kinds.js';
import { wordRefIds } from '../word-refs.js';
import { pinyinOf } from './whatif.js';

export const WORD_BATCH = 80;
export const KIND_BATCH = 100;

const list = (v) => (Array.isArray(v) ? v : v ? String(v).split(' / ') : []);

// -- words ---------------------------------------------------------------------------------

// -> [{ id, category: [titles] }] in the order of the categories, every word once.
export function wordOrder(source) {
  const out = [];
  const seen = new Set();
  const walk = (nodes, path) => {
    for (const c of nodes) {
      const here = [...path, c.title?.eng ?? c.key];
      for (const id of c.wordIds ?? []) {
        if (!source.words[id] || seen.has(id)) continue;
        seen.add(id);
        out.push({ id, category: here });
      }
      walk(c.children ?? [], here);
    }
  };
  walk(source.categories ?? [], []);
  for (const id of Object.keys(source.words)) if (!seen.has(id)) out.push({ id, category: [] });
  return out;
}

export const wordBatchCount = (source) => Math.max(1, Math.ceil(Object.keys(source.words).length / WORD_BATCH));
const wordIdsOf = (source, n) => wordOrder(source).slice((n - 1) * WORD_BATCH, n * WORD_BATCH);

// forms: a list, or one string with " / " between them
// -> { ok, forms: [{ plain, refs, pinyin, problems }], problems }
export function checkParaphrase(words, id, forms) {
  const pin = pinyinOf(words);
  const plains = list(forms).map((f) => String(f).trim()).filter(Boolean);
  const rows = plains.map((plain) => {
    let refs;
    try {
      refs = pinyinToRefs(plain, words);
    } catch (e) {
      return { plain, refs: null, pinyin: null, problems: [String(e.message)] };
    }
    return { plain, refs, pinyin: pin(refs), problems: formProblems(refs, id, words) };
  });
  const problems = rows.flatMap((r) => r.problems.map((p) => `"${r.plain}": ${p}`));
  if (!rows.length) problems.push('no form given');
  const refs = rows.map((r) => r.refs).filter(Boolean);
  if (new Set(refs).size !== refs.length) problems.push('the same form twice');
  return { ok: !problems.length, forms: rows, problems };
}

const proposalView = (words, id, p) => {
  const verdict = p.atom ? 'atom' : p.verdict ?? 'fine';
  return {
    verdict,
    forms: p.atom ? [] : list(p.forms),
    atom: p.atom ?? null,
    note: p.note ?? null,
    why: p.why ?? null,
    check: p.atom ? null : checkParaphrase(words, id, p.forms),
  };
};

// what the dictionary already has about a word that a paraphrase can start from
function related(source, id, pin) {
  const words = source.words;
  const w = words[id];
  const card = (x) => ({ id: x, term: words[x]?.term ?? x, hanzi: words[x]?.hanzi });
  const hanzi = new Set([w.hanzi, ...Object.values(w.senses ?? {}).map((s) => s.hanzi)]);
  const own = source.composites
    .filter((c) => hanzi.has(c.zh))
    .map((c) => ({ zh: c.zh, rank: c.rank, en: c.en, forms: list(c.hsd).map((f) => ({ pinyin: pin(f), selfFree: !wordRefIds(f).includes(id) })) }));
  const pairs = (kind) =>
    (source.maps?.[kind]?.pairs ?? []).filter((p) => p.includes(id)).map(([a, b]) => card(a === id ? b : a));
  const phrases = (kind) => (source.maps?.[kind]?.phrases?.[id] ?? []).map(pin);
  return { own, antonyms: pairs('antonyms'), antonymPhrases: phrases('antonyms'), synonyms: pairs('synonyms'), synonymPhrases: phrases('synonyms') };
}

export function wordBatch(source, n, { proposals = {}, decisions = {} } = {}) {
  const words = source.words;
  const pin = pinyinOf(words);
  const first = (n - 1) * WORD_BATCH;
  const picked = wordIdsOf(source, n);
  const entries = picked.map(({ id, category }, i) => {
    const w = words[id];
    const status = paraphraseStatus(w);
    return {
      id,
      number: first + i + 1,
      term: w.term,
      hanzi: w.hanzi,
      pos: w.pos?.eng,
      definition: pin(w.definition?.eng ?? ''),
      necessity: pin(w.necessity?.eng ?? ''),
      senses: Object.entries(w.senses ?? {}).map(([key, s]) => ({ key, hanzi: s.hanzi, eng: s.eng, alone: Boolean(s.alone) })),
      category,
      now: {
        status,
        paraphrase: w.paraphrase ? { verdict: w.paraphrase.verdict, forms: w.paraphrase.forms.map(pin), note: w.paraphrase.note ?? null } : null,
        atom: w.atom ?? null,
      },
      prop: proposals[id] ? proposalView(words, id, proposals[id]) : null,
      related: related(source, id, pin),
    };
  });
  return { n, batches: wordBatchCount(source), from: first + 1, to: first + entries.length, total: Object.keys(words).length, entries, decisions };
}

// -> the refactor op for one decision. Throws with the reason when it can't be made.
export function wordOp(words, id, d, p) {
  const paraphrase = (forms, verdict, note) => {
    const c = checkParaphrase(words, id, forms);
    if (!c.ok) throw new Error(c.problems.join('; '));
    return { op: 'paraphrase', id, forms: c.forms.map((r) => r.refs), verdict, ...(note ? { note } : {}) };
  };
  const atom = (eng, rus) => {
    if (!eng || !rus) throw new Error('an atom needs its reason in English and in Russian');
    return { op: 'atom', id, eng, rus };
  };
  switch (d.status) {
    case 'approve':
      if (!p) throw new Error('approved, but there is no proposal');
      return p.atom ? atom(p.atom.eng, p.atom.rus) : paraphrase(p.forms, p.verdict ?? 'fine', p.note);
    case 'edit':
      return paraphrase(d.forms, d.verdict ?? 'fine', d.note);
    case 'clumsy':
      return paraphrase(list(d.forms).length ? d.forms : p?.forms, 'clumsy', d.note || p?.note);
    case 'atom':
      return atom(d.eng ?? p?.atom?.eng, d.rus ?? p?.atom?.rus);
    default:
      throw new Error(`unknown status "${d.status}"`);
  }
}

// -> { ops, undecided: [ids] } for word batch n. An undecided word gets no op.
// A decision that can't be made into an op stops the whole list, naming the word.
export function wordOps(source, n, proposals = {}, decisions = {}) {
  const ops = [];
  const undecided = [];
  for (const { id } of wordIdsOf(source, n)) {
    const d = decisions[id];
    if (!d) {
      undecided.push(id);
      continue;
    }
    try {
      ops.push(wordOp(source.words, id, d, proposals[id]));
    } catch (e) {
      throw new Error(`${id}: ${e.message}`);
    }
  }
  return { ops, undecided };
}

// -> the text of a refactor list (refactors/W1.ts) for the ops of a reviewed batch.
// `title` says what was reviewed; `undecided` are the words or entries left out.
export function refactorListText({ name, title, ops, undecided = [] }) {
  const out = [`// ${name}: ${title}.`];
  out.push(`// Made by scripts/review-batch.js from the author's decisions (review/decisions): ${ops.length} op(s).`);
  if (undecided.length) out.push(`// Not decided yet, so not here (${undecided.length}): ${undecided.join(', ')}.`);
  out.push(`// Run: npm run refactor -- refactors/${name}.ts [--write]`, '');
  const body = ops.map((op) => `  ${JSON.stringify(op)},`);
  out.push('export default [', ...body, '];', '');
  return out.join('\n');
}

// -- kinds ---------------------------------------------------------------------------------

// -> true when the entry has a Mandarin compound form that the rule can't decide.
export const needsKinds = (c) => !c.transparent && list(c.hsd).some((_, i) => isMandarinCompound(c, i));

const kindsPool = (source) => source.composites.filter(needsKinds).sort((a, b) => a.rank - b.rank);
export const kindsBatchCount = (source) => Math.max(1, Math.ceil(kindsPool(source).length / KIND_BATCH));

export function kindsBatch(source, n, { proposals = {}, decisions = {} } = {}) {
  const words = source.words;
  const pin = pinyinOf(words);
  const gloss = (id) => pin(words[id]?.definition?.eng ?? '').split(/[;:]/)[0].trim();
  const pool = kindsPool(source);
  const entries = pool.slice((n - 1) * KIND_BATCH, n * KIND_BATCH).map((c) => {
    const kinds = formKinds(c);
    const forms = list(c.hsd).map((f, i) => ({
      pinyin: pin(f),
      hanzi: list(c.tts)[i] ?? '',
      mandarin: isMandarinCompound(c, i),
      kind: kinds[i],
      parts: isMandarinCompound(c, i) ? wordRefIds(f).map((id) => ({ id, term: words[id]?.term ?? id, hanzi: words[id]?.hanzi, gloss: gloss(id) })) : [],
    }));
    return {
      rank: c.rank,
      zh: c.zh,
      py: c.py,
      en: c.en,
      ru: c.ru,
      forms,
      now: forms.find((f) => f.mandarin)?.kind ?? 'unknown',
      // K23: no form that builds the meaning yet, so a spelled compound here would be learned whole with nothing to fall back on
      bare: !forms.some((f) => f.kind === 'built'),
      prop: proposals[c.zh] ? { as: proposals[c.zh].as, why: proposals[c.zh].why ?? null } : null,
    };
  });
  return { n, batches: kindsBatchCount(source), total: pool.length, entries, decisions };
}

// -> { ops, undecided: [zh] } for kinds batch n: one `kinds` op per decided entry, with every
// form's kind written out (the compound gets the decision, the other forms keep theirs).
export function kindsOps(source, n, proposals = {}, decisions = {}) {
  const ops = [];
  const undecided = [];
  const pool = kindsPool(source).slice((n - 1) * KIND_BATCH, n * KIND_BATCH);
  for (const c of pool) {
    const d = decisions[c.zh];
    if (!d) {
      undecided.push(c.zh);
      continue;
    }
    if (!FORM_KINDS.includes(d.status)) throw new Error(`${c.zh}: unknown status "${d.status}"`);
    const now = formKinds(c);
    ops.push({ op: 'kinds', zh: c.zh, kinds: now.map((k, i) => (isMandarinCompound(c, i) ? d.status : k)) });
  }
  return { ops, undecided };
}
