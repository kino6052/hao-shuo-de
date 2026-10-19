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
      "I count: one, two, three, four, five, six, seven, eight, nine, ten. I have two bags. The girl has three toys. Miao-miao has only one place. Here are two animals: one is Miao-miao, one is Ji-ji. My home is number four. Zhi-zhi counts: one, two, three. We are five. Eleven, twelve. This is the second time. The note asks, \"How much money do you have?\" I say, \"I have ten.\"",
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
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:yi1}}, {{word:er4}}, {{word:san1}}, {{word:si4}}, {{word:wu3}}, {{word:liu4}}, {{word:qi1}}, {{word:ba1}}, {{word:jiu3}}, {{word:shi2}}.",
      hanzi: "我说：一，二，三，四，五，六，七，八，九，十。",
      en: "I count: one, two, ... ten.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:liang3}}-{{light:ge4}} {{word:bao1}}.",
      hanzi: "我有两个包。",
      en: "I have two bags.",
    },
    {
      pinyin: "{{Word:xiao3}} {{word:nv3}}-{{word:ren2}} {{word:you3}} {{word:san1}}-{{light:ge4}} {{word:wan2r}}-{{word:ju4}}.",
      hanzi: "小女人有三个玩儿具。",
      en: "The girl has three toys.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:zhi3}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:di4}}-{{word:fang1}}.",
      hanzi: "喵喵只有一个地方。",
      en: "Miao-miao has only one place.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:liang3}}-{{light:ge4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这里有两个动物。",
      en: "Here are two animals.",
    },
    {
      pinyin: "{{Word:yi1}}-{{light:ge4}} {{word:shi4}} \"Miāo-miao\".",
      hanzi: "一个是喵喵。",
      en: "One is Miao-miao.",
    },
    {
      pinyin: "{{Word:yi1}}-{{light:ge4}} {{word:shi4}} \"Jī-jī\".",
      hanzi: "一个是叽叽。",
      en: "One is Ji-ji.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:shi4}} {{word:si4}} {{word:hao4}}.",
      hanzi: "我的家是四号。",
      en: "My home is number four.",
    },
    {
      pinyin: "\"Zhī-zhī\" {{word:shuo1}}: {{Word:yi1}}, {{word:er4}}, {{word:san1}}.",
      hanzi: "吱吱说：一，二，三。",
      en: "Zhi-zhi counts: one, two, three.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shi4}} {{word:wu3}}-{{light:ge4}}.",
      hanzi: "我们是五个。",
      en: "We are five.",
    },
    {
      pinyin: "{{Word:shi2}}-{{word:yi1}}, {{word:shi2}}-{{word:er4}}.",
      hanzi: "十一，十二。",
      en: "Eleven, twelve.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:di4}}-{{word:er4}} {{word:ci4}}.",
      hanzi: "这是地二次。",
      en: "This is the second time.",
    },
    {
      pinyin: "{{Word:zi4}} {{word:wen4}}: {{Word:ni3}} {{word:you3}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}?",
      hanzi: "字问：你有多少金？",
      en: "The note asks: \"How much money do you have?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:wo3}} {{word:you3}} {{word:shi2}} {{word:jin1}}.",
      hanzi: "我说：我有十金。",
      en: "I say: \"I have ten.\"",
    },
  ],
  exercises: [
    {
      en: "Here are two animals.",
      answer: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:liang3}}-{{light:ge4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这里有两个动物。",
    },
  ],
});
