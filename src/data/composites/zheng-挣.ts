import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1341,
  phase: 3,
  zh: "挣",
  py: "zhèng",
  en: "earn",
  ru: "зарабатывать",
  pos: "verb",
  hsd: ["{{word:de2}} {{word:jin1}}"],
  tts: ["得金"],
  literal: "get money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gong1}}-{{word:zuo4}} {{word:de2}} {{word:jin1}}.",
      hanzi: "我工作得金。",
      en: "I work to earn money.",
      ru: "Я работаю, чтобы зарабатывать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gong1}}-{{word:zuo4}}, {{word:de2}} {{word:jin1}}.",
      hanzi: "他工作，得金。",
      en: "He works and earns money.",
      ru: "Он работает и зарабатывает.",
    },
  ],
});
