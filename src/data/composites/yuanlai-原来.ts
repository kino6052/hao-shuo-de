import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 621,
  phase: 2,
  zh: "原来",
  py: "yuánlái",
  en: "originally",
  ru: "изначально",
  pos: "noun",
  hsd: [
    "{{word:yuan2}}-{{word:lai2}}",
    "{{word:zai4}} {{word:kai1shi3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["原来", "在开始的时间"],
  literal: "at the start",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["before-and-after"],
  isA: ["time-order"],
  examples: [
    {
      pinyin: "{{Word:zai4}} {{word:kai1shi3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "在开始的时间，我在家。",
      en: "At first I was at home.",
      ru: "Сначала я был дома.",
    },
    {
      pinyin: "{{Word:zai4}} {{word:kai1shi3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "在开始的时间，他不来。",
      en: "At first he wasn't coming.",
      ru: "Сначала он не приходил.",
    },
  ],
});
