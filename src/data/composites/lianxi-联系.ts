import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1176,
  phase: 3,
  zh: "联系",
  py: "liánxì",
  en: "connection; contact",
  ru: "связь; связаться",
  pos: "verb",
  hsd: ["{{word:guan1xi}}", "{{word:gei3}} X {{word:shuo1}}"],
  tts: ["关系", "给X说"],
  literal: "a connection / talk to X",
  fit: "plain",
  topics: ["friends-and-neighbours"],
  isA: ["social-tie"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:shuo1}}.",
      hanzi: "我给他说。",
      en: "I contact him.",
      ru: "Я связываюсь с ним.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shuo1}}.",
      hanzi: "你给我说。",
      en: "Contact me.",
      ru: "Свяжись со мной.",
    },
  ],
});
