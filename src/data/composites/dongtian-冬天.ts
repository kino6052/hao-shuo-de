import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 360,
  phase: 1,
  zh: "冬天",
  py: "dōngtiān",
  en: "winter",
  ru: "зима",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{word:tian1}}", "{{word:leng3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["冬天", "冷的时间"],
  literal: "cold time",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:dong1}}-{{word:tian1}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "冬天很冷。",
      en: "Winter is cold.",
      ru: "Зимой холодно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:dong1}}-{{word:tian1}}.",
      hanzi: "我爱冬天。",
      en: "I love winter.",
      ru: "Я люблю зиму.",
    },
  ],
});
