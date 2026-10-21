import { describe, expect, test } from 'bun:test';
import { createEnglish } from './english.js';
import { hintReport, renderHints } from './hints.js';

const c = (zh, py, en, pos = 'noun') => ({ zh, py, en, pos });
const composites = [c('买', 'mǎi', 'buy', 'verb'), c('鸟', 'niǎo', 'bird'), c('大', 'dà', 'big', 'adjective'), c('小', 'xiǎo', 'small', 'adjective'), c('头', 'tóu', 'head'), c('身体', 'shēntǐ', 'body')];
const links = { linked: { 买: ['i1'], 鸟: ['i2'], 大: ['i8'], 小: ['i9'], 头: ['i10'], 身体: ['i11'] } };
const index = {
  lemmas: { buy: ['i1'], sparrow: ['i4'], hawk: ['i6'], huge: ['i12'], tiny: ['i13'], skull: ['i14'], gun: ['i15'] },
  synsets: {
    i1: { p: 'v', d: 'obtain by paying', l: ['buy'], h: [], z: ['买'] },
    i2: { p: 'n', d: 'warm-blooded egg-laying vertebrate', l: ['bird'], h: ['i7'] },
    i4: { p: 'n', d: 'small brownish bird', l: ['sparrow'], h: ['i2'], z: ['麻雀'] },
    i5: { p: 'n', d: 'a bird that hunts', l: ['bird of prey'], h: ['i2'] },
    i6: { p: 'n', d: 'a bird of prey', l: ['hawk'], h: ['i5'], z: ['鹰', '鹰隼'] },
    i7: { p: 'n', d: 'an animal', l: ['vertebrate'], h: [] },
    i8: { p: 'a', d: 'above average in size', l: ['big', 'large'], h: [], a: ['i9'] },
    i9: { p: 'a', d: 'below average in size', l: ['small', 'little'], h: [], a: ['i8'] },
    i10: { p: 'n', d: 'the upper part of the body', l: ['head'], h: [] },
    i11: { p: 'n', d: 'the whole physical structure', l: ['body'], h: [] },
    i12: { p: 'a', d: 'extraordinarily large', l: ['huge'], h: ['i8'], a: ['i13'], z: ['巨大'] },
    i13: { p: 'a', d: 'extraordinarily small', l: ['tiny'], h: ['i9'], a: ['i12'], ai: ['i8'] },
    i14: { p: 'n', d: 'the bony part of the head', l: ['skull'], h: [], w: ['i10'], z: ['头骨'] },
    i15: { p: 'n', d: 'a weapon that fires bullets', l: ['gun'], h: [], z: ['枪'] },
  },
};
const en = createEnglish({ composites, links, index });

describe('hints for an English word', () => {
  test('a word on the way up from an entry starts from it', () => {
    const r = hintReport(en, 'sparrow');
    expect(r.language).toBe('en');
    expect(r.said).toEqual([]);
    expect(r.senses).toHaveLength(1);
    expect(r.senses[0]).toMatchObject({ definition: 'small brownish bird', mandarin: ['麻雀'] });
    expect(r.senses[0].start[0]).toMatchObject({ zh: '鸟', py: 'niǎo', steps: 1, via: ['bird'] });
    expect(r.senses[0].draft).toContain('start from …-de niǎo (bird), one step up');
    expect(r.senses[0].draft).toContain('small brownish bird');
  });

  test('two steps up say how far', () => {
    expect(hintReport(en, 'hawk').senses[0].draft).toContain('start from …-de niǎo (bird), 2 steps up');
  });

  test('a word an entry already says is reported as said, with nothing to draft', () => {
    const r = hintReport(en, 'buy');
    expect(r.said.map((e) => e.zh)).toEqual(['买']);
    expect(r.senses[0].start).toEqual([]);
    expect(r.senses[0].draft).toBe('already said by 买 mǎi (the sense is linked); nothing to draft.');
  });

  test('the opposite and the whole are named when an entry carries them', () => {
    const huge = hintReport(en, 'huge').senses[0];
    expect(huge.opposites).toEqual([]); // tiny has no entry
    expect(hintReport(en, 'skull').senses[0].wholes).toEqual([{ lemma: 'head', entries: [expect.objectContaining({ zh: '头' })] }]);
  });

  test('an adjective with no opposite of its own gets the one through its head word', () => {
    const tiny = hintReport(en, 'tiny').senses[0];
    expect(tiny.oppositeThroughHead).toEqual([{ lemma: 'big', entries: [expect.objectContaining({ zh: '大' })] }]);
    expect(renderHints(hintReport(en, 'tiny'))).toContain("opposite, through its group's head word: big = 大 dà");
  });

  test('a word with no entry on the way up is described from its definition', () => {
    const s = hintReport(en, 'gun').senses[0];
    expect(s.start).toEqual([]);
    expect(s.draft).toBe('no entry on the way up; describe it from its definition: "a weapon that fires bullets".');
  });

  test('a word WordNet does not have says so', () => {
    expect(hintReport(en, 'zzzz').note).toContain('not in the English WordNet');
  });
});

describe('hints for a Mandarin word', () => {
  test('finds the senses that list the word as a translation', () => {
    const r = hintReport(en, '麻雀');
    expect(r.language).toBe('zh');
    expect(r.senses.map((s) => s.definition)).toEqual(['small brownish bird']);
    expect(r.senses[0].start[0].zh).toBe('鸟');
    expect(hintReport(en, '没有的词').note).toContain('no sense');
  });
});

describe('the report as text, and without the index', () => {
  test('text names the start, the Mandarin and the check to run', () => {
    const text = renderHints(hintReport(en, 'sparrow'));
    expect(text).toContain('Hints for "sparrow"');
    expect(text).toContain("WordNet's Mandarin: 麻雀");
    expect(text).toContain('can start from: 鸟 niǎo (bird; bird)');
    expect(text).toContain('kb_check_form');
  });

  test('without the English index there are no hints, and it says so', () => {
    const none = createEnglish({ composites, links });
    expect(hintReport(none, 'sparrow').note).toContain('index is not built');
  });

  test('an empty question is an empty report', () => {
    expect(hintReport(en, '  ')).toMatchObject({ senses: [], said: [] });
  });
});
