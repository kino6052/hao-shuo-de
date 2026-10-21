import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1212,
  phase: 3,
  zh: "过程",
  py: "guòchéng",
  en: "process",
  ru: "процесс",
  pos: "noun",
  hsd: ["{{word:cong2}} {{word:kai1shi3}} {{word:dao4}} {{word:wan2}} {{word:de}} {{word:lu4}}"],
  tts: ["从开始到完的路"],
  literal: "the road from start to finish",
  fit: "plain",
  topics: ["reasons-sources-and-conditions"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:cong2}} {{word:kai1shi3}} {{word:dao4}} {{word:wan2}} {{word:de}} {{word:lu4}}.",
      hanzi: "我看从开始到完的路。",
      en: "I watched the whole process.",
      ru: "Я смотрел весь процесс.",
    },
    {
      pinyin: "{{Word:cong2}} {{word:kai1shi3}} {{word:dao4}} {{word:wan2}} {{word:de}} {{word:lu4}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "从开始到完的路很长。",
      en: "The process is long.",
      ru: "Процесс долгий.",
    },
  ],
});
