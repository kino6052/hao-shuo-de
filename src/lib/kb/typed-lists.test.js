import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { TYPED_LISTS, checkTypedList } from './typed-lists.js';
import atoms from '../../data/coverage/atoms.ts';
import primeMap from '../../data/maps/primes.ts';

const load = (file) => JSON.parse(readFileSync(fileURLToPath(new URL(`../../../kb/yardsticks/${file}`, import.meta.url)), 'utf8'));
const primes = atoms.items.map((i) => i.key);

describe('the typed-in lists in kb/yardsticks/', () => {
  for (const file of Object.keys(TYPED_LISTS)) {
    test(`${file} loads and has the fields it should`, () => {
      expect(checkTypedList(file, load(file), { primes })).toEqual([]);
    });
  }

  test('the 65 primes are all there and the families are the ones in maps/primes.ts', () => {
    expect(primes).toHaveLength(65);
    const familyOf = new Map(primeMap.families.flatMap((f) => f.primes.map((p) => [p, f.name])));
    for (const item of load('nsm-sentences.json').items) expect(familyOf.get(item.id)).toBe(item.family);
  });

  test('UD has the 37 relations, with the ones Mandarin needs', () => {
    const ids = load('ud-relations.json').items.map((i) => i.id);
    expect(ids).toHaveLength(37);
    for (const id of ['nsubj', 'obj', 'clf', 'case', 'aux', 'cop', 'mark', 'root']) expect(ids).toContain(id);
  });
});

describe('what the check catches', () => {
  const good = () => ({ name: 'n', by: 'Claude', on: '2026-10-21', source: 's', use: 'u', typedIn: true, checked: false, items: [{ id: 'a', rule: 'r', example: 'e', hsd: null }] });

  test('a whole list passes', () => {
    expect(checkTypedList('toki-pona-rules.json', good())).toEqual([]);
  });

  test('a list that claims to be checked, an item with no field, a repeated id and an empty list are found', () => {
    const data = good();
    data.checked = true;
    data.items.push({ id: 'a' }, { id: 'b', rule: 'r', example: 'e' });
    const problems = checkTypedList('toki-pona-rules.json', data);
    expect(problems.join('\n')).toContain('checked must be false');
    expect(problems.join('\n')).toContain('a is listed twice');
    expect(problems.join('\n')).toContain('b has no hsd');
    expect(checkTypedList('toki-pona-rules.json', { ...good(), items: [] })).toEqual(['toki-pona-rules.json: no items']);
  });

  test('NSM sentences must cover exactly the primes', () => {
    const data = { ...good(), items: [{ id: 'I', family: 'f', en: 'I want.' }, { id: 'ZZZ', family: 'f', en: 'x' }] };
    const problems = checkTypedList('nsm-sentences.json', data, { primes: ['I', 'YOU'] });
    expect(problems).toContain('nsm-sentences.json: prime YOU has no sentence');
    expect(problems).toContain('nsm-sentences.json: ZZZ is not one of the primes');
  });

  test('a file that is not on the list is refused', () => {
    expect(checkTypedList('other.json', good())).toEqual(['other.json: not a typed-in list']);
  });
});
