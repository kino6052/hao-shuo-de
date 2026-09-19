// See src/lib/chapter-content.js for the schema this ultimately produces,
// and src/lib/chapter-shape-types.ts / assemble-chapter.js for how shape.ts
// + en.ts/ru.ts/zh.ts combine into it.
// Merges the old lesson-02 ("Words") and lesson-03 ("Sentences") into one
// short chapter, styled after the Toki Pona book: minimal grammar prose,
// most of the weight on vocab + examples + exercises. The old lesson-02's
// number/concreteness content (zhè-ge/nà-ge, gè) moved to lesson-03
// ("Modifying Nouns") rather than being covered here.
import { assembleChapter } from "../../lib/assemble-chapter.js";
import shape from "./shape.ts";
import en from "./en.ts";
import ru from "./ru.ts";
import zh from "./zh.ts";

export const meta = {
  id: "lesson-02",
  type: "lesson",
  lessonNumber: 2,
  order: 2,
};

export default assembleChapter(shape, { en, ru, zh });
