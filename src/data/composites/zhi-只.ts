import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 151,
  phase: 1,
  zh: "只",
  py: "zhǐ",
  en: "only",
  ru: "только",
  pos: "adverb",
  hsd: ["{{word:zhi3}}", "{{word:jiu4}}"],
  tts: ["只", "就"],
  literal: "just",
  fit: "word",
  note: "wǒ jiù yǒu yī-ge: I only have one.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi3}} {{word:you3}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "我只有一个。",
      en: "I only have one.",
      ru: "У меня только один.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "他只喝水。",
      en: "He only drinks water.",
      ru: "Он пьёт только воду.",
    },
  ],
});
