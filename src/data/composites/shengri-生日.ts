import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 441,
  phase: 1,
  zh: "生日",
  py: "shēngrì",
  en: "birthday",
  ru: "день рождения",
  pos: "noun",
  hsd: ["{{word:sheng1}}-{{word:ri4}}", "X-{{word:de}} {{word:ri4}}"],
  tts: ["生日", "X的日"],
  literal: "birth day / your day",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:sheng1}}-{{word:ri4}}.",
      hanzi: "今天是我的生日。",
      en: "Today is my birthday.",
      ru: "Сегодня мой день рождения.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:sheng1}}-{{word:ri4}} {{word:shi4}} {{word:na3}} {{word:tian1}}?",
      hanzi: "你的生日是哪天？",
      en: "When is your birthday?",
      ru: "Когда у тебя день рождения?",
    },
  ],
});
