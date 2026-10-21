import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1224,
  phase: 3,
  zh: "食品",
  py: "shípǐn",
  en: "food",
  ru: "еда, продукты",
  pos: "noun",
  hsd: ["{{word:shi2}}-{{word:wu4}}", "{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["食物", "吃的东西"],
  literal: "things to eat",
  fit: "natural",
  topics: ["eating-and-drinking"],
  isA: ["food-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我买吃的东西。",
      en: "I buy food.",
      ru: "Я покупаю продукты.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:hen3}}-{{word:duo1}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这里有很多吃的东西。",
      en: "There is a lot of food here.",
      ru: "Здесь много продуктов.",
    },
  ],
});
