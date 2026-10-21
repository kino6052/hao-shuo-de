import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1059,
  phase: 3,
  zh: "唯一",
  py: "wéiyī",
  en: "only, sole",
  ru: "единственный",
  pos: "adjective",
  hsd: ["{{word:jiu4}} {{word:yi1}}-ge"],
  tts: ["就一个"],
  literal: "just one",
  fit: "plain",
  topics: ["half-both-and-only-one"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "我就一个。",
      en: "I have only one.",
      ru: "У меня только один.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:jiu4}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "家就一个。",
      en: "There is only one home.",
      ru: "Дом только один.",
    },
  ],
});
