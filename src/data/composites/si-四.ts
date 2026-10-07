import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 32,
  phase: 1,
  zh: "四",
  py: "sì",
  en: "four",
  ru: "четыре",
  pos: "number",
  hsd: ["{{word:si4}}"],
  tts: ["四"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:si4}} {{word:dian3}} {{word:qu4}}.",
      hanzi: "我们四点去。",
      en: "We'll go at four.",
      ru: "Мы пойдём в четыре.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang2}}-{{word:jian1}} {{word:you3}} {{word:si4}}-{{light:ge4}} {{word:men2}}.",
      hanzi: "这个房间有四个门。",
      en: "This room has four doors.",
      ru: "В этой комнате четыре двери.",
    },
  ],
});
