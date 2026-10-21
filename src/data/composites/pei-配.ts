import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6774,
  phase: 4,
  zh: "配",
  py: "pèi",
  en: "match; go well with; suitable",
  ru: "подходить, сочетаться",
  pos: "verb",
  hsd: [
    "X {{word:he2}} Y {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:hen3}} {{word:hao3}}",
    "X {{word:he2}} Y {{word:yi1}}-{{word:qi3}} {{word:yong4}} {{word:hen3}} {{word:hao3}}",
  ],
  tts: ["X和Y放在一起很好", "X和Y一起用很好"],
  literal: "X and Y put together are very good / X and Y used together are very good",
  fit: "plain",
  topics: ["related-and-matching"],
  isA: ["comparison"],
  proposed: true,
});
