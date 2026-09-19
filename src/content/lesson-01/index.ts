// See src/lib/chapter-content.js for the schema this ultimately produces,
// and src/lib/chapter-shape-types.ts / assemble-chapter.js for how shape.ts
// + en.ts/ru.ts/zh.ts combine into it.
import { assembleChapter } from "../../lib/assemble-chapter.js";
import shape from "./shape.ts";
import en from "./en.ts";
import ru from "./ru.ts";
import zh from "./zh.ts";

export const meta = {
  id: "lesson-01",
  type: "lesson",
  lessonNumber: 1,
  order: 1,
};

export default assembleChapter(shape, { en, ru, zh });
