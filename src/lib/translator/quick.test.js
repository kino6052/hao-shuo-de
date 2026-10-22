// INSTANT_TRANSLATION_PLAN.md S: the quick translation over the fixture language with a fake session -- the sentences
// it splits, the pieces and the words it sends, what it reads back, the one repair and the result.

import { describe, expect, test } from 'bun:test';
import { createKb } from '../kb/kb.js';
import { source } from '../kb/fixture.js';
import { parseAnswer, piecesOf, quickPrompt, quickTranslate, repairPrompt, splitSentences, wordList } from './quick.js';

const entry = (type, module, key, extra = {}) => ({ type, module, key, ...extra });
const lessons = [{ id: 'basics', number: 1, entries: [entry('vocab', 'eat', 'eat.vocab0', { term: '{{word:wo3}}' }), entry('vocab', 'eat', 'eat.vocab1', { term: '{{word:chi1}}' }), entry('vocab', 'eat', 'eat.vocab2', { term: '{{word:fan4}}' })] }];
const patterns = [{ id: 'svo', taught: 'basics/eat', meaning: { eng: 'who does what' }, rules: [{ lhs: 'Utt', hsd: 'S' }, { lhs: 'S', hsd: 'NP VP' }, { lhs: 'NP', hsd: '@pronoun' }, { lhs: 'NP', hsd: '@noun' }, { lhs: 'VP', hsd: '@verb NP' }, { lhs: 'VP', hsd: '@verb' }] }];
const kb = createKb({ ...source, lessons, patterns });

// a session that answers each message in turn with the next of `replies` (text, or a function of the prompt)
function fakeSession(replies, { cost = 0.01 } = {}) {
  const prompts = [];
  return {
    prompts,
    ask: async (prompt) => {
      prompts.push(prompt);
      const next = replies[prompts.length - 1];
      return { text: typeof next === 'function' ? next(prompt) : next, cost: Promise.resolve(cost) };
    },
  };
}

describe('splitSentences', () => {
  test('at . ! or ? before a capital; a quote that ends in ? before a lowercase word stays whole', () => {
    expect(splitSentences('I ate.  You ate!\n"Where?" she said. done? 3 more')).toEqual(['I ate.', 'You ate!', '"Where?" she said. done?', '3 more']);
    expect(splitSentences('  ')).toEqual([]);
  });
});

describe('parseAnswer', () => {
  test('a JSON array, fenced or not; else one sentence per line; nothing gives null', () => {
    expect(parseAnswer('["Wǒ chī.", "Nǐ chī."]')).toEqual(['Wǒ chī.', 'Nǐ chī.']);
    expect(parseAnswer('Here:\n```json\n["Wǒ chī."]\n```')).toEqual(['Wǒ chī.']);
    expect(parseAnswer('1. Wǒ chī.\n2. "Nǐ chī."')).toEqual(['Wǒ chī.', 'Nǐ chī.']);
    expect(parseAnswer('')).toBeNull();
  });
});

describe('the pieces and the prompts', () => {
  test('pronouns and grammar words are not looked up; a word with no form is named', () => {
    expect(piecesOf(kb, "I ate the rice, so I'm full.")).toEqual({ words: [], grammar: [], book: [], missing: ['ate', 'rice', 'so', 'full'] });
  });

  test('the word list: each word with its first meanings, and a sense written with another character', () => {
    const list = wordList(source.words);
    expect(list).toStartWith('The words (12):');
    expect(list).toContain('fàn 饭 (noun): meal\n');
    expect(list).toContain('shí 十 (number): the word shí; also 时 time in shí-jiān');
  });

  test('the first message carries the words, the level and each sentence with its pieces; the next ones do not repeat the words', () => {
    const pieces = [{ words: [{ word: 'rice', forms: ['fàn', 'chī-de dōng-xi'] }], grammar: ['did: Who + verb + le'], book: ['Wǒ chī fàn. = I eat rice.'], missing: ['full'] }];
    const first = quickPrompt(['I ate rice.'], pieces, { lesson: { id: 'basics', number: 1 }, words: source.words });
    expect(first).toStartWith('The words (12):');
    expect(first).toContain("Write at lesson 1's level");
    expect(first).toContain('1. I ate rice.\n   Words:\n     rice: fàn | chī-de dōng-xi\n     no form found: full\n   Grammar:\n     did: Who + verb + le\n   Close book sentences:\n     Wǒ chī fàn. = I eat rice.');
    expect(quickPrompt(['I ate rice.'], pieces)).toStartWith('Translate.');
  });

  test('the repair names what the checker found in each sentence', () => {
    const verified = { sentences: [{ check: { unknown: ['"sǎn" isn\'t a word'], parses: false, late: [] } }, { check: { unknown: [], parses: true, late: [] } }] };
    const text = repairPrompt(['I eat.', 'You eat.'], ['Wǒ chī sǎn.', 'Nǐ chī.'], verified);
    expect(text).toContain('1. I eat.\n   Yours: Wǒ chī sǎn.\n   Checker: not Hao-shuo-de words: "sǎn" isn\'t a word');
    expect(text).toContain('2. You eat.\n   Yours: Nǐ chī.\n   Checker: passes');
  });
});

describe('quickTranslate', () => {
  test('a good first answer: one message, the result checked, with the timing and no cost unless asked', async () => {
    const session = fakeSession(['["Wǒ chī fàn."]']);
    const steps = [];
    const r = await quickTranslate({ text: 'I eat rice.' }, { kb, session, onStep: (s) => steps.push(s), model: 'sonnet' });
    expect(session.prompts).toHaveLength(1);
    expect(session.prompts[0]).toContain('The words (12):');
    expect(session.prompts[0]).toContain('1. I eat rice.');
    expect(steps).toEqual(['Breaking the English into words and grammar', 'Writing', 'Checking']);
    expect(r).toMatchObject({ mode: 'quick', model: 'sonnet', text: 'I eat rice.', problems: [] });
    expect(r.sentences[0]).toMatchObject({ pinyin: 'Wǒ chī fàn.', english: 'I eat rice.', source: 'quick', hanzi: '我 吃 饭.', check: { parses: true } });
    expect(Object.keys(r.timing)).toEqual(['pieces', 'writing', 'total']);
    expect(r.cost).toBeUndefined();
  });

  test('a failing answer goes back once with the checker words, and the better one is kept; withCost adds up both', async () => {
    const session = fakeSession(['["Wǒ chī sǎn."]', (p) => (p.includes('Checker: not Hao-shuo-de words') ? '["Wǒ chī fàn."]' : '[]')]);
    const r = await quickTranslate({ text: 'I eat rice.' }, { kb, session, withCost: true });
    expect(session.prompts).toHaveLength(2);
    expect(session.prompts[1]).not.toContain('The words (12):');
    expect(r.sentences[0].pinyin).toBe('Wǒ chī fàn.');
    expect(r.problems).toEqual([]);
    expect(Object.keys(r.timing)).toEqual(['pieces', 'writing', 'repair1', 'total']);
    expect(r.cost).toBe(0.02);
  });

  test('a repair that fails more is dropped; --repairs 0 sends none', async () => {
    const worse = fakeSession(['["Wǒ chī sǎn.", "Wǒ chī."]', '["sǎn sǎn.", "sǎn."]']);
    const r = await quickTranslate({ text: 'I eat rice. I eat.' }, { kb, session: worse });
    expect(r.sentences.map((s) => s.pinyin)).toEqual(['Wǒ chī sǎn.', 'Wǒ chī.']);
    expect(r.problems).toHaveLength(1);
    const none = fakeSession(['["Wǒ chī sǎn."]']);
    await quickTranslate({ text: 'I eat rice.' }, { kb, session: none, repairs: 0 });
    expect(none.prompts).toHaveLength(1);
  });

  test('checkKb as a function is opened once the message is sent, and the checks use it', async () => {
    const order = [];
    const session = { ask: async () => (order.push('ask'), { text: '["Wǒ chī fàn."]', cost: 0 }) };
    const r = await quickTranslate({ text: 'I eat rice.' }, { kb, session, checkKb: async () => (order.push('open'), kb) });
    expect(order).toEqual(['ask', 'open']);
    expect(r.sentences[0].check.parses).toBe(true);
  });

  test('a lesson sets the level; no English, or an unknown lesson, is the person\'s mistake', async () => {
    const session = fakeSession(['["Wǒ chī fàn."]']);
    const r = await quickTranslate({ text: 'I eat rice.', lesson: '1' }, { kb, session });
    expect(r.lesson).toEqual({ id: 'basics', number: 1 });
    expect(session.prompts[0]).toContain("Write at lesson 1's level");
    await expect(quickTranslate({ text: ' ' }, { kb, session })).rejects.toMatchObject({ userMessage: 'There is no English to translate.' });
    await expect(quickTranslate({ text: 'I eat.', lesson: '9' }, { kb, session })).rejects.toHaveProperty('userMessage');
  });
});
