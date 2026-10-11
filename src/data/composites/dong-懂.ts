import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 403,
  phase: 1,
  zh: "懂",
  py: "dǒng",
  en: "understand",
  ru: "понимать",
  pos: "verb",
  hsd: ["{{word:ming2}}-{{word:bai2}}", "{{word:zhi1dao4}}"],
  tts: ["明白", "知道"],
  literal: "understand / know",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:ming2}}-{{word:bai2}}.",
      hanzi: "我不明白。",
      en: "I don't understand.",
      ru: "Я не понимаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ming2}}-{{word:bai2}} {{word:wo3}} {{word:shuo1}}-{{word:de}} {{word:hua4}} {{word:ma}}?",
      hanzi: "你明白我说的话吗？",
      en: "Do you understand what I'm saying?",
      ru: "Ты понимаешь, что я говорю?",
    },
  ],
});
