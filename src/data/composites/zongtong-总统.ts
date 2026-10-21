import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1093,
  phase: 3,
  zh: "总统",
  py: "zǒngtǒng",
  en: "president; presidential",
  ru: "президент",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jue2}}-{{word:ding4}}-{{word:zhe3}}"],
  tts: ["国家的决定者"],
  literal: "the one who decides for the country",
  fit: "plain",
  topics: ["government"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jue2}}-{{word:ding4}}-{{word:zhe3}}.",
      hanzi: "他是国家的决定者。",
      en: "He is the president.",
      ru: "Он президент.",
    },
    {
      pinyin: "{{Word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jue2}}-{{word:ding4}}-{{word:zhe3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "国家的决定者在家。",
      en: "The president is at home.",
      ru: "Президент дома.",
    },
  ],
});
