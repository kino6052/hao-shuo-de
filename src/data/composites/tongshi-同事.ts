import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 818,
  phase: 2,
  zh: "同事",
  py: "tóngshì",
  en: "colleague",
  ru: "коллега",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:qi3}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}"],
  tts: ["一起工作的人"],
  literal: "a person one works with",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:yi1}}-{{word:qi3}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是一起工作的人。",
      en: "He is my colleague.",
      ru: "Он мой коллега.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:yi1}}-{{word:qi3}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}} {{word:qu4}}.",
      hanzi: "我和一起工作的人去。",
      en: "I'm going with my colleague.",
      ru: "Я иду с коллегой.",
    },
  ],
});
