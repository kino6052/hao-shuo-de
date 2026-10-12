import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1297,
  phase: 3,
  zh: "图片",
  py: "túpiàn",
  en: "picture, image",
  ru: "картинка",
  pos: "noun",
  hsd: [
    "{{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["写的看的东西", "看的东西"],
  literal: "a thing to look at",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:ma}}?",
      hanzi: "你有写的看的东西吗？",
      en: "Do you have a picture?",
      ru: "У тебя есть картинка?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我给他写的看的东西。",
      en: "I give him a picture.",
      ru: "Я даю ему картинку.",
    },
  ],
});
