import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1048,
  phase: 3,
  zh: "区域",
  py: "qūyù",
  en: "region",
  ru: "область, район",
  pos: "noun",
  hsd: ["{{word:di4}}-{{light:fang1}}"],
  tts: ["地方"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个地方很大。",
      en: "This region is big.",
      ru: "Этот район большой.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "那个地方很冷。",
      en: "That region is cold.",
      ru: "Тот район холодный.",
    },
  ],
});
