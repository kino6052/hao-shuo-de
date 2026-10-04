// The dictionary, assembled from its parts:
//   words/<id>.ts      each word (src/lib/word.ts), listed by words/index.ts
//   maps/              categories, antonyms, synonyms (src/lib/data-maps.ts)
//   coverage/          the knowledge base; a word "covers" the items naming it
// Everything that reads the dictionary imports this, in the shape
// { words: { [id]: entry }, categories } the old dictionary.json had.

import { WORDS } from "./words/index.ts";
import CATEGORIES from "./maps/categories.ts";
import ANTONYMS from "./maps/antonyms.ts";
import SYNONYMS from "./maps/synonyms.ts";
import { GROUPS } from "./coverage/index.ts";
import { relationLists, type Category } from "../lib/data-maps.ts";
import type { Necessity, Sense, Text3 } from "../lib/word.ts";

export interface DictionaryEntry {
  term: string;
  hanzi: string;
  pos: Text3;
  definition: Text3;
  necessity: Necessity;
  /** "group:item" keys of the coverage items this word carries. */
  covers?: string[];
  maps?: unknown;
  antonyms?: string[];
  synonyms?: string[];
  senses?: Record<string, Sense>;
}

export interface Dictionary {
  words: Record<string, DictionaryEntry>;
  categories: Category[];
}

// Words in category order (the order the categorical dictionary shows),
// then any not in a category (check-data reports those).
function wordOrder(): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  const walk = (c: Category) => {
    for (const id of c.wordIds ?? []) if (!seen.has(id) && id in WORDS) seen.add(id), out.push(id);
    (c.children ?? []).forEach(walk);
  };
  CATEGORIES.forEach(walk);
  return [...out, ...Object.keys(WORDS).filter((id) => !seen.has(id)).sort()];
}

function covers(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  for (const g of [...GROUPS].sort((a, b) => a.order - b.order))
    for (const item of g.items) for (const w of item.words) out.set(w, [...(out.get(w) ?? []), `${g.key}:${item.key}`]);
  return out;
}

function assemble(): Dictionary {
  const cov = covers();
  const ant = relationLists(ANTONYMS);
  const syn = relationLists(SYNONYMS);
  const words: Record<string, DictionaryEntry> = {};
  for (const id of wordOrder()) {
    const { id: _id, ...w } = WORDS[id as keyof typeof WORDS];
    const entry: DictionaryEntry = { ...w };
    if (cov.has(id)) entry.covers = cov.get(id);
    if (ant.has(id)) entry.antonyms = ant.get(id);
    if (syn.has(id)) entry.synonyms = syn.get(id);
    words[id] = entry;
  }
  return { words, categories: CATEGORIES };
}

const dictionary: Dictionary = assemble();
export default dictionary;
