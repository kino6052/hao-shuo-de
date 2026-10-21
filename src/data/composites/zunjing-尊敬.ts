import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1075,
  phase: 3,
  zh: "尊敬",
  py: "zūnjìng",
  en: "respect",
  ru: "уважать",
  pos: "verb",
  hsd: ["{{word:jue2}}-{{light:de2}} X {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}"],
  tts: ["觉得X很有价值"],
  literal: "feel X is very valuable",
  fit: "plain",
  topics: ["liking-and-wanting"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:ta1}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}.",
      hanzi: "我觉得他很有价值。",
      en: "I respect him.",
      ru: "Я уважаю его.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jue2}}-{{word:de2}} {{word:wo3}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}} {{word:ma}}?",
      hanzi: "你觉得我很有价值吗？",
      en: "Do you respect me?",
      ru: "Ты меня уважаешь?",
    },
  ],
});
