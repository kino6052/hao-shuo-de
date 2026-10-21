import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1499,
  phase: 3,
  zh: "念",
  py: "niàn",
  en: "read aloud; miss",
  ru: "читать вслух; скучать",
  pos: "verb",
  hsd: [
    "{{word:shuo1}}-{{word:chu1}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:xin1}}-{{word:li3}} {{word:you3}} X",
  ],
  tts: ["说出写的东西", "心里有X"],
  literal: "say what's written / X is in your heart",
  fit: "plain",
  topics: ["studying-and-practising"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}-{{word:chu1}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我说出写的东西。",
      en: "I read it aloud.",
      ru: "Я читаю это вслух.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xin1}}-{{word:li3}} {{word:you3}} {{word:ni3}}.",
      hanzi: "我心里有你。",
      en: "I miss you.",
      ru: "Я скучаю по тебе.",
    },
  ],
});
