import { describe, expect, test } from 'bun:test';
import { source as fixture } from './fixture.js';
import { WORD_BATCH, KIND_BATCH, wordOrder, wordBatch, wordBatchCount, checkParaphrase, wordOps, kindsBatch, kindsOps, needsKinds, refactorListText } from './review.js';

const words = fixture.words;

describe('word batches follow the categories', () => {
  test('every word once, in the order of the leaves, with the path of titles', () => {
    const order = wordOrder(fixture);
    expect(order.map((x) => x.id)).toEqual(['fan4', 'dong1', 'xi1', 'ji1', 'jian1', 'chi1', 'fei1', 'wo3', 'de', 'shi2', 'dui4', 'ge4']);
    expect(order[0].category).toEqual(['things', 'food']);
    expect(order[5].category).toEqual(['doing']);
  });

  test('a word that is in no category comes last', () => {
    const extra = { ...fixture, words: { ...words, lost: { ...words.wo3, term: 'lost' } } };
    expect(wordOrder(extra).at(-1)).toEqual({ id: 'lost', category: [] });
  });

  test('80 to a batch', () => {
    const many = { ...fixture, categories: [{ key: 'all', wordIds: Array.from({ length: 170 }, (_, i) => `w${i}`) }], words: Object.fromEntries(Array.from({ length: 170 }, (_, i) => [`w${i}`, { ...words.wo3, term: `w${i}` }])) };
    expect(WORD_BATCH).toBe(80);
    expect(wordBatchCount(many)).toBe(3);
    expect(wordBatch(many, 1).entries).toHaveLength(80);
    const last = wordBatch(many, 3);
    expect(last.entries).toHaveLength(10);
    expect([last.from, last.to, last.total]).toEqual([161, 170, 170]);
    expect(last.entries[0]).toMatchObject({ id: 'w160', number: 161 });
  });
});

describe('checking a paraphrase in plain pinyin', () => {
  test('a good form becomes refs and pinyin', () => {
    const r = checkParaphrase(words, 'fan4', 'wǒ chī');
    expect(r.ok).toBe(true);
    expect(r.forms[0]).toMatchObject({ refs: '{{word:wo3}} {{word:chi1}}', pinyin: 'wǒ chī' });
  });

  test('several forms are separated by " / "; the same form twice is a problem', () => {
    expect(checkParaphrase(words, 'fan4', 'wǒ chī / chī wǒ').forms).toHaveLength(2);
    expect(checkParaphrase(words, 'fan4', ['wǒ chī', 'wǒ chī']).problems).toContain('the same form twice');
  });

  test('the word itself, an unknown syllable, a quoted sound and nothing at all are all named', () => {
    expect(checkParaphrase(words, 'chi1', 'wǒ chī').problems[0]).toContain('uses the word itself');
    expect(checkParaphrase(words, 'fan4', 'wǒ zzz').problems[0]).toContain('"wǒ zzz"');
    expect(checkParaphrase(words, 'fan4', 'wǒ "ng"').problems[0]).toContain('quoted sound');
    expect(checkParaphrase(words, 'fan4', '').problems).toEqual(['no form given']);
  });

  test('X and Y are allowed', () => {
    expect(checkParaphrase(words, 'fan4', 'X chī Y').ok).toBe(true);
  });
});

describe('the word page data', () => {
  const withOwn = {
    ...fixture,
    composites: [...fixture.composites, { rank: 7, zh: '吃', py: 'chī', en: 'eat', hsd: '{{word:wo3}} {{word:fan4}}', tts: '我饭' }],
    maps: { antonyms: { pairs: [['chi1', 'fei1']], phrases: { chi1: ['{{word:dui4}} {{word:chi1}}'] } }, synonyms: { pairs: [], phrases: { chi1: ['{{word:wo3}} {{word:fan4}}'] } } },
  };

  test('an entry has what the author needs to judge the paraphrase', () => {
    const proposals = { chi1: { forms: ['wǒ fàn'], why: 'because' }, wo3: { atom: { eng: 'the speaker', rus: 'говорящий' }, why: 'a pointer' } };
    const e = wordBatch(withOwn, 1, { proposals }).entries.find((x) => x.id === 'chi1');
    expect(e).toMatchObject({ term: 'chī', hanzi: '吃', pos: 'verb', category: ['doing'], now: { status: 'none' } });
    expect(e.prop).toMatchObject({ verdict: 'fine', forms: ['wǒ fàn'], why: 'because', check: { ok: true } });
    expect(e.related.own).toEqual([{ zh: '吃', rank: 7, en: 'eat', forms: [{ pinyin: 'wǒ fàn', selfFree: true }] }]);
    expect(e.related.antonyms).toEqual([{ id: 'fei1', term: 'fēi', hanzi: '飞' }]);
    expect(e.related.antonymPhrases).toEqual(['duì chī']);
    expect(e.related.synonymPhrases).toEqual(['wǒ fàn']);
    const atom = wordBatch(withOwn, 1, { proposals }).entries.find((x) => x.id === 'wo3');
    expect(atom.prop).toMatchObject({ verdict: 'atom', atom: { eng: 'the speaker' }, check: null });
  });

  test('a proposal with a problem shows it on the entry', () => {
    const e = wordBatch(fixture, 1, { proposals: { fan4: { forms: ['fàn'] } } }).entries.find((x) => x.id === 'fan4');
    expect(e.prop.check.ok).toBe(false);
  });

  test('what the word has now is shown', () => {
    const marked = { ...fixture, words: { ...words, chi1: { ...words.chi1, paraphrase: { forms: ['{{word:wo3}} {{word:fan4}}'], verdict: 'clumsy', note: 'long' } } } };
    const e = wordBatch(marked, 1).entries.find((x) => x.id === 'chi1');
    expect(e.now).toMatchObject({ status: 'clumsy', paraphrase: { verdict: 'clumsy', forms: ['wǒ fàn'], note: 'long' } });
  });
});

describe('decisions become refactor ops', () => {
  const proposals = {
    fan4: { forms: ['wǒ chī'] },
    chi1: { forms: ['wǒ fàn'], verdict: 'clumsy', note: 'a long way round' },
    wo3: { atom: { eng: 'the speaker', rus: 'говорящий' } },
  };

  test('approve takes the proposal: fine, clumsy or atom', () => {
    const { ops, undecided } = wordOps(fixture, 1, proposals, { fan4: { status: 'approve' }, chi1: { status: 'approve' }, wo3: { status: 'approve' } });
    expect(ops).toEqual([
      { op: 'paraphrase', id: 'fan4', forms: ['{{word:wo3}} {{word:chi1}}'], verdict: 'fine' },
      { op: 'paraphrase', id: 'chi1', forms: ['{{word:wo3}} {{word:fan4}}'], verdict: 'clumsy', note: 'a long way round' },
      { op: 'atom', id: 'wo3', eng: 'the speaker', rus: 'говорящий' },
    ]);
    expect(undecided).toHaveLength(9);
  });

  test('edit takes the author\'s own forms; clumsy marks them; atom takes its reasons', () => {
    const { ops } = wordOps(fixture, 1, proposals, {
      fan4: { status: 'edit', forms: 'wǒ chī / chī wǒ' },
      chi1: { status: 'clumsy', note: 'too long' },
      wo3: { status: 'atom', eng: 'a pointer', rus: 'указатель' },
      de: { status: 'edit', forms: 'wǒ', verdict: 'clumsy' },
    });
    expect(ops[0]).toMatchObject({ id: 'fan4', forms: ['{{word:wo3}} {{word:chi1}}', '{{word:chi1}} {{word:wo3}}'], verdict: 'fine' });
    expect(ops[1]).toMatchObject({ id: 'chi1', forms: ['{{word:wo3}} {{word:fan4}}'], verdict: 'clumsy', note: 'too long' });
    expect(ops[2]).toEqual({ op: 'atom', id: 'wo3', eng: 'a pointer', rus: 'указатель' });
    expect(ops[3]).toMatchObject({ id: 'de', verdict: 'clumsy' });
  });

  test('a decision that cannot be made into an op stops the list and names the word', () => {
    expect(() => wordOps(fixture, 1, proposals, { fan4: { status: 'edit', forms: 'fàn' } })).toThrow(/^fan4: .*uses the word itself/);
    expect(() => wordOps(fixture, 1, {}, { fan4: { status: 'approve' } })).toThrow(/no proposal/);
    expect(() => wordOps(fixture, 1, {}, { wo3: { status: 'atom', eng: 'x' } })).toThrow(/Russian/);
    expect(() => wordOps(fixture, 1, {}, { wo3: { status: 'maybe' } })).toThrow(/unknown status/);
  });
});

describe('the refactor list', () => {
  test('is a default export of ops, with the undecided named in the header', () => {
    const ops = [{ op: 'atom', id: 'wo3', eng: 'the speaker', rus: 'говорящий' }];
    const text = refactorListText({ name: 'W1', title: 'word batch 1', ops, undecided: ['a', 'b'] });
    expect(text).toContain('// W1: word batch 1.');
    expect(text).toContain('// Not decided yet, so not here (2): a, b.');
    expect(text).toContain('// Run: npm run refactor -- refactors/W1.ts [--write]');
    expect(text).toContain('export default [\n  {"op":"atom","id":"wo3","eng":"the speaker","rus":"говорящий"},\n];');
    // the ops survive being read back as code
    const body = text.slice(text.indexOf('export default ') + 'export default '.length).replace(/;\s*$/, '');
    expect(JSON.parse(body.replace(/,\s*\]$/, ']'))).toEqual(ops);
  });

  test('no undecided, no line about them', () => {
    expect(refactorListText({ name: 'K1', title: 't', ops: [] })).not.toContain('Not decided');
  });
});

describe('the kinds page data and ops', () => {
  test('the pool is the composites with a Mandarin compound the rule cannot decide', () => {
    expect(KIND_BATCH).toBe(100);
    const b = kindsBatch(fixture, 1);
    expect(b.entries.map((e) => e.zh)).toEqual(['飞机', '吃饭', '时间', '东西', '饭机']);
    expect(b.entries[3]).toMatchObject({ rank: 4, zh: '东西', now: 'unknown' });
    expect(b.entries[3].forms[0]).toMatchObject({ pinyin: 'dōng-xi', hanzi: '东西', mandarin: true, kind: 'unknown' });
    expect(b.entries[3].forms[0].parts.map((p) => p.term)).toEqual(['dōng', 'xī']);
    expect(needsKinds({ ...fixture.composites[3], transparent: true })).toBe(false);
  });

  test('a decided entry stays in its batch and shows what it was decided as', () => {
    const decided = { ...fixture, composites: fixture.composites.map((c) => (c.zh === '东西' ? { ...c, kinds: ['spelled'] } : c)) };
    const b = kindsBatch(decided, 1);
    expect(b.entries).toHaveLength(5);
    expect(b.entries.find((e) => e.zh === '东西').now).toBe('spelled');
  });

  test('an entry with no built form beside its forms is marked bare (K23)', () => {
    const decided = { ...fixture, composites: fixture.composites.map((c) => (c.zh === '东西' ? { ...c, kinds: ['spelled'] } : c)) };
    const b = kindsBatch(decided, 1);
    expect(b.entries.find((e) => e.zh === '东西').bare).toBe(true);
    // 吃饭 has built forms of its own
    expect(b.entries.find((e) => e.zh === '吃饭').bare).toBe(false);
  });

  test('a proposal is shown with its reason', () => {
    const b = kindsBatch(fixture, 1, { proposals: { 东西: { as: 'spelled', why: 'east + west is not "thing"' } } });
    expect(b.entries.find((e) => e.zh === '东西').prop).toEqual({ as: 'spelled', why: 'east + west is not "thing"' });
  });

  test('each decision is one op with every form\'s kind written out', () => {
    const { ops, undecided } = kindsOps(fixture, 1, {}, { 东西: { status: 'spelled' }, 吃饭: { status: 'built' } });
    expect(ops).toEqual([
      { op: 'kinds', zh: '吃饭', kinds: ['built', 'built'] },
      { op: 'kinds', zh: '东西', kinds: ['spelled'] },
    ]);
    expect(undecided).toEqual(['飞机', '时间', '饭机']);
    expect(() => kindsOps(fixture, 1, {}, { 东西: { status: 'maybe' } })).toThrow(/unknown status/);
  });
});
