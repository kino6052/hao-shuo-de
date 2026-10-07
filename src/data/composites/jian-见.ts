import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 202,
  phase: 1,
  zh: "见",
  py: "jiàn",
  en: "see",
  ru: "видеть",
  pos: "verb",
  hsd: ["{{word:jian4}}", "{{word:kan4}}-{{word:dao4}}"],
  tts: ["见", "看到"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:jian4}} {{word:ni3}}.",
      hanzi: "我想见你。",
      en: "I want to see you.",
      ru: "Я хочу тебя увидеть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:ta1}} {{word:le}}.",
      hanzi: "我看到他了。",
      en: "I saw him.",
      ru: "Я его видел.",
    },
  ],
});
