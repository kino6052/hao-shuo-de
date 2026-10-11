import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 594,
  phase: 2,
  zh: "目的",
  py: "mùdì",
  en: "purpose",
  ru: "цель",
  pos: "noun",
  hsd: ["{{word:yao4}} {{word:zuo4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["要做到的东西"],
  literal: "the thing you want to get done",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zuo4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "我要做到的东西是什么？",
      en: "What is my purpose?",
      ru: "Какова моя цель?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:zuo4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你要做到的东西很好。",
      en: "Your purpose is good.",
      ru: "Твоя цель хороша.",
    },
  ],
});
