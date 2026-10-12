import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1092,
  phase: 3,
  zh: "思考",
  py: "sīkǎo",
  en: "think, ponder",
  ru: "размышлять",
  pos: "verb",
  hsd: ["{{word:xiang3}}-{{word:xiang3}}", "{{word:xiang3}}"],
  tts: ["想想", "想"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我想一下。",
      en: "I'll think about it.",
      ru: "Я подумаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "你想一下。",
      en: "Think about it.",
      ru: "Подумай.",
    },
  ],
});
