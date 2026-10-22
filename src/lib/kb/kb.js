// The one place the command line, the explorer page and the Claude tools all ask their questions through.
// Give it the `source` (see scripts/kb-source.js) and it answers questions; it never changes data (KB_PLAN.md phase 1).
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
//   kb.tags()                  the tag nets: topic (where you meet a word) and kind (what it is), their members and checks (tags.js)
//   kb.built()                 the build tags of the composites: the patterns, words and lesson each description is made from (build-tags.js)
//   kb.akinator()              the Akinator engine over the pool: .step(answers) gives the next question or the result (akinator.js)
//   kb.pool()                  the Akinator's pool: words, composites, patterns and sentences with their features (akinator-pool.js)
//   kb.gains()                 the Chinese words to promote to core entries, best first, for growing to about 1000 (see gains.js; needs `freq`)
//
// Names are lenient: an id (deng1), a term (dēng, deng) or a hanzi (灯).

import { buildFacts } from './facts.js';
import { buildIndex, findWords, findComposite, resolveWord, wordCard, compositeCard, renderCard } from './card.js';
import { removal, renderRemoval } from './whatif.js';
import { checkForm } from './check-form.js';
import { readRules } from './rules.js';
import { solve, tables } from './clingo.js';
import { makeParseText, renderParse, viewParse } from './parse.js';
import { atoms, atomWord, renderAtoms, renderAtomWord } from './atoms.js';
import { relationReport, renderRelations, renderKindTree } from './relations.js';
import { createEnglish, renderEnglish } from './english.js';
import { hintReport, renderHints } from './hints.js';
import { buildExport, exportFragment, exportTurtle, renderExportSummary } from './export.js';
import { crossCheck, renderCrossCheck } from './cross-check.js';
import { frontier, renderFrontier } from './frontier.js';
import { renderYardsticks, yardstickReport } from './yardsticks.js';
import { meaningReport, meaningWord, renderMeaning, renderMeaningWord } from './meaning.js';
import { restsOnModel } from './rests-on.js';
import { candidateModel, renderAddition, renderAudit, renderRemovalCandidates, renderRootCandidates, renderSwaps } from './candidates.js';
import { gainModel, renderGainExplain, renderGains } from './gains.js';
import { wordEntries } from './word-entries.js';
import { buildModel, makeRowBuilder } from './build-tags.js';
import { buildPool } from './akinator-pool.js';
import { createAkinator } from './akinator.js';
import { makeDescribe, firstChoices } from './akinator-questions.js';
import { askCheckText } from './check-text.js';
import { askReading } from './check-reading.js';
import { askGloss } from './gloss.js';
import { askLookup } from './lookup.js';
import { askMemory } from './memory.js';
import { askConstructions } from './constructions.js';
import { TAGS as themeTags } from '../grammar-tags.ts';
import { patternsOf } from '../grammar/parser.js';
import { pinyinToRefs } from '../pinyin-refs.js';
import { wordRefIds } from '../word-refs.js';
import { tagModel, renderTree, renderTag, renderOf, renderCommon, renderFind, renderCheck, renderProposed } from './tags.js';

// freq: the Mandarin frequency list [{ zh, py, rank }]; drafts: how words would be said without a stored paraphrase { id: { forms, verdict } }
export function createKb(source, { rules = readRules('base', 'whatif'), freq = null, drafts = {}, parseMemo = null, relationRules = {}, englishData = null, yardstickData = null } = {}) {
  let meaning = null; // the meaning links, asked once: a KB is one version of the data
  const facts = buildFacts(source);
  const index = buildIndex(source, facts);
  let rests = null; // the atoms each word rests on (rests-on.js), plain code and quick
  const ctx = { source, facts, rules, index, meaning: () => (meaning ??= meaningReport(source)), restsOn: () => (rests ??= restsOnModel(source)), builtRow: (c) => builtRowOf()(c) };
  const words = source.words;

  // the atoms report takes three solver runs; a KB is one version of the data, so it is asked once
  let atomsReport = null;
  let relationsReport = null;
  let candidates = null;
  let gains = null;
  let yardsticks = null;
  let englishModel = null; // English to entries (english.js); the WordNet files are read the first time it is asked
  let crossChecked = null;
  let frontierReport = null;
  let yardstickLists = null; // the word lists are read once (kb/yardsticks/)
  const listsOf = () => (yardstickLists ??= yardstickData?.() ?? {});
  // The entries the English and Mandarin checks count: the composites, and the core words no composite repeats (球, 东, 没).
  let counted = null;
  const countedOf = () => {
    if (!counted) {
      const data = englishData?.() ?? {};
      counted = { data, ...wordEntries({ words, composites: source.composites, links: data.links ?? {} }) };
    }
    return counted;
  };
  const yardsticksOf = () => (yardsticks ??= yardstickReport({ composites: countedOf().entries, english: englishOf(), ...listsOf() }));

  const englishOf = () => (englishModel ??= createEnglish({ ...countedOf().data, composites: countedOf().entries, links: countedOf().links }));
  let tagsModel = null; // the tag nets over the entries (tags.js), plain code and quick
  const tagsOf = () => (tagsModel ??= tagModel(source, { entryZhs: (text) => { const r = englishOf().lookup(text); return [...new Set([...r.glosses, ...r.sameSense.flatMap((s) => s.entries)].map((e) => e.zh))]; } }));
  const relationsOf = () => (relationsReport ??= relationReport(source, facts, relationRules));

  // The lesson that first teaches each core word: the earliest card (or catch-all sense card) of the book
  let firstLesson = null;
  const wordLesson = (id) => {
    if (!firstLesson) {
      const number = Object.fromEntries((source.lessons ?? []).map((l) => [l.id, l.number]));
      firstLesson = new Map();
      for (const line of facts.lines) {
        const m = /^card\(([^,]+),"([^"]+)",/.exec(line) ?? /^card_sense\(([^,]+),"[^"]*","([^"]+)",/.exec(line);
        const n = m ? number[m[2]] : undefined;
        if (n !== undefined && n < (firstLesson.get(m[1]) ?? Infinity)) firstLesson.set(m[1], n);
      }
    }
    return firstLesson.get(id);
  };
  let builtModelCache = null; // the build tags of the composites (build-tags.js): every description is parsed once
  const builtOptions = {
    patterns: source.patterns ?? [],
    lessons: (source.lessons ?? []).map(({ id, number }) => ({ id, number })),
    parse: (form) => parseText.parser.parse(form, { maxTrees: 1, forms: true }),
    parseAt: (n) => (form) => parseUpTo(n).parser.parse(form, { maxTrees: 1, forms: true }),
    wordLesson,
    patternLesson: (id) => taughtIn(patternById.get(id) ?? {}),
  };
  let poolCache = null; // the Akinator's pool (akinator-pool.js)
  // what a sentence uses: the patterns of its first reading and the words it names (plain pinyin or text with word refs)
  const readText = (text) => {
    let refs = String(text);
    if (!refs.includes('{{')) {
      try {
        refs = pinyinToRefs(refs, words);
      } catch {
        return { patterns: [], words: [] };
      }
    }
    const used = new Set();
    for (const s of refs.trim().split(/(?<=[.!?…])\s+/).filter(Boolean)) {
      const r = parseText.parser.parse(s, { maxTrees: 1 });
      if (r.ok) for (const p of patternsOf(r.trees[0])) used.add(p);
    }
    return { patterns: [...used], words: wordRefIds(refs) };
  };
  let akinatorCache = null; // the engine over the pool (akinator.js)
  const poolOf = () =>
    (poolCache ??= buildPool({
      sentences: facts.sentences,
      patterns: source.patterns ?? [],
      words,
      composites: source.composites,
      topicNet: tagsOf().nets.topic,
      kindNet: tagsOf().nets.kind,
      built: builtOf(),
      lessons: builtOptions.lessons,
      wordLesson,
      readText,
    }));
  let builtRow = null;
  const builtRowOf = () => (builtRow ??= makeRowBuilder(builtOptions));
  const builtOf = () => (builtModelCache ??= buildModel({ composites: source.composites, words, lessons: builtOptions.lessons, rowOf: builtRowOf() }));

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

  // what B1-B3's and C1's tools need of a kb: the same names, built from this function's own closures (not the
  // public object below), so they need no self-reference.
  const kbLike = {
    source,
    parse: parseText,
    parseUpTo,
    lessons: () => builtOptions.lessons,
    wordLesson,
    patternLesson: (id) => taughtIn(patternById.get(id) ?? {}),
    english: (text) => englishOf().lookup(text),
    built: builtOf,
    pool: poolOf,
  };

  return {
    source,
    facts,
    index,
    find: (q) => findWords(words, q).map((id) => ({ id, term: words[id].term, hanzi: words[id].hanzi, pos: words[id].pos?.eng })),
    // a core word's card; a name that is no core word but a composite (刀, dāo) gets the composite's card
    word: (name, opts) => {
      if (!findWords(words, name).length) {
        const c = findComposite(source, name);
        if (c) return compositeCard(ctx, c);
      }
      return wordCard(ctx, resolveWord(words, name), opts);
    },
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
    wordLesson, // the number of the lesson that first teaches a core word
    lessons: () => builtOptions.lessons, // [{ id, number }] in teaching order
    parser: parseText.parser,

    // A text at a lesson's level, in one call (TRANSLATOR_PLAN.md B1): unknown words, words and structures taught
    // later, whether it parses at that level, the hanzi. No lesson: the whole dictionary.
    checkText: (opts) => askCheckText(kbLike, opts),

    // Does a sentence have the reading Claude means (TRANSLATOR_PLAN.md B2)?
    checkReading: (opts) => askReading(kbLike, opts),

    // Each word of a sentence, word by word in English, from its own definition (TRANSLATOR_PLAN.md B3).
    gloss: (opts) => askGloss(kbLike, opts),

    // An English word or phrase -> Hao-shuo-de forms, by tier, with the lesson and a book sentence (TRANSLATOR_PLAN.md C1).
    lookup: (opts) => askLookup(kbLike, opts),

    // The translation memory: an English sentence -> the closest book sentences by their own English (TRANSLATOR_PLAN.md C2).
    memory: (opts) => askMemory(kbLike, opts),

    // English ways of saying (so, because, than, the one who …) -> the patterns and grammar words that say them (TRANSLATOR_PLAN.md C3).
    constructions: (opts) => askConstructions(kbLike, opts),

    // The relations: stored ones are accepted, the ones a rule finds are proposed (see relations.js).
    relations: relationsOf,

    // The build tags of the composites (AKINATOR_PLAN.md A5): which patterns, words and lesson each description is made from.
    built: builtOf,

    // The pool the Akinator searches (AKINATOR_PLAN.md A3, akinator-pool.js): the words, composites, patterns and sentences,
    // each with its features. The sentences are read once (patterns and words); the parse memory makes a rebuild 0.4 s.
    pool: poolOf,

    // The Akinator (AKINATOR_PLAN.md part B, akinator.js): ak.step(answers) -> the next question or the result. `prior` is an
    // optional Map(item id -> weight) from an English hint; with one the engine is made fresh, without one it is kept.
    akinator: ({ prior = null, ...options } = {}) => {
      const make = () => {
        const nets = { topicNet: tagsOf().nets.topic, kindNet: tagsOf().nets.kind };
        return createAkinator(poolOf(), { describe: makeDescribe({ ...nets, patterns: source.patterns ?? [], words, themes: themeTags }), first: firstChoices(nets), prior, ...options });
      };
      return prior || Object.keys(options).length ? make() : (akinatorCache ??= make());
    },

    // The tag nets (TAGS_PLAN.md, K31): where an entry sits on the topic and kind nets, what is under a tag, what two entries share, the checks.
    tags: tagsOf,

    // English to entries, in three tiers (english.js): the gloss, the same WordNet sense, a kind of. `englishData` gives
    // { links, index } (kb/wordnet/links.json, kb/cache/english-index.json); without it only the glosses answer.
    english: (text) => englishOf().lookup(text),
    englishSenses: (zh) => englishOf().senses(zh),

    // WordNet hints for drafting a description of a word with no entry (hints.js): its senses, the entry each can start from,
    // the opposite and the whole. English or Mandarin.
    hints: (text, opts) => hintReport(englishOf(), text, opts),

    // The dictionary as OntoLex-Lemon in Turtle (export.js): the words, the entries with their WordNet links, the relations.
    // -> { prefixes, header, blocks, counts }; export.js turns it into the file, or one entry's fragment.
    exportModel: (opts) => buildExport({ words, composites: source.composites, links: countedOf().data.links ?? {}, relations: relationsOf().relations, tags: source.tags ?? null, ...opts }),

    // The dictionary's kind-of, opposite and part-of relations against WordNet's (cross-check.js): where they disagree,
    // what WordNet states that the dictionary does not, and the entries without a head that WordNet could give one.
    crossCheck: () => (crossChecked ??= crossCheck({ relations: relationsOf().relations, words, composites: source.composites, ...englishOf().data, startsFrom: englishOf().startsFrom })),

    // How much of the yardsticks (kb/yardsticks/) the dictionary can say: Mandarin and English word lists, Basic English.
    yardsticks: yardsticksOf,
    // the word lists themselves (kb/yardsticks/): { mandarin, basic, top, sentences, explained }
    yardstickLists: listsOf,

    // What the yardsticks cannot say yet and the Mandarin word that would fix each (frontier.js).
    frontier: () => (frontierReport ??= frontier({ yardsticks: yardsticksOf(), english: englishOf(), composites: countedOf().entries, words, mandarin: listsOf().mandarin ?? [], translations: listsOf().translationGaps ?? [] })),

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

    // Which Chinese words to make core entries when the language grows from 230 words to about 1000 (gains.js).
    gains: () => (gains ??= gainModel(source, { freq })),
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
      const full = [withBase ? readRules('base', 'tags') : '', facts.program, withBase ? facts.tagProgram : '', extra, program].join('\n');
      const result = await solve(full, { models, timeoutMs });
      return { status: result.status, models: result.models.map((m) => tables(m)) };
    },
  };
}

export { renderTree, renderTag, renderOf, renderCommon, renderFind, renderCheck, renderProposed, meaningWord, renderMeaning, renderMeaningWord, renderCard, renderRemoval, renderParse, viewParse, renderAtoms, renderAtomWord, renderRelations, renderKindTree, renderEnglish, renderHints, exportTurtle, exportFragment, renderExportSummary, renderCrossCheck, renderFrontier, renderYardsticks, renderAddition, renderAudit, renderRemovalCandidates, renderRootCandidates, renderSwaps, renderGains, renderGainExplain };
