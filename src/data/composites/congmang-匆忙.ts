import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8901,
  phase: 4,
  zh: "匆忙",
  py: "cōngmáng",
  en: "hasty; in a hurry; rushed",
  ru: "торопливый; в спешке",
  pos: "adjective",
  hsd: [
    "{{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:shao3}}, {{word:hen3}} {{word:kuai4}}",
    "{{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}, {{word:hen3}} {{word:kuai4}}",
  ],
  tts: ["时间很少，很快", "有很多东西要做，很快"],
  literal: "the time is little, very fast / have a lot of things to do, very fast",
  fit: "plain",
  topics: ["speed-and-strength"],
  isA: ["speed-or-strength"],
  proposed: true,
});
