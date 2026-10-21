import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 918,
  phase: 2,
  zh: "鸡蛋",
  py: "jīdàn",
  en: "egg",
  ru: "яйцо",
  pos: "noun",
  hsd: [
    "{{word:ji1}}-{{word:dan4}}",
    "{{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["鸡蛋", "飞的动物生的东西"],
  literal: "what flying animals give birth to",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["meat"],
  isA: ["dairy-or-egg"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:ji1}}-{{word:dan4}}.",
      hanzi: "我吃鸡蛋。",
      en: "I eat an egg.",
      ru: "Я ем яйцо.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:ji1}}-{{word:dan4}} {{word:ma}}?",
      hanzi: "你要鸡蛋吗？",
      en: "Do you want an egg?",
      ru: "Хочешь яйцо?",
    },
  ],
});
