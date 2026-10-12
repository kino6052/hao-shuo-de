import { describe, expect, test } from 'bun:test';
import { buildFacts, factsAbout, formSlots, posClasses, wordsOfText } from './facts.js';
import { solve, rows } from './clingo.js';
import { source, words } from './fixture.js';

const facts = buildFacts(source);
const has = (line) => expect(facts.lines).toContain(line);

describe('small pieces', () => {
  test('part of speech becomes constants', () => {
    expect(posClasses('noun/measure word')).toEqual(['noun', 'measure_word']);
    expect(posClasses(undefined)).toEqual([]);
  });

  test('a sentence uses its refs, and a bare ge counts as ge4', () => {
    expect(wordsOfText('{{Word:wo3}} {{word:chi1}}.')).toEqual(['wo3', 'chi1']);
    expect(wordsOfText('{{word:san1}}-ge {{word:ji1}}')).toEqual(['san1', 'ji1', 'ge4']);
    expect(wordsOfText('{{word:de}} age')).toEqual(['de']);
  });

  test('a form splits into slots: words, light words, sounds, blanks and chains', () => {
    expect(formSlots('{{word:dong1}}-{{light:xi1}}', words)).toEqual([
      { kind: 'word', id: 'dong1', light: false, sense: undefined, chain: 1 },
      { kind: 'word', id: 'xi1', light: true, sense: undefined, chain: 1 },
    ]);
    const mixed = formSlots('"ng" {{word:fan4}}-{{word:de}} X', words);
    expect(mixed.map((s) => [s.kind, s.chain])).toEqual([['sound', 1], ['word', 2], ['word', 2], ['blank', 3]]);
  });

  test('a catch-all word in a listed compound has its sense', () => {
    const [shi, jian] = formSlots('{{word:shi2}}-{{word:jian1}}', words);
    expect(shi.sense).toBe('time');
    expect(jian.sense).toBeUndefined();
  });
});

describe('the facts', () => {
  test('words', () => {
    has('word(chi1).');
    has('term(chi1,"chī").');
    has('hanzi(chi1,"吃").');
    has('necessity(chi1,5).');
    has('pos(chi1,verb).');
    has('pos(dui4,adjective).');
    has('pos(dui4,verb).');
    has('category(fan4,"food").');
    has('category(ji1,"machines").');
  });

  test("a word's text that names another word is def_uses, never itself", () => {
    has('def_uses(fan4,chi1).');
    has('def_uses(fan4,de).');
    expect(facts.lines.filter((l) => l.startsWith('def_uses(fan4,fan4'))).toEqual([]);
  });

  test('senses and their compounds', () => {
    has('sense(shi2,"time").');
    has('sense_hanzi(shi2,"time","时").');
    has('sense_compound(shi2,"time",1).');
    has('sense_compound_uses(shi2,"time",1,shi2).');
    has('sense_compound_uses(shi2,"time",1,jian1).');
  });

  test('relations, with phrases numbered', () => {
    has('antonym(dong1,xi1).');
    has('rel_phrase(antonym,dui4,1).');
    has('rel_phrase_uses(antonym,dui4,1,chi1).');
    has('rel_phrase_uses(antonym,dui4,1,dui4).');
  });

  test('coverage items, their carriers, forms and where they are taught', () => {
    has('item("grammar:owner").');
    has('carries(de,"grammar:owner").');
    has('item_form("grammar:eat",2).');
    has('item_uses("grammar:eat",2,de).');
    has('item_taught("grammar:owner","basics","owner").');
    has('item_lesson("grammar:eat","basics").');
  });

  test('lessons, cards and mentions', () => {
    has('lesson("basics",1).');
    has('card(chi1,"basics","eat").');
    has('card_sense(shi2,"time","basics","owner").');
    // chi1 is in 1 prose entry (twice in it) and 1 example of the module
    has('mention(chi1,"basics","eat",prose,1).');
    has('mention(chi1,"basics","eat",example,1).');
    has('mention(chi1,"basics","eat",answer,1).');
  });

  test('composites: forms, slots, lights, senses, sounds, blanks', () => {
    has('composite("飞机").');
    has('rank("飞机",1).');
    has('uses("飞机",1,1,fei1).');
    has('uses("飞机",1,2,ji1).');
    has('form("吃饭",2).');
    has('slot_light("东西",1,2).');
    has('slot_sense("时间",1,1,"time").');
    has('slot_sound("嗯",1,1,"ng").');
    has('slot_blank("饭机",1,3,x).');
    has('slot_chain("饭机",1,3,2).');
  });

  test('heads: by the rule, and by the entry', () => {
    has('head_word("飞机",ji1).');
    has('head_word("饭机",ji1).');
    has('head_word("吃饭",chi1).');
  });

  test('sentences: lessons, answers in Hao-shuo-de only, composite examples, stories, phrase book', () => {
    const by = (kind) => facts.sentences.filter((s) => s.kind === kind);
    expect(by('lesson_example').map((s) => s.module)).toEqual(['eat', 'fly']);
    expect(by('lesson_answer').length).toBe(1); // "Yes, it can." has no word refs
    expect(by('composite_example').map((s) => s.composite)).toEqual(['飞机']);
    expect(by('phrase_book').length).toBe(1);
    expect(by('story').length).toBe(1);
    const story = by('story')[0];
    expect(facts.lines).toContain(`sent_uses(${story.id},ge4).`);
    expect(facts.lines).toContain(`sent_uses(${story.id},wo3).`);
    expect(facts.lines).toContain(`sent_kind(${story.id},story).`);
  });

  test('counts', () => {
    expect(facts.counts).toMatchObject({ words: 12, composites: 6, sentences: 6 });
  });

  test('factsAbout finds every fact naming a word, or a composite', () => {
    expect(factsAbout(facts.lines, 'ji1')).toContain('uses("飞机",1,2,ji1).');
    expect(factsAbout(facts.lines, 'ji1')).not.toContain('word(chi1).');
    expect(factsAbout(facts.lines, '飞机')).toContain('rank("飞机",1).');
  });
});

describe('the reasoner accepts the facts', () => {
  test('the program grounds and has a model', async () => {
    const r = await solve(facts.program + 'n(N) :- N = #count{ W : word(W) }.');
    expect(r.status).toBe('SATISFIABLE');
    expect(rows(r.models[0], 'n')).toEqual([[12]]);
  });
});
