import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 118,
  phase: 1,
  zh: "可能",
  py: "kěnéng",
  en: "maybe",
  ru: "может быть",
  pos: "adjective",
  hsd: ["{{word:ke3}}-{{word:neng2}}"],
  tts: ["可能"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他可能不来。",
      en: "He might not come.",
      ru: "Он, может быть, не придёт.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:ke3}}-{{word:neng2}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "明天可能很冷。",
      en: "It may be cold tomorrow.",
      ru: "Завтра, возможно, будет холодно.",
    },
  ],
});
