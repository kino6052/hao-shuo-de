import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1370,
  phase: 3,
  zh: "涨",
  py: "zhǎng",
  en: "rise (go up)",
  ru: "подниматься, расти",
  pos: "verb",
  hsd: ["{{word:bian4}} {{word:gao1}}"],
  tts: ["变高"],
  literal: "become high",
  fit: "plain",
  topics: ["increasing-and-rising"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:gao1}} {{word:le}}.",
      hanzi: "水变高了。",
      en: "The water has risen.",
      ru: "Вода поднялась.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:shui3}} {{word:bian4}} {{word:gao1}} {{word:le}}.",
      hanzi: "这里的水变高了。",
      en: "The water here has risen.",
      ru: "Вода здесь поднялась.",
    },
  ],
});
