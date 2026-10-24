// BROWSER_TRANSLATOR_PLAN.md B5: one request of the translator page through the tree translator (tree-request.js), over
// the fixture language with a scripted translator -- step 0's questions stop it, a sentence made from a tree carries its
// tree and the sentence it built, the ones left over go to the quick translator, and the tree step goes in batches.

import { describe, expect, test } from 'bun:test';
import { createKb } from '../kb/kb.js';
import { source } from '../kb/fixture.js';
import { pinyinOf, treeRequest, TREE_STEP } from './tree-request.js';

const entry = (type, module, key, extra = {}) => ({ type, module, key, ...extra });
const lessons = [{ id: 'basics', number: 1, entries: [entry('vocab', 'eat', 'eat.vocab0', { term: '{{word:wo3}}' }), entry('vocab', 'eat', 'eat.vocab1', { term: '{{word:chi1}}' }), entry('vocab', 'eat', 'eat.vocab2', { term: '{{word:fan4}}' })] }];
const patterns = [{ id: 'svo', taught: 'basics/eat', meaning: { eng: 'who does what' }, rules: [{ lhs: 'Utt', hsd: 'S' }, { lhs: 'S', hsd: 'NP VP' }, { lhs: 'NP', hsd: '@pronoun' }, { lhs: 'NP', hsd: '@noun' }, { lhs: 'VP', hsd: '@verb NP' }, { lhs: 'VP', hsd: '@verb' }] }];
const kb = createKb({ ...source, lessons, patterns });

const I_EAT = '{{Word:wo3}} {{word:chi1}} {{word:fan4}}.';
const tree = { rule: 'svo#1', slots: { S: { word: 'wo3' } } };
const built = (sentence) => ({ ok: true, sentence, tree, refs: I_EAT, readback: 'I eat a meal.', at: 0, readings: 1, tries: 1 });
const notBuilt = (sentence) => ({ ok: false, sentence, tries: 3, messages: ['no'], fallback: true });
const ok = (sentences, changes = []) => ({ status: 'ok', sentences, changes, questions: [], reason: '' });

// a translator whose step 0 gives `correction` and whose tree step builds the sentences `builds` says yes to
function scripted(correction, builds = () => true) {
  const calls = [];
  return {
    calls,
    correctMany: async (texts) => (calls.push(['correct', texts]), [correction]),
    translateMany: async (sentences) => (calls.push(['trees', sentences]), sentences.map((s) => (builds(s) ? built(s) : notBuilt(s)))),
  };
}

describe('treeRequest', () => {
  test('pinyinOf: the sentence a reader sees', () => {
    expect(pinyinOf(I_EAT, source.words)).toBe('Wǒ chī fàn.');
  });

  test('a sentence made from a tree carries its tree; the one left over goes to the quick translator', async () => {
    const translator = scripted(ok(['I eat.', 'I fly.'], [{ from: 'i eat', to: 'I eat.', why: 'capital', meaning: false }]), (s) => s === 'I eat.');
    const steps = [];
    const asked = [];
    const quick = async (text) => (asked.push(text), { sentences: [{ english: text, pinyin: 'Wǒ chī.', literally: 'I eat.' }] });
    const r = await treeRequest({ text: 'i eat. I fly.', lesson: '' }, { kb, translator, quick, onStep: (s) => steps.push(s) });
    expect(steps).toEqual([TREE_STEP.correcting, TREE_STEP.trees, TREE_STEP.quick]);
    expect(asked).toEqual(['I fly.']);
    expect(r.mode).toBe('tree');
    expect(r.correction).toMatchObject({ status: 'ok', changes: [{ from: 'i eat', to: 'I eat.' }] });
    expect(r.sentences.map((s) => [s.how, s.pinyin])).toEqual([
      ['tree', 'Wǒ chī fàn.'],
      ['quick', 'Wǒ chī.'],
    ]);
    expect(r.sentences[0]).toMatchObject({ tree: '[svo#1 S=wo3]', built: I_EAT, readback: 'I eat a meal.', literally: 'I eat a meal.', tries: 1 });
    expect(r.sentences[0].check).toMatchObject({ parses: true, means: 'yes' });
    expect(r.sentences[1].tree).toBeUndefined();
    expect(r.timing.total).toBeGreaterThanOrEqual(0);
  });

  test('step 0 asking stops it: no sentences, the questions instead', async () => {
    const translator = scripted({ status: 'ask', sentences: [], changes: [], questions: [{ about: 'Which bank?', options: ['river', 'money'] }], reason: '' });
    const r = await treeRequest({ text: 'I went to the bank.' }, { kb, translator });
    expect(translator.calls.map(([step]) => step)).toEqual(['correct']);
    expect(r.sentences).toEqual([]);
    expect(r.correction).toMatchObject({ status: 'ask', questions: [{ about: 'Which bank?' }] });
  });

  test('with no quick translator, or one that fails, what is left over is left out and said', async () => {
    const none = await treeRequest({ text: 'I eat. I fly.' }, { kb, translator: scripted(ok(['I eat.', 'I fly.']), (s) => s === 'I eat.') });
    expect(none.sentences).toHaveLength(1);
    expect(none.problems).toContain('1 sentence could not be made from a tree and was left out');
    const fails = await treeRequest({ text: 'I fly.' }, { kb, translator: scripted(ok(['I fly.']), () => false), quick: async () => Promise.reject(new Error('no session')) });
    expect(fails.sentences).toEqual([]);
    expect(fails.problems).toEqual(expect.arrayContaining(['the quick translator failed: no session', '1 sentence could not be made from a tree and was left out']));
  });

  test("when the quick translator splits the text otherwise, its own sentences stand in the place of the ones left over", async () => {
    const translator = scripted(ok(['I fly far.', 'I eat.', 'I fly.']), (s) => s === 'I eat.');
    const quick = async () => ({ sentences: [{ english: 'I fly far. I fly.', pinyin: 'Wǒ fēi.' }] });
    const r = await treeRequest({ text: 'x' }, { kb, translator, quick });
    expect(r.sentences.map((s) => [s.how, s.english])).toEqual([
      ['quick', 'I fly far. I fly.'],
      ['tree', 'I eat.'],
    ]);
  });

  test('the tree step goes `batch` sentences a call, in their order', async () => {
    const sentences = Array.from({ length: 10 }, (_, i) => `I eat ${i}.`);
    const translator = scripted(ok(sentences));
    const r = await treeRequest({ text: 'x' }, { kb, translator });
    expect(translator.calls.filter(([step]) => step === 'trees').map(([, s]) => s.length)).toEqual([8, 2]);
    expect(r.sentences.map((s) => s.english)).toEqual(sentences);
  });
});
