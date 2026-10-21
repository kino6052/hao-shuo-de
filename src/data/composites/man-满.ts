import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 862,
  phase: 2,
  zh: "满",
  py: "mǎn",
  en: "full",
  ru: "полный",
  pos: "adjective",
  hsd: ["{{word:mei2}}-{{word:you3}} {{word:di4}}-{{light:fang1}} {{word:le}}"],
  tts: ["没有地方了"],
  literal: "no room left",
  fit: "natural",
  topics: ["enough-and-lacking"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:mei2}} {{word:you3}} {{word:di4}}-{{light:fang1}} {{word:le}}.",
      hanzi: "没有地方了。",
      en: "It's full.",
      ru: "Мест нет.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:li3}} {{word:mei2}} {{word:you3}} {{word:di4}}-{{light:fang1}} {{word:le}}.",
      hanzi: "家里没有地方了。",
      en: "The house is full.",
      ru: "В доме нет места.",
    },
  ],
});
