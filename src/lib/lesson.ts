/**
 * Lessons are assembled from small modules, one file each, so a point can be
 * added, moved to another lesson, or dropped by touching one file and one
 * line of its lesson's index.ts.
 *
 *   src/content/lessons/<lesson>/
 *     index.ts       title, summary, and the modules in reading order
 *     <module>.ts    one point, in every language: its word cards,
 *                    explanation, info block, examples, exercises, and FAQ
 *
 * A module is shown in a fixed order: word cards, the explanation, the info
 * block (the point's pattern in one line or a short box), the examples, its
 * exercises (each answer pairs with its question), then its FAQ, if any.
 * Every language sits next to the English it translates. `ru` or `zh` left
 * out means "not translated yet" (an empty array in the assembled entry).
 * A one-sentence text can be a plain string; longer text is an array of
 * sentences, as everywhere else in the chapter schema.
 *
 * lesson() turns all of it into the flat Entry[] that src/lib/chapter-content.js
 * renders and the build scripts check. Each entry also carries `module` (the
 * module's id, or "head" for the title and summary) and `key`
 * ("tong.example2"), which the scripts use to say where a problem is.
 */
import type { Entry, InfoItem as EntryInfoItem, LangText } from "./chapter-entry-types.ts";

/** One sentence, or several. */
export type Text = string | string[];

/** Text in each language; English always, the others once translated. */
export interface Localized {
  en: Text;
  ru?: Text;
  zh?: Text;
}

/** A word card: the dictionary word, its hanzi (for the audio), and a short gloss. */
export interface Word extends Localized {
  term: string;
  hanzi: string;
  audioFile?: string;
}

/** The explanation. Give tldr and necessity: they feed the lesson's TL;DR. */
export interface Prose extends Localized {
  tldr?: Localized;
  necessity?: Localized;
}

export interface InfoItem extends Localized {
  ordered?: boolean;
  items?: InfoItem[];
}

/**
 * The module's info block. Most are one line: `{ en, ru }`. A longer one is a
 * box: `{ title?, ordered?, items }`. A pattern goes into the Grammar Patterns
 * chapter; `kind: "note"` keeps an aside (a tone chart, say) out of it.
 */
export type Info = (Localized | { title?: Localized; ordered?: boolean; items: InfoItem[] }) & {
  kind?: "pattern" | "note";
};

export interface Example extends Localized {
  pinyin: string;
  hanzi: string;
  audioFile?: string;
}


/**
 * An exercise and its answer. A plain-string answer is the same in every
 * language the question is written in (it's Hao-shuo-de); give `{ en, ru }`
 * when it isn't.
 */
export interface Exercise extends Localized {
  answer: string | Localized;
  hanzi?: string;
  audioFile?: string;
}

export interface Faq extends Localized {
  question: Localized;
}

export interface Module {
  /** The module's file name, without .ts. */
  id: string;
  words?: Word[];
  prose: Prose;
  info: Info;
  examples?: Example[];
  /** At least one: scripts/check-practice.js checks every module has practice. */
  exercises: Exercise[];
  faq?: Faq[];
}

export interface LessonParts {
  title: Localized;
  summary: Localized;
  modules: Module[];
}

/** An assembled entry, with where it came from. */
export type LessonEntry = Entry & { module: string; key: string };

// A typed identity helper, so a module file gets checked against the shapes
// above as it's written.
export const lessonModule = (m: Module): Module => m;

const list = (t: Text | undefined): string[] => (t === undefined ? [] : typeof t === "string" ? [t] : t);
const langs = (t: Localized): LangText => ({ en: list(t.en), ru: list(t.ru), zh: list(t.zh) });

function infoItems(items: InfoItem[]): EntryInfoItem[] {
  return items.map((item) => {
    const out: EntryInfoItem = { text: langs(item) };
    if (item.ordered !== undefined) out.ordered = item.ordered;
    if (item.items) out.items = infoItems(item.items);
    return out;
  });
}

export function infoEntry(info: Info): Entry {
  const box = "items" in info ? info : { items: [info as Localized] };
  const entry: Entry = {
    type: "info",
    ordered: "items" in info ? info.ordered : undefined,
    subtype: info.kind === "note" ? undefined : "grammar",
    items: infoItems(box.items),
  };
  if ("items" in info && info.title) entry.title = langs(info.title);
  return entry;
}

// The answer in each language its question is written in.
function answerText(ex: Exercise): LangText {
  if (typeof ex.answer !== "string") return langs(ex.answer);
  const q = langs(ex);
  const a = [ex.answer];
  return { en: q.en.length ? a : [], ru: q.ru.length ? a : [], zh: q.zh.length ? a : [] };
}

export function lesson(id: string, parts: LessonParts): LessonEntry[] {
  const out: LessonEntry[] = [];
  const add = (module: string, key: string, entry: Entry) => out.push({ ...entry, module, key });

  add("head", "title", { type: "title", ...langs(parts.title) });
  add("head", "summary", { type: "summary", ...langs(parts.summary) });

  const seen = new Set<string>();
  for (const m of parts.modules) {
    if (seen.has(m.id)) throw new Error(`lesson(${id}): module "${m.id}" is listed twice`);
    seen.add(m.id);
    (m.words ?? []).forEach((w, i) =>
      add(m.id, `${m.id}.word${i + 1}`, { type: "vocab", term: w.term, audioFile: w.audioFile, ttsText: w.hanzi, ...langs(w) }),
    );
    const prose: Entry = { type: "prose", ...langs(m.prose) };
    if (m.prose.tldr) prose.tldr = langs(m.prose.tldr);
    if (m.prose.necessity) prose.necessity = langs(m.prose.necessity);
    add(m.id, `${m.id}.prose`, prose);
    add(m.id, `${m.id}.info`, infoEntry(m.info));
    (m.examples ?? []).forEach((ex, i) =>
      add(m.id, `${m.id}.example${i + 1}`, { type: "example", pinyin: ex.pinyin, audioFile: ex.audioFile, ttsText: ex.hanzi, ...langs(ex) }),
    );
    // Answers pair with questions by position across the whole lesson, so
    // each module's answers follow its own questions.
    m.exercises.forEach((ex, i) => add(m.id, `${m.id}.exercise${i + 1}`, { type: "exercise", ...langs(ex) }));
    m.exercises.forEach((ex, i) =>
      add(m.id, `${m.id}.answer${i + 1}`, { type: "answer", audioFile: ex.audioFile, ttsText: ex.hanzi, ...answerText(ex) }),
    );
    (m.faq ?? []).forEach((f, i) => add(m.id, `${m.id}.faq${i + 1}`, { type: "faq", question: langs(f.question), ...langs(f) }));
  }
  return out;
}
