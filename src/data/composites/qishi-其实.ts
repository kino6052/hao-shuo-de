import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 265,
  phase: 1,
  zh: "其实",
  py: "qíshí",
  en: "actually",
  ru: "на самом деле",
  pos: "adverb",
  hsd: ["{{word:zhen1}}"],
  tts: ["真"],
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zhen1}} {{word:bu4}} {{word:zhi1dao4}}.",
      hanzi: "他真不知道。",
      en: "He really doesn't know.",
      ru: "Он правда не знает.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zhen1}} {{word:bu4}} {{word:nan2}}.",
      hanzi: "这个真不难。",
      en: "This actually isn't hard.",
      ru: "Это на самом деле несложно.",
    },
  ],
});
