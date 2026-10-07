import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 134,
  phase: 1,
  zh: "两",
  py: "liǎng",
  en: "two",
  ru: "два",
  pos: "number",
  hsd: ["{{word:liang3}}"],
  tts: ["两"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:liang3}}-{{light:ge4}}.",
      hanzi: "我要两个。",
      en: "I want two.",
      ru: "Мне два.",
    },
    {
      pinyin: "{{Word:liang3}} {{word:tian1}} {{word:hou4}} {{word:wo3}} {{word:hui2}}-{{word:lai2}}.",
      hanzi: "两天后我回来。",
      en: "I'll be back in two days.",
      ru: "Я вернусь через два дня.",
    },
  ],
});
