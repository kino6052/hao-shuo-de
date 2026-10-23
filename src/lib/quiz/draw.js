// The draw (BOOK_PLAN.md §3, Phase 5): which questions one try shows. Seeded, so the same seed gives the same try.
//
// How a try stays representative:
//   1. Stratify. The questions are split into strata: the lesson test's own lesson by module, then the earlier
//      lessons by lesson; the final exam by lesson. Each stratum gets a share of the questions in proportion to how
//      much it teaches (its weight: word cards + examples + exercises, source.js). allocate() gives each its whole
//      share and hands out the leftover places at random in proportion to the fractions left, so over many tries
//      each stratum's average count is its exact proportional share (and every try is within one of it).
//   2. Inside a stratum, spread over kinds and modules: a kind is picked with a weight that falls as the try already
//      has more of it, then a question of that kind, the modules already asked less likely.
//   3. No repeats: a question is never shown twice in a try, and no two questions are made from the same item
//      (an example asked as "listen" and "translation" counts as one item) while other items are left.
//   4. Missed words come up more often: a question that asks about a word the learner missed is MISSED_BOOST times
//      as likely within its stratum (the strata's shares don't change, so the test stays balanced).
//
//   drawLessonTest({ pools, lesson, seed, size = 10, earlierShare = 0.25, missed }) -> [Item]
//   drawExam({ pools, seed, size = 60, missed }) -> [Item]
//   Item: { question, choices, answer, tokens } -- the choices (and an order question's words) shuffled for this try,
//         `answer` the right choice's place among them.
//
// pools: buildPools() (pool.js), in book order. missed: { wordId: times missed }. seed: number, string, or an
// rng function (rng.js), injectable so a test can check a draw.

import { rngFrom, shuffle, weightedIndex } from './rng.js';

export const LESSON_TEST_SIZE = 10;
export const EXAM_SIZE = 60;
export const EXAM_PASS = 0.8;
export const EARLIER_SHARE = 0.25;
export const MISSED_BOOST = 3;

// -> how many of n places each weight gets: floor of its exact share, the rest at random by the fractions left.
// caps[i] (optional) limits a stratum to what it has; what a capped stratum can't take goes to the others.
// The leftover places are handed out by systematic sampling (one random start, then every whole step over the
// running sum of the fractions), so a stratum gets its extra place with a chance of exactly its fraction.
export function allocate(weights, n, rng, caps = weights.map(() => Infinity)) {
  const counts = weights.map(() => 0);
  let left = n;
  while (left > 0) {
    const open = weights.map((w, i) => w > 0 && counts[i] < caps[i]);
    if (!open.some(Boolean)) break;
    const total = weights.reduce((a, w, i) => a + (open[i] ? w : 0), 0);
    const exact = weights.map((w, i) => (open[i] ? (left * w) / total : 0));
    let placed = 0;
    exact.forEach((x, i) => {
      if (!open[i]) return;
      const add = Math.min(Math.floor(x + 1e-9), caps[i] - counts[i]);
      counts[i] += add;
      placed += add;
    });
    const u = rng();
    let cum = 0;
    exact.forEach((x, i) => {
      const frac = open[i] && counts[i] < caps[i] ? Math.max(0, x - Math.floor(x + 1e-9)) : 0;
      const lo = cum;
      cum += frac;
      const hits = Math.min(Math.floor(cum - u + 1e-9) - Math.floor(lo - u + 1e-9), left - placed);
      if (hits > 0) {
        counts[i] += hits;
        placed += hits;
      }
    });
    if (placed === 0) {
      // nothing placed this round (only capped fractions left): the next place goes by weight
      const i = weightedIndex(weights.map((w, j) => (open[j] && counts[j] < caps[j] ? w : 0)), rng);
      if (i < 0) break;
      counts[i]++;
      placed = 1;
    }
    left -= placed;
  }
  return counts;
}

// The state of one try being drawn: what is taken, and how many of each kind and module.
function tryState(rng, missed) {
  return { rng, missed, ids: new Set(), sources: new Set(), kinds: new Map(), modules: new Map(), picked: [] };
}

const isMissed = (q, missed) => q.words.some((w) => (missed[w] ?? 0) > 0);

// -> takes up to k questions from a stratum into the try, spread over kinds and modules.
function take(questions, k, st) {
  for (let n = 0; n < k; n++) {
    let free = questions.filter((q) => !st.ids.has(q.id) && !st.sources.has(q.source));
    if (!free.length) free = questions.filter((q) => !st.ids.has(q.id));
    if (!free.length) return;
    const byKind = new Map();
    for (const q of free) (byKind.get(q.kind) ?? byKind.set(q.kind, []).get(q.kind)).push(q);
    const kinds = [...byKind.keys()];
    const kind = kinds[weightedIndex(kinds.map((kd) => 1 / (1 + (st.kinds.get(kd) ?? 0)) ** 2), st.rng)];
    const list = byKind.get(kind);
    const w = list.map((q) => (isMissed(q, st.missed) ? MISSED_BOOST : 1) / (1 + (st.modules.get(`${q.lesson}/${q.module}`) ?? 0)));
    const q = list[weightedIndex(w, st.rng)];
    st.ids.add(q.id);
    st.sources.add(q.source);
    st.kinds.set(q.kind, (st.kinds.get(q.kind) ?? 0) + 1);
    st.modules.set(`${q.lesson}/${q.module}`, (st.modules.get(`${q.lesson}/${q.module}`) ?? 0) + 1);
    st.picked.push(q);
  }
}

// -> fills n places from strata ({ weight, questions }) in proportion to their weights.
function fromStrata(strata, n, st) {
  const live = strata.filter((s) => s.questions.length && s.weight > 0);
  const counts = allocate(live.map((s) => s.weight), n, st.rng, live.map((s) => s.questions.length));
  live.forEach((s, i) => take(s.questions, counts[i], st));
}

// -> a question as one try shows it: choices and words shuffled with the try's rng.
export function toItem(q, rng) {
  if (q.kind === 'order') {
    let tokens = shuffle(q.tokens, rng);
    for (let i = 0; i < 5 && tokens.join(' ') === q.tokens.join(' '); i++) tokens = shuffle(q.tokens, rng);
    return { question: q, tokens };
  }
  const order = shuffle(q.choices.map((_, i) => i), rng);
  return { question: q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer) };
}

function finish(st, size, all) {
  // a small pool: top up from anything left, so a try is as long as it can be
  if (st.picked.length < size) take(all, size - st.picked.length, st);
  return shuffle(st.picked, st.rng).map((q) => toItem(q, st.rng));
}

const moduleStrata = (pool) =>
  pool.modules.map((m) => ({ weight: m.weight, questions: pool.questions.filter((q) => q.module === m.id) }));

export function drawLessonTest({ pools, lesson, seed, size = LESSON_TEST_SIZE, earlierShare = EARLIER_SHARE, missed = {} }) {
  const at = pools.findIndex((p) => p.lesson === lesson);
  if (at < 0) throw new Error(`drawLessonTest: no pool for lesson "${lesson}"`);
  const pool = pools[at];
  const earlier = pools.slice(0, at).filter((p) => p.questions.length);
  const st = tryState(rngFrom(seed), missed);
  const nEarlier = earlier.length ? Math.round(size * earlierShare) : 0;
  fromStrata(moduleStrata(pool), Math.min(size - nEarlier, pool.questions.length), st);
  fromStrata(earlier.map((p) => ({ weight: p.weight, questions: p.questions })), size - st.picked.length, st);
  return finish(st, size, [...pool.questions, ...earlier.flatMap((p) => p.questions)]);
}

export function drawExam({ pools, seed, size = EXAM_SIZE, missed = {} }) {
  const st = tryState(rngFrom(seed), missed);
  const live = pools.filter((p) => p.questions.length);
  fromStrata(live.map((p) => ({ weight: p.weight, questions: p.questions })), size, st);
  return finish(st, size, live.flatMap((p) => p.questions));
}
