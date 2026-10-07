import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 41,
  phase: 1,
  zh: "再",
  py: "zài",
  en: "again",
  ru: "снова",
  pos: "adverb",
  hsd: ["{{word:you4}}"],
  tts: ["又"],
  fit: "word",
  note: "Hao-shuo-de says yòu for \"again\" (D41).",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:you4}} {{word:lai2}} {{word:le}}.",
      hanzi: "他又来了。",
      en: "He came again.",
      ru: "Он снова пришёл.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you4}} {{word:chi1}} {{word:le}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "我又吃了一个。",
      en: "I ate another one.",
      ru: "Я съел ещё один.",
    },
  ],
});
