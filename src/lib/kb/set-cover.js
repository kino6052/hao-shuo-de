// The smallest set of things that together carry every item (KB_PLAN.md phase 4, "cover the core"). Pure.
//
//   smallestCover({ items, carriers })
//     items      the things to carry: ['grammar:not', ...]
//     carriers   what carries what: { patternId: ['grammar:not', ...] }
//     -> { size, forced, swappable, extra, uncovered }
//        size       how many carriers the smallest cover needs
//        forced     carriers every smallest cover has (nothing else carries what they carry, or the others cost more)
//        swappable  carriers some smallest cover has and some does not: another can stand in
//        extra      carriers no smallest cover has
//        uncovered  items no carrier carries (left out of the cover)
//
// An exact search (branch and bound on the item with the fewest carriers), so "in every smallest cover" and
// "in some" are asked as two more searches per carrier: one with the carrier taken out, one with it put in.
// The instance is tiny (dozens of items); the same question in clingo (kb/rules/atoms.lp style) takes half a
// minute for the brave and cautious answers, and src/lib/kb/set-cover.test.js checks the two agree on small cases.
// A search that passes the node limit throws; it never guesses.

const NODE_LIMIT = 5_000_000;

// -> the size of the smallest cover that holds `take` already and leaves `drop` out (Infinity: there is none)
function smallest(itemsOf, coverable, { take = [], drop = new Set() }) {
  const names = [...itemsOf.keys()].filter((n) => !drop.has(n));
  const byItem = new Map();
  for (const n of names) for (const i of itemsOf.get(n)) (byItem.get(i) ?? byItem.set(i, []).get(i)).push(n);
  const most = Math.max(1, ...names.map((n) => itemsOf.get(n).size));
  let best = Infinity;
  let nodes = 0;
  const covered = new Map(); // item -> how many chosen carriers carry it
  const choose = (n, d) => {
    for (const i of itemsOf.get(n)) covered.set(i, (covered.get(i) ?? 0) + d);
  };
  const search = (size) => {
    if (++nodes > NODE_LIMIT) throw new Error('the set cover search ran past its limit');
    // the item with the fewest carriers that is not carried yet
    let pick = null;
    let left = 0;
    for (const i of coverable) {
      if ((covered.get(i) ?? 0) > 0) continue;
      left++;
      const options = (byItem.get(i) ?? []).length;
      if (!pick || options < pick.options) pick = { item: i, options };
    }
    if (!left) {
      best = Math.min(best, size);
      return;
    }
    if (!pick.options || size + Math.ceil(left / most) >= best) return;
    for (const n of byItem.get(pick.item)) {
      choose(n, 1);
      search(size + 1);
      choose(n, -1);
    }
  };
  // an item whose carriers are all dropped cannot be carried: the cover is impossible
  for (const i of coverable) if (!(byItem.get(i) ?? []).length && !take.some((n) => itemsOf.get(n).has(i))) return Infinity;
  for (const n of take) choose(n, 1);
  search(take.length);
  return best;
}

export function smallestCover({ items, carriers }) {
  const itemSet = new Set(items);
  const itemsOf = new Map(Object.entries(carriers).map(([n, list]) => [n, new Set(list.filter((i) => itemSet.has(i)))]));
  for (const [n, s] of [...itemsOf]) if (!s.size) itemsOf.delete(n);
  const coverable = new Set([...itemsOf.values()].flatMap((s) => [...s]));
  const uncovered = items.filter((i) => !coverable.has(i));
  const size = coverable.size ? smallest(itemsOf, coverable, {}) : 0;
  const forced = [];
  const swappable = [];
  const extra = [];
  for (const n of itemsOf.keys()) {
    const without = smallest(itemsOf, coverable, { drop: new Set([n]) });
    if (without > size) forced.push(n);
    else if (smallest(itemsOf, coverable, { take: [n] }) === size) swappable.push(n);
    else extra.push(n);
  }
  return { size, forced, swappable, extra, uncovered };
}
