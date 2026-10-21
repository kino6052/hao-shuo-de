import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9103,
  phase: 4,
  zh: "纠纷",
  py: "jiūfēn",
  en: "dispute; quarrel between people",
  ru: "спор; конфликт",
  pos: "noun",
  hsd: [
    "{{word:ren2}} {{word:he2}} {{word:ren2}} {{word:shuo1}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}, {{word:hen3}} {{word:bu4}} {{word:kai1}}-{{word:xin1}}",
    "{{word:ren2}} {{word:he2}} {{word:ren2}} {{word:you3}}-{{word:de}} {{word:wen4}}-{{word:ti2}}, {{word:dou1}} {{word:shuo1}} {{word:bie2}}-{{word:ren2}} {{word:bu4}} {{word:dui4}}",
  ],
  tts: ["人和人说不一样，很不开心", "人和人有的问题，都说别人不对"],
  literal: "people say different things, very unhappy / a problem between people where each says the other is wrong",
  fit: "plain",
  topics: ["law-and-crime"],
  isA: ["state-name"],
  proposed: true,
});
