import { describe, expect, test } from 'bun:test';
import { wordUse, wordUseProblems } from './word-use.js';

const dictionary = { ren2: { term: 'rén' }, shi4: { term: 'shì' }, hao3: { term: 'hǎo' }, ge4: { term: 'gè' }, zhe4: { term: 'zhè' } };
const vocab = (id) => ({ type: 'vocab', term: `{{word:${id}}}`, en: ['gloss'] });
const ex = (pinyin) => ({ type: 'example', pinyin, en: ['x'] });
const byId = (rows) => Object.fromEntries(rows.map((r) => [r.id, r]));

describe('wordUse', () => {
  const lessons = [
    { id: 'lesson-02', number: 2, entries: [vocab('ren2'), vocab('shi4'), vocab('zhe4'), ex('{{Word:zhe4}} {{word:shi4}} {{word:ren2}}.'), ex('{{Word:ren2}} {{word:shi4}} {{word:ren2}}.')] },
    { id: 'lesson-03', number: 3, entries: [vocab('hao3'), vocab('ge4'), ex('{{Word:zhe4}}-ge {{word:ren2}}.'), { type: 'answer', en: ['{{Word:ren2}} {{word:hen3}}'] }] },
    { id: 'lesson-04', number: 4, entries: [ex('{{Word:ren2}} {{word:shi4}} {{word:ren2}}.')] },
  ];
  const rows = byId(wordUse(lessons, dictionary));

  test('counts sentences in the home lesson, one per sentence', () => {
    expect(rows.ren2.homeUses).toBe(2);
    expect(rows.shi4.homeUses).toBe(2);
  });

  test('lists the later lessons that reuse a word', () => {
    expect(rows.ren2.laterLessons).toEqual([3, 4]);
    expect(rows.shi4.laterLessons).toEqual([4]);
  });

  test('the "ge" in zhè-ge counts as a use of gè', () => {
    expect(rows.ge4.homeUses).toBe(1);
  });

  test('a word with a vocab card but no sentence is unused', () => {
    expect(rows.hao3.usedAnywhere).toBe(false);
    expect(wordUseProblems(Object.values(rows)).unused.map((r) => r.id)).toEqual(['hao3']);
  });

  test('explanations and vocab glosses do not count as use', () => {
    const only = [{ id: 'lesson-02', number: 2, entries: [vocab('hao3'), { type: 'prose', en: ['{{word:hao3}} means good.'] }] }];
    expect(byId(wordUse(only, dictionary)).hao3.usedAnywhere).toBe(false);
  });

  test('rule 7 targets: 3 uses at home, reuse in 2 later lessons or the stories', () => {
    const problems = wordUseProblems(Object.values(rows));
    expect(problems.fewHomeUses.map((r) => r.id).sort()).toEqual(['ge4', 'hao3', 'ren2', 'shi4', 'zhe4']);
    expect(problems.notReused.map((r) => r.id).sort()).toEqual(['ge4', 'hao3', 'shi4', 'zhe4']);
    const withStories = wordUseProblems(wordUse(lessons, dictionary, ['{{Word:shi4}} …']));
    expect(withStories.notReused.map((r) => r.id).sort()).toEqual(['ge4', 'hao3', 'zhe4']);
  });
});
