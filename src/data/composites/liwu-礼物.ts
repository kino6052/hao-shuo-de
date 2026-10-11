import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 878,
  phase: 2,
  zh: "礼物",
  py: "lǐwù",
  en: "gift",
  ru: "подарок",
  pos: "noun",
  hsd: ["{{word:gei3}}-{{word:ni3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["给你的东西"],
  literal: "a thing for you",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:gei3}}-{{word:ni3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是给你的东西。",
      en: "This is a gift.",
      ru: "Это подарок.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:gei3}}-{{word:ni3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有给你的东西。",
      en: "I have a gift for you.",
      ru: "У меня есть подарок для тебя.",
    },
  ],
});
