import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 214,
  phase: 1,
  zh: "这里",
  py: "zhèlǐ",
  en: "here",
  ru: "здесь",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}-{{word:li3}}"],
  tts: ["这里"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:lai2}} {{word:zhe4}}-{{word:li3}}!",
      hanzi: "来这里！",
      en: "Come here!",
      ru: "Иди сюда!",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这里很好。",
      en: "It's nice here.",
      ru: "Здесь хорошо.",
    },
  ],
});
