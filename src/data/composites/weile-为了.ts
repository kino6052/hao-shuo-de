import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 261,
  phase: 1,
  zh: "为了",
  py: "wèile",
  en: "in order to",
  ru: "чтобы",
  pos: "preposition",
  hsd: ["{{word:wei4}}-{{word:le}}"],
  tts: ["为了"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wei4}}-{{word:le}} {{word:hai2}}-{{word:zi}}, {{word:ta1}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "为了孩子，他工作。",
      en: "He works for his children.",
      ru: "Он работает ради детей.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:wei4}}-{{word:le}} {{word:xue2}} \"Zhōngguó\" {{word:hua4}} {{word:qu4}} \"Zhōngguó\".",
      hanzi: "我为了学中国话去中国。",
      en: "I'm going to China to learn Chinese.",
      ru: "Я еду в Китай, чтобы учить китайский.",
    },
  ],
});
