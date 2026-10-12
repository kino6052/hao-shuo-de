import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1200,
  phase: 3,
  zh: "设计",
  py: "shèjì",
  en: "design",
  ru: "проектировать, дизайн",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:qian2}}, {{word:xiang3}} {{word:zen3me}} {{word:zuo4}}"],
  tts: ["做前，想怎么做"],
  literal: "before making it, think how",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:qian2}}, {{word:xiang3}} {{word:zen3me}} {{word:zuo4}}.",
      hanzi: "我做前，想怎么做。",
      en: "I design it.",
      ru: "Я проектирую это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:qian2}}, {{word:xiang3}} {{word:zen3me}} {{word:zuo4}}.",
      hanzi: "他做前，想怎么做。",
      en: "He designs it.",
      ru: "Он проектирует это.",
    },
  ],
});
