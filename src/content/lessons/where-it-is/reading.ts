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
      "The note asks, \"Where is Miao-miao?\" I look for Miao-miao. It is not in front of me. It is not on my left. It is not on my right. The bag is on the floor, and Miao-miao is in the bag! Zhi-zhi is next to the bag. I say, \"Miao-miao is at my home.\" Miao-miao is sleeping in my bag.",
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
      pinyin: "{{Word:zi4}} {{word:wen4}}: \"Miāo-miao\" {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "字问：喵喵在哪里？",
      en: "The note asks: \"Where is Miao-miao?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}} \"Miāo-miao\".",
      hanzi: "我找喵喵。",
      en: "I look for Miao-miao.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:bu4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "喵喵不在我的前面。",
      en: "Miao-miao is not in front of me.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:bu4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}.",
      hanzi: "喵喵不在我的左边。",
      en: "Miao-miao is not on my left.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:bu4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:you4}}-{{word:bian1}}.",
      hanzi: "喵喵不在我的又边。",
      en: "Miao-miao is not on my right.",
    },
    {
      pinyin: "{{Word:bao1}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "包在地上。",
      en: "The bag is on the floor.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:zai4}} {{word:bao1}}-{{word:li3}}.",
      hanzi: "喵喵在包里。",
      en: "Miao-miao is in the bag.",
    },
    {
      pinyin: "\"Zhī-zhī\" {{word:zai4}} {{word:bao1}}-{{word:de}} {{word:pang2bian1}}.",
      hanzi: "吱吱在包的旁边。",
      en: "Zhi-zhi is next to the bag.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: \"Miāo-miao\" {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我说：喵喵在我的家。",
      en: "I say: \"Miao-miao is at my home.\"",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:bao1}}-{{word:li3}} {{word:shui4jiao4}}.",
      hanzi: "喵喵在我的包里睡觉。",
      en: "Miao-miao is sleeping in my bag.",
    },
  ],
  exercises: [
    {
      en: "The bag is on the floor.",
      answer: "{{Word:bao1}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "包在地上。",
    },
  ],
});
