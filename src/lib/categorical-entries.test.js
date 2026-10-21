import { describe, expect, test } from 'bun:test';
import { compositeProblems, categoricalPages, pageForms } from './categorical-entries.js';

const terms = { ba3: 'bǎ', dong1: 'dōng', xi1: 'xī', kan4: 'kàn', ren2: 'rén', hao3: 'hǎo' };
const termOf = (id) => terms[id];
const c = (zh, hsd, extra = {}) => ({ zh, hsd, en: `en ${zh}`, ru: `ru ${zh}`, fit: 'plain', topics: ['page'], ...extra });

describe('what the categorical dictionary may list', () => {
  test('a description of core words is a Hao-shuo-de word, shown as pinyin', () => {
    const knife = c('刀', ['{{word:ba3}} {{word:dong1}}-{{light:xi1}}']);
    expect(compositeProblems(knife, termOf)).toEqual([]);
    expect(pageForms(knife, termOf)).toEqual(['bǎ dōng-xi']);
  });

  test('forms joined with " / " (the assembled composites) are split', () => {
    expect(pageForms(c('好人', '{{word:hao3}} {{word:ren2}} / {{word:ren2}} {{word:hao3}}'), termOf)).toEqual(['hǎo rén', 'rén hǎo']);
  });

  test('skip and gap, no description, an unknown word and loose text are reasons to leave it out', () => {
    expect(compositeProblems(c('才', ['{{word:kan4}}'], { fit: 'skip' }), termOf)[0]).toContain('fit "skip"');
    expect(compositeProblems(c('x', undefined), termOf)).toEqual(['has no description']);
    expect(compositeProblems(c('x', ['{{word:nope1}}']), termOf)).toEqual(['names unknown word nope1']);
    expect(compositeProblems(c('x', ['{{word:kan4}} chī']), termOf)[0]).toContain('loose text "chī"');
  });

  test('what the book already writes loosely is fine: ge, A and B, quoted sounds, a doubled syllable', () => {
    for (const hsd of ['{{word:ren2}}-ge', 'A, B {{word:kan4}}', '"mā", "má"', '{{word:kan4}}-kan']) expect(compositeProblems(c('x', [hsd]), termOf)).toEqual([]);
  });

  test('the page lists what passes, once per page, and says what it left out; a core word\'s own hanzi is not repeated', () => {
    const list = [c('刀', ['{{word:ba3}} {{word:ren2}}']), c('才', ['{{word:kan4}}'], { fit: 'skip' }), c('人', ['{{word:ren2}}'])];
    const { pages, hidden } = categoricalPages(list, new Set(['人']), termOf);
    expect(pages.get('page').map((e) => e.zh)).toEqual(['刀']);
    expect(hidden.map((h) => h.zh)).toEqual(['才']);
  });
});
