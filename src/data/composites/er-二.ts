import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 29,
  phase: 1,
  zh: "二",
  py: "èr",
  en: "two",
  ru: "два при счёте вслух и в номерах",
  pos: "number",
  hsd: ["{{word:er4}}"],
  tts: ["二"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:er4}}-{{word:shi2}}.",
      hanzi: "我二十。",
      en: "I'm twenty.",
      ru: "Мне двадцать.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:shi2}}-{{word:er4}} {{word:dian3}}.",
      hanzi: "现在十二点。",
      en: "It's twelve o'clock.",
      ru: "Сейчас двенадцать часов.",
    },
  ],
});
