// reading: the Miao-miao story of this lesson, first in plain English, then in Hao-shuo-de
// sentence by sentence. Only words and patterns from this lesson and the ones before it.
// Draft for the author to review (WRITING_PLAN.md, review/writing/miao-miao-stories-preview.md).
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "reading",
  prose: {
    en: [
      "**The story**",
      "",
      "This is Miao-miao. This is not a plant.",
    ],
    tldr: {
      en: "A short story that uses only what you have learned so far.",
    },
    necessity: {
      en: "Reading real sentences is how the patterns stay in your head.",
    },
  },
  info: {
    kind: "note",
    en: "Every sentence in the story uses only words and patterns from this lesson and the ones before it.",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} \"Miāo-miao\".",
      hanzi: "这是喵喵。",
      en: "This is Miao-miao.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:zhi2wu4}}.",
      hanzi: "这不是植物。",
      en: "This is not a plant.",
    },
  ],
  exercises: [
    {
      en: "This is not a plant.",
      answer: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:zhi2wu4}}.",
      hanzi: "这不是植物。",
    },
  ],
});
