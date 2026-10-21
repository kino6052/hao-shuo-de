import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1043,
  phase: 3,
  zh: "到达",
  py: "dàodá",
  en: "arrive",
  ru: "прибыть",
  pos: "verb",
  hsd: ["{{word:dao4}}"],
  tts: ["到"],
  fit: "word",
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}.",
      hanzi: "我到家了。",
      en: "I've arrived home.",
      ru: "Я добрался домой.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ming2}}-{{word:tian1}} {{word:dao4}}.",
      hanzi: "他明天到。",
      en: "He arrives tomorrow.",
      ru: "Он прибудет завтра.",
    },
  ],
});
