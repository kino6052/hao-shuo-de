// The composite dictionary against the grammar (KB_PLAN.md phase 4, K7): which descriptions the patterns read.

import { describe, expect, test } from 'bun:test';
import { formReport, formText, renderFormReport } from './form-report.js';

const words = { wo3: { term: 'wǒ' }, kan4: { term: 'kàn' }, shu1: { term: 'shū' }, zhen1: { term: 'zhēn' }, zhong4: { term: 'zhòng' }, yao4: { term: 'yào' } };
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ');
const composite = (zh, hsd, extra = {}) => ({ zh, en: `the ${zh}`, pos: 'verb', fit: 'phrase', hsd, ...extra });

// the patterns "read" a description when it has a kàn in it and is not marked bad
const parse = (form) => (form.includes('bad') ? { ok: false, problems: [], tokens: [], furthest: 1 } : { ok: true });
const composites = [
  composite('看书', ref('wo3', 'kan4', 'shu1')),
  composite('真', '{{word:zhen1}}'),
  composite('重要', '{{word:zhong4}}-{{word:yao4}}'),
  composite('坏', `${ref('wo3')} bad / ${ref('kan4')} A`),
  composite('字', '{{word:wo3}}', { fit: 'word' }),
  composite('空', '', {}),
];

describe('formReport', () => {
  test('one description per form; a composite that is a word itself or has no description is left out', () => {
    const r = formReport({ composites, parse, words });
    expect(r.total).toBe(5);
    expect(r.forms.map((f) => f.zh)).toEqual(['看书', '真', '重要', '坏', '坏']);
  });

  test('one word or a hyphen chain of words is a word, not a phrase', () => {
    const r = formReport({ composites, parse, words });
    expect(r.forms.filter((f) => f.kind === 'word').map((f) => f.zh)).toEqual(['真', '重要']);
    expect(r.counts).toEqual({ word: 2, parses: 2, fails: 1 });
  });

  test('a slot, a comma or a space makes it a phrase', () => {
    const r = formReport({ composites: [composite('a', '{{word:kan4}} A'), composite('b', '{{word:kan4}},'), composite('c', 'A')], parse, words });
    expect(r.forms.map((f) => f.kind)).toEqual(['phrase', 'phrase', 'phrase']);
  });

  test('says where a description stops, and counts by part of speech', () => {
    const failing = (form) => ({ ok: false, problems: ['the word hǎo is not known'], tokens: [], furthest: 0 });
    const r = formReport({ composites: [composite('坏', '{{word:wo3}} {{word:kan4}}', { pos: 'noun' })], parse: failing, words });
    expect(r.forms[0]).toMatchObject({ kind: 'phrase', ok: false, why: 'the word hǎo is not known' });
    expect(r.byPos).toEqual({ noun: { forms: 1, word: 0, parses: 0, fails: 1 } });
  });

  test('the Word Builder against the patterns', () => {
    const builderReads = (form) => form.includes('shu1') || form.includes('bad');
    const r = formReport({ composites, parse, builderReads, words });
    // 看书: both; 坏 #1 (bad): the Word Builder only; 坏 #2 (kàn A): the patterns only
    expect(r.builder).toEqual({ both: 1, grammarOnly: 1, builderOnly: 1, neither: 0 });
  });
});

describe('formText', () => {
  test('the description as a person reads it', () => {
    expect(formText(ref('wo3', 'kan4', 'shu1'), words)).toBe('wǒ kàn shū');
    expect(formText('{{word:zhong4}}-{{word:yao4}}', words)).toBe('zhòng-yào');
  });
});

describe('renderFormReport', () => {
  test('says the numbers, the Word Builder and each description that does not parse', () => {
    const r = formReport({ composites, parse, builderReads: (f) => f.includes('bad'), words });
    const text = renderFormReport(r, words);
    expect(text).toContain('5 descriptions. 2 are one word or a chain of words');
    expect(text).toContain('3 are phrases: 2 parse, 1 do not.');
    expect(text).toContain('only the Word Builder: 1 (a gap in the patterns)');
    expect(text).toContain('Descriptions that do not parse: 1');
    expect(text).toContain('坏  wǒ bad');
  });

  test('--limit and --pos narrow the list', () => {
    const many = Array.from({ length: 5 }, (_, k) => composite(`坏${k}`, `${ref('wo3')} bad`, { pos: k % 2 ? 'noun' : 'verb' }));
    const r = formReport({ composites: many, parse, words });
    const text = renderFormReport(r, words, { limit: 2 });
    expect(text).toContain('… and 3 more');
    expect(renderFormReport(r, words, { pos: 'noun' })).toContain('Descriptions that do not parse (noun): 2');
  });
});
