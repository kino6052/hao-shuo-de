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
      "The girl drinks water. I look at her. I have no money, and I have no food. Miao-miao eats food.",
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
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:he1}} {{word:shui3}}.",
      hanzi: "小女人喝水。",
      en: "The girl drinks water.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}}.",
      hanzi: "我看他。",
      en: "I look at her.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我没有金。",
      en: "I have no money.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:fan4}}.",
      hanzi: "我没有饭。",
      en: "I have no food.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:chi1}} {{word:fan4}}.",
      hanzi: "喵喵吃饭。",
      en: "Miao-miao eats food.",
    },
  ],
  exercises: [
    {
      en: "The girl drinks water.",
      answer: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:he1}} {{word:shui3}}.",
      hanzi: "小女人喝水。",
    },
  ],
});
