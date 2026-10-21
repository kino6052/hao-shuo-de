// programFor (facts.js): a question gets only the facts its rules read. Dropping a fact a rule reads changes the answer without
// a word of warning, so every way a rule can name a predicate is checked, and the names are matched whole (uses is not def_uses).

import { describe, expect, test } from 'bun:test';
import { buildFacts, predicatesOf, programFor } from './facts.js';
import { readRules } from './rules.js';
import { source } from './fixture.js';

const lines = (text) => text.split('\n').filter(Boolean);
const names = (rules) => [...predicatesOf(rules)].sort();

describe('predicatesOf: the predicates a rule text names', () => {
  test('heads, bodies, negation, aggregates and #show', () => {
    const rules = `
      broken(C,F) :- uses(C,F,_,W), gone(W).
      ok(C)       :- form(C,_), not broken(C,_), -antonym(C,_).
      n(K,N)      :- sent_kind(_,K), N = #count{ S : hit(S), sent_kind(S,K) }.
      #show ok/1.
      #show n/2.
    `;
    expect(names(rules)).toEqual(['antonym', 'broken', 'form', 'gone', 'hit', 'n', 'ok', 'sent_kind', 'uses']);
  });

  test('a name is a whole name: uses is not def_uses, sense is not sense_of', () => {
    expect(names('r(W) :- def_uses(V,W).')).toEqual(['def_uses', 'r']);
    expect(names('r(W) :- sense_of(W,K).')).toEqual(['r', 'sense_of']);
    expect(names('r(W) :- uses(W).')).toEqual(['r', 'uses']);
  });

  test('a comment and a quoted string name nothing', () => {
    expect(names('% def_uses(V,W) is not read here\nr(W) :- word(W). % nor slot_chain(C)')).toEqual(['r', 'word']);
    expect(names('r(W) :- label(W,"cfit(x)"), not label(W,"a % b").\nq(W) :- word(W).')).toEqual(['label', 'q', 'r', 'word']);
  });

  test('a variable or a number is not a predicate', () => {
    expect(names('r(X) :- p(X), X = Y + 1, Z = #max{ N : q(N) }.')).toEqual(['p', 'q', 'r']);
  });
});

describe('programFor: only the facts the rules read', () => {
  const program = ['uses(a,1,1,w).', 'def_uses(w,v).', 'sense(w,k).', 'sense_of(w,k).', 'slot_chain(a,1,1,1).', 'word(w).', ''].join('\n');

  test('a predicate the rules name keeps its facts, one they do not name loses them', () => {
    expect(lines(programFor('r(W) :- uses(_,_,_,W).', program))).toEqual(['uses(a,1,1,w).']);
    expect(lines(programFor('r(W) :- word(W), not sense(W,_).', program))).toEqual(['sense(w,k).', 'word(w).']);
  });

  test('whole names: the facts of def_uses and of sense_of stay only when the rules say them', () => {
    expect(lines(programFor('r(V) :- def_uses(V,_).', program))).toEqual(['def_uses(w,v).']);
    expect(lines(programFor('r(V) :- uses(_,_,_,V).', program))).toEqual(['uses(a,1,1,w).']);
    expect(lines(programFor('r(K) :- sense_of(_,K).', program))).toEqual(['sense_of(w,k).']);
    expect(lines(programFor('r(K) :- sense(_,K).', program))).toEqual(['sense(w,k).']);
  });

  test('a predicate named only in #show, or only in a comment', () => {
    expect(lines(programFor('#show word/1.', program))).toEqual(['word(w).']);
    expect(lines(programFor('% word(W) is not read here\nr :- sense(w,k).', program))).toEqual(['sense(w,k).']);
  });

  test('the order is kept, and a line that is not a name(...) fact stays', () => {
    const mixed = 'word(w).\n#const n = 3.\nuses(a,1,1,w).\nslot_chain(a,1,1,1).\n';
    expect(programFor('r :- uses(_,_,_,_), word(_).', mixed)).toBe('word(w).\n#const n = 3.\nuses(a,1,1,w).\n');
  });

  test('no rules read nothing: only the lines that are not facts are left', () => {
    expect(lines(programFor('', program))).toEqual([]);
  });
});

describe('the what-if rules on the fixture language', () => {
  const rules = readRules('base', 'whatif');
  const facts = buildFacts(source);
  const kept = new Set(lines(programFor(rules, facts.program)).map((l) => /^([a-z_]+)\(/.exec(l)[1]));
  const present = new Set(lines(facts.program).map((l) => /^([a-z_]+)\(/.exec(l)[1]));

  // what whatif.lp and base.lp read: if one of these is ever dropped, a report loses lines without an error
  const READ = ['uses', 'form', 'head_word', 'card', 'carries', 'item', 'item_form', 'item_uses', 'def_uses', 'sense', 'sense_compound', 'sense_compound_uses', 'antonym', 'synonym', 'rel_phrase_uses', 'word', 'lesson'];
  test('every fact the rules read is kept', () => {
    for (const p of READ.filter((p) => present.has(p))) expect(kept.has(p)).toBe(true);
    expect(READ.filter((p) => present.has(p)).length).toBeGreaterThan(10);
  });

  test('the composite details and the rest that no what-if rule reads are left out', () => {
    for (const p of ['slot_chain', 'slot_light', 'en', 'cfit', 'cpos', 'composite', 'rank', 'hanzi', 'term', 'pos']) {
      expect(present.has(p)).toBe(true);
      expect(kept.has(p)).toBe(false);
    }
  });

  test('it is a good deal smaller', () => {
    expect(programFor(rules, facts.program).length).toBeLessThan(facts.program.length * 0.8);
  });
});
