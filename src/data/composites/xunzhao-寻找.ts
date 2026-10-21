import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1074,
  phase: 3,
  zh: "寻找",
  py: "xúnzhǎo",
  en: "look for",
  ru: "искать",
  pos: "verb",
  hsd: ["{{word:zhao3}}"],
  tts: ["找"],
  fit: "word",
  topics: ["seeing-and-looking"],
  isA: ["perceiving"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}} {{word:ni3}}.",
      hanzi: "我找你。",
      en: "I'm looking for you.",
      ru: "Я ищу тебя.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhao3}} {{word:jia1}}.",
      hanzi: "他找家。",
      en: "He is looking for a home.",
      ru: "Он ищет дом.",
    },
  ],
});
