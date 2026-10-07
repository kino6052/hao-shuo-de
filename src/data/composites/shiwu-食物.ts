import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 336,
  phase: 1,
  zh: "食物",
  py: "shíwù",
  en: "food",
  ru: "еда",
  pos: "noun",
  hsd: ["{{word:shi2}}-{{word:wu4}}", "{{word:chi1}}-{{word:de}}"],
  tts: ["食物", "吃的"],
  literal: "eaten thing",
  fit: "natural",
  note: "Lesson {{lesson:roles-of-a-word}}.",
  examples: [
    {
      pinyin: "{{Word:jia1}}-{{word:li3}} {{word:mei2}}-{{word:you3}} {{word:shi2}}-{{word:wu4}} {{word:le}}.",
      hanzi: "家里没有食物了。",
      en: "There's no food left at home.",
      ru: "Дома кончилась еда.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:chi1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你有吃的吗？",
      en: "Do you have anything to eat?",
      ru: "У тебя есть что-нибудь поесть?",
    },
  ],
});
