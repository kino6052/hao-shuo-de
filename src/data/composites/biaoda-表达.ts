import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1191,
  phase: 3,
  zh: "表达",
  py: "biǎodá",
  en: "express",
  ru: "выражать",
  pos: "verb",
  hsd: [
    "{{word:shuo1}}-{{word:chu1}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["说出心里的东西"],
  literal: "say what's in your heart",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}-{{word:chu1}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我说出心里的东西。",
      en: "I express myself.",
      ru: "Я выражаю себя.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:chu1}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他说出心里的东西。",
      en: "He expresses himself.",
      ru: "Он выражает себя.",
    },
  ],
});
