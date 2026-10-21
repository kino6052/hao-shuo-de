import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1079,
  phase: 3,
  zh: "已",
  py: "yǐ",
  en: "already",
  ru: "уже",
  pos: "adverb",
  hsd: ["{{word:le}}"],
  tts: ["了"],
  fit: "skip",
  topics: ["also-again-still-already"],
  isA: ["adverb-word"],
  note: "le often does the job: wǒ chī le.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:lai2}} {{word:le}}.",
      hanzi: "我来了。",
      en: "I've already come.",
      ru: "Я уже пришёл.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:qu4}} {{word:le}}.",
      hanzi: "他去了。",
      en: "He has already gone.",
      ru: "Он уже ушёл.",
    },
  ],
});
