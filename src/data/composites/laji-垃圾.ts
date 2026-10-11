import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 826,
  phase: 2,
  zh: "垃圾",
  py: "lājī",
  en: "garbage",
  ru: "мусор",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:bu4}} {{word:gan1jing4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["不要的东西", "不干净的东西"],
  literal: "things nobody wants / unclean things",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:bu4}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是不要的东西。",
      en: "This is garbage.",
      ru: "Это мусор.",
    },
    {
      pinyin: "{{Word:bu4}} {{word:gan1jing4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "不干净的东西在那里。",
      en: "The garbage is over there.",
      ru: "Мусор там.",
    },
  ],
});
