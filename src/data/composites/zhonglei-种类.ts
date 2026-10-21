import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1163,
  phase: 3,
  zh: "种类",
  py: "zhǒnglèi",
  en: "kind, type",
  ru: "вид, тип",
  pos: "noun",
  hsd: ["{{word:zhong3}}"],
  tts: ["种"],
  fit: "word",
  topics: ["counting-words"],
  isA: ["counting-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:zhong3}}.",
      hanzi: "这有很多种。",
      en: "There are many kinds.",
      ru: "Здесь много видов.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:na3}} {{word:zhong3}}?",
      hanzi: "你要哪种？",
      en: "Which kind do you want?",
      ru: "Какой вид ты хочешь?",
    },
  ],
});
