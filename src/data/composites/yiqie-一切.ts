import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1001,
  phase: 3,
  zh: "一切",
  py: "yíqiè",
  en: "everything",
  ru: "всё",
  pos: "pronoun",
  hsd: ["{{word:shen2me}}-{{word:dou1}}"],
  tts: ["什么都"],
  fit: "natural",
  note: "Lesson {{lesson:also-and-all}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen2me}} {{word:dou1}} {{word:you3}}.",
      hanzi: "我什么都有。",
      en: "I have everything.",
      ru: "У меня есть всё.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}} {{word:dou1}} {{word:zhi1dao4}}.",
      hanzi: "他什么都知道。",
      en: "He knows everything.",
      ru: "Он знает всё.",
    },
  ],
});
