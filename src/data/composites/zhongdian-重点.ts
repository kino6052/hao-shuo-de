import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1219,
  phase: 3,
  zh: "重点",
  py: "zhòngdiǎn",
  en: "key point",
  ru: "главное",
  pos: "noun",
  hsd: [
    "{{word:zui4}} {{word:you3}} {{word:zhong4}}-{{word:yao4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
    "{{word:zhong4}}-{{word:dian3}}",
  ],
  tts: ["最有重要的部分", "重点"],
  literal: "the most important part",
  fit: "natural",
  kinds: ["built", "spelled"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zhong4}}-{{word:dian3}}.",
      hanzi: "这是重点。",
      en: "This is the key point.",
      ru: "Это главное.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:zui4}} {{word:you3}} {{word:zhong4}}-{{word:yao4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "这个是最有重要的部分。",
      en: "This is the most important part.",
      ru: "Это самая важная часть.",
    },
  ],
});
