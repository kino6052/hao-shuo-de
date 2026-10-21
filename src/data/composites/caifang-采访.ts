import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6333,
  phase: 4,
  zh: "采访",
  py: "cǎifǎng",
  en: "interview",
  ru: "брать интервью",
  pos: "verb",
  hsd: [
    "{{word:wen4}} {{word:ren2}} {{word:wen4}}-{{word:ti2}}, {{word:ba3}} {{word:ta1}} {{word:shuo1}}-{{word:de}} {{word:xie3}}-{{word:xia4}}-{{word:lai2}}",
  ],
  tts: ["问人问题，把他说的写下来"],
  literal: "ask a person questions, write down what he says",
  fit: "plain",
  topics: ["asking-and-answering"],
  isA: ["speaking-action"],
  proposed: true,
});
