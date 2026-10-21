import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 744,
  phase: 2,
  zh: "只有",
  py: "zhǐyǒu",
  en: "only (if)",
  ru: "только (если)",
  pos: "conjunction",
  hsd: ["{{word:zhi3}}-{{word:you3}}", "{{word:jiu4}}"],
  tts: ["只有", "就"],
  literal: "just",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["if-unless-and-even-if"],
  isA: ["conjunction"],
  examples: [
    {
      pinyin: "{{Word:zhi3}} {{word:you3}} {{word:wo3}} {{word:lai2}}.",
      hanzi: "只有我来。",
      en: "Only I am coming.",
      ru: "Придёт только я.",
    },
    {
      pinyin: "{{Word:zhi3}} {{word:you3}} {{word:ni3}} {{word:you3}} {{word:shui3}}.",
      hanzi: "只有你有水。",
      en: "Only you have water.",
      ru: "Вода есть только у тебя.",
    },
  ],
});
