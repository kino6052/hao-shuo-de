import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 550,
  phase: 2,
  zh: "那边",
  py: "nàbiān",
  en: "over there",
  ru: "там",
  pos: "pronoun",
  hsd: ["{{word:na4}}-{{word:bian1}}"],
  tts: ["那边"],
  literal: "that side",
  fit: "natural",
  note: "Real Mandarin: 那边.",
  examples: [
    {
      pinyin: "{{Word:na4}}-{{word:bian1}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:fang2}}-{{word:jian1}}.",
      hanzi: "那边有一个房间。",
      en: "There's a room over there.",
      ru: "Там есть комната.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ma1ma}} {{word:zai4}} {{word:na4}}-{{word:bian1}}.",
      hanzi: "我的妈妈在那边。",
      en: "My mom is over there.",
      ru: "Моя мама вон там.",
    },
  ],
});
