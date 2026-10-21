// Self-play for the Akinator (AKINATOR_PLAN.md B7): for each item of the pool an answerer who knows that item answers from its
// features, and we count how often the engine finds it and in how many questions. Pure and deterministic (no random numbers),
// so a change to the engine or the features shows up as a change in the numbers.
//
//   selfPlay(engine, { targets, mode, find }) -> { mode, targets, found, near, foundRate, asked, byType, rows }
//     found  the item is among the top `find` of its group (what fits); near: it is not, but is among the closest three of a gap
//     targets   the pool items to look for
//     mode      'sure'  answers yes or no
//               'soft'  answers probably or probably not
//               'noisy' answers yes or no, but every seventh answer is wrong (a person who misread a question)
//     find      how many of the top items of the item's group count as found (default 6)
//   pickTargets(pool, { sentences, composites, words, patterns }) -> an even sample of each type

const GROUP = { sentence: 'sentences', composite: 'composites', word: 'words', pattern: 'patterns' };

export function pickTargets(pool, counts = {}) {
  const out = [];
  for (const [type, k] of Object.entries({ sentence: 150, composite: 50, word: 25, pattern: 25, ...counts })) {
    const list = pool.items.filter((i) => i.type === type);
    const every = Math.max(1, Math.floor(list.length / k));
    out.push(...list.filter((_, i) => i % every === 0).slice(0, k));
  }
  return out;
}

export function selfPlay(engine, { targets, mode = 'sure', find = 6 }) {
  const answerFor = (has, k) => {
    const right = mode === 'noisy' && k % 7 === 6 ? !has : has;
    if (mode === 'soft') return right ? 'probably' : 'probably-not';
    return right ? 'yes' : 'no';
  };
  const rows = [];
  for (const t of targets) {
    const choices = engine.step([]).question.choices;
    const first = choices.find((c) => t.features.has(c.feature)) ?? choices[choices.length - 1];
    const answers = [{ feature: first.feature, answer: 'yes' }];
    let s = engine.step(answers);
    while (s.stage === 'question') {
      answers.push({ feature: s.question.feature, answer: answerFor(t.features.has(s.question.feature), answers.length) });
      s = engine.step(answers, { limit: find });
    }
    if (s.stage === 'question') s = engine.step(answers, { finish: true, limit: find });
    const group = s.result[GROUP[t.type]] ?? [];
    const at = group.findIndex((r) => r.id === t.id);
    // `near`: not among what fits, but among the closest three that a gap shows
    rows.push({ id: t.id, type: t.type, asked: answers.length, found: at >= 0, rank: at, near: at < 0 && s.result.closest.some((r) => r.id === t.id), gap: s.result.verdict.gap });
  }
  const found = rows.filter((r) => r.found).length;
  const near = rows.filter((r) => r.near).length;
  const byType = {};
  for (const r of rows) {
    const b = (byType[r.type] ??= { targets: 0, found: 0, asked: 0 });
    b.targets++;
    b.found += r.found ? 1 : 0;
    b.asked += r.asked;
  }
  for (const b of Object.values(byType)) b.asked = Number((b.asked / b.targets).toFixed(1));
  return { mode, targets: rows.length, found, near, foundRate: rows.length ? Number((found / rows.length).toFixed(3)) : 0, asked: Number((rows.reduce((a, r) => a + r.asked, 0) / (rows.length || 1)).toFixed(1)), byType, rows };
}
