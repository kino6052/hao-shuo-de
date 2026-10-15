import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 775,
  phase: 2,
  zh: "算",
  py: "suàn",
  en: "calculate",
  ru: "считать, вычислять",
  pos: "verb",
  hsd: ["{{word:suan4}}"],
  tts: ["算"],
  fit: "word",
  note: "Lesson {{lesson:time-and-sums}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:suan4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我算这个。",
      en: "I calculate this.",
      ru: "Я считаю это.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:suan4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "你算一下。",
      en: "Calculate it.",
      ru: "Посчитай.",
    },
  ],
});
