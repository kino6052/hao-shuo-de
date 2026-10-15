// The Claude tools of the KB (KB_PLAN.md phase 1): what each is called, what it
// asks for, and how it answers. Pure apart from the KB it is given; the
// protocol is in mcp.js and the process in scripts/kb-mcp.js. Every answer is
// the same text the command line prints.
//
//   TOOLS                         [{ name, description, inputSchema }]
//   callTool(kb, name, args)      -> the answer as text (throws on a bad question)

import { fileURLToPath } from 'node:url';
import { renderMeaning, renderMeaningWord, renderCard, renderRemoval, renderParse, renderAtoms, renderAtomWord, renderRelations, renderAddition, renderRemovalCandidates, renderRootCandidates, renderSwaps } from './kb.js';
import { scoreboardRow, readScoreboard, renderScoreboard, renderHistory } from './scoreboard.js';

// the stored rows (refactor --write adds one after every change)
export const SCOREBOARD_FILE = fileURLToPath(new URL('../../../kb/scoreboard.csv', import.meta.url));

// a Claude tool never runs longer than this, whatever the question
export const MAX_QUERY_MS = 60_000;

export const TOOLS = [
  {
    name: 'kb_word',
    description:
      "The card for one dictionary word: its meaning, why the core needs it, its category, the lesson that teaches it, its opposites and synonyms, " +
      "the atoms its paraphrase and its description come down to, the composites that use it or hang under it, and a sample of the book's sentences. Ask before changing or relying on a word.",
    inputSchema: {
      type: 'object',
      properties: { name: { type: 'string', description: 'The word: its pinyin (dēng or deng), its id (deng1) or its hanzi (灯).' } },
      required: ['name'],
    },
  },
  {
    name: 'kb_remove',
    description:
      'What happens if we drop one or more words from the core dictionary. Nothing is changed; it lists the consequences: composites left with no form (to redo), ' +
      'composites that lose a form or their head, the sentences, cards and mentions in the book to rewrite, coverage items without a carrier, ' +
      'definitions and paraphrase forms that name the word, words that rested on it as an atom (and now have no way to be said, or a longer one), catch-all senses left empty, and opposite/synonym pairs that break.',
    inputSchema: {
      type: 'object',
      properties: {
        words: {
          description: 'The words to drop, by pinyin, id or hanzi: a list, or one string with spaces or commas between them.',
          oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
        },
      },
      required: ['words'],
    },
  },
  {
    name: 'kb_parse',
    description:
      'Does a sentence fit the grammar patterns (src/data/grammar/), and by which? Gives the structure of each sentence, or where the parser stopped and what could have come next. ' +
      'Several sentences are checked one by one.',
    inputSchema: {
      type: 'object',
      properties: { text: { type: 'string', description: 'Plain pinyin ("Wǒ shì rén.") or text with {{word:id}} references.' } },
      required: ['text'],
    },
  },
  {
    name: 'kb_check_form',
    description:
      'Check a proposed Hao-shuo-de form before it goes into the data: plain pinyin becomes word references, every syllable must be a dictionary word ' +
      '(names and sounds in quotes), the hanzi must spell the words, and a Mandarin word made of dictionary words is said with that compound first.',
    inputSchema: {
      type: 'object',
      properties: {
        forms: { type: 'string', description: 'The form in plain pinyin; several forms are separated by " / ".' },
        tts: { type: 'string', description: 'The hanzi of each form, separated by " / " (optional).' },
        zh: { type: 'string', description: 'The Chinese word the forms say, if it is a composite (optional).' },
        py: { type: 'string', description: "That word's pinyin, e.g. chīfàn (optional)." },
      },
      required: ['forms'],
    },
  },
  {
    name: 'kb_atoms',
    description:
      'Which dictionary words are atoms: the words the others cannot be said from. Every word has a paraphrase (a way to say it with other words) or is marked as an atom; ' +
      'the smallest set of words that says all the rest shows which are true atoms (in every smallest set), swappable (in some), or secondary (in none). ' +
      'Without a name: the whole report, with the kernel and core of the paraphrase graph, the paraphrases that cost the most, and the hidden vocabulary (Mandarin compounds written with our words and learned whole). ' +
      'With a name: that word\'s sort, how it is said, and what it rests on.',
    inputSchema: {
      type: 'object',
      properties: { name: { type: 'string', description: 'A word, by pinyin, id or hanzi (optional; leave out for the whole report).' } },
    },
  },
  {
    name: 'kb_relations',
    description:
      'The relations between words and between composites: opposites, close words, the same description, kind-of (a composite and its head), agents, categories, and phrases that stand in for a missing opposite. ' +
      'Stored ones are accepted; the ones a rule finds in the data (composites that differ in one slot, shared descriptions, heads, paraphrases) are proposed, waiting for the author. ' +
      'Without a kind: the counts per kind. With a kind: its relations, each with why it was found and where from.',
    inputSchema: {
      type: 'object',
      properties: {
        kind: { type: 'string', description: 'A kind (opposite, close, same-form, kind-of, agent, category, opposite-phrase, close-phrase, opposite-by-not, close-by-paraphrase, defined-by, circular, connected); leave out for the counts.' },
        status: { type: 'string', enum: ['accepted', 'proposed'], description: 'Only the accepted or only the proposed ones.' },
        limit: { type: 'integer', description: 'How many to list (default 8).' },
      },
    },
  },
  {
    name: 'kb_meaning',
    description:
      "What the dictionary says of the NSM primes, Aristotle's categories and the grammar items, and what the words are made of. " +
      'Without a name: which words and patterns carry each item (the ones carried once are fragile), the atom marks against the primes ' +
      '(words that say a prime but are not atoms, primes that still have a description), and how many words reach a prime through the words their description names. ' +
      "With a name: that word's line (what it says, the primes its description names, the step to the nearest prime). The links are read from the data and are proposals until the author reviews them.",
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'A word, by pinyin, id or hanzi (optional; leave out for the report).' },
        section: { type: 'string', enum: ['says', 'atoms', 'grounding'], description: 'Only one part of the report (optional).' },
        limit: { type: 'integer', description: 'How many to list in each part (default 12).' },
      },
    },
  },
  {
    name: 'kb_candidates',
    description:
      'Which words could go, or which roots could be added. kind "remove" (the default): every word that is not marked as an atom, the cheapest to drop first, each with what dropping it costs ' +
      '(composites to redo, book lines to rewrite, coverage lost, Mandarin words that could no longer be written) and how it would be said without it (its paraphrase or the proposed draft). ' +
      'kind "add": the hanzi the language does not have, ranked by the common Mandarin words they would complete. The cost is a sum of parts with set weights (COSTS in candidates.js); the parts are shown next to it. ' +
      'For one set of words with the reason for every line use kb_remove; for one root use kb_add.',
    inputSchema: {
      type: 'object',
      properties: {
        kind: { type: 'string', enum: ['remove', 'add'], description: 'remove (default): words that could go. add: roots that could come in.' },
        limit: { type: 'integer', description: 'How many to list (default 20).' },
      },
    },
  },
  {
    name: 'kb_add',
    description:
      'What adding one hanzi as a root would bring: the Mandarin words it completes (the other hanzi of the word are already here), the ones that still need more roots, ' +
      'the composites it would let be spelled in hanzi, and its sound against the words we have (a new word, or a sense of the word with that sound; the neighbour with another tone).',
    inputSchema: {
      type: 'object',
      properties: { root: { type: 'string', description: 'The hanzi (the first one is used).' } },
      required: ['root'],
    },
  },
  {
    name: 'kb_swaps',
    description:
      'The best trade of K roots in for K words out, so the core keeps its size: the value is the Mandarin words that become writable less everything dropping the words costs (see kb_candidates). ' +
      'K = 1 looks at every pair; for more it builds on the best pair and improves one change at a time, which is how it stays under a few seconds. Gives the roots, the words, the Mandarin words gained and lost, and the cost.',
    inputSchema: {
      type: 'object',
      properties: { k: { type: 'integer', description: 'How many roots to bring in (and words to drop). Default 1; 1 to 10.' } },
    },
  },
  {
    name: 'kb_scoreboard',
    description:
      'The numbers about the language as it is now (words, composites, average description length, words reviewed, the smallest defining set, true atoms, hidden vocabulary, coverage, parse rate, grammar patterns), ' +
      'and how each changed since the last stored row in kb/scoreboard.csv. A row is stored after every refactor --write, so this shows what a change did, and what more data does when the solvers run again. ' +
      'With history: true, the stored rows instead. A number that cannot be measured yet is shown as "-".',
    inputSchema: {
      type: 'object',
      properties: { history: { type: 'boolean', description: 'Show the stored rows instead of measuring now.' } },
    },
  },
  {
    name: 'kb_query',
    description:
      'Raw clingo rules on top of the facts, for questions the other tools do not answer. Add `#show name/arity.` lines to choose what comes back. ' +
      'Facts: word(W) term(W,"dēng") hanzi(W,"灯") pos(W,noun) necessity(W,N) category(W,"leaf") def_uses(V,W) sense(W,"k") sense_compound_uses(W,"k",N,V); ' +
      'lesson("id",Number) card(W,"lesson","module") mention(W,"lesson","module",kind,Count); ' +
      'composite("灯") rank(C,N) cpos(C,noun) head_word(C,W) head_comp(C,C2) form(C,F) uses(C,F,Slot,W) slot_sound(C,F,Slot,"ng"); ' +
      'item("group:key") carries(W,I) item_uses(I,N,W); antonym(A,B) synonym(A,B). Words are constants (deng1), composites and lessons are strings. ' +
      'Rules already loaded: opp/2, same/2, in_composite/2, composite_uses/2, first_card/2. The sentences are not loaded unless you name words in `text`.',
    inputSchema: {
      type: 'object',
      properties: {
        program: { type: 'string', description: 'clingo rules, e.g. "#show used/1. used(W) :- uses(_,_,_,W)."' },
        models: { type: 'integer', description: 'How many answer sets to return (default 1; 0 for all).' },
        text: {
          type: 'array',
          items: { type: 'string' },
          description: 'Load the sentences and mentions that name these words (sent/1, sent_kind/2, sent_at/3, sent_of/2, sent_uses/2, mention/5).',
        },
        timeout_ms: { type: 'integer', description: `Give up after this long (default 20000, at most ${MAX_QUERY_MS}).` },
      },
      required: ['program'],
    },
  },
];

export const renderCheckForm = (r) =>
  r.ok ? `ok: ${r.forms.map((f) => `${f.pinyin} = ${f.refs}`).join(' / ')}` : `problems:\n${r.problems.map((p) => `  ${p}`).join('\n')}`;

const need = (args, key) => {
  if (args[key] === undefined || args[key] === null || args[key] === '') throw new Error(`usage: ${key} is required`);
  return args[key];
};

// -> the answer as text. Throws Error for a question that can't be answered
// (an unknown word, a bad program); the caller reports it as the tool's error.
export async function callTool(kb, name, args = {}, { scoreboardFile = SCOREBOARD_FILE } = {}) {
  switch (name) {
    case 'kb_word':
      return renderCard(kb.word(String(need(args, 'name'))));
    case 'kb_remove':
      return renderRemoval(await kb.remove(need(args, 'words')));
    case 'kb_parse':
      return renderParse(kb.parse(String(need(args, 'text'))), kb.source.words);
    case 'kb_check_form': {
      const { forms, tts, zh, py } = args;
      return renderCheckForm(kb.checkForm({ forms: String(need(args, 'forms')), tts, zh, py }));
    }
    case 'kb_atoms': {
      if (args.name === undefined || args.name === '') return renderAtoms(await kb.atoms());
      return renderAtomWord(await kb.atoms(), await kb.atoms(String(args.name)));
    }
    case 'kb_relations':
      return renderRelations(kb.relations(), { kind: args.kind || undefined, status: args.status || undefined, limit: Number(args.limit) > 0 ? Number(args.limit) : 8 });
    case 'kb_meaning': {
      if (args.name) {
        const r = kb.meaning(String(args.name));
        return [r.term, renderMeaningWord(r.line, kb.source.words)].join('\n');
      }
      if (args.section && !['says', 'atoms', 'grounding'].includes(args.section)) throw new Error('section is says, atoms or grounding');
      return renderMeaning(kb.meaning(), kb.source.words, { section: args.section || 'all', limit: Number(args.limit) > 0 ? Number(args.limit) : 12 });
    }
    case 'kb_candidates': {
      const limit = Number(args.limit) > 0 ? Number(args.limit) : 20;
      const model = kb.candidates();
      if (!args.kind || args.kind === 'remove') return renderRemovalCandidates(model.removalCandidates({ drafts: kb.drafts }), { limit });
      if (args.kind === 'add') return renderRootCandidates(model.rootCandidates(), { limit });
      throw new Error('kind is remove or add');
    }
    case 'kb_add':
      return renderAddition(kb.candidates().addition(String(need(args, 'root'))));
    case 'kb_swaps': {
      const k = Math.min(Math.max(Math.floor(Number(args.k)) || 1, 1), 10);
      return renderSwaps(kb.candidates().swaps({ k, drafts: kb.drafts }));
    }
    case 'kb_scoreboard': {
      const rows = readScoreboard(scoreboardFile);
      if (args.history) return renderHistory(rows);
      return renderScoreboard(await scoreboardRow(kb, { atomsTimeoutMs: 45_000 }), rows);
    }
    case 'kb_query': {
      const timeoutMs = Math.min(Math.max(Number(args.timeout_ms) || 20_000, 100), MAX_QUERY_MS);
      const r = await kb.query(String(need(args, 'program')), { models: args.models ?? 1, timeoutMs, text: Array.isArray(args.text) && args.text.length ? args.text : false });
      if (r.status === 'TIMEOUT') return `The query ran out of time (${timeoutMs} ms); make it narrower or ask for fewer answers.`;
      return JSON.stringify(r, null, 2);
    }
    default:
      throw new Error(`unknown tool "${name}"`);
  }
}
