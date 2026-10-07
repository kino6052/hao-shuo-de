import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7,
  phase: 1,
  zh: "大",
  py: "dà",
  en: "big",
  ru: "большой",
  pos: "adjective",
  hsd: ["{{word:da4}}"],
  tts: ["大"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang2}}-{{word:jian1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个房间很大。",
      en: "This room is big.",
      ru: "Эта комната большая.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jia1}} {{word:bu4}} {{word:da4}}.",
      hanzi: "他的家不大。",
      en: "His home isn't big.",
      ru: "Его дом небольшой.",
    },
  ],
});
