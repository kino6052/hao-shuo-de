import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 708,
  phase: 2,
  zh: "课本",
  py: "kèběn",
  en: "textbook",
  ru: "учебник",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}} {{word:shu1}}"],
  tts: ["学的书"],
  literal: "the book for studying",
  fit: "plain",
  topics: ["pens-books-and-school-bags"],
  isA: ["paper-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:shu1}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "我的学的书在家里。",
      en: "My textbook is at home.",
      ru: "Мой учебник дома.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:xue2}}-{{word:de}} {{word:shu1}} {{word:ma}}?",
      hanzi: "你有学的书吗？",
      en: "Do you have the textbook?",
      ru: "У тебя есть учебник?",
    },
  ],
});
