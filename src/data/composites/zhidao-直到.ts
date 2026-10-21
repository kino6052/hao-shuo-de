import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1385,
  phase: 3,
  zh: "直到",
  py: "zhídào",
  en: "until",
  ru: "до тех пор пока",
  pos: "verb",
  hsd: ["{{word:dao4}} X-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["到X的时间"],
  literal: "up to the time of X",
  fit: "plain",
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:deng3}} {{word:dao4}} {{word:ta1}} {{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我等到他来的时间。",
      en: "I wait until he comes.",
      ru: "Я жду, пока он придёт.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:dao4}} {{word:ni3}} {{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我做到你来的时间。",
      en: "I work until you come.",
      ru: "Я работаю, пока ты не придёшь.",
    },
  ],
});
