/**
 * The associative maps in src/data/maps/: how words relate, kept out of the
 * word files so a relation change is one line here and a word change never
 * has to sweep through them.
 */

/** A dictionary category: a branch (children) or a leaf (wordIds). */
export interface Category {
  key: string;
  /** null for an untitled leaf ("general"). */
  title: Record<string, string> | null;
  children?: Category[];
  wordIds?: string[];
}

export const categories = (c: Category[]): Category[] => c;

/**
 * Antonyms or synonyms. `pairs` link two words both ways and are written
 * once; `phrases` give a word a longer Hao-shuo-de form ({{word:}} refs),
 * which isn't a word and so isn't linked back.
 */
export interface Relations {
  pairs: [string, string][];
  phrases: Record<string, string[]>;
}

export const relations = (r: Relations): Relations => r;

/**
 * A connection the author states between words that antonyms, synonyms and
 * categories do not cover: a word and the words its meaning leans on or shares
 * ground with (cí and shuō and huà; qù, zǒu, fēi and the other words of going).
 * `words` has two or more ids; `why` says the link in plain words. A
 * `proposed` connection waits for the author to confirm it.
 */
export interface Connection {
  words: string[];
  why: string;
  proposed?: boolean;
}

export const connections = (c: Connection[]): Connection[] => c;

// -> word id -> its forms: pair partners as {{word:id}}, then its phrases.
export function relationLists(r: Relations): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const add = (id: string, form: string) => out.set(id, [...(out.get(id) ?? []), form]);
  for (const [a, b] of r.pairs) {
    add(a, `{{word:${b}}}`);
    add(b, `{{word:${a}}}`);
  }
  for (const [id, forms] of Object.entries(r.phrases)) for (const f of forms) add(id, f);
  return out;
}

/**
 * How words and composites are built into wholes, sets and families (KB_PLAN.md
 * K18, phase 5). An end is a word id (`shou3`) or a composite's hanzi (`头发`).
 * `proposed` entries wait for the author to confirm.
 *
 *  - `oppositeKinds`: the kind of an opposite pair of antonyms.ts, keyed "a|b" in
 *    the order the pair is written there. Kinds: either-or (alive, dead),
 *    more-or-less (hot, cold), other-side (buy, sell; give, take; come, go),
 *    undoing (open, close) and by-not (shǎo = bù duō, for phrases).
 *  - `opposites`: opposite pairs of composites (hanzi), each with its kind.
 *  - `parts`: a whole and the parts that make it up (part-of; the whole is made of them).
 *  - `groups`: ends that exclude each other. A `set` has no order (the colors); a
 *    `scale` is written in order (small, big; the numbers).
 *  - `families`: words that share one idea but differ in one way each (the going
 *    and moving words). Each facet names the way they differ and lists its words.
 */
export type OppositeKind = "either-or" | "more-or-less" | "other-side" | "undoing" | "by-not";

export interface PartOf {
  whole: string;
  parts: string[];
  why: string;
  proposed?: boolean;
}

export interface CompositeOpposite {
  a: string;
  b: string;
  kind: OppositeKind;
  why: string;
  proposed?: boolean;
}

export interface Group {
  kind: "set" | "scale";
  members: string[];
  why: string;
  proposed?: boolean;
}

export interface Family {
  name: string;
  why: string;
  facets: Record<string, string[]>;
  proposed?: boolean;
}

export interface Structure {
  oppositeKinds: Record<string, OppositeKind>;
  opposites?: CompositeOpposite[];
  parts: PartOf[];
  groups: Group[];
  families: Family[];
}

export const structure = (s: Structure): Structure => s;
