import { describe, expect, test } from 'bun:test';
import { wordUse, wordUseProblems, practiceGaps } from './word-use.js';

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

  test('near the end, the reuse target is capped at the lessons that are left', () => {
    const late = [
      { id: 'lesson-20', number: 20, entries: [vocab('shi4'), ex('{{Word:shi4}}.')] },
      { id: 'lesson-21', number: 21, entries: [vocab('ren2'), vocab('hao3'), ex('{{Word:ren2}} {{word:hao3}} {{word:shi4}}.')] },
    ];
    const lateRows = byId(wordUse(late, dictionary));
    expect(lateRows.shi4.lessonsAfterHome).toBe(1);
    expect(lateRows.ren2.lessonsAfterHome).toBe(0);
    // shì is reused in the one lesson after it; rén and hǎo have none after them.
    expect(wordUseProblems(Object.values(lateRows)).notReused).toEqual([]);
    const unused = wordUseProblems(wordUse([late[0], { ...late[1], entries: late[1].entries.slice(0, 2) }], dictionary));
    expect(unused.notReused.map((r) => r.id)).toEqual(['shi4']);
  });
});

describe('practiceGaps', () => {
  const answer = (text) => ({ type: 'answer', en: [text] });
  const lesson = (entries) => [{ id: 'lesson-02', number: 2, entries }];

  test('every introduced word in an example and in an answer passes', () => {
    const [gap] = practiceGaps(lesson([vocab('ren2'), vocab('shi4'), ex('{{Word:ren2}} {{word:shi4}}.'), { type: 'exercise', en: ['x'] }, answer('{{Word:ren2}} {{word:shi4}}.')]), dictionary);
    expect(gap).toMatchObject({ examples: 1, exercises: 1, missingExample: [], missingExercise: [] });
  });

  test('lists words missing from the examples and from the answers', () => {
    const [gap] = practiceGaps(lesson([vocab('ren2'), vocab('hao3'), ex('{{Word:ren2}}.'), answer('{{Word:hao3}}.')]), dictionary);
    expect(gap.missingExample).toEqual(['hǎo']);
    expect(gap.missingExercise).toEqual(['rén']);
  });

  test('exercise prompts are English, so only answers count', () => {
    const [gap] = practiceGaps(lesson([vocab('ren2'), ex('{{Word:ren2}}.'), { type: 'exercise', en: ['Say {{word:ren2}}.'] }]), dictionary);
    expect(gap.missingExercise).toEqual(['rén']);
  });

  test('counts the FAQ and checks it comes together after the exercises', () => {
    const faq = (q = ['Why?'], en = ['Because.']) => ({ type: 'faq', question: { en: q }, en });
    const exercise = { type: 'exercise', en: ['x'] };
    const [after] = practiceGaps(lesson([exercise, answer('x'), faq(), faq()]), dictionary);
    expect(after).toMatchObject({ faq: 2, faqIncomplete: 0, faqOutOfPlace: false });
    const [before] = practiceGaps(lesson([faq(), exercise, answer('x')]), dictionary);
    expect(before.faqOutOfPlace).toBe(true);
    const [split] = practiceGaps(lesson([exercise, faq(), answer('x'), faq()]), dictionary);
    expect(split.faqOutOfPlace).toBe(true);
    const [blank] = practiceGaps(lesson([exercise, faq([]), faq(['Why?'], [])]), dictionary);
    expect(blank.faqIncomplete).toBe(2);
  });

  test('a lesson with no new words has nothing to miss', () => {
    const [gap] = practiceGaps(lesson([{ type: 'prose', en: ['Sounds.'] }]), dictionary);
    expect(gap).toMatchObject({ introduced: 0, missingExample: [], missingExercise: [] });
  });
});
