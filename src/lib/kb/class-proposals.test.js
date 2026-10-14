// Word classes (KB_PLAN.md K6): a word fills its parts of speech and the classes it lists; a sentence that does not
// parse may need one more, and the proposals say which.

import { describe, expect, test } from 'bun:test';
import { createParser } from '../grammar/parser.js';
import { buildLexicon, classesOf, lex } from '../grammar/lexicon.js';
import { classProblems, classProposals, classesWaiting, renderClassProposals, ruleClasses } from './class-proposals.js';

const w = (term, pos, extra = {}) => ({ term, pos: { eng: pos }, definition: { eng: `the word ${term}` }, ...extra });
const words = {
  wo3: w('wǒ', 'pronoun'),
  kan4: w('kàn', 'verb'),
  shu1: w('shū', 'noun'),
  tong4: w('tòng', 'adjective'),
};
const rule = (lhs, hsd) => ({ lhs, hsd, eng: '' });
const patterns = [
  {
    id: 'tiny',
    meaning: { eng: 'x', rus: 'x' },
    covers: [],
    template: { hsd: '', eng: '' },
    rules: [rule('Utt', 'NP VP'), rule('NP', '@noun'), rule('NP', '@pronoun'), rule('VP', '@verb NP'), rule('VP', '@verb'), rule('NP', '@quoted')],
    examples: [],
  },
];
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ') + '.';
const parser = (ws = words) => createParser({ patterns, words: ws });

describe('the classes a word fills', () => {
  test('its parts of speech and the classes it lists, once each', () => {
    expect(classesOf(w('a', 'noun/measure word'))).toEqual(['noun', 'measure_word']);
    expect(classesOf(w('a', 'adjective', { classes: { noun: { why: {}, example: 'x' }, adjective: 'main' } }))).toEqual(['adjective', 'noun']);
    expect(classesOf(undefined)).toEqual([]);
  });

  test('a listed class makes the sentence parse; without it the sentence does not', () => {
    const text = ref('wo3', 'kan4', 'tong4');
    expect(parser().parse(text).ok).toBe(false);
    const listed = { ...words, tong4: w('tòng', 'adjective', { classes: { noun: { why: { eng: 'x', rus: 'x' }, example: 'Wǒ kàn tòng.' } } }) };
    expect(parser(listed).parse(text).ok).toBe(true);
  });

  test('"extra" gives a word more classes in one sentence only', () => {
    const lexicon = buildLexicon({ words });
    const edge = (r, i) => r.edges.find((e) => e.from === i && e.to === i + 1);
    const text = ref('wo3', 'tong4');
    expect(edge(lex(text, lexicon), 1).classes.has('noun')).toBe(false);
    expect(edge(lex(text, lexicon, { extra: { tong4: ['noun'] } }), 1).classes.has('noun')).toBe(true);
    expect(edge(lex(text, lexicon), 1).classes.has('noun')).toBe(false);
    expect(parser().parse(ref('wo3', 'kan4', 'tong4'), { extra: { tong4: ['noun'] } }).ok).toBe(true);
  });
});

describe('ruleClasses', () => {
  test('the classes the rules ask for, without the ones the lexicon makes up', () => {
    expect(ruleClasses(parser().rules)).toEqual(['noun', 'pronoun', 'verb']);
  });
});

describe('classProposals', () => {
  const pieces = [
    { text: ref('wo3', 'kan4', 'tong4'), where: 'l/m one' },
    { text: ref('wo3', 'kan4', 'tong4'), where: 'l/m two' },
    { text: ref('kan4'), where: 'l/m three' },
  ];

  test('names the word and the class that would make a sentence parse, and the sentences it fixes', () => {
    const r = classProposals({ parser: parser(), words, pieces });
    const tong = r.proposals.find((p) => p.id === 'tong4');
    expect(tong).toBeDefined();
    expect(tong.term).toBe('tòng');
    expect(tong.classes.map((c) => c.cls)).toContain('noun');
    expect(tong.sentences.map((s) => s.where)).toEqual(['l/m one', 'l/m two']);
    expect(tong.classes[0].reading).toContain('tòng');
  });

  test('classes that fix the same sentences of the same word are one proposal', () => {
    const r = classProposals({ parser: parser(), words, pieces });
    const tong = r.proposals.filter((p) => p.id === 'tong4');
    expect(tong).toHaveLength(1);
    expect(tong[0].classes.map((c) => c.cls)).toEqual(expect.arrayContaining(['noun', 'pronoun']));
  });

  test('a rejected word, or one class of it, does not come back as a proposal', () => {
    const noun = classProposals({ parser: parser(), words, pieces, rejected: [{ id: 'tong4', cls: 'noun', why: 'no' }] });
    const classes = noun.proposals.filter((p) => p.id === 'tong4').flatMap((p) => p.classes.map((c) => c.cls));
    expect(classes).not.toContain('noun');
    expect(classes).toContain('pronoun');
    const all = classProposals({ parser: parser(), words, pieces, rejected: [{ id: 'tong4', why: 'no' }] });
    expect(all.proposals.some((p) => p.id === 'tong4')).toBe(false);
    expect(all.unexplained.map((p) => p.where)).toEqual(expect.arrayContaining(['l/m one', 'l/m two', 'l/m three']));
  });

  test('a sentence no single class fixes is unexplained; a class the word has is not proposed again', () => {
    const r = classProposals({ parser: parser(), words, pieces });
    expect(r.unexplained.map((p) => p.where)).toEqual(['l/m three']);
    const verbs = r.proposals.filter((p) => p.id === 'kan4').flatMap((p) => p.classes.map((c) => c.cls));
    expect(verbs).not.toContain('verb');
  });

  test('a piece of a composite description (forms) may have a slot; a sentence may not', () => {
    const text = `A ${ref('kan4', 'tong4')}`.replace('.', '');
    const asForm = classProposals({ parser: parser(), words, pieces: [{ text, where: 'composite 看', forms: true }] });
    expect(asForm.proposals.find((p) => p.id === 'tong4')?.sentences.map((s) => s.where)).toEqual(['composite 看']);
    const asSentence = classProposals({ parser: parser(), words, pieces: [{ text, where: 'l/m one' }] });
    expect(asSentence.proposals.find((p) => p.id === 'tong4')).toBeUndefined();
    expect(asSentence.unexplained.map((p) => p.where)).toEqual(['l/m one']);
  });

  test('with the class listed, the sentence is no longer a piece to explain', () => {
    const listed = { ...words, tong4: w('tòng', 'adjective', { classes: { noun: { why: { eng: 'x', rus: 'x' }, example: 'e' } } }) };
    expect(parser(listed).parse(pieces[0].text).ok).toBe(true);
  });
});

describe('classesWaiting', () => {
  test('lists the classes marked proposed, and not the others', () => {
    const ws = {
      ...words,
      tong4: w('tòng', 'adjective', { classes: { noun: { why: { eng: 'a thing you get', rus: 'x' }, example: 'Wǒ dé le tòng.', proposed: true }, verb: { why: { eng: 'y', rus: 'y' }, example: 'e' } } }),
      shu1: w('shū', 'noun', { classes: { noun: 'main' } }),
    };
    expect(classesWaiting(ws)).toEqual([{ id: 'tong4', term: 'tòng', cls: 'noun', why: 'a thing you get', example: 'Wǒ dé le tòng.' }]);
  });
});

describe('renderClassProposals', () => {
  test('says the word, its meaning, the sentence, the reading and how to record it', () => {
    const r = classProposals({ parser: parser(), words, pieces: [{ text: ref('wo3', 'kan4', 'tong4'), where: 'l/m one' }] });
    const text = renderClassProposals(r, words, [], {});
    expect(text).toContain('tòng (adjective: the word tòng)');
    expect(text).toContain('wǒ kàn tòng.  (l/m one)');
    expect(text).toContain('op: "classes"');
  });

  test('says so when nothing fixes a sentence, and lists the classes that wait', () => {
    const none = renderClassProposals({ proposals: [], unexplained: [] }, words, [], {});
    expect(none).toContain('None: no single extra class fixes a sentence that does not parse.');
    const wait = renderClassProposals({ proposals: [], unexplained: [] }, words, [{ id: 'tong4', term: 'tòng', cls: 'noun', why: 'a thing you get', example: 'Wǒ dé le tòng.' }], {});
    expect(wait).toContain('Classes in the data that wait for the author (1)');
    expect(wait).toContain('tòng as noun: a thing you get  e.g. Wǒ dé le tòng.');
  });
});

describe('classProblems', () => {
  const entry = (example, cls = 'noun', extra = {}) => ({ why: { eng: 'a thing you get', rus: 'x' }, example, ...extra });
  const check = (classes, base = words.tong4) => classProblems({ words: { ...words, tong4: { ...base, classes } }, patterns }).errors;

  test('a class with an example that names the word, parses, and needs the class is fine', () => {
    const r = classProblems({ words: { ...words, tong4: w('tòng', 'adjective', { classes: { noun: entry('Wǒ kàn tòng.') } }) }, patterns });
    expect(r).toEqual({ listed: 1, errors: [] });
  });

  test('a class the word already has by its part of speech is redundant', () => {
    expect(check({ adjective: entry('Wǒ kàn tòng.') })[0]).toContain('already one of its parts of speech');
  });

  test('a class no rule asks for is useless, and "main" is only for a part of speech', () => {
    expect(check({ number: entry('Wǒ kàn tòng.') })[0]).toContain('no grammar rule asks for @number');
    expect(check({ noun: 'main' })[0]).toContain('"main" is for a part of speech');
  });

  test('the example has to name the word, parse, and need the class', () => {
    expect(check({ noun: entry('Wǒ kàn shū.') })[0]).toContain('does not use tòng');
    expect(check({ noun: entry('Wǒ tòng tòng tòng.') })[0]).toContain('does not parse');
    const redundant = classProblems({ words: { ...words, shu1: w('shū', 'noun', { classes: { pronoun: entry('Wǒ kàn shū.') } }) }, patterns }).errors;
    expect(redundant[0]).toContain('parses without the class');
  });
});
