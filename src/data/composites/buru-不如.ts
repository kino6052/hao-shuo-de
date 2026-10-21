import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1228,
  phase: 3,
  zh: "不如",
  py: "bùrú",
  en: "not as good as",
  ru: "хуже, чем",
  pos: "verb",
  hsd: ["{{word:mei2}}-{{word:you3}} X {{word:hao3}}"],
  tts: ["没有X好"],
  literal: "not as good as X",
  fit: "plain",
  topics: ["same-and-different"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:ta1}} {{word:hao3}}.",
      hanzi: "我没有他好。",
      en: "I'm not as good as him.",
      ru: "Я не так хорош, как он.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:mei2}}-{{word:you3}} {{word:na4}}-{{light:ge4}} {{word:hao3}}.",
      hanzi: "这个没有那个好。",
      en: "This one is not as good as that one.",
      ru: "Этот не так хорош, как тот.",
    },
  ],
});
