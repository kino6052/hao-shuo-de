import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 644,
  phase: 2,
  zh: "年龄",
  py: "niánlíng",
  en: "age",
  ru: "возраст",
  pos: "noun",
  hsd: ["{{word:duo1}} {{word:da4}}"],
  tts: ["多大"],
  literal: "how big",
  fit: "natural",
  topics: ["young-and-old"],
  isA: ["idea"],
  note: "nǐ duō dà? How old are you?",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:duo1}} {{word:da4}}?",
      hanzi: "你多大？",
      en: "How old are you?",
      ru: "Сколько тебе лет?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:duo1}} {{word:da4}} {{word:le}}?",
      hanzi: "他多大了？",
      en: "How old is he?",
      ru: "Сколько ему лет?",
    },
  ],
});
