import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 50,
  phase: 1,
  zh: "天",
  py: "tiān",
  en: "day",
  ru: "день",
  pos: "noun",
  hsd: ["{{word:tian1}}"],
  tts: ["天"],
  fit: "word",
  note: "rì is the sun, and the day.",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:hen3}} {{word:re4}}.",
      hanzi: "今天很热。",
      en: "It's hot today.",
      ru: "Сегодня жарко.",
    },
    {
      pinyin: "{{Word:tian1}} {{word:hen3}} {{word:lan2}}.",
      hanzi: "天很蓝。",
      en: "The sky is very blue.",
      ru: "Небо очень синее.",
    },
  ],
});
