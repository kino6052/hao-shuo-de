import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1029,
  phase: 3,
  zh: "作品",
  py: "zuòpǐn",
  en: "work, creation",
  ru: "произведение",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["做出来的东西"],
  literal: "a thing someone made",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ta1}} {{word:zuo4}}-{{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是他做出来的东西。",
      en: "This is his work.",
      ru: "Это его произведение.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ta1}} {{word:zuo4}}-{{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我爱他做出来的东西。",
      en: "I love his work.",
      ru: "Я люблю его произведения.",
    },
  ],
});
