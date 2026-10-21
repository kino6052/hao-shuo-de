import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1205,
  phase: 3,
  zh: "调查",
  py: "diàochá",
  en: "investigate; survey",
  ru: "расследовать",
  pos: "verb",
  hsd: [
    "{{word:hao3}}-{{word:hao3}} {{word:kan4}}, {{word:hao3}}-{{word:hao3}} {{word:xue2}}",
    "{{word:hao3}}-{{word:hao3}} {{word:kan4}}, {{word:zhao3}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["好好看，好好学", "好好看，找真的"],
  literal: "look carefully, study carefully / look carefully, find what is true",
  fit: "plain",
  topics: ["thinking-and-researching"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hao3}}-{{word:hao3}} {{word:kan4}}, {{word:zhao3}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我好好看，找真的。",
      en: "I'm investigating.",
      ru: "Я расследую.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:deng3}} {{word:ta1}} {{word:hao3}}-{{word:hao3}} {{word:kan4}}, {{word:zhao3}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我等他好好看，找真的。",
      en: "I'm waiting for him to investigate.",
      ru: "Я жду, пока он проведёт расследование.",
    },
  ],
});
