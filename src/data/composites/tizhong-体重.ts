import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1458,
  phase: 3,
  zh: "体重",
  py: "tǐzhòng",
  en: "body weight",
  ru: "вес тела",
  pos: "noun",
  hsd: ["{{word:shen1ti3}}-{{word:de}} {{word:da4}}-{{word:xiao3}}"],
  tts: ["身体的大小"],
  literal: "how big the body is",
  fit: "plain",
  topics: ["body-needs"],
  isA: ["measure-unit"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shen1ti3}}-{{word:de}} {{word:da4}}-{{word:xiao3}} {{word:shi4}} {{word:duo1}}-{{word:shao3}}?",
      hanzi: "你身体的大小是多少？",
      en: "What is your weight?",
      ru: "Сколько ты весишь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:wo3}} {{word:shen1ti3}}-{{word:de}} {{word:da4}}-{{word:xiao3}}.",
      hanzi: "我不知道我身体的大小。",
      en: "I don't know my weight.",
      ru: "Я не знаю свой вес.",
    },
  ],
});
