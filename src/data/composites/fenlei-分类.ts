import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7426,
  phase: 4,
  zh: "分类",
  py: "fēnlèi",
  en: "classify; sort into kinds",
  ru: "классифицировать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fen1}}-{{word:kai1}}, {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
    "{{word:ba3}} {{word:yi1}}-{{word:yang4}}-{{word:de}} X {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["把X分开，一样的放在一起", "把一样的X放在一起"],
  literal: "separate X, put the same ones together / put the same Xs together",
  fit: "plain",
  topics: ["looking-and-checking"],
  isA: ["thinking-action"],
  proposed: true,
});
