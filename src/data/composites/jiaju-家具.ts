import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 836,
  phase: 2,
  zh: "家具",
  py: "jiājù",
  en: "furniture",
  ru: "мебель",
  pos: "noun",
  hsd: [
    "{{word:jia1}}-{{word:ju4}}",
    "{{word:jia1}}-{{word:li3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["家具", "家里用的东西"],
  literal: "home tool / the things used at home",
  fit: "natural",
  kinds: ["built", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}}-{{word:ju4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的家具很好。",
      en: "My furniture is good.",
      ru: "У меня хорошая мебель.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:li3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "家里用的东西很大。",
      en: "The furniture is big.",
      ru: "Мебель большая.",
    },
  ],
});
