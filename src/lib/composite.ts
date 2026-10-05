/**
 * A composite-dictionary entry: a common Mandarin word and how Hao-shuo-de
 * says it with dictionary words. One file each, src/data/composites/
 * <pinyin>-<hanzi>.ts; scripts/build-data.js lists the folder in
 * src/data/composites/index.ts, and src/data/composites.ts assembles them in
 * rank order (meta.ts holds the about text, phases and fits).
 */

export type Fit = "word" | "natural" | "plain" | "gap" | "skip" | "name";

export interface Composite {
  rank: number;
  phase: number;
  zh: string;
  py: string;
  en: string;
  ru: string;
  /**
   * The Hao-shuo-de forms, most natural first ({{word:id}} references). When
   * the first is the colloquial Mandarin compound (míng-tiān), a constructive
   * one follows it (xià yī-ge rì), so the meaning can always be built up.
   */
  hsd?: string[];
  /** Each form's hanzi, in the same order. */
  tts?: string[];
  literal?: string;
  fit?: Fit;
  note?: string;
  /**
   * The colloquial form is plain enough on its own (wǒ-men: I + plural), so no
   * constructive form after it is needed (check-book).
   */
  transparent?: boolean;
  /** Written or changed by Claude, waiting for the author's review. */
  proposed?: boolean;
}

export const composite = (c: Composite): Composite => c;
