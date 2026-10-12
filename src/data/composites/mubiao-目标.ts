import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1154,
  phase: 3,
  zh: "目标",
  py: "mùbiāo",
  en: "goal",
  ru: "цель",
  pos: "noun",
  hsd: [
    "{{word:yao4}} {{word:zuo4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:yao4}} {{word:dao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["要做到的东西", "要到的地方"],
  literal: "where you want to get to",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:yao4}} {{word:zuo4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是我要做到的东西。",
      en: "This is my goal.",
      ru: "Это моя цель.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:zuo4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你要做到的东西是什么？",
      en: "What is your goal?",
      ru: "Какова твоя цель?",
    },
  ],
});
