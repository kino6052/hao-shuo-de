import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1424,
  phase: 3,
  zh: "退",
  py: "tuì",
  en: "go back, retreat",
  ru: "отступать",
  pos: "verb",
  hsd: ["{{word:hui2}}-{{word:qu4}}"],
  tts: ["回去"],
  literal: "go back",
  fit: "natural",
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hui2}}-{{word:qu4}}.",
      hanzi: "我回去。",
      en: "I go back.",
      ru: "Я возвращаюсь.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:hui2}}-{{word:qu4}} {{word:ma}}?",
      hanzi: "你要回去吗？",
      en: "Do you want to go back?",
      ru: "Ты хочешь вернуться?",
    },
  ],
});
