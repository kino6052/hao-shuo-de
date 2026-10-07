import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 39,
  phase: 1,
  zh: "会",
  py: "huì",
  en: "will",
  ru: "будет",
  pos: "verb",
  hsd: ["{{word:hui4}}"],
  tts: ["会"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hui4}} {{word:shuo1}} \"Zhōngguó\" {{word:hua4}}.",
      hanzi: "我会说中国话。",
      en: "I can speak Chinese.",
      ru: "Я говорю по-китайски.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:ta1}} {{word:hui4}} {{word:lai2}}.",
      hanzi: "明天他会来。",
      en: "He'll come tomorrow.",
      ru: "Завтра он придёт.",
    },
  ],
});
