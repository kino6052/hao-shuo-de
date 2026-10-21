import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1023,
  phase: 3,
  zh: "优势",
  py: "yōushì",
  en: "advantage",
  ru: "преимущество",
  pos: "noun",
  hsd: [
    "{{word:bi3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:hao3}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["比别的人好的部分"],
  literal: "the part that's better than others",
  fit: "plain",
  topics: ["useful-and-harmful"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:bi3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:hao3}}-{{word:de}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "我有比别的人好的部分。",
      en: "I have an advantage.",
      ru: "У меня есть преимущество.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:bi3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:hao3}}-{{word:de}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "他有比别的人好的部分。",
      en: "He has an advantage.",
      ru: "У него есть преимущество.",
    },
  ],
});
