import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 246,
  phase: 1,
  zh: "跑",
  py: "pǎo",
  en: "run",
  ru: "бегать",
  pos: "verb",
  hsd: ["{{word:kuai4}} {{word:zou3}}"],
  tts: ["快走"],
  literal: "go fast",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:kuai4}} {{word:zou3}}! {{Word:ta1}} {{word:lai2}} {{word:le}}!",
      hanzi: "快走！他来了！",
      en: "Run! He's coming!",
      ru: "Беги! Он идёт!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kuai4}} {{word:zou3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "他快走回家。",
      en: "He runs home.",
      ru: "Он бежит домой.",
    },
  ],
});
