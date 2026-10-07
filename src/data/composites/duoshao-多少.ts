import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 162,
  phase: 1,
  zh: "多少",
  py: "duōshao",
  en: "how many, how much",
  ru: "сколько",
  pos: "pronoun",
  hsd: ["{{word:duo1}}-{{word:shao3}}"],
  tts: ["多少"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}?",
      hanzi: "这个多少金？",
      en: "How much is this?",
      ru: "Сколько это стоит?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:he1}} {{word:le}} {{word:duo1}}-{{word:shao3}} {{word:shui3}}?",
      hanzi: "你喝了多少水？",
      en: "How much water did you drink?",
      ru: "Сколько воды ты выпил?",
    },
  ],
});
