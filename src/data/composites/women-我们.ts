import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 59,
  phase: 1,
  zh: "我们",
  py: "wǒmen",
  en: "we",
  ru: "мы",
  pos: "pronoun",
  hsd: ["{{word:wo3}}-{{word:men}}"],
  tts: ["我们"],
  literal: "I + more people",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我们一起吃饭。",
      en: "We eat together.",
      ru: "Мы едим вместе.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "我们去哪里？",
      en: "Where are we going?",
      ru: "Куда мы идём?",
    },
  ],
});
