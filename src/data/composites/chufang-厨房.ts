import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 814,
  phase: 2,
  zh: "厨房",
  py: "chúfáng",
  en: "kitchen",
  ru: "кухня",
  pos: "noun",
  hsd: [
    "{{word:zuo4}}-{{word:chi1}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["做吃的东西的地方"],
  literal: "the place where you make food",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["room"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:zuo4}}-{{word:chi1}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我在做吃的东西的地方。",
      en: "I'm in the kitchen.",
      ru: "Я на кухне.",
    },
    {
      pinyin: "{{Word:zuo4}}-{{word:chi1}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "做吃的东西的地方很大。",
      en: "The kitchen is big.",
      ru: "Кухня большая.",
    },
  ],
});
