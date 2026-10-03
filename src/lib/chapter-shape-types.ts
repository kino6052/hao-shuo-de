/**
 * Types for the split-authoring pattern used by src/content/lessons/<id>/ and
 * on: each lesson's content is written as one language-independent "shape"
 * file (structural skeleton: block type, vocab term, example pinyin,
 * audioFile, tag, ordered, ...) plus one file per language (en.ts/ru.ts/
 * zh.ts) that repeats the same structural skeleton and fills in just that
 * language's text -- which index.ts zips together via assembleChapter()
 * into the flat Entry[] array src/lib/chapter-content.js actually consumes.
 *
 * Every file in the split -- shape.ts, en.ts, ru.ts, zh.ts -- types its
 * array directly as `Shape` (a `ShapeSlot[]`). There is no separate
 * derived/generated type for the language files: en.ts repeats the same
 * `type`/`term`/`pinyin`/`tag`/`items` structural fields shape.ts has and
 * just adds its own `en` (leaving `ru`/`zh` unset); ru.ts and zh.ts do the
 * same for their own language. That repetition is deliberate -- it means
 * every file is checked against the same plain union type, so a typo in a
 * slot's `type`, a missing `term` on a vocab entry, or a nested info item
 * in the wrong shape is a type error immediately, in whichever file has it,
 * with no cross-file type machinery to reason about.
 *
 * Put a JSDoc comment above every slot in a lesson's shape.ts saying what
 * belongs there ("word yǒu, to have"; "the SVO word-order paragraph") --
 * that comment is the hint a translator writing en.ts/ru.ts/zh.ts works
 * from, so keep it short but specific.
 */

/** One block's text, per language -- every field optional since a given file only ever fills in its own language. */
export interface LocalizedText {
  en?: string[];
  ru?: string[];
  zh?: string[];
}

/** Chapter title (usually a single sentence). */
export interface TTitle extends LocalizedText {
  type: "title";
}

/** One-paragraph chapter summary, shown as the first TL;DR card. */
export interface TSummary extends LocalizedText {
  type: "summary";
}

/**
 * A prose paragraph. Per house style every prose entry should carry a
 * `tldr` + `necessity` (they feed the TL;DR summary) -- give a slot's
 * `tldr`/`necessity` once this paragraph has them; leave them unset only
 * for a lesson written before this rule (see BOOK_STRUCTURE.md).
 */
export interface TProse extends LocalizedText {
  type: "prose";
  tldr?: LocalizedText;
  necessity?: LocalizedText;
}

/**
 * One dictionary word. `term` is the (often {{word:id}}-templated) pinyin
 * headword; `ttsText` is the hanzi spoken for the audio button; the
 * localized text is the word's definition.
 */
export interface TVocab extends LocalizedText {
  type: "vocab";
  term: string;
  audioFile?: string;
  ttsText?: string;
}

/**
 * One example (`type: 'example'`) or story line (`type: 'story'`). `pinyin`
 * is the Hao-shuo-de sentence itself; the localized text is its translation.
 */
export interface TExample extends LocalizedText {
  type: "example" | "story";
  pinyin: string;
  audioFile?: string;
  ttsText?: string;
}

/** One practice-exercise question. */
export interface TExercise extends LocalizedText {
  type: "exercise";
}

/** The answer to the exercise at the same position. */
export interface TAnswer extends LocalizedText {
  type: "answer";
  audioFile?: string;
  ttsText?: string;
}

/**
 * One item inside an info/warning block's list, recursively -- `items`
 * nests to build a multi-level list. The localized text is this item's
 * own line.
 */
export interface TInfoItem extends LocalizedText {
  ordered?: boolean;
  items?: TInfoItem[];
}

/**
 * An info or warning callout box. Give `title` once the box has one (most
 * do). `subtype: 'grammar'` + `tag` marks it as a formal grammar rule
 * collected into the book-wide grammar index.
 */
export interface TInfo {
  type: "info" | "warning";
  title?: LocalizedText;
  ordered?: boolean;
  subtype?: "grammar";
  tag?: string;
  items: TInfoItem[];
}

/**
 * One question in the "Some questions you may have" section after a
 * lesson's exercises. Give `question` once the block has one (every
 * language file does); the localized text is the answer. Neighbouring faq
 * blocks share one collapsible section, so a lesson lists them together,
 * after its answers.
 */
export interface TFaq extends LocalizedText {
  type: "faq";
  question?: LocalizedText;
}

export type ShapeSlot =
  | TTitle
  | TSummary
  | TProse
  | TVocab
  | TExample
  | TExercise
  | TAnswer
  | TInfo
  | TFaq;

/**
 * A lesson's full block sequence, keyed by a short descriptive name for
 * each block ("title", "summary", "vocabYao", "proseAuxiliaries",
 * "infoAuxiliaryOrder", "example1", ...) rather than by position -- an
 * object, not an array. Loose fallback constraint; a lesson's shape.ts
 * should declare its own exact type instead (see {@link PartialByKey}),
 * so hovering a key shows that lesson's own JSDoc and exact per-key shape
 * rather than the general union.
 */
export type Shape = Record<string, ShapeSlot>;

/**
 * Turns a lesson's exact shape type (declared by hand in that lesson's
 * shape.ts, e.g. `{ title: TTitle; vocabYao: TVocab; ... }`) into the type
 * its en.ts/ru.ts/zh.ts should use: same keys (so a missing block is still
 * a type error), but each key's own fields are all optional, so a language
 * file only has to write the fields it actually has something to say about
 * (usually just `en`, or `en`/`tldr`/`necessity`/`title`/`items` for
 * prose/info blocks) instead of repeating `type`/`term`/`pinyin`/`tag`.
 * Nested tuple lengths (an info block's `items`) still come through
 * unchanged, so providing the wrong number of items is still a type error.
 *
 *   // shape.ts
 *   export type LessonShape = { title: TTitle; vocabYao: TVocab; ... };
 *   const shape: LessonShape = { title: { type: "title" }, ... };
 *
 *   // en.ts
 *   import type { LessonShape } from "./shape.ts";
 *   const en: PartialByKey<LessonShape> = { title: { en: [...] }, ... };
 */
export type PartialByKey<S> = { [K in keyof S]: Partial<S[K]> };
