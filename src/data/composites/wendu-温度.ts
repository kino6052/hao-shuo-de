import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1135,
  phase: 3,
  zh: "温度",
  py: "wēndù",
  en: "temperature",
  ru: "температура",
  pos: "noun",
  hsd: ["{{word:duo1}} {{word:re4}}"],
  tts: ["多热"],
  literal: "how hot",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:duo1}} {{word:re4}}?",
      hanzi: "今天多热？",
      en: "What's the temperature today?",
      ru: "Какая сегодня температура?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:duo1}} {{word:re4}}.",
      hanzi: "我知道多热。",
      en: "I know the temperature.",
      ru: "Я знаю температуру.",
    },
  ],
});
