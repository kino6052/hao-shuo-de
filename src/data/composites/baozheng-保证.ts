import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1035,
  phase: 3,
  zh: "保证",
  py: "bǎozhèng",
  en: "guarantee",
  ru: "гарантировать",
  pos: "verb",
  hsd: ["{{word:shuo1}} X {{word:shi4}} {{word:zhen1}}-{{word:de}}"],
  tts: ["说X是真的"],
  literal: "say that X is true",
  fit: "plain",
  topics: ["advising-and-promising"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我说这个是真的。",
      en: "I guarantee it.",
      ru: "Ручаюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:na4}}-{{light:ge4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "他说那个是真的。",
      en: "He guarantees it.",
      ru: "Он ручается.",
    },
  ],
});
