import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 899,
  phase: 2,
  zh: "过来",
  py: "guòlái",
  en: "come over",
  ru: "подойти",
  pos: "verb",
  hsd: ["{{word:guo4}}-{{word:lai2}}", "{{word:lai2}} {{word:zhe4}}-{{word:bian1}}"],
  tts: ["过来", "来这边"],
  literal: "come across / come to this side",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:guo4}}-{{word:lai2}}.",
      hanzi: "你过来。",
      en: "Come over.",
      ru: "Подойди.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:lai2}} {{word:zhe4}}-{{word:bian1}}.",
      hanzi: "他来这边。",
      en: "He comes over here.",
      ru: "Он идёт сюда.",
    },
  ],
});
