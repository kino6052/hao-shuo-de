import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 739,
  phase: 2,
  zh: "全都",
  py: "quándōu",
  en: "all",
  ru: "все",
  pos: "adverb",
  hsd: ["{{word:dou1}}"],
  tts: ["都"],
  fit: "word",
  topics: ["all-and-some"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:lai2}}.",
      hanzi: "我们都来。",
      en: "We are all coming.",
      ru: "Мы все придём.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:dou1}} {{word:hao3}}.",
      hanzi: "他们都好。",
      en: "They are all fine.",
      ru: "У них всё хорошо.",
    },
  ],
});
