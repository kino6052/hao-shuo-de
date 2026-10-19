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
      "It is colder outside than at home. I am taller than the girl, and she is not as tall as I am. Miao-miao is bigger than Ji-ji. Zhi-zhi is the smallest. I look at the bags. These bags are all the same. Miao-miao sleeps in one of them. The girl's bag is smaller than mine. The note asks, \"Who loves sleeping the most?\" I say, \"Miao-miao loves sleeping the most.\"",
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
      pinyin: "{{Word:wai4}}-{{word:mian4}} {{word:bi3}} {{word:jia1}} {{word:leng3}}.",
      hanzi: "外面比家冷。",
      en: "It is colder outside than at home.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bi3}} {{word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:gao1}}.",
      hanzi: "我比小女人高。",
      en: "I am taller than the girl.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:mei2}}-{{word:you3}} {{word:wo3}} {{word:gao1}}.",
      hanzi: "小女人没有我高。",
      en: "The girl is not as tall as I am.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:bi3}} \"Jī-jī\" {{word:da4}}.",
      hanzi: "喵喵比叽叽大。",
      en: "Miao-miao is bigger than Ji-ji.",
    },
    {
      pinyin: "\"Zhī-zhī\" {{word:zui4}} {{word:xiao3}}.",
      hanzi: "吱吱最小。",
      en: "Zhi-zhi is the smallest.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:bao1}}.",
      hanzi: "我看包。",
      en: "I look at the bags.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:bao1}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这些包一样。",
      en: "These bags are the same.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:zai4}} {{word:yi1}}-{{light:ge4}} {{word:bao1}}-{{word:li3}} {{word:shui4jiao4}}.",
      hanzi: "喵喵在一个包里睡觉。",
      en: "Miao-miao sleeps in one of them.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}}-{{word:de}} {{word:bao1}} {{word:bi3}} {{word:wo3}}-{{word:de}} {{word:bao1}} {{word:xiao3}}.",
      hanzi: "小女人的包比我的包小。",
      en: "The girl's bag is smaller than mine.",
    },
    {
      pinyin: "{{Word:zi4}} {{word:wen4}}: {{Word:shei2}} {{word:zui4}} {{word:ai4}} {{word:shui4jiao4}}?",
      hanzi: "字问：谁最爱睡觉？",
      en: "The note asks: \"Who loves sleeping the most?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: \"Miāo-miao\" {{word:zui4}} {{word:ai4}} {{word:shui4jiao4}}.",
      hanzi: "我说：喵喵最爱睡觉。",
      en: "I say: \"Miao-miao loves sleeping the most.\"",
    },
  ],
  exercises: [
    {
      en: "I am taller than the girl.",
      answer: "{{Word:wo3}} {{word:bi3}} {{word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:gao1}}.",
      hanzi: "我比小女人高。",
    },
  ],
});
