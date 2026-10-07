import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 221,
  phase: 1,
  zh: "难",
  py: "nán",
  en: "difficult",
  ru: "трудный",
  pos: "adjective",
  hsd: ["{{word:nan2}}"],
  tts: ["难"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:nan2}}.",
      hanzi: "这个很难。",
      en: "This is hard.",
      ru: "Это трудно.",
    },
    {
      pinyin: "\"Zhōngguó\" {{word:hua4}} {{word:nan2}} {{word:ma}}?",
      hanzi: "中国话难吗？",
      en: "Is Chinese hard?",
      ru: "Китайский трудный?",
    },
  ],
});
