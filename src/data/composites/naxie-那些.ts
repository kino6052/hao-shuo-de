import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 718,
  phase: 2,
  zh: "那些",
  py: "nàxiē",
  en: "those",
  ru: "те",
  pos: "pronoun",
  hsd: ["{{word:na4}}-{{word:xie1}}", "{{word:na4}}"],
  tts: ["那些", "那"],
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["this-that-such"],
  isA: ["pronoun"],
  note: "nà-ge … dōu: all of those.",
  examples: [
    {
      pinyin: "{{Word:na4}}-{{word:xie1}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那些人很好。",
      en: "Those people are good.",
      ru: "Те люди хорошие.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:na4}}-{{word:xie1}}.",
      hanzi: "我要那些。",
      en: "I want those.",
      ru: "Я хочу те.",
    },
  ],
});
