import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 842,
  phase: 2,
  zh: "张",
  py: "zhāng",
  en: "(counting word for flat things)",
  ru: "(счётное слово)",
  pos: "verb",
  hsd: ["{{word:ge4}}"],
  tts: ["个"],
  fit: "word",
  topics: ["counting-words"],
  isA: ["counting-word"],
  note: "Hao-shuo-de uses gè for everything.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:san1}}-{{light:ge4}}.",
      hanzi: "我有三个。",
      en: "I have three.",
      ru: "У меня три.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:duo1}}-{{word:shao3}}-{{light:ge4}}?",
      hanzi: "你有多少个？",
      en: "How many do you have?",
      ru: "Сколько у тебя?",
    },
  ],
});
