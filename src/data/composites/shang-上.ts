import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 24,
  phase: 1,
  zh: "上",
  py: "shàng",
  en: "up",
  ru: "вверх",
  pos: "noun",
  hsd: ["{{word:shang4}}"],
  tts: ["上面"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:shu1}} {{word:zai4}} {{word:shang4}}-{{word:mian4}}.",
      hanzi: "书在上面。",
      en: "The book is up there.",
      ru: "Книга наверху.",
    },
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:you3}} {{word:fei1}}-{{word:ji1}}.",
      hanzi: "天上有飞机。",
      en: "There's a plane in the sky.",
      ru: "В небе самолёт.",
    },
  ],
});
