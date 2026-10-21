import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1407,
  phase: 3,
  zh: "认",
  py: "rèn",
  en: "recognize",
  ru: "узнавать",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:dao4}} {{word:jiu4}} {{word:zhi1dao4}}"],
  tts: ["看到就知道"],
  literal: "see it and know it",
  fit: "plain",
  topics: ["looking-and-checking"],
  isA: ["perceiving"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:jiu4}} {{word:zhi1dao4}} {{word:ta1}}.",
      hanzi: "我看到就知道他。",
      en: "I recognize him at a glance.",
      ru: "Я узнаю его с первого взгляда.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:dao4}} {{word:jiu4}} {{word:zhi1dao4}} {{word:ma}}?",
      hanzi: "你看到就知道吗？",
      en: "Will you recognize it when you see it?",
      ru: "Ты узнаешь это, как только увидишь?",
    },
  ],
});
