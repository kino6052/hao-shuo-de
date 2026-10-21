import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1123,
  phase: 3,
  zh: "明显",
  py: "míngxiǎn",
  en: "obvious; obviously; marked",
  ru: "очевидный",
  pos: "adjective",
  hsd: ["{{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}}"],
  tts: ["一看就知道"],
  literal: "you look and you know",
  fit: "plain",
  topics: ["exact-clear-and-obvious"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}}.",
      hanzi: "这一看就知道。",
      en: "This is obvious.",
      ru: "Это очевидно.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}}.",
      hanzi: "那个一看就知道。",
      en: "That is obvious.",
      ru: "То очевидно.",
    },
  ],
});
