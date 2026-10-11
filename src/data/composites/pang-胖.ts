import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 536,
  phase: 2,
  zh: "胖",
  py: "pàng",
  en: "fat",
  ru: "толстый",
  pos: "adjective",
  hsd: ["{{word:du4zi}} {{word:hen3}} {{word:da4}}"],
  tts: ["肚子很大"],
  literal: "the belly is very big",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:du4zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他肚子很大。",
      en: "He's fat.",
      ru: "Он толстый.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong4}}-{{word:wu4}} {{word:du4zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个动物肚子很大。",
      en: "This animal is fat.",
      ru: "Это животное толстое.",
    },
  ],
});
