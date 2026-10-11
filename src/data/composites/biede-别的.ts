import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 503,
  phase: 2,
  zh: "别的",
  py: "biéde",
  en: "other",
  ru: "другой",
  pos: "pronoun",
  hsd: ["{{word:bie2}}-{{word:de}}"],
  tts: ["别的"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}}.",
      hanzi: "我要别的。",
      en: "I want another one.",
      ru: "Я хочу другое.",
    },
    {
      pinyin: "{{Word:bie2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "别的东西不好。",
      en: "The other things aren't good.",
      ru: "Остальное нехорошее.",
    },
  ],
});
