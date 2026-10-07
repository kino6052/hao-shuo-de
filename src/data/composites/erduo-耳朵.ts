import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 242,
  phase: 1,
  zh: "耳朵",
  py: "ěrduo",
  en: "ear",
  ru: "ухо",
  pos: "noun",
  hsd: ["{{word:er3duo}}"],
  tts: ["耳朵"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:er3duo}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我的耳朵很冷。",
      en: "My ears are cold.",
      ru: "У меня мёрзнут уши.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}}-{{word:de}} {{word:er3duo}} {{word:hen3}} {{word:da4}}.",
      hanzi: "动物的耳朵很大。",
      en: "The animal's ears are big.",
      ru: "У животного большие уши.",
    },
  ],
});
