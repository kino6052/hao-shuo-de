import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1171,
  phase: 3,
  zh: "类",
  py: "lèi",
  en: "category, kind",
  ru: "категория, вид",
  pos: "noun",
  hsd: ["{{word:zhong3}}"],
  tts: ["种"],
  fit: "word",
  topics: ["counting-words"],
  isA: ["counting-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhe4}} {{word:zhong3}}.",
      hanzi: "我爱这种。",
      en: "I like this kind.",
      ru: "Я люблю этот вид.",
    },
    {
      pinyin: "{{Word:na4}} {{word:zhong3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那种很好。",
      en: "That kind is good.",
      ru: "Тот вид хороший.",
    },
  ],
});
