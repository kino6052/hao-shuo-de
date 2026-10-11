import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 567,
  phase: 2,
  zh: "渴",
  py: "kě",
  en: "thirsty",
  ru: "хотеть пить",
  pos: "adjective",
  hsd: ["{{word:xiang3}} {{word:he1}} {{word:shui3}}"],
  tts: ["想喝水"],
  literal: "would like to drink water",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我想喝水。",
      en: "I'm thirsty.",
      ru: "Я хочу пить.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:re4}}, {{word:xiang3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "他很热，想喝水。",
      en: "He's hot and thirsty.",
      ru: "Ему жарко, он хочет пить.",
    },
  ],
});
