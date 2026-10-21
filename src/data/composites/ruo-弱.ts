import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1326,
  phase: 3,
  zh: "弱",
  py: "ruò",
  en: "weak",
  ru: "слабый",
  pos: "adjective",
  hsd: ["{{word:mei2}}-{{word:you3}} {{word:li4}}"],
  tts: ["没有力"],
  literal: "no strength",
  fit: "plain",
  topics: ["strong-and-weak-body-and-force"],
  isA: ["speed-or-strength"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:li4}}.",
      hanzi: "我没有力。",
      en: "I am weak.",
      ru: "Я слаб.",
    },
    {
      pinyin: "{{Word:lao3}} {{word:ren2}} {{word:mei2}}-{{word:you3}} {{word:li4}}.",
      hanzi: "老人没有力。",
      en: "Old people are weak.",
      ru: "Старики слабы.",
    },
  ],
});
