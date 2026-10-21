import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1296,
  phase: 3,
  zh: "图",
  py: "tú",
  en: "picture, drawing",
  ru: "рисунок, схема",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["写的看的东西"],
  literal: "a drawn thing to look at",
  fit: "plain",
  topics: ["art-and-drawing"],
  isA: ["work-of-art"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是写的看的东西。",
      en: "This is a picture.",
      ru: "Это картинка.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我爱看写的看的东西。",
      en: "I love looking at pictures.",
      ru: "Я люблю смотреть картинки.",
    },
  ],
});
