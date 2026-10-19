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
      "A small animal sits on the wire and will not stop talking. Miao-miao is a big animal, and a very good one.",
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
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:xiao3}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这是小动物。",
      en: "This is a small animal.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:shi4}} {{word:da4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "喵喵是大动物。",
      en: "Miao-miao is a big animal.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:hen3}} {{word:hao3}}.",
      hanzi: "喵喵很好。",
      en: "Miao-miao is very good.",
    },
  ],
  exercises: [
    {
      en: "Miao-miao is a big animal.",
      answer: "\"Miāo-miao\" {{word:shi4}} {{word:da4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "喵喵是大动物。",
    },
  ],
});
