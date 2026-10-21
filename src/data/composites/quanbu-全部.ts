import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1037,
  phase: 3,
  zh: "全部",
  py: "quánbù",
  en: "all, whole",
  ru: "весь, целиком",
  pos: "noun",
  hsd: ["{{word:dou1}}"],
  tts: ["都"],
  fit: "word",
  topics: ["all-and-some"],
  isA: ["amount-word"],
  note: "Everything is shénme-dōu.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:dou1}} {{word:you3}}.",
      hanzi: "我都有。",
      en: "I have all of it.",
      ru: "У меня есть всё.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:dou1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "他们都在家。",
      en: "They are all at home.",
      ru: "Они все дома.",
    },
  ],
});
