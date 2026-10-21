import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 698,
  phase: 2,
  zh: "自由",
  py: "zìyóu",
  en: "free; freedom",
  ru: "свободный; свобода",
  pos: "adjective",
  hsd: ["{{word:shen2me}} {{word:dou1}} {{word:neng2}} {{word:zuo4}}"],
  tts: ["什么都能做"],
  literal: "can do anything",
  fit: "plain",
  topics: ["law-and-crime"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:shen2me}} {{word:wo3}} {{word:dou1}} {{word:neng2}} {{word:zuo4}}.",
      hanzi: "什么我都能做。",
      en: "I'm free to do anything.",
      ru: "Я свободен делать что угодно.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:ta1}} {{word:dou1}} {{word:neng2}} {{word:zuo4}}.",
      hanzi: "什么他都能做。",
      en: "He is free to do anything.",
      ru: "Он свободен делать что угодно.",
    },
  ],
});
