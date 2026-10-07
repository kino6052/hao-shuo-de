import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 179,
  phase: 1,
  zh: "拿",
  py: "ná",
  en: "take, hold",
  ru: "брать, держать",
  pos: "verb",
  hsd: ["{{word:na2}}"],
  tts: ["拿"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:na2}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "你拿这个。",
      en: "Take this.",
      ru: "Возьми это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:na2}} {{word:le}} {{word:wo3}}-{{word:de}} {{word:bao1}}.",
      hanzi: "他拿了我的包。",
      en: "He took my bag.",
      ru: "Он взял мою сумку.",
    },
  ],
});
