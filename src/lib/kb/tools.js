// The Claude tools of the KB (KB_PLAN.md phase 1): what each is called, what it
// asks for, and how it answers. Pure apart from the KB it is given; the
// protocol is in mcp.js and the process in scripts/kb-mcp.js. Every answer is
// the same text the command line prints.
//
//   TOOLS                         [{ name, description, inputSchema }]
//   callTool(kb, name, args)      -> the answer as text (throws on a bad question)

import { renderCard, renderRemoval, renderParse } from './kb.js';

// a Claude tool never runs longer than this, whatever the question
export const MAX_QUERY_MS = 60_000;

export const TOOLS = [
  {
    name: 'kb_word',
    description:
      "The card for one dictionary word: its meaning, why the core needs it, its category, the lesson that teaches it, its opposites and synonyms, " +
      "the composites that use it or hang under it, and a sample of the book's sentences. Ask before changing or relying on a word.",
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
      'definitions that name the word, catch-all senses left empty, and opposite/synonym pairs that break.',
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
export async function callTool(kb, name, args = {}) {
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
