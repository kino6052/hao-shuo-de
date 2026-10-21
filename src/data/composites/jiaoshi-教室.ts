import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 760,
  phase: 2,
  zh: "教室",
  py: "jiàoshì",
  en: "classroom",
  ru: "класс",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}} {{word:fang2}}-{{word:jian1}}"],
  tts: ["学的房间"],
  literal: "the learning room",
  fit: "plain",
  topics: ["school-buildings-and-grounds"],
  isA: ["room"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:xue2}}-{{word:de}} {{word:fang2}}-{{word:jian1}}.",
      hanzi: "我在学的房间。",
      en: "I'm in the classroom.",
      ru: "Я в классе.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:de}} {{word:fang2}}-{{word:jian1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "学的房间很大。",
      en: "The classroom is big.",
      ru: "Класс большой.",
    },
  ],
});
