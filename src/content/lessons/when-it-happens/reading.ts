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
      "Miao-miao is asleep. I will eat soon. Now I am eating, and Miao-miao is still sleeping. The food is gone. I ate. Miao-miao slept. The note asks, \"Did you eat?\" I say, \"I ate.\"",
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
      pinyin: "\"Miāo-miao\" {{word:shui4jiao4}}.",
      hanzi: "喵喵睡觉。",
      en: "Miao-miao sleeps.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hui4}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我会吃饭。",
      en: "I will eat.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:wo3}} {{word:zai4}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "线在我在吃饭。",
      en: "Now I am eating.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "喵喵在睡觉。",
      en: "Miao-miao is sleeping.",
    },
    {
      pinyin: "{{Word:fan4}} {{word:mei2}} {{word:le}}.",
      hanzi: "饭没了。",
      en: "The food is gone.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:le}} {{word:fan4}}.",
      hanzi: "我吃了饭。",
      en: "I ate.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "喵喵睡觉了。",
      en: "Miao-miao slept.",
    },
    {
      pinyin: "{{Word:zi4}} {{word:wen4}}: {{Word:ni3}} {{word:chi1}} {{word:le}} {{word:fan4}} {{word:ma}}?",
      hanzi: "字问：你吃了饭吗？",
      en: "The note asks: \"Did you eat?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:wo3}} {{word:chi1}} {{word:le}}.",
      hanzi: "我说：我吃了。",
      en: "I say: \"I ate.\"",
    },
  ],
  exercises: [
    {
      en: "I will eat.",
      answer: "{{Word:wo3}} {{word:hui4}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我会吃饭。",
    },
  ],
});
