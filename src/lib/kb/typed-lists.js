// Reads and checks the five lists Claude typed in from memory (Universal Dependencies relations, WALS features, NSM
// sentences, Toki Pona rules and Basic English rules). They live in kb/yardsticks/ (KB_PLAN.md phase 6). Nothing here changes data.
//
//   TYPED_LISTS                          -> the five files and the fields each item must have
//   checkTypedList(file, data, { primes }) -> the problems with one file (an empty list means it loads and is whole)
//
// Every file says in its header that it was typed in and is not checked against a source (`typedIn: true`, `checked: false`),
// so nothing downstream can mistake it for a copied list. `primes` is the ids of the 65 NSM primes (coverage/atoms.ts).

export const TYPED_LISTS = {
  'ud-relations.json': { count: 37, id: 'the relation name', fields: ['group', 'meaning', 'example'] },
  'wals-features.json': { id: 'the WALS number', fields: ['name', 'mandarin', 'confidence', 'hsd'] },
  'nsm-sentences.json': { id: 'the prime', fields: ['family', 'en'] },
  'toki-pona-rules.json': { id: 'the rule name', fields: ['rule', 'example', 'hsd'] },
  'basic-english-rules.json': { id: 'the rule name', fields: ['rule', 'example', 'hsd'] },
};

const CONFIDENCE = new Set(['sure', 'likely', 'unsure']);

export function checkTypedList(file, data, { primes } = {}) {
  const spec = TYPED_LISTS[file];
  if (!spec) return [`${file}: not a typed-in list`];
  const problems = [];
  const bad = (m) => problems.push(`${file}: ${m}`);
  for (const key of ['name', 'by', 'on', 'source', 'use']) if (!data[key] || typeof data[key] !== 'string') bad(`header has no ${key}`);
  if (data.typedIn !== true) bad('typedIn must be true');
  if (data.checked !== false) bad('checked must be false until someone checks it against the source');
  const items = data.items;
  if (!Array.isArray(items) || !items.length) return [...problems, `${file}: no items`];
  if (spec.count && items.length !== spec.count) bad(`${items.length} items, expected ${spec.count}`);
  const seen = new Set();
  for (const item of items) {
    if (!item.id || typeof item.id !== 'string') {
      bad(`an item has no id (${spec.id})`);
      continue;
    }
    if (seen.has(item.id)) bad(`${item.id} is listed twice`);
    seen.add(item.id);
    for (const f of spec.fields) if (!(f in item)) bad(`${item.id} has no ${f}`);
    if (file === 'wals-features.json' && !CONFIDENCE.has(item.confidence)) bad(`${item.id}: confidence must be sure, likely or unsure`);
    if (file === 'nsm-sentences.json' && !String(item.en ?? '').trim()) bad(`${item.id}: empty sentence`);
    if (file === 'ud-relations.json' && item.example) for (const f of ['zh', 'en', 'dependent']) if (!item.example[f]) bad(`${item.id}: example has no ${f}`);
  }
  if (file === 'nsm-sentences.json' && primes) {
    for (const p of primes) if (!seen.has(p)) bad(`prime ${p} has no sentence`);
    for (const id of seen) if (!primes.includes(id)) bad(`${id} is not one of the primes`);
  }
  return problems;
}
