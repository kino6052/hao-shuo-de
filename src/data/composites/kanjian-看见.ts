import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 194,
  phase: 1,
  zh: "看见",
  py: "kànjiàn",
  en: "see",
  ru: "увидеть",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:jian4}}", "{{word:kan4}}-{{word:dao4}}"],
  tts: ["看见", "看到"],
  literal: "look-arrive",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:jian4}} {{word:ta1}} {{word:le}}.",
      hanzi: "我看见他了。",
      en: "I saw him.",
      ru: "Я его видел.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:jian4}} {{word:wo3}}-{{word:de}} {{word:bao1}} {{word:le}} {{word:ma}}?",
      hanzi: "你看见我的包了吗？",
      en: "Have you seen my bag?",
      ru: "Ты видел мою сумку?",
    },
  ],
});
