import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1216,
  phase: 3,
  zh: "通过",
  py: "tōngguò",
  en: "pass through; through; by means of; via",
  ru: "через; посредством",
  pos: "verb",
  hsd: [
    "{{word:tong1}}-{{word:guo4}}",
    "{{word:cong2}} X {{word:zou3}}-{{word:guo4}}",
    "{{word:yong4}} X",
  ],
  tts: ["通过", "从X走过", "用X"],
  literal: "go through",
  fit: "natural",
  kinds: ["spelled", "built", "built"],
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:tong1}}-{{word:guo4}} {{word:le}}.",
      hanzi: "我通过了。",
      en: "I passed.",
      ru: "Я прошёл.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:tong1}}-{{word:guo4}} {{word:men2}} {{word:jin4}}-{{word:lai2}}.",
      hanzi: "他通过门进来。",
      en: "He came in through the door.",
      ru: "Он вошёл через дверь.",
    },
  ],
});
