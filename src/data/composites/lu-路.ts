import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 208,
  phase: 1,
  zh: "路",
  py: "lù",
  en: "road",
  ru: "дорога",
  pos: "noun",
  hsd: ["{{word:lu4}}"],
  tts: ["路"],
  fit: "word",
  note: "Lesson {{lesson:moving}}. A way of doing something is fāng-fǎ.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:lu4}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "这个路很长。",
      en: "This road is long.",
      ru: "Эта дорога длинная.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:lu4}}.",
      hanzi: "我不知道路。",
      en: "I don't know the way.",
      ru: "Я не знаю дороги.",
    },
  ],
});
