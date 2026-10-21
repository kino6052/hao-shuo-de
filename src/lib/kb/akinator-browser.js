// The Akinator in the browser (AKINATOR_PLAN.md D2): the exported pool in, a function that asks one question out. No knowledge
// base, no solver, no files: everything comes from the one file akinator-export.js writes, so the page loads that file and nothing else.
//
//   const ak = createBrowserAkinator(data)     data: the parsed src/data/akinator-pool.json
//   ak.ask({ answers, start, hint, finish, limit }) -> data     the same data as askAkinator(kb, ...).data (akinator-ask.js)
//   ak.pool, ak.lessons                        the pool (items with features) and the lessons [{ id, number }], for a page that lists items itself
//
// The hint finds words and composites by their English glosses only (glossLookup); the command line also uses WordNet, so it
// finds a little more.

import { createAkinator } from './akinator.js';
import { askData, glossLookup } from './akinator-ask.js';
import { importPool } from './akinator-export.js';

export function createBrowserAkinator(data) {
  const pool = importPool(data);
  const at = new Map(data.features.map((f, i) => [f, i]));
  const describe = (feature) => {
    const q = data.ask[at.get(feature)];
    return q ? { text: q[0], hint: q[1] ?? '' } : { text: feature };
  };
  const zhsFor = glossLookup(pool);
  const makeEngine = (prior) => createAkinator(pool, { describe, first: data.first, prior });
  return {
    pool,
    lessons: data.lessons,
    ask: (options) => askData({ pool, makeEngine, zhsFor, lessons: data.lessons }, options).data,
  };
}
