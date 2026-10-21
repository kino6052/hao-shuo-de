import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1375,
  phase: 3,
  zh: "熟悉",
  py: "shúxi",
  en: "familiar with",
  ru: "хорошо знакомый",
  pos: "verb",
  hsd: ["{{word:hen3}} {{word:zhi1dao4}}"],
  tts: ["很知道"],
  literal: "know well",
  fit: "plain",
  topics: ["remembering-and-forgetting"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:zhi1dao4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "我很知道这里。",
      en: "I am familiar with this place.",
      ru: "Я хорошо знаю это место.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:zhi1dao4}} {{word:ni3}}.",
      hanzi: "他很知道你。",
      en: "He knows you well.",
      ru: "Он хорошо тебя знает.",
    },
  ],
});
