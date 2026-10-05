/**
 * The coverage knowledge base (src/data/coverage/): what Hao-shuo-de must
 * always be able to say, one file per group (atoms of meaning, Aristotle's
 * categories, core grammar). scripts/check-coverage.js checks every item is
 * sayable and taught; a dictionary word's "covers" is derived from the items
 * that name it in `words`.
 */

export interface CoverageItem {
  key: string;
  eng: string;
  rus: string;
  /** The dictionary words that carry the item. */
  words: string[];
  /** Hao-shuo-de forms that say it ({{word:}} refs). */
  forms: string[];
  /** The lesson where it can first be said ... */
  lesson?: string;
  /** ... or the "lesson/module" that teaches it. */
  taught?: string;
  example?: string;
}

export interface CoverageGroup {
  key: string;
  /** Where the group sits in the knowledge base (atoms 1, categories 2, grammar 3). */
  order: number;
  title: { eng: string; rus: string };
  about: { eng: string; rus: string };
  items: CoverageItem[];
}

export const coverageGroup = (g: CoverageGroup): CoverageGroup => g;
