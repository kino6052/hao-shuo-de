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
      "Miao-miao finishes eating and looks at me. I have food, too. Miao-miao eats again! Ji-ji says, \"Miao-miao has eaten again!\" After eating, Miao-miao starts to sleep. I wait a moment. I play for a moment.",
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
      pinyin: "\"Miāo-miao\" {{word:chi1}}-{{word:wan2}} {{word:le}}.",
      hanzi: "喵喵吃完了。",
      en: "Miao-miao finished eating.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:kan4}} {{word:wo3}}.",
      hanzi: "喵喵看我。",
      en: "Miao-miao looks at me.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:fan4}}.",
      hanzi: "我有饭。",
      en: "I have food.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:you4}} {{word:chi1}} {{word:le}}.",
      hanzi: "喵喵又吃了。",
      en: "Miao-miao ate again.",
    },
    {
      pinyin: "\"Jī-jī\" {{word:shuo1}}: \"Miāo-miao\" {{word:you4}} {{word:chi1}} {{word:le}}!",
      hanzi: "叽叽说：喵喵又吃了！",
      en: "Ji-ji says: \"Miao-miao ate again!\"",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:kai1shi3}} {{word:shui4jiao4}}.",
      hanzi: "喵喵吃完后，开始睡觉。",
      en: "After Miao-miao finished eating, it began to sleep.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:deng3}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我等一下。",
      en: "I wait a moment.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:wan2r}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我玩儿一下。",
      en: "I play a moment.",
    },
  ],
  exercises: [
    {
      en: "Ji-ji says: \"Miao-miao ate again!\"",
      answer: "\"Jī-jī\" {{word:shuo1}}: \"Miāo-miao\" {{word:you4}} {{word:chi1}} {{word:le}}!",
      hanzi: "叽叽说：喵喵又吃了！",
    },
  ],
});
