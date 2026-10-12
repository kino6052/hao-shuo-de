// A tiny made-up language for the KB tests: twelve words, a few composites,
// one coverage group, two lessons. Same shape scripts/kb-source.js builds from
// the real data. Nothing here depends on src/data, so the tests keep their
// meaning when the vocabulary is reshuffled.

const w = (term, hanzi, pos, necessity = 3, extra = {}) => ({
  term,
  hanzi,
  pos: { eng: pos },
  definition: { eng: `the word ${term}` },
  necessity: { index: necessity, eng: `why ${term}` },
  ...extra,
});

export const words = {
  wo3: w('wǒ', '我', 'pronoun', 5),
  chi1: w('chī', '吃', 'verb', 5),
  fan4: w('fàn', '饭', 'noun', 3, { definition: { eng: 'meal; {{word:chi1}}-{{word:de}} food' } }),
  fei1: w('fēi', '飞', 'verb', 4),
  ji1: w('jī', '机', 'noun', 4),
  de: w('de', '的', 'particle', 5),
  shi2: w('shí', '十', 'number', 5, {
    senses: {
      time: { hanzi: '时', eng: 'time', rus: 'время', why: { eng: 'in {{word:shi2}}-{{word:jian1}}' }, compounds: ['shi2 jian1'] },
    },
  }),
  jian1: w('jiān', '间', 'noun', 2),
  dong1: w('dōng', '东', 'noun', 4),
  xi1: w('xī', '西', 'noun', 4),
  dui4: w('duì', '对', 'adjective/verb', 4),
  ge4: w('gè', '个', 'measure word', 4),
};

export const categories = [
  { key: 'things', children: [{ key: 'food', wordIds: ['fan4', 'dong1', 'xi1'] }, { key: 'machines', wordIds: ['ji1', 'jian1'] }] },
  { key: 'doing', wordIds: ['chi1', 'fei1', 'wo3', 'de', 'shi2', 'dui4', 'ge4'] },
];

export const maps = {
  antonyms: { pairs: [['dong1', 'xi1']], phrases: { dui4: ['{{word:chi1}} {{word:dui4}}'] } },
  synonyms: { pairs: [], phrases: {} },
};

const c = (rank, zh, py, en, hsd, extra = {}) => ({ rank, zh, py, en, hsd, tts: zh, ...extra });

export const composites = [
  c(1, '飞机', 'fēijī', 'airplane', '{{word:fei1}}-{{word:ji1}}', {
    pos: 'noun',
    fit: 'natural',
    examples: [{ pinyin: '{{Word:wo3}} {{word:chi1}} {{word:fan4}}.', hanzi: '我吃饭。', en: 'I eat.', ru: '' }],
  }),
  c(2, '吃饭', 'chīfàn', 'eat a meal', '{{word:chi1}}-{{word:fan4}} / {{word:chi1}} {{word:fan4}}', { pos: 'verb', fit: 'natural' }),
  c(3, '时间', 'shíjiān', 'time', '{{word:shi2}}-{{word:jian1}}', { pos: 'noun', fit: 'word' }),
  c(4, '东西', 'dōngxi', 'thing', '{{word:dong1}}-{{light:xi1}}', { pos: 'noun', fit: 'natural' }),
  c(5, '嗯', 'ng', 'mm', '"ng" / {{word:dui4}}', { pos: 'phrase', fit: 'plain' }),
  c(6, '饭机', 'fànjī', 'rice cooker', '{{word:fan4}}-{{word:de}} X', { pos: 'noun', fit: 'plain', head: 'ji1' }),
];

export const coverage = [
  {
    key: 'grammar',
    items: [
      { key: 'owner', eng: 'Whose', words: ['de'], forms: ['X-{{word:de}} Y'], taught: 'basics/owner' },
      { key: 'eat', eng: 'Eating', words: ['chi1', 'fan4'], forms: ['{{word:chi1}} {{word:fan4}}', '{{word:chi1}}-{{word:de}}'], lesson: 'basics' },
    ],
  },
];

const entry = (type, module, key, extra = {}) => ({ type, module, key, ...extra });

export const lessons = [
  {
    id: 'basics',
    number: 1,
    entries: [
      entry('vocab', 'eat', 'eat.vocab0', { term: '{{word:chi1}}', refs: ['chi1'] }),
      entry('vocab', 'eat', 'eat.vocab1', { term: '{{word:fan4}}', refs: ['fan4'] }),
      entry('prose', 'eat', 'eat.prose0', { refs: ['chi1', 'chi1', 'fan4'] }),
      entry('example', 'eat', 'eat.example0', { pinyin: '{{Word:wo3}} {{word:chi1}} {{word:fan4}}.', hanzi: '我吃饭。', en: ['I eat a meal.'], refs: ['wo3', 'chi1', 'fan4'] }),
      entry('exercise', 'eat', 'eat.exercise0', { refs: [] }),
      entry('answer', 'eat', 'eat.answer0', { en: ['{{Word:wo3}} {{word:chi1}}.'], refs: ['wo3', 'chi1'] }),
      entry('answer', 'eat', 'eat.answer1', { en: ['Yes, it can.'], refs: [] }),
      entry('vocab', 'owner', 'owner.vocab0', { term: '{{word:de}}', refs: ['de'] }),
      entry('vocab', 'owner', 'owner.vocab1', { term: '{{word:shi2}}', sense: 'time', refs: ['shi2'] }),
    ],
  },
  {
    id: 'more',
    number: 2,
    entries: [
      entry('vocab', 'fly', 'fly.vocab0', { term: '{{word:fei1}}', refs: ['fei1'] }),
      entry('example', 'fly', 'fly.example0', { pinyin: '{{Word:wo3}} {{word:fei1}}.', hanzi: '我飞。', en: ['I fly.'], refs: ['wo3', 'fei1'] }),
    ],
  },
];

export const texts = [
  { id: 'phrase-book', entries: [entry('example', '', 'pb0', { pinyin: '{{Word:wo3}} {{word:chi1}}.', hanzi: '我吃。', en: ['I eat.'], refs: ['wo3', 'chi1'] })] },
  { id: 'appendix-stories', entries: [entry('story', '', 'st0', { pinyin: '{{Word:wo3}}-{{word:de}} san-ge {{word:ji1}}.', hanzi: '', en: [''], refs: ['wo3', 'de', 'ji1'] })] },
];

export const source = { words, categories, maps, composites, coverage, lessons, texts };
