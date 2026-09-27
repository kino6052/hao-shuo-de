// See src/lib/chapter-content.js for the schema this ultimately produces,
// and src/lib/chapter-shape-types.ts / assemble-chapter.js for how shape.ts
// + en.ts/ru.ts/zh.ts combine into it.
// New chapter (replaces the old "Sentences" lesson-03, now merged into
// lesson-02): the number/concreteness content that used to live in the old
// lesson-02 ("Words") -- zhè-ge/nà-ge, the classifier gè, and duō -- moved
// here on its own, kept minimal, Toki-Pona-book style.
import { assembleChapter } from "../../lib/assemble-chapter.js";
import shape from "./shape.ts";
import en from "./en.ts";
import ru from "./ru.ts";
import zh from "./zh.ts";

export const meta = {
  id: "lesson-03",
  type: "lesson",
  lessonNumber: 3,
  order: 3,
};

export default assembleChapter(shape, { en, ru, zh });
