// The Akinator engine (AKINATOR_PLAN.md part B): given the answers so far, which question to ask next, or what fits. Plain code,
// no solver, no memory: the input is the list of answers, so the same answers always give the same step (B6).
//
//   const ak = createAkinator(pool, { describe, prior, cap, factors })
//     pool       buildPool() of akinator-pool.js: items with a Set of features
//     describe   (feature) -> { text, hint? } the plain question for a feature (akinator-questions.js); default: the feature name
//     prior      Map(item id -> number): starting weights, for an English hint (Q3); an item not in it counts 1
//     cap        the most answers to ask for before the result (default 20)
//     factors    { family: number }: how much a family's questions count against the best split (default `FAMILY_FACTORS`)
//     first      [{ feature, label }]: the choices of the fixed first question (default: the top of the kind net, see B1)
//     clearLeader  stop asking when this few items still count (default `CLEAR_LEADER`, 6)
//   ak.step(answers, { finish, limit }) -> a step
//     answers    [{ feature, answer }] in the order given; answer is yes | probably | unknown | probably-not | no
//                (short forms y p ? pn n are read too). The first question is a choice: its answer is "yes" to the feature picked.
//     finish     true: give the result now ("show me what you have")
//   a step is { stage, asked, question, result, leaders, effective }
//     stage      'first' (no answers yet) | 'question' (ask `question`) | 'result' (done, or asked to finish)
//     question   { feature, text, hint, choices? } the next question, or null
//     leaders    the three items that fit best so far (always there, so Claude can see where it stands)
//     result     the groups { sentences, patterns, words, composites } of items { id, text, lesson, number, fit, agrees, disagrees },
//                the verdict { gap, fit }, and, for a gap, what no close item agrees with
//     effective  how many items still count (1 = one clear leader)
//
// How it works. Every item has a weight. An answer multiplies the weight by a number below 1 for the items that disagree with it,
// so a soft answer ("probably") only sinks them and a wrong answer can be undone by dropping it from the list (nothing is removed
// for good). A question is a feature (yes: the item has it). Its score is how evenly it splits the weight (the entropy of the
// share that has it) times a factor for its family; the best score is asked, ties go to the feature that sorts first.

export const ANSWERS = ['yes', 'probably', 'unknown', 'probably-not', 'no'];
const SHORT = { y: 'yes', p: 'probably', '?': 'unknown', dk: 'unknown', 'dont-know': 'unknown', pn: 'probably-not', n: 'no' };
// the weight an item keeps when it has the feature and when it lacks it
const KEEP = { yes: [1, 0.05], probably: [1, 0.3], unknown: [1, 1], 'probably-not': [0.3, 1], no: [0.05, 1] };

// the families a question may come from, and how much each counts against a better split (lesson, form, made, reach,
// module, grammar, coverage, type and source describe where an item sits in the book, not what is meant)
export const FAMILY_FACTORS = { kind: 1, topic: 1, theme: 1, cat: 1, pattern: 0.8, word: 0.5 };
export const GAP_BELOW = 0.25; // the best item keeps less weight than this: nothing fits
export const CLEAR_LEADER = 6; // this few items still counting is an answer
const NOTHING_SPLITS = 0.02; // the best question splits less than this (bits)

export const normalizeAnswer = (a) => {
  const k = String(a ?? '').trim().toLowerCase().replace(/\s+/g, '-');
  const v = SHORT[k] ?? k;
  if (!ANSWERS.includes(v)) throw new Error(`"${a}" is not an answer (yes, probably, unknown, probably-not, no)`);
  return v;
};

const bits = (p) => (p <= 0 || p >= 1 ? 0 : -(p * Math.log2(p) + (1 - p) * Math.log2(1 - p)));

export function createAkinator(pool, { describe = (f) => ({ text: f }), prior = null, cap = 20, factors = FAMILY_FACTORS, first = null, clearLeader = CLEAR_LEADER } = {}) {
  const items = pool.items;
  const n = items.length;
  const features = [...pool.byFeature.keys()].sort();
  const fIndex = new Map(features.map((f, i) => [f, i]));
  const index = new Map(items.map((it, i) => [it, i]));
  // for each feature the items that have it, for each item its features
  const have = features.map((f) => Int32Array.from(pool.byFeature.get(f).map((it) => index.get(it))));
  const itemFeatures = items.map((it) => Int32Array.from([...it.features].map((f) => fIndex.get(f)).sort((a, b) => a - b)));
  const familyOf = (f) => f.slice(0, f.indexOf(':'));
  // a question needs a family that means something and at least two items on each side
  const askable = features.map((f, i) => (factors[familyOf(f)] && have[i].length >= 2 && have[i].length <= n - 2 ? factors[familyOf(f)] : 0));
  const start = Float64Array.from(items, (it) => prior?.get(it.id) ?? 1);

  const choices = first ?? [];

  const lookup = (feature) => {
    const i = fIndex.get(feature);
    if (i === undefined) throw new Error(`no feature "${feature}" in the pool`);
    return i;
  };

  // -> { fit, weight } per item: how well it keeps with the answers, and that times the starting weight
  const weigh = (list) => {
    const fit = new Float64Array(n).fill(1);
    for (const { f, answer } of list) {
      if (answer === 'unknown') continue;
      const [has, lacks] = KEEP[answer];
      const mark = new Uint8Array(n);
      for (const i of have[f]) mark[i] = 1;
      for (let i = 0; i < n; i++) fit[i] *= mark[i] ? has : lacks;
    }
    const weight = fit.map((v, i) => v * start[i]);
    return { fit, weight };
  };

  const agree = (i, f, answer) => {
    if (answer === 'unknown') return null;
    const has = itemFeatures[i].includes(f);
    return answer === 'yes' || answer === 'probably' ? has : !has;
  };

  const ask = (f) => ({ feature: features[f], ...describe(features[f]) });

  function nextQuestion(weight, asked) {
    const total = weight.reduce((a, b) => a + b, 0);
    if (total <= 0) return null;
    const share = new Float64Array(features.length);
    for (let i = 0; i < n; i++) {
      const w = weight[i];
      if (w === 0) continue;
      for (const f of itemFeatures[i]) share[f] += w;
    }
    let best = -1;
    let bestScore = NOTHING_SPLITS;
    for (let f = 0; f < features.length; f++) {
      if (!askable[f] || asked.has(f)) continue;
      const score = bits(share[f] / total) * askable[f];
      if (score > bestScore) {
        best = f;
        bestScore = score;
      }
    }
    return best < 0 ? null : ask(best);
  }

  // the items by weight, then the lesson they need, then the id: the same answers always give the same list
  const ranked = (weight) =>
    Array.from({ length: n }, (_, i) => i).sort((a, b) => weight[b] - weight[a] || (items[a].number ?? 999) - (items[b].number ?? 999) || (items[a].id < items[b].id ? -1 : 1));

  const view = (i, fit, list) => {
    const it = items[i];
    const agrees = [];
    const disagrees = [];
    for (const { f, answer } of list) {
      const a = agree(i, f, answer);
      if (a === null) continue;
      (a ? agrees : disagrees).push(`${answer} ${features[f]}`);
    }
    return { id: it.id, type: it.type, source: it.source, text: it.text, lesson: it.lesson, number: it.number, fit: Number(fit[i].toFixed(3)), agrees, disagrees };
  };

  const GROUPS = { sentence: 'sentences', pattern: 'patterns', word: 'words', composite: 'composites' };

  function resultOf(order, fit, list, limit) {
    const groups = { sentences: [], patterns: [], words: [], composites: [] };
    for (const i of order) {
      // only what fits: an item that disagrees with an answer is shown in `closest`, not here
      if (fit[i] < GAP_BELOW) continue;
      const g = groups[GROUPS[items[i].type]];
      if (g.length < limit) g.push(view(i, fit, list));
      if (Object.values(groups).every((x) => x.length >= limit)) break;
    }
    const top = order.slice(0, 3);
    const best = top.length ? fit[top[0]] : 0;
    const gap = best < GAP_BELOW;
    // the answers none of the closest items agree with: what the dictionary cannot say yet
    const missing = list.filter(({ f, answer }) => answer !== 'unknown' && top.every((i) => agree(i, f, answer) === false)).map(({ f, answer }) => ({ answer, ...ask(f) }));
    return { ...groups, verdict: { gap, fit: Number(best.toFixed(3)) }, closest: top.map((i) => view(i, fit, list)), missing };
  }

  return {
    items,
    features,
    ANSWERS,
    step(answers = [], { finish = false, limit = 6 } = {}) {
      // an answer repeated for a feature counts once, the last one (so an answer is changed by giving it again)
      const latest = new Map();
      for (const a of answers) latest.set(lookup(a.feature), normalizeAnswer(a.answer));
      const list = [...latest].map(([f, answer]) => ({ f, answer }));
      if (!list.length && !finish) {
        return { stage: 'first', asked: 0, question: { feature: null, text: null, choices }, leaders: [], result: null, effective: n };
      }
      const { fit, weight } = weigh(list);
      const total = weight.reduce((a, b) => a + b, 0);
      const squares = weight.reduce((a, b) => a + b * b, 0);
      const effective = squares > 0 ? Number(((total * total) / squares).toFixed(1)) : 0;
      const order = ranked(weight);
      const leaders = order.slice(0, 3).map((i) => view(i, fit, list));
      const question = finish || list.length >= cap || effective <= clearLeader ? null : nextQuestion(weight, new Set(list.map((a) => a.f)));
      if (question) return { stage: 'question', asked: list.length, question, leaders, result: null, effective };
      return { stage: 'result', asked: list.length, question: null, leaders, result: resultOf(order, fit, list, limit), effective };
    },
  };
}
