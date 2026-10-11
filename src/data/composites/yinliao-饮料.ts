import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 552,
  phase: 2,
  zh: "饮料",
  py: "yǐnliào",
  en: "beverage",
  ru: "напиток",
  pos: "noun",
  hsd: ["{{word:he1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["喝的东西"],
  literal: "a thing to drink",
  fit: "plain",
  note: "chī covers drinking too.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:he1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:ma}}?",
      hanzi: "你要喝的东西吗？",
      en: "Do you want a drink?",
      ru: "Хочешь что-нибудь выпить?",
    },
    {
      pinyin: "{{Word:he1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:che1}}-{{word:li3}}.",
      hanzi: "喝的东西在车里。",
      en: "The drinks are in the car.",
      ru: "Напитки в машине.",
    },
  ],
});
