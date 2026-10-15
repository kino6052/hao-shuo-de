/**
 * Intros are built like lessons: a folder with an index.ts (title, summary,
 * the sections in reading order) and one file per section.
 *
 *   src/content/intros/<intro>/
 *     index.ts       meta, title, summary, and the sections
 *     <section>.ts   one section: its text, then its picture, then any examples
 *
 * intro() turns it into the flat Entry[] that src/lib/chapter-content.js
 * renders and the scripts check, the way lesson() does for a lesson (see
 * src/lib/lesson.ts). Each entry carries `module` (the section's id, or
 * "head") and `key` ("cover.prose").
 */
import type { Entry } from "./chapter-entry-types.ts";
import { imageEntry, langs, type Example, type LessonImage, type Localized, type Prose } from "./lesson.ts";

/** An example sentence in an intro; the hanzi is only needed when it should be read aloud. */
export type IntroExample = Omit<Example, "hanzi"> & { hanzi?: string };

export interface IntroSection {
  /** The section's file name, without .ts. */
  id: string;
  /** The text, a sentence per line; an <h2> line makes a heading. */
  prose: Prose;
  /** The section's picture: right after its text. Its file name is given in full ("intro-4-cover"). */
  image?: LessonImage & { file: string };
  examples?: IntroExample[];
  /** Entries built some other way (the contents list of intro-3), added last. */
  extra?: Entry[];
}

export interface IntroParts {
  title: Localized;
  summary: Localized;
  sections: IntroSection[];
}

export type IntroEntry = Entry & { module: string; key: string };

// A typed identity helper, so a section file is checked against the shape as it's written.
export const introSection = (s: IntroSection): IntroSection => s;

export function intro(id: string, parts: IntroParts): IntroEntry[] {
  const out: IntroEntry[] = [];
  const add = (module: string, key: string, entry: Entry) => out.push({ ...entry, module, key });

  add("head", "title", { type: "title", ...langs(parts.title) });
  add("head", "summary", { type: "summary", ...langs(parts.summary) });

  const seen = new Set<string>();
  for (const s of parts.sections) {
    if (seen.has(s.id)) throw new Error(`intro(${id}): section "${s.id}" is listed twice`);
    seen.add(s.id);
    const prose: Entry = { type: "prose", ...langs(s.prose) };
    if (s.prose.tldr) prose.tldr = langs(s.prose.tldr);
    if (s.prose.necessity) prose.necessity = langs(s.prose.necessity);
    add(s.id, `${s.id}.prose`, prose);
    if (s.image) add(s.id, `${s.id}.image`, imageEntry(s.image.file, s.image));
    (s.examples ?? []).forEach((ex, i) =>
      add(s.id, `${s.id}.example${i + 1}`, { type: "example", pinyin: ex.pinyin, audioFile: ex.audioFile, ttsText: ex.hanzi, ...langs(ex) }),
    );
    (s.extra ?? []).forEach((e, i) => add(s.id, `${s.id}.extra${i + 1}`, e));
  }
  return out;
}
