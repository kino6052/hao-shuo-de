import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { KINDS, relationKey, renderKindTree, renderRelations } from './relations.js';
import { source } from './fixture.js';

const w = (term, hanzi, pos = 'noun', extra = {}) => ({ term, hanzi, pos: { eng: pos }, definition: { eng: `the word ${term}` }, necessity: { index: 3, eng: `why ${term}` }, ...extra });
const c = (rank, zh, py, en, hsd, extra = {}) => ({ rank, zh, py, en, hsd, tts: zh, pos: 'noun', fit: 'natural', ...extra });
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join('-');

// the fixture language, plus a person word, a "not", and composites that make each rule fire
const words = {
  ...source.words,
  ren2: w('rén', '人'),
  bu4: w('bù', '不', 'adverb'),
  fan4: { ...source.words.fan4, paraphrase: { forms: [`${ref('bu4')} ${ref('chi1')}`], verdict: 'fine' } },
  fei1: { ...source.words.fei1, paraphrase: { forms: [ref('dong1')], verdict: 'fine' } },
};
const composites = [
  ...source.composites,
  c(10, '东机', 'dōngjī', 'east machine', ref('dong1', 'ji1')),
  c(11, '西机', 'xījī', 'west machine', ref('xi1', 'ji1')),
  c(12, '吃机', 'chījī', 'eating machine', ref('chi1', 'ji1')),
  c(13, '吃饭2', 'chīfàn', 'dinner', `${ref('chi1')} ${ref('fan4')}`),
  c(14, '学生', 'xuésheng', 'student', `${ref('chi1')}-${ref('de')} ${ref('ren2')}`),
];
const maps = {
  antonyms: { pairs: [['dong1', 'xi1']], phrases: { fei1: [`${ref('bu4')} ${ref('fei1')}`], dui4: [`${ref('chi1')} ${ref('dui4')}`] } },
  synonyms: { pairs: [['chi1', 'fei1']], phrases: { ji1: [`${ref('fan4')}-${ref('de')} ${ref('ji1')}`] } },
  connections: [
    { words: ['chi1', 'fan4'], why: 'you eat a meal' },
    { words: ['fei1', 'dong1', 'xi1'], why: 'words of going', proposed: true },
  ],
};
const kb = createKb({ ...source, words, composites, maps });
const report = kb.relations();
const of = (kind) => report.relations.filter((r) => r.kind === kind);

describe('stored relations are accepted', () => {
  test('pairs, and phrases for a word with no opposite word', () => {
    expect(of('opposite').filter((r) => r.status === 'accepted').map((r) => [r.a, r.b])).toEqual([['dong1', 'xi1']]);
    expect(of('close').filter((r) => r.status === 'accepted').map((r) => [r.a, r.b])).toEqual([['chi1', 'fei1']]);
    // "bù fēi" for fēi is the opposite said by "not"; "chī duì" for duì is just a phrase
    expect(of('opposite-by-not').filter((r) => r.status === 'accepted').map((r) => r.a)).toEqual(['fei1']);
    expect(of('opposite-phrase').map((r) => r.a)).toEqual(['dui4']);
    expect(of('close-phrase').map((r) => r.a)).toEqual(['ji1']);
  });

  test('a connection the author states is a group; a proposed one waits', () => {
    expect(of('connected').map((r) => [r.members, r.status])).toEqual([
      [['chi1', 'fan4'], 'accepted'],
      [['fei1', 'dong1', 'xi1'], 'proposed'],
    ]);
    expect(of('connected')[0].why).toBe('chī, fàn: you eat a meal');
  });

  test('a category is a group', () => {
    const cat = of('category').map((r) => r.members);
    expect(cat).toContainEqual(['fan4', 'dong1', 'xi1']);
    expect(of('category').every((r) => r.status === 'accepted')).toBe(true);
  });
});

describe('a rule proposes what the data implies', () => {
  test('composites that differ in one slot, where the two words are opposites or close', () => {
    const opp = of('opposite').filter((r) => r.status === 'proposed');
    expect(opp.map((r) => [r.a, r.b].sort())).toEqual([['东机', '西机']]);
    expect(opp[0].why).toContain('differ only in dōng / xī, which are opposites');
    // 飞机 (fēi-jī) and 吃机 (chī-jī) differ only in fēi / chī, which are close
    const near = of('close').filter((r) => r.status === 'proposed');
    expect(near.map((r) => [r.a, r.b].sort())).toEqual([['吃机', '飞机']]);
  });

  test('composites that share a description are one group', () => {
    const groups = of('same-form');
    expect(groups).toHaveLength(1);
    expect(groups[0].members.sort()).toEqual(['吃饭', '吃饭2'].sort());
    expect(groups[0].status).toBe('proposed');
  });

  test('a composite is a kind of its head; a person named by what they do is an agent', () => {
    const kind = (zh) => of('kind-of').find((r) => r.a === zh);
    expect(kind('飞机')).toMatchObject({ b: 'ji1', ends: 'composite-word', status: 'proposed' });
    expect(of('agent').map((r) => r.a)).toEqual(['学生']);
    expect(of('agent')[0].why).toContain('xuésheng');
  });

  test('paraphrases: "not" + a word is an opposite by "not"; one word is a close word', () => {
    const byNot = of('opposite-by-not').filter((r) => r.status === 'proposed');
    expect(byNot.map((r) => [r.a, r.b])).toEqual([['fan4', 'chi1']]);
    expect(of('close-by-paraphrase').map((r) => [r.a, r.b])).toEqual([['fei1', 'dong1']]);
  });

  test('a relation that is already stored is not proposed again', () => {
    // the stored pair dong1/xi1 stays one relation, accepted
    expect(of('opposite').filter((r) => r.a === 'dong1' || r.b === 'dong1')).toHaveLength(1);
  });
});

describe('accepted rules and rejected pairs (kb/relation-rules.json)', () => {
  const ruled = createKb({ ...source, words, composites, maps }, { relationRules: { accept: ['head rule', 'paraphrase'], rejected: [{ kind: 'kind-of', a: '飞机', b: 'ji1' }, { kind: 'opposite-by-not', a: 'fan4', b: 'chi1' }] } }).relations();
  const got = (kind) => ruled.relations.filter((r) => r.kind === kind);

  test('a source named in accept turns proposed into accepted; others stay proposed', () => {
    expect(got('kind-of').every((r) => r.status === 'accepted')).toBe(true);
    expect(got('close-by-paraphrase').every((r) => r.status === 'accepted')).toBe(true);
    expect(got('same-form').every((r) => r.status === 'proposed')).toBe(true);
  });

  test('a rejected pair is left out and listed apart', () => {
    expect(got('kind-of').some((r) => r.a === '飞机')).toBe(false);
    expect(got('opposite-by-not').some((r) => r.a === 'fan4')).toBe(false);
    expect(ruled.rejected.map((r) => r.kind).sort()).toEqual(['kind-of', 'opposite-by-not']);
  });
});

describe('what the paraphrases name (the author asked for as many links between core words as they can capture)', () => {
  test('defined-by: every word a paraphrase names, once, with the form', () => {
    const by = of('defined-by').map((r) => [r.a, r.b]);
    expect(by).toContainEqual(['fan4', 'bu4']);
    expect(by).toContainEqual(['fan4', 'chi1']);
    expect(by).toContainEqual(['fei1', 'dong1']);
    expect(of('defined-by').every((r) => r.status === 'accepted' && r.source === 'paraphrase')).toBe(true);
    expect(of('defined-by').find((r) => r.a === 'fan4' && r.b === 'chi1').why).toBe('fàn is said "bù chī", which names chī');
  });

  test('a compound spelled with a light syllable is learned whole: its parts are not counted, a measure word is', () => {
    const light = createKb({
      ...source,
      words: {
        ...words,
        fan4: { ...words.fan4, paraphrase: { forms: [`${ref('dong1')}-{{light:xi1}} ${ref('ji1')}`, `${ref('chi1')}-{{light:ge4}}`], verdict: 'clumsy' } },
      },
      composites,
      maps,
    }).relations();
    const names = light.relations.filter((r) => r.kind === 'defined-by' && r.a === 'fan4').map((r) => r.b);
    expect(names).toEqual(['ji1', 'chi1', 'ge4']);
  });

  test('circular: two words that name each other', () => {
    const two = createKb({
      ...source,
      words: { ...words, chi1: { ...words.chi1, paraphrase: { forms: [ref('fan4')], verdict: 'fine' } }, fan4: { ...words.fan4, paraphrase: { forms: [ref('chi1')], verdict: 'fine' } } },
      composites,
      maps,
    }).relations();
    const circ = two.relations.filter((r) => r.kind === 'circular');
    expect(circ).toHaveLength(1);
    expect([circ[0].a, circ[0].b].sort()).toEqual(['chi1', 'fan4']);
    expect(of('circular')).toEqual([]);
  });
});

describe('structure: opposite kinds, wholes, sets, scales and families (maps/structure.ts)', () => {
  const structure = {
    oppositeKinds: { 'dong1|xi1': 'either-or' },
    opposites: [
      { a: '东机', b: '西机', kind: 'either-or', why: 'east and west', proposed: true },
      { a: '吃饭', b: '吃饭2', kind: 'other-side', why: 'a made-up pair' },
    ],
    parts: [{ whole: 'ji1', parts: ['fei1', '吃机'], why: 'a machine has parts', proposed: true }],
    groups: [
      { kind: 'set', members: ['dong1', 'xi1'], why: 'the two ends' },
      { kind: 'scale', members: ['chi1', 'fan4'], why: 'in order', proposed: true },
    ],
    families: [{ name: 'going', why: 'all move', facets: { means: ['fei1'], way: ['dong1', 'xi1'] }, proposed: true }],
  };
  const made = createKb({ ...source, words, composites, maps: { ...maps, structure } }).relations();
  const got = (kind) => made.relations.filter((r) => r.kind === kind);

  test('an opposite carries its kind; a composite pair of the map replaces the one a rule found', () => {
    expect(got('opposite').find((r) => r.a === 'dong1').sub).toBe('either-or');
    const pair = got('opposite').filter((r) => [r.a, r.b].includes('东机'));
    expect(pair).toHaveLength(1);
    expect(pair[0]).toMatchObject({ sub: 'either-or', source: 'maps/structure', status: 'proposed' });
    expect(got('opposite').find((r) => r.a === '吃饭')).toMatchObject({ sub: 'other-side', status: 'accepted' });
  });

  test('"not" + a word is an opposite of the kind by-not', () => {
    expect(got('opposite-by-not').every((r) => r.sub === 'by-not')).toBe(true);
  });

  test('parts, sets, scales and families are stored with their status', () => {
    expect(got('part-of').map((r) => [r.a, r.b, r.status]).filter((x) => x[1] === 'ji1')).toEqual([
      ['fei1', 'ji1', 'proposed'],
      ['吃机', 'ji1', 'proposed'],
    ]);
    expect(got('set')[0]).toMatchObject({ members: ['dong1', 'xi1'], status: 'accepted' });
    expect(got('scale')[0]).toMatchObject({ members: ['chi1', 'fan4'], status: 'proposed' });
    expect(got('family')[0].facets).toEqual({ means: ['fei1'], way: ['dong1', 'xi1'] });
    expect(got('family')[0].why).toContain('means: fēi; way: dōng, xī');
  });
});

describe('the same-form sort and the descriptions', () => {
  const place = c(20, '学处', 'xuéchù', 'study place', `${ref('chi1')}-${ref('de')} ${ref('di4')}-${ref('fang1')}`);
  const part = c(21, '机头', 'jītóu', 'machine head', `${ref('ji1')}-${ref('de')} ${ref('bu4')}-${ref('fen1')}`);
  const more = [...composites, place, part];
  const extra = { di4: w('dì', '地'), fang1: w('fang', '方'), fen1: w('fen', '分') };
  const run = (sameForm) => createKb({ ...source, words: { ...words, ...extra }, composites: more, maps }, { relationRules: { accept: ['description'], sameForm } }).relations();

  test('a form the sort calls synonyms or close is accepted; the others stay proposed with the reason', () => {
    const form = of('same-form')[0].a;
    expect(run({}).relations.filter((r) => r.kind === 'same-form').map((r) => r.status)).toEqual(['proposed']);
    const syn = run({ [form]: ['synonyms', 'one meaning'] }).relations.filter((r) => r.kind === 'same-form');
    expect(syn[0]).toMatchObject({ status: 'accepted', source: 'same-form sort' });
    expect(syn[0].why).toContain('synonyms (one meaning)');
    const near = run({ [form]: ['close', 'one family'] }).relations;
    expect(near.some((r) => r.kind === 'same-form')).toBe(false);
    expect(near.find((r) => r.source === 'same-form sort')).toMatchObject({ kind: 'close', status: 'accepted' });
    const diff = run({ [form]: ['different', 'two meanings'] }).relations.find((r) => r.kind === 'same-form');
    expect(diff).toMatchObject({ status: 'proposed', sub: 'different' });
    expect(diff.why).toContain('different meanings (two meanings)');
  });

  test('a composite described as a place or as a part of something', () => {
    const r = run({}).relations;
    expect(r.find((x) => x.kind === 'place-of' && x.a === '学处')).toMatchObject({ source: 'description', status: 'accepted' });
    expect(r.find((x) => x.kind === 'part-of' && x.a === '机头')).toMatchObject({ source: 'description', status: 'accepted' });
  });
});

describe('the decisions made on the review page', () => {
  test('a proposed relation is accepted or dropped by its key; an accepted one is never touched', () => {
    const keys = report.relations.filter((r) => r.status === 'proposed' && r.kind === 'opposite');
    const key = relationKey(keys[0]);
    const taken = createKb({ ...source, words, composites, maps }, { relationRules: { decided: { [key]: { status: 'accept' } } } }).relations();
    expect(taken.relations.find((r) => relationKey(r) === key).status).toBe('accepted');
    const dropped = createKb({ ...source, words, composites, maps }, { relationRules: { decided: { [key]: { status: 'reject' }, 'opposite|dong1|xi1': { status: 'reject' } } } }).relations();
    expect(dropped.relations.some((r) => relationKey(r) === key)).toBe(false);
    expect(dropped.rejected.map(relationKey)).toEqual([key]);
    expect(dropped.relations.some((r) => r.a === 'dong1' && r.b === 'xi1')).toBe(true);
  });
});

describe('prime families and alternates (maps/primes.ts)', () => {
  const coverage = [{ key: 'atoms', items: [{ key: 'EAST', words: ['dong1'] }, { key: 'WEST', words: ['xi1'] }, { key: 'EAT', words: ['chi1', 'fan4'] }] }];
  const primes = {
    families: [{ name: 'Directions', why: 'where the sun is', primes: ['EAST', 'WEST'], proposed: true }, { name: 'Alone', why: 'one word only', primes: ['EAT'] }],
    alternates: [{ prime: 'EAT', main: ['chi1'], alternates: ['fan4'], why: 'a meal is eaten', proposed: true }],
  };
  const made = createKb({ ...source, words, composites, coverage, maps: { ...maps, primes } }).relations();
  const got = (kind) => made.relations.filter((r) => r.kind === kind);

  test('a family is the words that carry its primes; a family not marked proposed is accepted', () => {
    expect(got('prime-family').map((r) => [r.a, r.members, r.status])).toEqual([
      ['Directions', ['dong1', 'xi1'], 'proposed'],
      ['Alone', ['chi1', 'fan4'], 'accepted'],
    ]);
  });

  test('an alternate is one group: the main way, then the alternates', () => {
    expect(got('alternate')).toHaveLength(1);
    expect(got('alternate')[0]).toMatchObject({ a: 'EAT', members: ['chi1', 'fan4'], sub: 'EAT', status: 'proposed' });
    expect(got('alternate')[0].why).toContain('chī is the main way, fàn an alternate');
  });
});

describe('the kind-of tree', () => {
  const tree = {
    relations: [
      { kind: 'kind-of', status: 'accepted', a: '飞机', b: 'ji1' },
      { kind: 'kind-of', status: 'accepted', a: '小飞机', b: '飞机' },
      { kind: 'kind-of', status: 'accepted', a: '机', b: 'ji1' },
      { kind: 'kind-of', status: 'proposed', a: '吃机', b: 'ji1' },
    ],
  };
  const src = { words: { ji1: { term: 'jī', hanzi: '机' } }, composites: [{ zh: '飞机', py: 'fēijī' }, { zh: '小飞机', py: 'xiǎofēijī' }] };

  test('what hangs under a word, and under that in turn; its own hanzi and a proposed one are left out', () => {
    expect(renderKindTree(tree, src)).toBe(['jī 机  (2 under it)', '  - 飞机 fēijī (1 under it)', '    - 小飞机 xiǎofēijī'].join('\n'));
  });

  test('one tree by the word, its hanzi or a composite; a name nothing hangs under is an error', () => {
    expect(renderKindTree(tree, src, { root: 'ji1' })).toBe(renderKindTree(tree, src, { root: '机' }));
    expect(renderKindTree(tree, src, { root: '飞机' })).toContain('小飞机');
    expect(() => renderKindTree(tree, src, { root: '路' })).toThrow(/nothing hangs under/);
  });
});

describe('the counts and the text', () => {
  test('counts per kind and status add up to the relations', () => {
    const sum = Object.values(report.counts).reduce((n, k) => n + k.accepted + k.proposed, 0);
    expect(sum).toBe(report.relations.length);
    expect(report.counts.opposite).toEqual({ accepted: 1, proposed: 1 });
    expect(report.kinds.every((k) => KINDS.includes(k))).toBe(true);
  });

  test('the text lists the kinds, and one kind with its why', () => {
    const all = renderRelations(report);
    expect(all).toContain('accepted');
    expect(all).toContain('Name a kind');
    const one = renderRelations(report, { kind: 'opposite', status: 'proposed' });
    expect(one).toContain('opposite (1, proposed)');
    expect(one).toContain('[proposed]');
    expect(one).toContain('(one slot differs)');
    expect(() => renderRelations(report, { kind: 'cousin' })).toThrow(/unknown kind "cousin"/);
  });
});
