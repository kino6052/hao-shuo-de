import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 106,
  phase: 1,
  zh: "时间",
  py: "shíjiān",
  en: "time",
  ru: "время",
  pos: "noun",
  hsd: ["{{word:shi2}}-{{word:jian1}}"],
  tts: ["时间"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我没有时间。",
      en: "I don't have time.",
      ru: "У меня нет времени.",
    },
    {
      pinyin: "{{Word:shi2}}-{{word:jian1}} {{word:dao4}} {{word:le}}.",
      hanzi: "时间到了。",
      en: "Time's up.",
      ru: "Время вышло.",
    },
  ],
});
