import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 919,
  phase: 2,
  zh: "麻烦",
  py: "máfan",
  en: "trouble",
  ru: "хлопоты",
  pos: "adjective",
  hsd: ["{{word:nan2}} {{word:zuo4}}", "{{word:you3}} {{word:wen4}}-{{word:ti2}}"],
  tts: ["难做", "有问题"],
  literal: "hard to do / has a problem",
  fit: "plain",
  topics: ["worry-and-fear"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:nan2}} {{word:zuo4}}.",
      hanzi: "这个难做。",
      en: "This is troublesome.",
      ru: "Это хлопотно.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:hen3}} {{word:nan2}} {{word:zuo4}}.",
      hanzi: "那个很难做。",
      en: "That is a lot of trouble.",
      ru: "Это очень хлопотно.",
    },
  ],
});
