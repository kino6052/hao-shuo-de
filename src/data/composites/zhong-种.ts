import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 684,
  phase: 2,
  zh: "种",
  py: "zhǒng",
  en: "kind",
  ru: "вид",
  pos: "classifier",
  hsd: ["{{word:zhong3}}"],
  tts: ["种"],
  fit: "word",
  topics: ["kinds-sets-and-groups"],
  isA: ["counting-word"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:ai4}} {{word:na3}} {{word:yi1}}-{{word:zhong3}}?",
      hanzi: "你爱哪一种？",
      en: "Which kind do you like?",
      ru: "Какой вид тебе нравится?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:san1}}-{{word:zhong3}} {{word:shu1}}.",
      hanzi: "我有三种书。",
      en: "I have three kinds of books.",
      ru: "У меня три вида книг.",
    },
  ],
});
