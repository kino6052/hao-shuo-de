// Shared TS types for the *.ts chapter entry schema (see chapter-content.js
// for the runtime transform these describe). Type-only -- fully erased by
// both Vite (esbuild) and Node's type stripping, so importing this from a
// content file adds no runtime module/dependency.
export type LangText = { en: string[]; zh: string[]; ru: string[] };

export interface TitleEntry extends LangText { type: 'title' }
export interface SummaryEntry extends LangText { type: 'summary' }
export interface ProseEntry extends LangText {
  type: 'prose';
  tldr?: LangText;
  necessity?: LangText;
}
export interface VocabEntry extends LangText {
  type: 'vocab';
  term: string;
  audioFile?: string;
  ttsText?: string;
}
export interface ExampleEntry extends LangText {
  type: 'example' | 'story';
  pinyin: string;
  audioFile?: string;
  ttsText?: string;
}
export interface ExerciseEntry extends LangText { type: 'exercise' }
export interface AnswerEntry extends LangText {
  type: 'answer';
  audioFile?: string;
  ttsText?: string;
}
export interface InfoItem {
  text: LangText;
  ordered?: boolean;
  items?: InfoItem[];
}
export interface InfoEntry {
  type: 'info' | 'warning';
  title?: LangText;
  ordered?: boolean;
  subtype?: 'grammar';
  tag?: string;
  items: InfoItem[];
}

export type Entry =
  | TitleEntry
  | SummaryEntry
  | ProseEntry
  | VocabEntry
  | ExampleEntry
  | ExerciseEntry
  | AnswerEntry
  | InfoEntry;
