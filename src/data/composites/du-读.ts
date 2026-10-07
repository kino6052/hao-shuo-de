import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 329,
  phase: 1,
  zh: "读",
  py: "dú",
  en: "read",
  ru: "читать",
  pos: "verb",
  hsd: ["{{word:kan4}}"],
  tts: ["看"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:guo4}} {{word:zhe4}}-{{light:ge4}} {{word:shu1}} {{word:ma}}?",
      hanzi: "你看过这个书吗？",
      en: "Have you read this book?",
      ru: "Ты читал эту книгу?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} \"Zhōngguó\"-{{word:de}} {{word:shu1}}.",
      hanzi: "我爱看中国的书。",
      en: "I love reading Chinese books.",
      ru: "Я люблю читать китайские книги.",
    },
  ],
});
