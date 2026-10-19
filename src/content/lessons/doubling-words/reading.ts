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
      "The moon is very round. The moon is nice and round. I take a look at the moon. Everyone looks at the moon. Each one is very good. The girl says, \"Take a look!\" I wait a little. Miao-miao looks at the moon and is still sleepy. Miao-miao is \"miao\" twice. This way, Miao-miao is easy to say.",
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
      pinyin: "{{Word:yue4}} {{word:hen3}} {{word:yuan2}}.",
      hanzi: "月很圆。",
      en: "The moon is very round.",
    },
    {
      pinyin: "{{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}, {{word:hao3}}-{{word:hao3}}-{{word:de}}.",
      hanzi: "月圆圆的，好好的。",
      en: "The moon is nice and round.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:kan4}} {{word:yue4}}.",
      hanzi: "我看看月。",
      en: "I take a look at the moon.",
    },
    {
      pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:kan4}} {{word:yue4}}.",
      hanzi: "人人都看月。",
      en: "Everyone looks at the moon.",
    },
    {
      pinyin: "{{Word:ge4}}-{{word:ge4}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "个个都很好。",
      en: "Each one is very good.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:shuo1}}: {{Word:ni3}} {{word:kan4}}-{{word:kan4}}!",
      hanzi: "小女人说：你看看！",
      en: "The girl says: \"Take a look!\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:deng3}}-{{word:deng3}}.",
      hanzi: "我等等。",
      en: "I wait a little.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:kan4}} {{word:yue4}}, {{word:hai2}} {{word:shui4jiao4}}.",
      hanzi: "喵喵看月，还睡觉。",
      en: "Miao-miao looks at the moon, still sleepy.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:shi4}} {{word:liang3}} {{word:ci4}} \"miāo\".",
      hanzi: "喵喵是两次喵。",
      en: "Miao-miao is \"miao\" two times.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:yang4}}, \"Miāo-miao\" {{word:hen3}} {{word:hao3}} {{word:shuo1}}.",
      hanzi: "这样，喵喵很好说。",
      en: "This way, Miao-miao is easy to say.",
    },
  ],
  exercises: [
    {
      en: "The moon is nice and round.",
      answer: "{{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}, {{word:hao3}}-{{word:hao3}}-{{word:de}}.",
      hanzi: "月圆圆的，好好的。",
    },
  ],
});
