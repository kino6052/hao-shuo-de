/**
 * Types for the split-authoring pattern used by src/content/lesson-01/ and
 * on: each lesson's content is written as one language-independent "shape"
 * file (this file's types) plus one file per language (en.ts/ru.ts/zh.ts)
 * holding just that language's sentences -- positionally matched to the
 * shape -- which index.ts zips together via assembleChapter() into the
 * flat Entry[] array src/lib/chapter-content.js actually consumes.
 *
 * A shape slot never carries translated text -- only the structural /
 * non-translatable data (block type, vocab term, example pinyin,
 * audioFile, tag, ordered, ...). Put a JSDoc comment above every slot in a
 * lesson's shape.ts saying what belongs there ("word yǒu, to have"; "the
 * SVO word-order paragraph") -- that comment is the hint a translator
 * writing en.ts/ru.ts/zh.ts works from, so keep it short but specific.
 */

/** Chapter title. Text slot: {@link TitleText} (usually a single sentence). */
export interface TTitle {
  type: "title";
}

/** One-paragraph chapter summary, shown as the first TL;DR card. Text slot: {@link SummaryText}. */
export interface TSummary {
  type: "summary";
}

/**
 * A prose paragraph. Per house style every prose entry should carry a
 * `tldr` + `necessity` (they feed the TL;DR summary) -- set `hasTldr`/
 * `hasNecessity` to true once this paragraph has them, so the language
 * files know to provide those extra fields. Text slot: {@link ProseText}.
 */
export interface TProse {
  type: "prose";
  hasTldr?: boolean;
  hasNecessity?: boolean;
}

/**
 * One dictionary word. `term` is the (often {{word:id}}-templated) pinyin
 * headword; `ttsText` is the hanzi spoken for the audio button. Text slot:
 * {@link VocabText} (the definition).
 */
export interface TVocab {
  type: "vocab";
  term: string;
  audioFile?: string;
  ttsText?: string;
}

/**
 * One example (`type: 'example'`) or story line (`type: 'story'`). `pinyin`
 * is the Hao-shuo-de sentence itself. Text slot: {@link ExampleText} (the
 * translation).
 */
export interface TExample {
  type: "example" | "story";
  pinyin: string;
  audioFile?: string;
  ttsText?: string;
}

/** One practice-exercise question. Text slot: {@link ExerciseText}. */
export interface TExercise {
  type: "exercise";
}

/** The answer to the exercise at the same position. Text slot: {@link AnswerText}. */
export interface TAnswer {
  type: "answer";
  audioFile?: string;
  ttsText?: string;
}

/**
 * One item inside an info/warning block's list, recursively -- `items`
 * nests to build a multi-level list. Text slot (per item, same shape):
 * {@link InfoItemText}.
 */
export interface TInfoItem {
  ordered?: boolean;
  items?: TInfoItem[];
}

/**
 * An info or warning callout box. Set `hasTitle` once the box has a title
 * (most do). `subtype: 'grammar'` + `tag` marks it as a formal grammar
 * rule collected into the book-wide grammar index. Text slot: {@link InfoText}.
 */
export interface TInfo {
  type: "info" | "warning";
  hasTitle?: boolean;
  ordered?: boolean;
  subtype?: "grammar";
  tag?: string;
  items: TInfoItem[];
}

export type ShapeSlot =
  | TTitle
  | TSummary
  | TProse
  | TVocab
  | TExample
  | TExercise
  | TAnswer
  | TInfo;

/** A lesson's full, language-independent block sequence. */
export type Shape = ShapeSlot[];

// ---- Per-language text, positionally matching a Shape --------------------

/** Sentence array -- the placeholder while untranslated is `[]`, not an omitted key. */
export type TitleText = string[];
export type SummaryText = string[];
export type VocabText = string[];
export type ExampleText = string[];
export type ExerciseText = string[];
export type AnswerText = string[];

/** Matches a {@link TProse} slot with `hasTldr`/`hasNecessity` set accordingly. */
export interface ProseText {
  text: string[];
  tldr?: string[];
  necessity?: string[];
}

/** Matches one {@link TInfoItem}, recursively. */
export interface InfoItemText {
  text: string[];
  items?: InfoItemText[];
}

/** Matches a {@link TInfo} slot. */
export interface InfoText {
  title?: string[];
  items: InfoItemText[];
}

export type TextSlot =
  | TitleText
  | SummaryText
  | ProseText
  | VocabText
  | ExampleText
  | ExerciseText
  | AnswerText
  | InfoText;

/** One language file's full content -- same length and order as its Shape. */
export type LangContent = TextSlot[];
