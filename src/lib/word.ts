/**
 * A dictionary word: one file each, src/data/words/<id>.ts, holding only what
 * the word itself is (its sound, hanzi, part of speech, definition, and why
 * the core needs it). What it relates to lives in the map files beside it
 * (src/data/maps/: categories, antonyms, synonyms) and in the coverage
 * knowledge base (src/data/coverage/), so changing a relation never touches
 * a word file, and changing a word touches one file.
 *
 * The folder is the list: scripts/build-data.js writes src/data/words/index.ts
 * from it, and src/data/dictionary.ts assembles the whole dictionary.
 */

/** Text in the dictionary's three languages (zh is a hanzi gloss). */
export interface Text3 {
  eng: string;
  rus: string;
  zh: string;
}

/** Why the core needs the word: 5 = no sentence without it ... 1 = a convenience. */
export interface Necessity {
  index: 1 | 2 | 3 | 4 | 5;
  eng: string;
  rus: string;
}

/**
 * A catch-all word's other sense: the same toned sound written with other
 * hanzi, used only inside the listed compounds ("shi2 jian1" is shí-jiān).
 * On its own the word has its main sense, unless the sense is marked `alone`
 * and the ref names it. A lesson teaches at most one sense of a word, on a
 * card that names the sense.
 */
export interface Sense {
  hanzi: string;
  eng: string;
  rus: string;
  /** Why this sense is the same word: shown in the dictionary. */
  why: { eng: string; rus: string };
  /** Word-id chains, space-separated, e.g. "shi2 jian1". */
  compounds: string[];
  /**
   * The sense may also stand on its own where the main sense can't be meant
   * (xīn 心 is a thing, xīn 新 describes one), written with a ref that names
   * it: {{word:xin1#new}}. The `why` says how to tell them apart.
   */
  alone?: boolean;
}

export interface WordData {
  /** Pinyin with tone marks; unique across the dictionary (check-sounds). */
  term: string;
  /** The main sense's hanzi. */
  hanzi: string;
  pos: Text3;
  definition: Text3;
  necessity: Necessity;
  /** The original-dictionary mapping, on the words that came from it. */
  maps?: unknown;
  senses?: Record<string, Sense>;
}

export interface Word extends WordData {
  id: string;
}

// A typed identity helper: the id must match the file name (check-data).
export const word = (id: string, w: WordData): Word => ({ id, ...w });
