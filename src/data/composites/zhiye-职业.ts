import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1175,
  phase: 3,
  zh: "职业",
  py: "zhíyè",
  en: "occupation",
  ru: "профессия",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:zuo4}}"],
  tts: ["工作"],
  literal: "work",
  fit: "plain",
  topics: ["jobs"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:wo3}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我爱我的工作。",
      en: "I love my occupation.",
      ru: "Я люблю свою профессию.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:gong1}}-{{word:zuo4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的工作很好。",
      en: "His occupation is good.",
      ru: "У него хорошая профессия.",
    },
  ],
});
