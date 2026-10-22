// TRANSLATOR_PLAN.md D3, D4, F2: the answer's own problems, the cast list's rule, the result, its numbers and its file.

import { describe, expect, test } from 'bun:test';
import { ANSWER_SCHEMA, BLIND_SCHEMA, JUDGE_SCHEMA, CAST_LONG, answerProblems, assemble, castProblems, renderMarkdown, scoreOf, slugOf } from './output.js';

const answer = (over = {}) => ({
  sketch: [
    { id: 'i1', idea: 'I eat', needed: true, links: '' },
    { id: 'i2', idea: 'it is morning', needed: false, links: 'when i1' },
  ],
  sentences: [{ pinyin: 'Wǒ chī fàn.', english: 'I eat.', literally: 'I eat rice.', reading: '', source: 'built from the grammar', ideas: ['i1'] }],
  cast: [],
  structures: [{ idea: 'i1', pattern: 'svo', lesson: 'basics' }],
  gaps: [],
  notes: '',
  ...over,
});

const check = (over = {}) => ({ unknown: [], parses: true, readings: 1, means: 'yes', words: 3, depth: 0, late: [], warnings: [], ...over });

describe('the schemas', () => {
  test('every property an answer needs is required, so --json-schema holds the session to it', () => {
    expect(ANSWER_SCHEMA.required).toEqual(['sketch', 'sentences', 'cast', 'structures', 'gaps', 'notes']);
    expect(ANSWER_SCHEMA.properties.sentences.items.required).toContain('reading');
    expect(BLIND_SCHEMA.required).toEqual(['sentences', 'whole', 'unsure']);
    expect(JUDGE_SCHEMA.properties.ideas.items.properties.verdict.enum).toEqual(['kept', 'weaker', 'lost']);
  });
});

describe('answerProblems', () => {
  test('a good answer has none; a colour idea may go unsaid', () => {
    expect(answerProblems(answer())).toEqual([]);
  });

  test('no sentences, an empty pinyin, an idea not in the sketch, a needed idea in no sentence', () => {
    expect(answerProblems(answer({ sentences: [] }))).toEqual(['there are no sentences', 'the needed idea i1 ("I eat") is in no sentence']);
    const bad = answer({ sentences: [{ pinyin: ' ', english: '', literally: '', reading: '', source: '', ideas: ['i9'] }] });
    expect(answerProblems(bad)).toEqual(['sentence 1 has no pinyin', 'sentence 1 names the idea "i9", which is not in the sketch', 'the needed idea i1 ("I eat") is in no sentence']);
    expect(answerProblems(null)).toEqual(['the answer is not an object']);
  });
});

describe('castProblems (Q4)', () => {
  const long = 'ràng tiān shàng xià-lái-de shuǐ bù dào shēntǐ shàng-de dōng-xi';
  const story = (sentences, short = 'zhè-ge dōng-xi') => ({ sentences: sentences.map((pinyin) => ({ pinyin })), cast: [{ thing: 'umbrella', description: long, short }] });

  test('a long description once, then its short name: fine', () => {
    expect(castProblems(story([`Wǒ yǒu ${long}.`, 'Wǒ wàng-le zhè-ge dōng-xi.']))).toEqual([]);
  });

  test('a long description twice is named, with the short name to use', () => {
    const p = castProblems(story([`Wǒ yǒu ${long}.`, `Wǒ wàng-le ${long}.`]));
    expect(p).toHaveLength(1);
    expect(p[0]).toMatch(/^umbrella: the 1\d-word description comes 2 times; after the first, say "zhè-ge dōng-xi"/);
  });

  test('a short one may come again; one not in the text, or a short name before it, is named', () => {
    const short = { sentences: [{ pinyin: 'Wǒ chī fàn. Wǒ chī fàn.' }], cast: [{ thing: 'meal', description: 'chī fàn', short: '' }] };
    expect(CAST_LONG).toBe(6);
    expect(castProblems(short)).toEqual([]);
    expect(castProblems(story(['Wǒ chī fàn.']))[0]).toMatch(/is not in the text/);
    expect(castProblems(story(['Zhè-ge dōng-xi hǎo.', `Wǒ yǒu ${long}.`]))[0]).toBe('umbrella: its short name "zhè-ge dōng-xi" comes in sentence 1, before the description (sentence 2)');
  });

  test('punctuation and case do not hide a repeat', () => {
    expect(castProblems(story([`${long[0].toUpperCase()}${long.slice(1)}, hǎo.`, `Wǒ yǒu ${long}!`]))).toHaveLength(1);
  });
});

describe('assemble and scoreOf', () => {
  const verified = { lesson: { id: 'basics', number: 1 }, sentences: [{ hanzi: '我 吃 饭.', gloss: 'I eat rice.', check: check() }], castProblems: [], problems: [] };
  const judge = { ideas: [{ id: 'i1', verdict: 'kept', note: '' }, { id: 'i2', verdict: 'lost', note: 'no time' }], added: [] };
  const blind = { sentences: [{ english: 'I eat.' }], whole: 'Someone eats.', unsure: '' };

  test('each sentence gets its checks and the blind reading; each idea its verdict; nothing undefined is left', () => {
    const r = assemble({ request: { text: 'I eat in the morning.' }, answer: answer(), verified, blind, judge, model: 'opus' });
    expect(r.sentences[0]).toMatchObject({ pinyin: 'Wǒ chī fàn.', hanzi: '我 吃 饭.', gloss: 'I eat rice.', blind: 'I eat.', check: { means: 'yes' } });
    expect(r.sketch.map((s) => [s.id, s.verdict, s.why])).toEqual([['i1', 'kept', ''], ['i2', 'lost', 'no time']]);
    expect(r.lesson).toEqual({ id: 'basics', number: 1 });
    expect(JSON.stringify(r)).not.toContain('undefined');
  });

  test('the numbers: a colour idea lost still passes; a needed one lost, a word that is not Hao-shuo-de or no reading does not', () => {
    const r = assemble({ request: { text: 'x' }, answer: answer(), verified, blind, judge });
    expect(scoreOf(r)).toEqual({ sentences: 1, hsdOnly: 1, parses: 1, meant: 1, readings: 1, words: 3, needed: 1, kept: 1, added: 0, pass: true });
    const lost = assemble({ request: { text: 'x' }, answer: answer(), verified, blind, judge: { ideas: [{ id: 'i1', verdict: 'weaker', note: 'vague' }], added: ['a dog'] } });
    expect(scoreOf(lost)).toMatchObject({ kept: 0, added: 1, pass: false });
    const unknown = { ...verified, sentences: [{ ...verified.sentences[0], check: check({ unknown: ['wàng is not a word'], parses: false, means: null }) }] };
    expect(scoreOf(assemble({ request: { text: 'x' }, answer: answer(), verified: unknown, blind, judge }))).toMatchObject({ hsdOnly: 0, meant: 0, pass: false });
  });

  test('no blind reader: kept is unknown (null), and it cannot pass', () => {
    const r = assemble({ request: { text: 'x' }, answer: answer(), verified });
    expect(r.sketch[0].verdict).toBeNull();
    expect(scoreOf(r)).toMatchObject({ kept: null, pass: false });
  });
});

describe('renderMarkdown and slugOf', () => {
  test('the file: the summary lines, the text in pinyin and hanzi, each sentence, the sketch with verdicts', () => {
    const verified = { lesson: null, sentences: [{ hanzi: '我 吃 饭.', gloss: 'I eat rice.', check: check({ means: 'yes-with-others', readings: 2 }) }], castProblems: [], problems: [] };
    const md = renderMarkdown(assemble({ request: { text: 'I eat.' }, answer: answer(), verified, judge: { ideas: [{ id: 'i1', verdict: 'kept', note: '' }], added: [] } }));
    expect(md).toContain('- **Level:** the whole dictionary');
    expect(md).toContain('1. **Wǒ chī fàn.**');
    expect(md).toContain('   - Check: parses (2 readings); the meant reading is one of them; 3 words');
    expect(md).toContain('- i1 (needed) I eat -- **kept**');
    expect(md).toContain('- i2 (colour) it is morning [when i1] -- **unknown**');
    expect(md).not.toMatch(/\|.*\|/); // no tables
  });

  test('a slug: the date and the first six words', () => {
    expect(slugOf("I forgot my umbrella, so I got wet on the way home.", new Date('2026-10-22T10:00:00Z'))).toBe('2026-10-22-i-forgot-my-umbrella-so-i');
    expect(slugOf('!!!', new Date('2026-10-22T10:00:00Z'))).toBe('2026-10-22-text');
  });
});
