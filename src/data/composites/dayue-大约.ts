import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1304,
  phase: 3,
  zh: "大约",
  py: "dàyuē",
  en: "about, roughly",
  ru: "примерно",
  pos: "adverb",
  hsd: ["{{word:ke3}}-{{word:neng2}} X"],
  tts: ["可能X"],
  literal: "maybe X",
  fit: "plain",
  topics: ["degree-words"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:ke3}}-{{word:neng2}} {{word:shi2}}-{{light:ge4}} {{word:ren2}} {{word:lai2}}.",
      hanzi: "可能十个人来。",
      en: "About ten people are coming.",
      ru: "Придёт около десяти человек.",
    },
    {
      pinyin: "{{Word:ke3}}-{{word:neng2}} {{word:san1}}-{{word:tian1}}.",
      hanzi: "可能三天。",
      en: "About three days.",
      ru: "Около трёх дней.",
    },
  ],
});
