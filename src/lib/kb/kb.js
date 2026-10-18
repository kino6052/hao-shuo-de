// The one entry point the CLI, the explorer page and the Claude tools share
// (KB_PLAN.md phase 1, "thin scripts/kb.js"). Give it the `source` (see
// scripts/kb-source.js) and it answers questions; it never changes data.
//
//   const kb = createKb(source);
//   kb.word('dēng')            the word card (with the atoms its paraphrase and its description come down to)
//   kb.remove(['deng1'])       the remove what-if
//   kb.checkForm({ forms })    the form gates, for one proposal
//   kb.query(program)          raw rules on top of the facts, for Claude
//   kb.parse('Wǒ shì rén.')    does it parse, and by which patterns
//   kb.parseUpTo(5)('…')       the same with only the patterns taught up to lesson 5 (the early-patterns rule)
//   kb.patternLesson(id)       the lesson number that teaches a pattern (undefined: no lesson teaches it)
//   kb.atoms()                 which words are atoms (the report; kb.atoms('dēng') is one word's line)
//   kb.relations()             the relations the data states or implies (accepted and proposed)
//   kb.crossCheck()            those relations against WordNet's kinds, opposites and parts (cross-check.js)
//   kb.meaning([name])         what the words say of the primes, categories and grammar items, and the primes each description reaches (meaning.js)
//   kb.candidates()            what to drop, what to add and what to trade (see candidates.js; needs `freq` for Mandarin)
//
// Names are lenient: an id (deng1), a term (dēng, deng) or a hanzi (灯).

import { buildFacts } from './facts.js';
import { buildIndex, findWords, resolveWord, wordCard, renderCard } from './card.js';
import { removal, renderRemoval } from './whatif.js';
import { checkForm } from './check-form.js';
import { readRules } from './rules.js';
import { solve, tables } from './clingo.js';
import { makeParseText, renderParse, viewParse } from './parse.js';
import { atoms, atomWord, renderAtoms, renderAtomWord } from './atoms.js';
import { relationReport, renderRelations, renderKindTree } from './relations.js';
import { createEnglish, renderEnglish } from './english.js';
import { crossCheck, renderCrossCheck } from './cross-check.js';
import { frontier, renderFrontier } from './frontier.js';
import { renderYardsticks, yardstickReport } from './yardsticks.js';
import { meaningReport, meaningWord, renderMeaning, renderMeaningWord } from './meaning.js';
import { restsOnModel } from './rests-on.js';
import { candidateModel, renderAddition, renderAudit, renderRemovalCandidates, renderRootCandidates, renderSwaps } from './candidates.js';

// freq: the Mandarin frequency list [{ zh, py, rank }]; drafts: how words would be said without a stored paraphrase { id: { forms, verdict } }
export function createKb(source, { rules = readRules('base', 'whatif'), freq = null, drafts = {}, parseMemo = null, relationRules = {}, englishData = null, yardstickData = null } = {}) {
  let meaning = null; // the meaning links, asked once: a KB is one version of the data
  const facts = buildFacts(source);
  const index = buildIndex(source, facts);
  let rests = null; // the atoms each word rests on (rests-on.js), plain code and quick
  const ctx = { source, facts, rules, index, meaning: () => (meaning ??= meaningReport(source)), restsOn: () => (rests ??= restsOnModel(source)) };
  const words = source.words;

  // the atoms report takes three solver runs; a KB is one version of the data, so it is asked once
  let atomsReport = null;
  let relationsReport = null;
  let candidates = null;
  let yardsticks = null;
  let englishModel = null; // English to entries (english.js); the WordNet files are read the first time it is asked
  let crossChecked = null;
  let frontierReport = null;
  let yardstickLists = null; // the word lists are read once (kb/yardsticks/)
  const listsOf = () => (yardstickLists ??= yardstickData?.() ?? {});
  const yardsticksOf = () => (yardsticks ??= yardstickReport({ composites: source.composites, english: englishOf(), ...listsOf() }));

  const englishOf = () => (englishModel ??= createEnglish({ composites: source.composites, ...(englishData?.() ?? {}) }));
  const relationsOf = () => (relationsReport ??= relationReport(source, facts, relationRules));

  const parseText = makeParseText({ patterns: source.patterns ?? [], words, composites: source.composites, memo: parseMemo?.space({ patterns: source.patterns ?? [], words, composites: source.composites }) });

  // The early-patterns rule: a sentence in lesson N may only use patterns taught in lessons 1..N.
  // A pattern with no `taught` is used only by texts outside the lessons.
  const lessonNumber = Object.fromEntries((source.lessons ?? []).map((l) => [l.id, l.number]));
  const taughtIn = (p) => (p.taught ? lessonNumber[p.taught.split('/')[0]] : undefined);
  const patternById = new Map((source.patterns ?? []).map((p) => [p.id, p]));
  const upTo = new Map();
  const parseUpTo = (n) => {
    if (!upTo.has(n)) {
      const patterns = (source.patterns ?? []).filter((p) => (taughtIn(p) ?? Infinity) <= n);
      upTo.set(n, makeParseText({ patterns, words, composites: source.composites, memo: parseMemo?.space({ patterns, words, composites: source.composites }) }));
    }
    return upTo.get(n);
  };

  const ids = (names) => (Array.isArray(names) ? names : String(names).split(/[,\s]+/)).filter(Boolean).map((n) => resolveWord(words, n));

  return {
    source,
    facts,
    index,
    find: (q) => findWords(words, q).map((id) => ({ id, term: words[id].term, hanzi: words[id].hanzi, pos: words[id].pos?.eng })),
    word: (name, opts) => wordCard(ctx, resolveWord(words, name), opts),
    remove: async (names) => {
      const r = await removal(ctx, ids(names));
      // Mandarin lost: from the candidates' own count (top 6000 words of the frequency list); left out without `freq`
      if (freq) {
        const c = (candidates ??= candidateModel(source, facts, { freq })).consequences(r.words.map((w) => w.id), { detail: true });
        r.mandarin = { count: c.counts.mandarin, cost: c.parts.mandarin, words: c.lists.mandarin.map((e) => ({ zh: e.zh, py: e.py, rank: e.rank, spelled: !!e.owner })).sort((a, b) => a.rank - b.rank) };
      }
      return r;
    },
    checkForm: (args) => checkForm(words, args),
    parse: parseText,
    parseUpTo,
    parseMemo, // the memory its parses use (null: none), for a KB made from this one
    patternLesson: (id) => taughtIn(patternById.get(id) ?? {}),
    parser: parseText.parser,

    // The relations: stored ones are accepted, the ones a rule finds are proposed (see relations.js).
    relations: relationsOf,

    // English to entries, in three tiers (english.js): the gloss, the same WordNet sense, a kind of. `englishData` gives
    // { links, index } (kb/wordnet/links.json, kb/cache/english-index.json); without it only the glosses answer.
    english: (text) => englishOf().lookup(text),
    englishSenses: (zh) => englishOf().senses(zh),

    // The dictionary's kind-of, opposite and part-of relations against WordNet's (cross-check.js): where they disagree,
    // what WordNet states that the dictionary does not, and the entries without a head that WordNet could give one.
    crossCheck: () => (crossChecked ??= crossCheck({ relations: relationsOf().relations, words, composites: source.composites, ...englishOf().data, startsFrom: englishOf().startsFrom })),

    // How much of the yardsticks (kb/yardsticks/) the dictionary can say: Mandarin and English word lists, Basic English.
    yardsticks: yardsticksOf,

    // What the yardsticks cannot say yet and the Mandarin word that would fix each (frontier.js).
    frontier: () => (frontierReport ??= frontier({ yardsticks: yardsticksOf(), english: englishOf(), composites: source.composites, words, mandarin: listsOf().mandarin ?? [] })),

    // Meaning links (K19): what the words say of the primes and categories, and which primes a description reaches.
    // No name: the report. A name: that word's line, { id, term, line }.
    meaning(name) {
      const report = ctx.meaning();
      if (name === undefined || name === '') return report;
      const id = resolveWord(words, name);
      return { id, term: words[id].term, line: meaningWord(report, id) };
    },

    // The candidates: words to drop, roots to add, trades. Worked out in JS, not by the solver.
    candidates: () => (candidates ??= candidateModel(source, facts, { freq })),
    drafts,

    // Which words are atoms. No name: the whole report. A name: that word's
    // line (its sort, and how it is said), or null for a word that is not there.
    async atoms(name, { timeoutMs } = {}) {
      atomsReport ??= atoms(ctx, { timeoutMs }).catch((e) => {
        atomsReport = null;
        throw e;
      });
      const report = await atomsReport;
      return name === undefined ? report : atomWord(report, resolveWord(words, name));
    },

    // Raw rules, run together with the base rules and the facts. Answers
    // come back as rows per predicate; ask for them with `#show`.
    // text: the sentences and mentions to load with the language facts. false
    // (default) none; ['deng1', …] those that name these words; true all of
    // them (too big for the built-in clingo-wasm; fine with native clingo, see
    // clingo.js).
    async query(program, { models = 1, timeoutMs = 20_000, withBase = true, text = false } = {}) {
      const extra = text === true ? facts.textProgram() : Array.isArray(text) ? facts.textProgram(ids(text)) : '';
      const full = [withBase ? readRules('base') : '', facts.program, extra, program].join('\n');
      const result = await solve(full, { models, timeoutMs });
      return { status: result.status, models: result.models.map((m) => tables(m)) };
    },
  };
}

export { meaningWord, renderMeaning, renderMeaningWord, renderCard, renderRemoval, renderParse, viewParse, renderAtoms, renderAtomWord, renderRelations, renderKindTree, renderEnglish, renderCrossCheck, renderFrontier, renderYardsticks, renderAddition, renderAudit, renderRemovalCandidates, renderRootCandidates, renderSwaps };
