// Steps 0 to 5 of the browser translator (tree-translate.js) on a tiny made-up grammar, with a scripted LLM.

import { describe, expect, test } from 'bun:test';
import { createParser } from '../grammar/parser.js';
import { makeTrees, treeText } from '../grammar/tree.js';
import { makeTreeTranslator, rulesForPrompt, treeSchema, triesWithoutFirstReading, CORRECT_SCHEMA } from './tree-translate.js';

const w = (term, pos, eng) => ({ term, pos: { eng: pos }, definition: { eng } });
const words = { wo3: w('wǒ', 'pronoun', 'I, me'), shi4: w('shì', 'verb', 'to be'), chi1: w('chī', 'verb', 'to eat'), ren2: w('rén', 'noun', 'person'), fan4: w('fàn', 'noun', 'meal') };
const rule = (lhs, hsd, say) => ({ lhs, hsd, eng: `${lhs} from ${hsd}`, ...(say ? { say } : {}) });
const patterns = [
  { id: 'frame', rules: [rule('Utt', 'S', '{S}'), rule('S', 'NP VP', '{NP} {VP}')] },
  { id: 'np', rules: [rule('NP', '@pronoun', '{pronoun}'), rule('NP', '@noun', '{noun}')] },
  { id: 'vp', rules: [rule('VP', 'shi4 NP', 'is {NP}'), rule('VP', '@verb NP', '{verb} {NP}')] },
];
const parser = createParser({ patterns, words });
const trees = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words });
const idOf = (lhs, rhs) => parser.rules.find((r) => r.lhs === lhs && r.rhs.join(' ') === rhs).id;
const np = (k, id) => ({ rule: idOf('NP', `@${k}`), slots: { [k]: { word: id } } });
const iEatRice = { rule: idOf('Utt', 'S'), slots: { S: { rule: idOf('S', 'NP VP'), slots: { NP: np('pronoun', 'wo3'), VP: { rule: idOf('VP', '@verb NP'), slots: { verb: { word: 'chi1' }, NP: np('noun', 'fan4') } } } } } };

// an LLM that gives its answers in turn and keeps the prompts it was sent
const scripted = (answers) => {
  const prompts = [];
  const ask = async (prompt, { step }) => {
    prompts.push({ prompt, step });
    return answers.shift();
  };
  return { ask, prompts };
};
const ok = (sentences, changes = []) => ({ status: 'ok', sentences, changes, questions: [], reason: '' });

describe('step 0: correcting the English', () => {
  test('a corrected text comes back with its changes listed', async () => {
    const { ask } = scripted([ok(['I eat rice.'], [{ from: 'i eats rice', to: 'I eat rice.', why: 'grammar', meaning: false }])]);
    const r = await makeTreeTranslator({ parser, trees, words, ask }).correct('i eats rice');
    expect(r).toMatchObject({ status: 'ok', sentences: ['I eat rice.'] });
    expect(r.changes).toHaveLength(1);
  });

  test('a change of meaning and a real ambiguity stop the translation with a question', async () => {
    const change = { from: 'bank', to: 'river bank', why: 'the river was meant', meaning: true };
    const { ask } = scripted([{ ...ok(['I sit by the river bank.'], [change]), status: 'ask', questions: [{ about: 'which bank?', options: ['river', 'money'] }] }]);
    const r = await makeTreeTranslator({ parser, trees, words, ask }).correct('I sit by the bank.');
    expect(r.status).toBe('ask');
    expect(r.questions.map((q) => q.about)).toEqual(['which bank?', 'Did you mean "river bank" for "bank"? (the river was meant)']);
  });

  test('nonsense is refused with the reason, never translated', async () => {
    const { ask } = scripted([{ status: 'refuse', sentences: [], changes: [], questions: [], reason: 'not English' }]);
    expect(await makeTreeTranslator({ parser, trees, words, ask }).run('zxq vbn')).toMatchObject({ status: 'refused', results: [] });
  });

  test('a sentence too long or a word that is not English goes back to the LLM with the reason', async () => {
    const { ask, prompts } = scripted([ok(['I eat rice and then I eat more rice.', 'I eat rcie.']), ok(['I eat rice.', 'Then I eat more.'])]);
    const known = (word) => word !== 'rcie';
    const r = await makeTreeTranslator({ parser, trees, words, ask, knownWord: known, maxWords: 6 }).correct('...');
    expect(r).toMatchObject({ status: 'ok', sentences: ['I eat rice.', 'Then I eat more.'] });
    expect(prompts[1].prompt).toContain('has 9 words; split it into sentences of at most 6');
    expect(prompts[1].prompt).toContain('"rcie" is not an English word');
  });
});

describe('steps 1 to 5: the tree, the checks, the build and the loop', () => {
  test('a good tree builds the sentence and reads back in English', async () => {
    const { ask } = scripted([{ tree: iEatRice }]);
    const r = await makeTreeTranslator({ parser, trees, words, ask }).translate('I eat rice.');
    expect(r).toMatchObject({ ok: true, refs: '{{Word:wo3}} {{word:chi1}} {{word:fan4}}.', readback: 'I eat meal', at: 0, readings: 1, tries: 1, messages: [] });
  });

  test('a parser with the parse memory (slim results, no trees) is refused by name, not a crash', async () => {
    const { ask } = scripted([{ tree: iEatRice }]);
    const slim = createParser({ patterns, words, memo: new Map() });
    await expect(makeTreeTranslator({ parser: slim, trees, words, ask }).translate('I eat rice.')).rejects.toThrow('a parser without the parse memory');
  });

  test('the built sentence keeps the English question mark', async () => {
    const { ask } = scripted([{ tree: iEatRice }]);
    expect((await makeTreeTranslator({ parser, trees, words, ask }).translate('Do I eat rice?')).refs).toBe('{{Word:wo3}} {{word:chi1}} {{word:fan4}}?');
  });

  test('a bad tree goes back with the exact message, and the second try passes', async () => {
    const bad = { rule: idOf('Utt', 'S'), slots: { S: { rule: idOf('S', 'NP VP'), slots: { NP: np('pronoun', 'wo3'), VP: { rule: idOf('VP', '@verb NP'), slots: { verb: { word: 'ren2' }, NP: np('noun', 'fan4') } } } } } };
    const { ask, prompts } = scripted([{ tree: bad }, { tree: iEatRice }]);
    const r = await makeTreeTranslator({ parser, trees, words, ask }).translate('I eat rice.');
    expect(r).toMatchObject({ ok: true, tries: 2 });
    const message = `slot verb of ${idOf('VP', '@verb NP')} wants a verb, got rén (noun)`;
    expect(r.messages).toEqual([message]);
    expect(prompts[1].prompt).toContain(`- ${message}`);
  });

  test('after three failures the sentence goes to the full translator, with every message', async () => {
    const { ask } = scripted([{ tree: { rule: 'nope#1', slots: {} } }, null, { tree: { rule: idOf('NP', '@noun'), slots: { noun: { word: 'fan4' } } } }]);
    const r = await makeTreeTranslator({ parser, trees, words, ask }).translate('Rice.');
    expect(r).toMatchObject({ ok: false, fallback: true, tries: 3 });
    expect(r.messages).toEqual(['the sentence: there is no rule "nope#1"', 'the answer has no tree', 'the sentence wants a Utt, but np#2 makes a NP']);
  });

  test('a tree that is only a later reading goes back, unless firstReading is off (Q7)', async () => {
    // a second way to say verb and noun, so wǒ chī fàn has two readings
    const p2 = createParser({ patterns: [...patterns, { id: 'vp2', rules: [rule('VP', '@verb @noun', '{verb} {noun}')] }], words });
    const t2 = makeTrees({ rules: p2.rules, glue: p2.grammar.glue, words });
    const parsed = p2.parse('{{Word:wo3}} {{word:chi1}} {{word:fan4}}.', { maxTrees: 5 });
    expect(parsed.treeCount).toBe(2);
    const [first, later] = [t2.fromParse(parsed, 0), t2.fromParse(parsed, 1)];
    const on = scripted([{ tree: later }, { tree: first }]);
    const r = await makeTreeTranslator({ parser: p2, trees: t2, words, ask: on.ask }).translate('I eat rice.');
    expect(r).toMatchObject({ ok: true, tries: 2, at: 0 });
    expect(r.messages[0]).toMatch(/^the built sentence .* reads first as: .*; make the tree so it is the first reading$/);
    expect(r.attempts.map((a) => Boolean(a.later))).toEqual([true, false]);
    expect(triesWithoutFirstReading(r.attempts)).toBe(1);
    const off = scripted([{ tree: later }]);
    expect(await makeTreeTranslator({ parser: p2, trees: t2, words, ask: off.ask, firstReading: false }).translate('I eat rice.')).toMatchObject({ ok: true, tries: 1, at: 1 });
  });

  test('without a pass or a later reading there is no try that would have passed', () => {
    expect(triesWithoutFirstReading([{ problems: ['x'] }, { problems: ['y'] }])).toBe(null);
  });

  test('the whole run: step 0, then a tree for each sentence', async () => {
    const { ask, prompts } = scripted([ok(['I eat rice.']), { tree: iEatRice }]);
    const r = await makeTreeTranslator({ parser, trees, words, ask }).run('i eat rice');
    expect(r.status).toBe('ok');
    expect(r.results.map((x) => x.refs)).toEqual(['{{Word:wo3}} {{word:chi1}} {{word:fan4}}.']);
    expect(prompts.map((p) => p.step)).toEqual(['correct', 'tree']);
    expect(prompts[1].prompt).toContain(`${idOf('VP', '@verb NP')}: VP -> @verb NP | slots: verb, NP | English: {verb} {NP}`);
  });
});

describe('many in one call', () => {
  const line = treeText(iEatRice);
  const many = (ask, extra = {}) => makeTreeTranslator({ parser, trees, words, ask, wordsFor: (s, more) => `   words for ${s}${more.length ? ` and ${more.join(', ')}` : ''}`, coreWords: 'wo3 wǒ [pronoun] I', ...extra });

  test('step 0 corrects many texts at once and asks again only about the one with a problem', async () => {
    const { ask, prompts } = scripted([
      { texts: [{ n: 1, ...ok(['I eat rice.']) }, { n: 2, ...ok(['I eat rcie.']) }] },
      { texts: [{ n: 2, ...ok(['I eat a meal.']) }] },
    ]);
    const r = await many(ask, { knownWord: (word) => word !== 'rcie' }).correctMany(['i eats rice', 'i eat rcie']);
    expect(r.map((x) => x.status)).toEqual(['ok', 'ok']);
    expect(r.map((x) => x.sentences)).toEqual([['I eat rice.'], ['I eat a meal.']]);
    expect(prompts[1].prompt).toContain('2. "i eat rcie"');
    expect(prompts[1].prompt).toContain('"rcie" is not an English word');
    expect(prompts[1].prompt).not.toContain('i eats rice');
  });

  test('the tree step answers lines, one per sentence; only the failures go back, each with its last tree and messages', async () => {
    const bad = `[${idOf('Utt', 'S')} S=[${idOf('S', 'NP VP')} NP=[${idOf('NP', '@pronoun')} pronoun=chi1] VP=[${idOf('VP', 'shi4 NP')} NP=[${idOf('NP', '@noun')} noun=ren2]]]]`;
    const { ask, prompts } = scripted([
      { trees: [{ n: 1, tree: line }, { n: 2, tree: bad, lookup: ['person'] }, { n: 3, tree: '[oops' }] },
      { trees: [{ n: 2, tree: '[still' }, { n: 3, tree: line }] },
      { trees: [{ n: 2, tree: bad }] },
    ]);
    const r = await many(ask).translateMany(['I eat rice.', 'I am a person.', 'Broken.']);
    expect(prompts.every((p) => p.step === 'trees')).toBe(true);
    expect(r[0]).toMatchObject({ ok: true, refs: '{{Word:wo3}} {{word:chi1}} {{word:fan4}}.', tries: 1 });
    expect(r[1]).toMatchObject({ ok: false, fallback: true, tries: 3, lookedUp: ['person'] });
    expect(r[1].attempts[0].problems[0]).toMatch(/chī/);
    expect(r[2]).toMatchObject({ ok: true, tries: 2 });
    expect(r[2].attempts[0].problems[0]).toMatch(/the tree does not read/);
    expect(prompts[2].prompt).not.toContain('"Broken."');
    expect(prompts[1].prompt).toContain('2. "I am a person."');
    expect(prompts[1].prompt).toContain('words for I am a person. and person');
    expect(prompts[1].prompt).toContain(`Your last tree for it, ${bad},`);
    expect(prompts[1].prompt).not.toContain('"I eat rice."');
    expect(prompts[0].prompt).toContain('wo3 wǒ [pronoun] I');
  });

  test('step 0 is told to split a sentence over splitOver words', async () => {
    const { ask, prompts } = scripted([{ texts: [{ n: 1, ...ok(['I eat rice.']) }] }]);
    await many(ask, { splitOver: 5 }).correctMany(['i eat rice']);
    expect(prompts[0].prompt).toContain('Split every sentence of more than 5 words');
  });

  test('a sentence kept from another call is not asked again; a new one is, and is kept', async () => {
    const store = new Map();
    const kept = { get: (k) => store.get(k), set: (k, a) => store.set(k, a) };
    const first = scripted([{ trees: [{ n: 1, tree: line }] }]);
    await many(first.ask, { kept }).translateMany(['I eat rice.']);
    const second = scripted([{ trees: [{ n: 1, tree: line }] }]);
    const r = await many(second.ask, { kept }).translateMany(['I eat a meal.', 'I eat rice.']);
    expect(r.map((x) => x.ok)).toEqual([true, true]);
    expect(second.prompts).toHaveLength(1);
    expect(second.prompts[0].prompt).toContain('1. "I eat a meal."');
    expect(second.prompts[0].prompt).not.toContain('"I eat rice."');
    expect(store.size).toBe(2);
    const third = scripted([]);
    expect((await many(third.ask, { kept }).translateMany(['I eat rice.', 'I eat a meal.'])).map((x) => x.tries)).toEqual([1, 1]);
    expect(third.prompts).toHaveLength(0);
  });
});

describe('the formats', () => {
  test('the tree schema allows only the grammar rule ids; step 0 answers in a fixed shape', () => {
    const s = treeSchema(['a#1', 'b#2']);
    expect(s.$defs.part.properties.rule.enum).toEqual(['a#1', 'b#2']);
    expect(CORRECT_SCHEMA.required).toEqual(['status', 'sentences', 'changes', 'questions', 'reason']);
  });

  test('the grammar for the prompt has a line per rule', () => {
    expect(rulesForPrompt(parser.rules, trees).split('\n')).toHaveLength(6);
  });
});
