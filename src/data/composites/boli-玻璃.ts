import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 866,
  phase: 2,
  zh: "玻璃",
  py: "bōli",
  en: "glass",
  ru: "стекло",
  pos: "noun",
  hsd: ["{{word:tong1}}-{{word:kan4}}-{{word:de}} {{word:liao4}}"],
  tts: ["通看的料"],
  literal: "material you can see through",
  fit: "plain",
  topics: ["materials"],
  isA: ["material"],
  examples: [
    {
      pinyin: "{{Word:tong1}}-{{word:kan4}}-{{word:de}} {{word:liao4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "通看的料很大。",
      en: "The glass is big.",
      ru: "Стекло большое.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:you3}} {{word:tong1}}-{{word:kan4}}-{{word:de}} {{word:liao4}}.",
      hanzi: "家有通看的料。",
      en: "The house has glass.",
      ru: "В доме есть стекло.",
    },
  ],
});
