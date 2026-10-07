import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 149,
  phase: 1,
  zh: "又",
  py: "yòu",
  en: "again",
  ru: "опять",
  pos: "adverb",
  hsd: ["{{word:you4}}"],
  tts: ["又"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:you4}} {{word:wen4}} {{word:le}}.",
      hanzi: "他又问了。",
      en: "He asked again.",
      ru: "Он снова спросил.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you4}} {{word:lai2}} {{word:le}}!",
      hanzi: "你又来了！",
      en: "You're here again!",
      ru: "Ты опять пришёл!",
    },
  ],
});
