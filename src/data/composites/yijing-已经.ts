import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 121,
  phase: 1,
  zh: "已经",
  py: "yǐjīng",
  en: "already",
  ru: "уже",
  pos: "adverb",
  hsd: ["{{word:le}}"],
  tts: ["了"],
  fit: "skip",
  note: "le often does the job: wǒ chī le.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zou3}} {{word:le}}.",
      hanzi: "他走了。",
      en: "He's already left.",
      ru: "Он уже ушёл.",
    },
    {
      pinyin: "{{Word:fan4}} {{word:hao3}} {{word:le}}.",
      hanzi: "饭好了。",
      en: "The food is ready.",
      ru: "Еда уже готова.",
    },
  ],
});
