import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 716,
  phase: 2,
  zh: "选择",
  py: "xuǎnzé",
  en: "choose",
  ru: "выбирать",
  pos: "verb",
  hsd: ["{{word:na2}} {{word:yi1}}-ge"],
  tts: ["拿一个"],
  literal: "take one",
  fit: "plain",
  topics: ["deciding"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:na2}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "你拿一个。",
      en: "You pick one.",
      ru: "Ты выбираешь один.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:na2}} {{word:yi1}}-{{light:ge4}} {{word:hao3}}-{{word:de}}.",
      hanzi: "我拿一个好的。",
      en: "I choose a good one.",
      ru: "Я выбираю хороший.",
    },
  ],
});
