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
      "I am a person. That is a girl, small like a child. This one is Miao-miao. That small animal over there is Ji-ji, the bird. We are people. They are animals.",
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
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "我是人。",
      en: "I am a person.",
    },
    {
      pinyin: "{{Word:na4}} {{word:shi4}} {{word:xiao3}} {{word:nv3}}-{{word:ren2}}.",
      hanzi: "那是小女人。",
      en: "That is a small girl.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} \"Miāo-miao\".",
      hanzi: "这个是喵喵。",
      en: "This one is Miao-miao.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:xiao3}} {{word:dong4}}-{{word:wu4}} {{word:shi4}} \"Jī-jī\".",
      hanzi: "那个小动物是叽叽。",
      en: "That small animal is Ji-ji.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "我们是人。",
      en: "We are people.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:shi4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "他们是动物。",
      en: "They are animals.",
    },
  ],
  exercises: [
    {
      en: "This one is Miao-miao.",
      answer: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} \"Miāo-miao\".",
      hanzi: "这个是喵喵。",
    },
  ],
});
