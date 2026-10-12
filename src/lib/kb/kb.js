// The one entry point the CLI, the explorer page and the Claude tools share
// (KB_PLAN.md phase 1, "thin scripts/kb.js"). Give it the `source` (see
// scripts/kb-source.js) and it answers questions; it never changes data.
//
//   const kb = createKb(source);
//   kb.word('dēng')            the word card
//   kb.remove(['deng1'])       the remove what-if
//   kb.checkForm({ forms })    the form gates, for one proposal
//   kb.query(program)          raw rules on top of the facts, for Claude
//   kb.parse('Wǒ shì rén.')    does it parse, and by which patterns
//   kb.atoms()                 which words are atoms (the report; kb.atoms('dēng') is one word's line)
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

export function createKb(source, { rules = readRules('base', 'whatif') } = {}) {
  const facts = buildFacts(source);
  const index = buildIndex(source, facts);
  const ctx = { source, facts, rules, index };
  const words = source.words;

  // the atoms report takes three solver runs; a KB is one version of the data, so it is asked once
  let atomsReport = null;

  const parseText = makeParseText({ patterns: source.patterns ?? [], words, composites: source.composites });

  const ids = (names) => (Array.isArray(names) ? names : String(names).split(/[,\s]+/)).filter(Boolean).map((n) => resolveWord(words, n));

  return {
    source,
    facts,
    index,
    find: (q) => findWords(words, q).map((id) => ({ id, term: words[id].term, hanzi: words[id].hanzi, pos: words[id].pos?.eng })),
    word: (name, opts) => wordCard(ctx, resolveWord(words, name), opts),
    remove: async (names) => removal(ctx, ids(names)),
    checkForm: (args) => checkForm(words, args),
    parse: (text) => parseText(text),
    parser: parseText.parser,

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

export { renderCard, renderRemoval, renderParse, viewParse, renderAtoms, renderAtomWord };
