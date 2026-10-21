import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1214,
  phase: 3,
  zh: "运用",
  py: "yùnyòng",
  en: "apply, use",
  ru: "применять",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  fit: "word",
  topics: ["taking-picking-up-and-using"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:zhe4}}-{{word:xie1}} {{word:ci2}}.",
      hanzi: "我用这些词。",
      en: "I use these words.",
      ru: "Я использую эти слова.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:neng2}} {{word:yong4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "他能用这个。",
      en: "He can apply this.",
      ru: "Он умеет это применять.",
    },
  ],
});
