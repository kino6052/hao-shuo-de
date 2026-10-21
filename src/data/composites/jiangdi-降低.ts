import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1438,
  phase: 3,
  zh: "降低",
  py: "jiàngdī",
  en: "lower, reduce",
  ru: "понижать",
  pos: "verb",
  hsd: ["{{word:bian4}} {{word:shao3}}"],
  tts: ["变少"],
  literal: "become less",
  fit: "plain",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:che1}} {{word:bian4}} {{word:shao3}} {{word:le}}.",
      hanzi: "车变少了。",
      en: "There are fewer cars now.",
      ru: "Машин стало меньше.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jin1}} {{word:bian4}} {{word:shao3}} {{word:le}}.",
      hanzi: "我的金变少了。",
      en: "My money has gone down.",
      ru: "Моих денег стало меньше.",
    },
  ],
});
