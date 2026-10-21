import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1046,
  phase: 3,
  zh: "功能",
  py: "gōngnéng",
  en: "function",
  ru: "функция",
  pos: "noun",
  hsd: ["{{word:neng2}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["能做的东西"],
  literal: "what it can do",
  fit: "plain",
  topics: ["farms-and-factories"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:neng2}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这个有很多能做的东西。",
      en: "This has many functions.",
      ru: "У этого много функций.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:neng2}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我知道能做的东西。",
      en: "I know the functions.",
      ru: "Я знаю функции.",
    },
  ],
});
