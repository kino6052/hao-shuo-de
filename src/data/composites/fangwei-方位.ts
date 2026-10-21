import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8693,
  phase: 4,
  zh: "方位",
  py: "fāngwèi",
  en: "direction; position; bearing (up, down, left, right ...)",
  ru: "сторона; направление; положение",
  pos: "noun",
  hsd: [
    "X {{word:zai4}} {{word:na3}} {{word:yi1}}-{{word:bian1}}",
    "{{word:shang4}}-{{word:mian4}} {{word:he2}} {{word:xia4}}-{{word:mian4}}, {{word:zuo3}}-{{word:bian1}} {{word:he2}} {{word:you4}}-{{word:bian1}}",
  ],
  tts: ["X在哪一边", "上面和下面，左边和右边"],
  literal: "which side X is on / above and below, left and right",
  fit: "plain",
  topics: ["directions"],
  isA: ["direction"],
  proposed: true,
});
