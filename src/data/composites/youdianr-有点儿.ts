import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 967,
  phase: 2,
  zh: "有点儿",
  py: "yǒudiǎnr",
  en: "a little, slightly",
  ru: "немного",
  pos: "adverb",
  hsd: ["{{word:you3}} {{word:yi1}}-{{word:dian3}}"],
  tts: ["有一点"],
  fit: "natural",
  note: "Lesson {{lesson:numbers}}: yǒu yī-diǎn lěng.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:leng3}}.",
      hanzi: "我有一点冷。",
      en: "I'm a little cold.",
      ru: "Мне немного холодно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:re4}}.",
      hanzi: "这个有一点热。",
      en: "This is a bit hot.",
      ru: "Это немного горячее.",
    },
  ],
});
