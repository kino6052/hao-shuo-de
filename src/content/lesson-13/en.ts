// English text for lesson-13, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 2 — Comparing"] },
  summary: {
    en: [
      "We often compare one thing with another.",
      "In this lesson, you'll be able to say \"A is bigger than B.\", \"the same\", and \"different\".",
    ],
  },
  vocabBi: { en: ["than"] },
  vocabYiyang: { en: ["same, similar, sibling"] },
  vocabButong: { en: ["different, altered"] },
  vocabYing: { en: ["hard"] },
  vocabYuan: { en: ["round"] },
  vocabGunzi: { en: ["stick"] },
  vocabXian: { en: ["line, rope"] },
  example5: {
    en: ["My sister opened the first door and the second door."],
  },
  example6: {
    en: [
      "Only your house is black. / Your house is black, not other houses.",
    ],
  },
};

export default en;
