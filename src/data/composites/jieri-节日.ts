import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 887,
  phase: 2,
  zh: "节日",
  py: "jiérì",
  en: "festival, holiday",
  ru: "праздник",
  pos: "noun",
  hsd: ["{{word:kai1}}-{{word:xin1}}-{{word:de}} {{word:ri4}}"],
  tts: ["开心的日"],
  literal: "a happy day",
  fit: "plain",
  topics: ["holidays-and-festivals"],
  isA: ["event"],
  examples: [
    {
      pinyin: "{{Word:kai1}}-{{word:xin1}}-{{word:de}} {{word:ri4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "开心的日很多。",
      en: "There are many holidays.",
      ru: "Праздников много.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:shi4}} {{word:kai1}}-{{word:xin1}}-{{word:de}} {{word:ri4}}.",
      hanzi: "今天是开心的日。",
      en: "Today is a holiday.",
      ru: "Сегодня праздник.",
    },
  ],
});
