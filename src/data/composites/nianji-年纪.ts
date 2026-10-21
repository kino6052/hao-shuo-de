import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1325,
  phase: 3,
  zh: "年纪",
  py: "niánjì",
  en: "age",
  ru: "возраст",
  pos: "noun",
  hsd: ["{{word:duo1}} {{word:da4}}"],
  tts: ["多大"],
  literal: "how big",
  fit: "natural",
  topics: ["young-and-old"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:duo1}} {{word:da4}}?",
      hanzi: "你多大？",
      en: "How old are you?",
      ru: "Сколько тебе лет?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba4ba}} {{word:duo1}} {{word:da4}}?",
      hanzi: "他爸爸多大？",
      en: "How old is his father?",
      ru: "Сколько лет его отцу?",
    },
  ],
});
