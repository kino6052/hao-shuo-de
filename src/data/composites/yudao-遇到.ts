import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 788,
  phase: 2,
  zh: "遇到",
  py: "yùdào",
  en: "come across",
  ru: "встретить",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:dao4}}"],
  tts: ["看到"],
  literal: "see",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:ta1}}.",
      hanzi: "我看到他。",
      en: "I came across him.",
      ru: "Я встретил его.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:dao4}} {{word:wo3}} {{word:le}} {{word:ma}}?",
      hanzi: "你看到我了吗？",
      en: "Did you come across me?",
      ru: "Ты меня встретил?",
    },
  ],
});
