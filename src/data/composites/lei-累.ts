import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 452,
  phase: 1,
  zh: "累",
  py: "lèi",
  en: "tired",
  ru: "уставший",
  pos: "adjective",
  hsd: ["{{word:mei2}}-{{word:you3}} {{word:li4}} {{word:le}}", "{{word:xiang3}} {{word:shui4jiao4}}"],
  tts: ["没有力了", "想睡觉"],
  literal: "no strength left / would like to sleep",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zou3}} {{word:le}} {{word:hen3}} {{word:duo1}} {{word:lu4}}, {{word:mei2}}-{{word:you3}} {{word:li4}} {{word:le}}.",
      hanzi: "我走了很多路，没有力了。",
      en: "I've walked a long way; I'm tired.",
      ru: "Я много прошёл и устал.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:xiang3}} {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "孩子想睡觉了。",
      en: "The child is tired.",
      ru: "Ребёнок устал.",
    },
  ],
});
