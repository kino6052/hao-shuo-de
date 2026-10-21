import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 715,
  phase: 2,
  zh: "连",
  py: "lián",
  en: "even; connect",
  ru: "даже; соединять",
  pos: "preposition",
  hsd: ["… {{word:ye3}} …", "{{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}"],
  tts: ["…也…", "放在一起"],
  literal: "also / put together",
  fit: "plain",
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shui3}} {{word:ye3}} {{word:bu4}} {{word:he1}}.",
      hanzi: "他水也不喝。",
      en: "He won't even drink water.",
      ru: "Он даже воды не пьёт.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:shu1}} {{word:fang4}}-{{word:zai4}}-{{word:yi1}}-{{word:qi3}}.",
      hanzi: "我把书放在一起。",
      en: "I put the books together.",
      ru: "Я кладу книги вместе.",
    },
  ],
});
