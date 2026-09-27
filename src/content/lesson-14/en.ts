// English text for lesson-14, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 3 — Also and all"] },
  summary: {
    en: [
      "We often want to add one more thing, or talk about all of them.",
      "In this lesson, you'll be able to say \"I also eat.\" and \"All the plants are good.\"",
    ],
  },
  vocabYe: { en: ["also"] },
  vocabQuanbu: { en: ["all, completely, everything"] },
  vocabZhiwu: { en: ["plant"] },
  vocabHuo: { en: ["fire"] },
  vocabKongqi: { en: ["air"] },
  example3: { en: ["The fatherland is small and cold."] },
  example5L13: { en: ["Everybody listens to her."] },
};

export default en;
