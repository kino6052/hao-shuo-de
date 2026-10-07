import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 146,
  phase: 1,
  zh: "几",
  py: "jǐ",
  en: "how many",
  ru: "сколько",
  pos: "pronoun",
  hsd: ["{{word:duo1}}-{{word:shao3}}"],
  tts: ["多少"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:duo1}}-{{word:shao3}} {{word:hai2}}-{{word:zi}}?",
      hanzi: "你有多少孩子？",
      en: "How many children do you have?",
      ru: "Сколько у тебя детей?",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:men}} {{word:you3}} {{word:duo1}}-{{word:shao3}} {{word:ren2}}?",
      hanzi: "你们有多少人？",
      en: "How many of you are there?",
      ru: "Сколько вас?",
    },
  ],
});
