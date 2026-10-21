import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1412,
  phase: 3,
  zh: "诚实",
  py: "chéngshí",
  en: "honest",
  ru: "честный",
  pos: "adjective",
  hsd: ["{{word:shuo1}} {{word:zhen1}}-{{word:de}}"],
  tts: ["说真的"],
  literal: "says what's true",
  fit: "plain",
  topics: ["kind-honest-and-mean"],
  isA: ["character-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我说真的。",
      en: "I am honest.",
      ru: "Я говорю честно.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shuo1}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "你要说真的。",
      en: "You must be honest.",
      ru: "Ты должен говорить честно.",
    },
  ],
});
