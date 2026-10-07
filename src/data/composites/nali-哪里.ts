import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 156,
  phase: 1,
  zh: "哪里",
  py: "nǎlǐ",
  en: "where",
  ru: "где",
  pos: "pronoun",
  hsd: ["{{word:na3}}-{{word:li3}}"],
  tts: ["哪里"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你在哪里？",
      en: "Where are you?",
      ru: "Где ты?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jia1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你家在哪里？",
      en: "Where's your home?",
      ru: "Где твой дом?",
    },
  ],
});
