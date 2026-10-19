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
      "My bag is gone. I look for the bag, but I cannot find it. Ji-ji flies out, then flies back. Miao-miao lies on the floor. I stand in front of Miao-miao and see the bag. The bag is under Miao-miao! I take the bag. Miao-miao does not move. I found it! My ears hear Zhi-zhi. The note asks, \"Where are you going?\" I say, \"I am going out.\"",
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
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:bu4}} {{word:jian4}} {{word:le}}.",
      hanzi: "我的包不见了。",
      en: "My bag is gone.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}} {{word:bao1}}.",
      hanzi: "我找包。",
      en: "I look for the bag.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}}-{{word:bu4}}-{{word:dao4}}.",
      hanzi: "我找不到。",
      en: "I cannot find it.",
    },
    {
      pinyin: "\"Jī-jī\" {{word:fei1}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "叽叽飞出去了。",
      en: "Ji-ji flew out.",
    },
    {
      pinyin: "\"Jī-jī\" {{word:fei1}} {{word:hui2}}-{{word:lai2}} {{word:le}}.",
      hanzi: "叽叽飞回来了。",
      en: "Ji-ji flew back.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:tang3}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "喵喵躺在地上。",
      en: "Miao-miao lies on the floor.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhan4}} {{word:zai4}} \"Miāo-miao\"-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "我站在喵喵的前面。",
      en: "I stand in front of Miao-miao.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:jian4}} {{word:bao1}} {{word:le}}.",
      hanzi: "我看见包了。",
      en: "I see the bag.",
    },
    {
      pinyin: "{{Word:bao1}} {{word:zai4}} \"Miāo-miao\"-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "包在喵喵的下面。",
      en: "The bag is under Miao-miao.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:na2}} {{word:bao1}}.",
      hanzi: "我拿包。",
      en: "I take the bag.",
    },
    {
      pinyin: "\"Miāo-miao\" {{word:bu4}} {{word:dong4}}.",
      hanzi: "喵喵不动。",
      en: "Miao-miao does not move.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:le}}!",
      hanzi: "我找到了！",
      en: "I found it!",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:er3duo}} {{word:ting1}}-{{word:jian4}} \"Zhī-zhī\".",
      hanzi: "我的耳朵听见吱吱。",
      en: "My ears hear Zhi-zhi.",
    },
    {
      pinyin: "{{Word:zi4}} {{word:wen4}}: {{Word:ni3}} {{word:yao4}} {{word:qu4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "字问：你要去哪里？",
      en: "The note asks: \"Where are you going?\"",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}: {{Word:wo3}} {{word:yao4}} {{word:chu1}}-{{word:qu4}}.",
      hanzi: "我说：我要出去。",
      en: "I say: \"I am going out.\"",
    },
  ],
  exercises: [
    {
      en: "I found it!",
      answer: "{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:le}}!",
      hanzi: "我找到了！",
    },
  ],
});
