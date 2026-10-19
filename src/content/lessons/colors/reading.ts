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
      "This is a picture. The picture has only black. Miao-miao is white. Zhi-zhi is black. My bag is red. Red looks nice. Only one thing is red. The note asks, \"What color is your bag?\" I say, \"My bag is red.\"",
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
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hua4}}.",
      hanzi: "这是话。",
      en: "This is a picture.",
    },
    {
      pinyin: "{{Word:hua4}} {{word:zhi3}} {{word:you3}} {{word:hei1}} {{word:se4}}.",
      hanzi: "话只有黑色。",
      en: "The picture has only black.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:shi4}} {{word:bai2}} {{word:se4}}.",
      hanzi: "喵喵是白色。",
      en: "Miao-miao is white.",
    },
    {
      pinyin: "\"Zhī-zhī\" {{word:shi4}} {{word:hei1}} {{word:se4}}.",
      hanzi: "吱吱是黑色。",
      en: "Zhi-zhi is black.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:hong2}} {{word:se4}}.",
      hanzi: "我的包是红色。",
      en: "My bag is red.",
    },
    {
      pinyin: "{{Word:hong2}} {{word:se4}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "红色很好看。",
      en: "Red looks nice.",
    },
    {
      pinyin: "{{Word:zhi3}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:hong2}} {{word:se4}}.",
      hanzi: "只有一个东西是红色。",
      en: "Only one thing is red.",
    },
    {
      pinyin: "{{Word:zi4}} {{word:wen4}}: {{Word:ni3}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
      hanzi: "字问：你的包是什么颜色？",
      en: "The note asks: \"What color is your bag?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:hong2}} {{word:se4}}.",
      hanzi: "我说：我的包是红色。",
      en: "I say: \"My bag is red.\"",
    },
  ],
  exercises: [
    {
      en: "My bag is red.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:hong2}} {{word:se4}}.",
      hanzi: "我的包是红色。",
    },
  ],
});
