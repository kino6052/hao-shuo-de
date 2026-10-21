import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 607,
  phase: 2,
  zh: "任何",
  py: "rènhé",
  en: "any",
  ru: "любой",
  pos: "pronoun",
  hsd: ["{{word:shen2me}} … {{word:dou1}} …"],
  tts: ["什么…都"],
  literal: "whatever … all",
  fit: "natural",
  topics: ["all-and-every"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:shen2me}} {{word:ren2}} {{word:wo3}} {{word:dou1}} {{word:ai4}}.",
      hanzi: "什么人我都爱。",
      en: "I love any kind of person.",
      ru: "Я люблю любых людей.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:ta1}} {{word:dou1}} {{word:chi1}}.",
      hanzi: "什么他都吃。",
      en: "He eats anything.",
      ru: "Он ест всё что угодно.",
    },
  ],
});
