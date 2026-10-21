import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1011,
  phase: 3,
  zh: "事业",
  py: "shìyè",
  en: "career",
  ru: "карьера, дело жизни",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:zuo4}}"],
  tts: ["工作"],
  literal: "work",
  fit: "natural",
  topics: ["work-and-effort"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我爱工作。",
      en: "I love my career.",
      ru: "Я люблю своё дело.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:gong1}}-{{word:zuo4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他的工作很大。",
      en: "His career is great.",
      ru: "Его карьера велика.",
    },
  ],
});
