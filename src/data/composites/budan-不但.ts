import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1227,
  phase: 3,
  zh: "不但",
  py: "búdàn",
  en: "not only",
  ru: "не только",
  pos: "conjunction",
  fit: "skip",
  topics: ["joining-words"],
  isA: ["conjunction"],
  note: "Say the first part, then yě: X, yě Y.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:neng2}} {{word:shuo1}}, {{word:ye3}} {{word:neng2}} {{word:xie3}}.",
      hanzi: "他能说，也能写。",
      en: "He can not only speak, but also write.",
      ru: "Он умеет не только говорить, но и писать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:gao1}}, {{word:ye3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他很高，也很好。",
      en: "He is not only tall, but also kind.",
      ru: "Он не только высокий, но и добрый.",
    },
  ],
});
