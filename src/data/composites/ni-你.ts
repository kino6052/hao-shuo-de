import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 19,
  phase: 1,
  zh: "你",
  py: "nǐ",
  en: "you",
  ru: "ты",
  pos: "pronoun",
  hsd: ["{{word:ni3}}"],
  tts: ["你"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:qu4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你去哪里？",
      en: "Where are you going?",
      ru: "Куда ты идёшь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ni3}}.",
      hanzi: "我爱你。",
      en: "I love you.",
      ru: "Я тебя люблю.",
    },
  ],
});
