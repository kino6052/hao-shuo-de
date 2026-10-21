import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1356,
  phase: 3,
  zh: "月份",
  py: "yuèfèn",
  en: "month",
  ru: "месяц",
  pos: "noun",
  hsd: ["{{word:yue4}}"],
  tts: ["月"],
  fit: "word",
  topics: ["weeks-months-and-deadlines"],
  isA: ["calendar-name"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yue4}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "这个月很冷。",
      en: "This month is cold.",
      ru: "Этот месяц холодный.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:sheng1}}-{{word:ri4}} {{word:zai4}} {{word:shen2me}} {{word:yue4}}?",
      hanzi: "你生日在什么月？",
      en: "Which month is your birthday in?",
      ru: "В каком месяце твой день рождения?",
    },
  ],
});
