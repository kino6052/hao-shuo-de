import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1246,
  phase: 3,
  zh: "住房",
  py: "zhùfáng",
  en: "housing",
  ru: "жильё",
  pos: "noun",
  hsd: ["{{word:jia1}}"],
  tts: ["家"],
  fit: "word",
  topics: ["housing"],
  isA: ["place"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:yao4}} {{word:jia1}}.",
      hanzi: "我们都要家。",
      en: "We all need housing.",
      ru: "Всем нам нужно жильё.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:jia1}}.",
      hanzi: "他没有家。",
      en: "He has no housing.",
      ru: "У него нет жилья.",
    },
  ],
});
