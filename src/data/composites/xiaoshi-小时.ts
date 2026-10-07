import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 304,
  phase: 1,
  zh: "小时",
  py: "xiǎoshí",
  en: "hour",
  ru: "час",
  pos: "noun",
  hsd: ["{{word:xiao3}}-{{word:shi2}}"],
  tts: ["小时"],
  literal: "small time",
  fit: "natural",
  note: "shí here is 时 (time). It sounds the same as shí (ten).",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:deng3}} {{word:le}} {{word:liang3}}-{{light:ge4}} {{word:xiao3}}-{{word:shi2}}.",
      hanzi: "我等了两个小时。",
      en: "I waited two hours.",
      ru: "Я ждал два часа.",
    },
    {
      pinyin: "{{Word:yi1}} {{word:tian1}} {{word:you3}} {{word:er4}}-{{word:shi2}}-{{word:si4}}-{{light:ge4}} {{word:xiao3}}-{{word:shi2}}.",
      hanzi: "一天有二十四个小时。",
      en: "A day has twenty-four hours.",
      ru: "В сутках двадцать четыре часа.",
    },
  ],
});
