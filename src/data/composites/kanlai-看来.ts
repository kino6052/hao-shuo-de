import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 875,
  phase: 2,
  zh: "看来",
  py: "kànlái",
  en: "it seems",
  ru: "похоже",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:lai2}}", "{{word:kan4}}-{{word:qi3}}-{{word:lai2}}"],
  tts: ["看来", "看起来"],
  literal: "look-come / it looks",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["opinions-and-views"],
  isA: ["adverb-word"],
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:kan4}}-{{word:lai2}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "看来他不来。",
      en: "It seems he isn't coming.",
      ru: "Похоже, он не придёт.",
    },
    {
      pinyin: "{{Word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "看起来很好。",
      en: "It looks good.",
      ru: "Выглядит хорошо.",
    },
  ],
});
