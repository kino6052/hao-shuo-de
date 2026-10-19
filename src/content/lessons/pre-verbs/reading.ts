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
      "I look at the food. I want to eat, but I have no money. I cannot eat. I know that Miao-miao does not want to eat; it only loves to watch me. I am learning to wait.",
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
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:fan4}}.",
      hanzi: "我看饭。",
      en: "I look at the food.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "我要吃。",
      en: "I want to eat.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我没有金。",
      en: "I have no money.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:neng2}} {{word:chi1}}.",
      hanzi: "我不能吃。",
      en: "I cannot eat.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} \"Miāo-miao\" {{word:bu4}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "我知道喵喵不要吃。",
      en: "I know Miao-miao does not want to eat.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:ai4}} {{word:kan4}} {{word:wo3}}.",
      hanzi: "喵喵爱看我。",
      en: "Miao-miao loves to watch me.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xue2}} {{word:deng3}}.",
      hanzi: "我学等。",
      en: "I learn to wait.",
    },
  ],
  exercises: [
    {
      en: "I want to eat.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "我要吃。",
    },
  ],
});
