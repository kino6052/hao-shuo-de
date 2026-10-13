// "Which grammar patterns does a word carry?" (KB_PLAN.md K20). A pattern names a word in
// three places: the words in its rules (=bie2), the words in its template, and the words in
// its examples. Dropping the word takes those away; this says what is left of each pattern.
// Pure. The word CLI reads it to keep rules in step with a rename or a removal.
//
//   patternsCarrying(patterns, words, ids) -> [{ id, taught, covers, rules, examples, template, effect }]
//   patternIndex(patterns, words).carrying(ids)   the same, with the words read once (many sets)
//     rules     { total, hit: [{ lhs, hsd }] }
//     examples  { total, hit: [pinyin] }
//     template  true when the template shows the word
//     effect    'no rules left' | 'no examples left' | 'loses rules' | 'loses examples' | 'loses its template'
//   renderPatternUses(list) -> text lines

import { ruleWords } from '../grammar/grammar.js';
import { wordRefIds } from '../word-refs.js';
import { pinyinToRefs } from '../pinyin-refs.js';

// -> the word ids an example uses ([] when the pinyin cannot be read as words)
function exampleWords(pinyin, words) {
  try {
    return wordRefIds(pinyinToRefs(pinyin, words));
  } catch {
    return [];
  }
}

// -> what is left of a pattern when the words in `drop` go
function carried({ p, rules, examples, template }, drop) {
  const ruleHit = rules.filter((r) => [...r.words].some((w) => drop.has(w))).map((r) => ({ lhs: r.lhs, hsd: r.hsd }));
  const exHit = examples.filter((e) => [...e.words].some((w) => drop.has(w))).map((e) => e.py);
  const templateHit = [...template].some((w) => drop.has(w));
  const effect =
    ruleHit.length === rules.length
      ? 'no rules left'
      : exHit.length === examples.length
        ? 'no examples left'
        : ruleHit.length
          ? 'loses rules'
          : exHit.length
            ? 'loses examples'
            : 'loses its template';
  return {
    id: p.id,
    taught: p.taught ?? null,
    covers: p.covers ?? [],
    rules: { total: rules.length, hit: ruleHit },
    examples: { total: examples.length, hit: exHit },
    template: templateHit,
    effect,
  };
}

// -> { carrying(ids) }: the words of every rule, template and example are read once, so a
//    question about many sets of words (the candidates) is cheap
export function patternIndex(patterns, words) {
  const model = patterns.map((p) => ({
    p,
    rules: (p.rules ?? []).map((r) => ({ lhs: r.lhs, hsd: r.hsd, words: new Set(ruleWords(r.hsd)) })),
    examples: (p.examples ?? []).map(([py]) => ({ py, words: new Set(exampleWords(py, words)) })),
    template: new Set(wordRefIds(p.template?.hsd ?? '')),
  }));
  const named = new Map(); // word id -> the patterns that name it anywhere
  for (const m of model) {
    const all = new Set([...m.template, ...m.rules.flatMap((r) => [...r.words]), ...m.examples.flatMap((e) => [...e.words])]);
    for (const w of all) (named.get(w) ?? named.set(w, new Set()).get(w)).add(m);
  }
  return {
    carrying(ids) {
      const drop = new Set(ids);
      const maybe = new Set();
      for (const id of drop) for (const m of named.get(id) ?? []) maybe.add(m);
      return model.filter((m) => maybe.has(m)).map((m) => carried(m, drop));
    },
  };
}

export const patternsCarrying = (patterns, words, ids) => patternIndex(patterns, words).carrying(ids);

// -> one line per pattern
export function renderPatternUses(list) {
  return list.map((x) => {
    const bits = [];
    if (x.rules.hit.length) bits.push(`${x.rules.hit.length} of ${x.rules.total} rule${x.rules.total === 1 ? '' : 's'} ${x.rules.hit.length === 1 ? 'names' : 'name'} it (${x.rules.hit.map((r) => `${r.lhs} → ${r.hsd}`).join('; ')})`);
    if (x.examples.hit.length) bits.push(`${x.examples.hit.length} of ${x.examples.total} example${x.examples.total === 1 ? '' : 's'} ${x.examples.hit.length === 1 ? 'uses' : 'use'} it`);
    if (x.template) bits.push('its template shows it');
    return `${x.id}${x.taught ? ` (taught in ${x.taught})` : ''}: ${bits.join('; ')} — ${x.effect}`;
  });
}
