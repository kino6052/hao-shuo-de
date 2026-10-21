import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1281,
  phase: 3,
  zh: "受",
  py: "shòu",
  en: "receive, suffer",
  ru: "получать, испытывать",
  pos: "verb",
  hsd: ["{{word:de2}}"],
  tts: ["得"],
  fit: "word",
  topics: ["giving-and-getting"],
  isA: ["receiving"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:de2}} {{word:le}} {{word:tong4}}.",
      hanzi: "我得了痛。",
      en: "I suffered pain.",
      ru: "Я испытал боль.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:de2}} {{word:le}} {{word:bang1}}.",
      hanzi: "他得了帮。",
      en: "He received help.",
      ru: "Он получил помощь.",
    },
  ],
});
