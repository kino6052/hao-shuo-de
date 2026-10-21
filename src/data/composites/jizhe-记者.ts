import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1408,
  phase: 3,
  zh: "记者",
  py: "jìzhě",
  en: "reporter",
  ru: "журналист",
  pos: "noun",
  hsd: ["{{word:ji4}}-{{word:zhe3}}"],
  tts: ["记者"],
  literal: "the one who remembers/records",
  fit: "plain",
  topics: ["news-and-events"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:ji4}}-{{word:zhe3}}.",
      hanzi: "他是记者。",
      en: "He is a reporter.",
      ru: "Он репортёр.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shi4}} {{word:ji4}}-{{word:zhe3}}.",
      hanzi: "我爸爸是记者。",
      en: "My father is a reporter.",
      ru: "Мой папа репортёр.",
    },
  ],
});
