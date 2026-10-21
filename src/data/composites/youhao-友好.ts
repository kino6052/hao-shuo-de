import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1473,
  phase: 3,
  zh: "友好",
  py: "yǒuhǎo",
  en: "friendly",
  ru: "дружелюбный",
  pos: "adjective",
  hsd: ["{{word:dui4}} {{word:ren2}} {{word:hao3}}"],
  tts: ["对人好"],
  literal: "good to people",
  fit: "plain",
  topics: ["friends-and-neighbours"],
  isA: ["character-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:dui4}} {{word:ren2}} {{word:hao3}}.",
      hanzi: "他对人好。",
      en: "He is friendly.",
      ru: "Он дружелюбен.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dui4}} {{word:ren2}} {{word:hao3}}.",
      hanzi: "我们对人好。",
      en: "We are friendly.",
      ru: "Мы дружелюбны.",
    },
  ],
});
