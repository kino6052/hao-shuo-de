import { describe, expect, test } from 'bun:test';
import { buildFacts } from './facts.js';
import { readRules } from './rules.js';
import { removal, renderRemoval } from './whatif.js';
import { source } from './fixture.js';

const ctx = { source, facts: buildFacts(source), rules: readRules('base', 'whatif') };
const zhs = (list) => list.map((x) => x.zh);

describe('remove a word from the fixture language', () => {
  test('a word that only one composite uses: that composite has to be redone, and what hung under it loses its head', async () => {
    const r = await removal(ctx, ['ji1']);
    expect(zhs(r.composites.redo)).toEqual(['飞机']);
    expect(zhs(r.composites.headLost)).toEqual(['饭机']);
    expect(r.composites.redo[0].forms[0]).toMatchObject({ n: 1, text: 'fēi-jī', hit: ['jī'] });
    // the story line "wǒ-de san-ge jī" is the only sentence that uses it
    expect(r.book.counts).toMatchObject({ story: 1, lesson_example: 0 });
  });

  test('an entry with a second form keeps it, and says so', async () => {
    const r = await removal(ctx, ['fan4']);
    // 吃饭 has two forms, both use fàn; 饭机 has one
    expect(zhs(r.composites.redo).sort()).toEqual(['吃饭', '饭机'].sort());
    const only = await removal(ctx, ['jian1']);
    expect(zhs(only.composites.redo)).toEqual(['时间']);
  });

  test('a word in the middle of the language: forms, book, coverage, definitions, relations', async () => {
    const r = await removal(ctx, ['chi1']);
    expect(zhs(r.composites.redo)).toEqual(['吃饭']);
    // lesson example, lesson answer, the composite example for 飞机, the phrase-book line
    expect(r.book.counts).toEqual({ lesson_example: 1, lesson_answer: 1, composite_example: 1, story: 0, phrase_book: 1 });
    expect(r.book.cards).toEqual([{ word: 'chi1', lesson: 'basics', module: 'eat' }]);
    expect(r.book.mentions).toEqual([{ word: 'chi1', lesson: 'basics', module: 'eat', kind: 'prose', n: 1 }]);
    // "Eating" has two ways to be said and both use chī
    expect(r.coverage.lost.map((i) => i.id)).toEqual(['grammar:eat']);
    expect(r.definitions).toEqual([{ word: 'fan4', term: 'fàn', names: ['chī'] }]);
    expect(r.relations.map((x) => x.what)).toEqual(['phrase']);
  });

  test('a coverage item with a second way to say it is only touched', async () => {
    // fàn is a carrier of "Eating", but "chī-de" still says it
    const r = await removal(ctx, ['fan4']);
    expect(r.coverage.lost).toEqual([]);
    expect(r.coverage.touched.map((i) => [i.id, i.carriers])).toEqual([['grammar:eat', ['fàn']]]);
  });

  test('a catch-all sense whose only compound is gone is dead', async () => {
    const r = await removal(ctx, ['jian1']);
    expect(r.senses).toEqual([{ word: 'shi2', term: 'shí', sense: 'time', hanzi: '时' }]);
    expect(r.definitions.map((d) => d.word)).toEqual(['shi2']);
  });

  test('an opposite pair loses a half', async () => {
    const r = await removal(ctx, ['dong1']);
    expect(r.relations).toEqual([{ kind: 'antonym', what: 'pair', a: 'dong1', b: 'xi1', text: 'dōng — xī' }]);
    expect(zhs(r.composites.redo)).toEqual(['东西']);
  });

  test('several words at once count a shared composite once', async () => {
    const r = await removal(ctx, ['fei1', 'ji1']);
    expect(zhs(r.composites.redo)).toEqual(['飞机']);
    expect(r.words.map((w) => w.id)).toEqual(['fei1', 'ji1']);
  });

  test('removing a word that is not there is an error', async () => {
    await expect(removal(ctx, ['nope'])).rejects.toThrow(/no word/);
  });

  test('a sound-only form is never broken', async () => {
    const r = await removal(ctx, ['dui4']);
    // 嗯 is '"ng" / dui4': it loses a form and keeps the sound
    expect(zhs(r.composites.loses)).toEqual(['嗯']);
    expect(zhs(r.composites.redo)).toEqual([]);
  });

  test('the text report names the reason for a composite', async () => {
    const text = renderRemoval(await removal(ctx, ['ji1']));
    expect(text).toContain('Remove: jī 机 (ji1, noun, necessity 4)');
    expect(text).toContain('飞机 fēijī #1 "airplane" — form 1 fēi-jī (uses jī)');
    expect(text).toContain('Composites that lose their head word (1)');
  });
});
