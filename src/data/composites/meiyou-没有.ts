import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 64,
  phase: 1,
  zh: "没有",
  py: "méiyǒu",
  en: "not have",
  ru: "не иметь",
  pos: "verb",
  hsd: ["{{word:mei2}}-{{word:you3}}"],
  tts: ["没有"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:shou3}}-{{word:ji1}}.",
      hanzi: "我没有手机。",
      en: "I don't have a phone.",
      ru: "У меня нет телефона.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:mei2}}-{{word:you3}} {{word:ren2}}.",
      hanzi: "这里没有人。",
      en: "There's nobody here.",
      ru: "Здесь никого нет.",
    },
  ],
});
