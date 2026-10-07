import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 31,
  phase: 1,
  zh: "十",
  py: "shí",
  en: "ten",
  ru: "десять",
  pos: "number",
  hsd: ["{{word:shi2}}"],
  tts: ["十"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:deng3}} {{word:le}} {{word:shi2}} {{word:tian1}}.",
      hanzi: "我等了十天。",
      en: "I waited ten days.",
      ru: "Я ждал десять дней.",
    },
    {
      pinyin: "{{Word:shi2}}-{{light:ge4}} {{word:ren2}} {{word:lai2}} {{word:le}}.",
      hanzi: "十个人来了。",
      en: "Ten people came.",
      ru: "Пришли десять человек.",
    },
  ],
});
