import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 320,
  phase: 1,
  zh: "照片",
  py: "zhàopiàn",
  en: "photo",
  ru: "фотография",
  pos: "noun",
  hsd: ["{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["看的东西"],
  literal: "a thing to look at",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:jia1}}-{{word:ren2}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是我家人的看的东西。",
      en: "This is a photo of my family.",
      ru: "Это фотография моей семьи.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:shou3}}-{{word:ji1}} {{word:zuo4}} {{word:le}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他用手机做了看的东西。",
      en: "He took a photo with his phone.",
      ru: "Он сфотографировал на телефон.",
    },
  ],
});
