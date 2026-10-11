import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 535,
  phase: 2,
  zh: "肚子",
  py: "dùzi",
  en: "belly",
  ru: "живот",
  pos: "noun",
  hsd: ["{{word:du4zi}}"],
  tts: ["肚子"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:du4zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的肚子很大。",
      en: "My belly is big.",
      ru: "У меня большой живот.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:du4zi}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "我的肚子不好。",
      en: "My belly isn't well.",
      ru: "У меня болит живот.",
    },
  ],
});
