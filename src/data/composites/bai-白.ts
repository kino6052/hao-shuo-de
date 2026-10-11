import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 445,
  phase: 1,
  zh: "白",
  py: "bái",
  en: "white",
  ru: "белый",
  pos: "adjective",
  hsd: ["{{word:bai2}}", "{{word:bai2}}-{{word:se4}}"],
  tts: ["白", "白色"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "她的衣服是白色的。",
      en: "Her clothes are white.",
      ru: "У неё белая одежда.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}}-{{light:fa1}} {{word:bai2}} {{word:le}}.",
      hanzi: "他的头发白了。",
      en: "His hair has gone white.",
      ru: "Он поседел.",
    },
  ],
});
