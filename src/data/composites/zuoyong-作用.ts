import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1031,
  phase: 3,
  zh: "作用",
  py: "zuòyòng",
  en: "function, effect",
  ru: "роль, действие",
  pos: "noun",
  hsd: [
    "{{word:zuo4}}-{{word:yong4}}",
    "{{word:neng2}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["作用", "能做的东西"],
  literal: "what it can do",
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zuo4}}-{{word:yong4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个作用很大。",
      en: "This effect is big.",
      ru: "Это действие сильное.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:you3}} {{word:hen3}} {{word:da4}}-{{word:de}} {{word:zuo4}}-{{word:yong4}}.",
      hanzi: "水有很大的作用。",
      en: "Water has a big effect.",
      ru: "У воды большое значение.",
    },
  ],
});
