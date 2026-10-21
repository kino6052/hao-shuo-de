import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1030,
  phase: 3,
  zh: "作家",
  py: "zuòjiā",
  en: "writer",
  ru: "писатель",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:shu1}}-{{word:de}} {{word:ren2}}"],
  tts: ["写书的人"],
  literal: "a person who writes books",
  fit: "plain",
  topics: ["writing"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:xie3}} {{word:shu1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是写书的人。",
      en: "He is a writer.",
      ru: "Он писатель.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shi4}} {{word:xie3}} {{word:shu1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爸爸是写书的人。",
      en: "My father is a writer.",
      ru: "Мой отец писатель.",
    },
  ],
});
