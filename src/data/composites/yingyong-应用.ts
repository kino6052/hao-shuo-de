import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 981,
  phase: 2,
  zh: "应用",
  py: "yìngyòng",
  en: "apply; app",
  ru: "применять; приложение",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  literal: "use",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我用这个。",
      en: "I use this.",
      ru: "Я использую это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "他用那个。",
      en: "He uses that.",
      ru: "Он использует то.",
    },
  ],
});
