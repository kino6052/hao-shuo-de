import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8883,
  phase: 4,
  zh: "质疑",
  py: "zhìyí",
  en: "question; doubt; call into question",
  ru: "ставить под сомнение; подвергать сомнению",
  pos: "verb",
  hsd: [
    "{{word:wen4}} X {{word:shi4}} {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:wen4}} X {{word:dui4}} {{word:bu4}} {{word:dui4}}",
  ],
  tts: ["问X是不是真的", "问X对不对"],
  literal: "ask X is it true or not / ask X is it right or not",
  fit: "plain",
  topics: ["asking-and-answering"],
  isA: ["speaking-action"],
  proposed: true,
});
