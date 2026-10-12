/**
 * A grammar pattern: one way of putting words together, written once as data
 * (KB_PLAN.md §3). One file each, src/data/grammar/<id>.ts; scripts/build-data.js
 * lists the folder in src/data/grammar/index.ts. The parser (src/lib/grammar/)
 * reads every pattern's `rules` as one grammar, so a sentence can be checked
 * against all of them, and `examples` must parse (src/lib/grammar/grammar.test.js).
 */

export interface Bilingual {
  eng: string;
  rus: string;
}

/**
 * A structure rule: `lhs` is made of `hsd`, symbols separated by spaces.
 *  - A capital first letter is a part of a sentence (NP, VP, Utt, S, Q).
 *  - `@noun` is any word of that class (the word's `pos`); `@measure_word` for "measure word".
 *  - Anything else is that word by id: `shi4`, `hen3`. A word a rule names only matches by name.
 *  - `=zhe4` is that word by id too, and it stays a pronoun for the rules that use `@pronoun`.
 */
export interface PatternRule {
  lhs: string;
  hsd: string;
  /** What the rule says, in a few plain words (shown beside a tree). */
  eng?: string;
}

export interface Pattern {
  id: string;
  /** What it lets you say. */
  meaning: Bilingual;
  /** The coverage items ("group:key", src/data/coverage/) this pattern carries. */
  covers: string[];
  /** The pattern as a learner sees it: {{word:..}} refs in `hsd`. */
  template: { hsd: string; eng: string };
  rules: PatternRule[];
  /** How to say it without the pattern, when that is possible (phase 3). */
  without?: { forms: string[]; verdict: "fine" | "clumsy"; note?: string };
  /** The lesson module that first teaches it, "lesson/module". */
  taught?: string;
  /** Sentences in plain pinyin with their English; each must parse and use this pattern. */
  examples: [string, string][];
}

/** A typed identity helper: the id must match the file name (check-data). */
export const pattern = (id: string, p: Omit<Pattern, "id">): Pattern => ({ id, ...p });
