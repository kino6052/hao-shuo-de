import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1128,
  phase: 3,
  zh: "条件",
  py: "tiáojiàn",
  en: "condition, requirement",
  ru: "условие",
  pos: "noun",
  hsd: ["{{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["要的东西"],
  literal: "what's needed",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是我要的东西。",
      en: "These are my requirements.",
      ru: "Таковы мои требования.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你要的东西是什么？",
      en: "What are your conditions?",
      ru: "Каковы твои условия?",
    },
  ],
});
