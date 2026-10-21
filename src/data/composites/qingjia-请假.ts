import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7094,
  phase: 4,
  zh: "请假",
  py: "qǐngjià",
  en: "ask for leave",
  ru: "отпрашиваться",
  pos: "verb",
  hsd: [
    "{{word:wen4}} {{word:ke3}}-{{word:yi3}} {{word:bu4}} {{word:lai2}} {{word:ma}}",
    "{{word:shuo1}} {{word:wo3}} {{word:yao4}} {{word:bu4}} {{word:gong1}}-{{word:zuo4}}, {{word:bu4}} {{word:xue2}}",
  ],
  tts: ["问可以不来吗", "说我要不工作，不学"],
  literal: "ask whether one may not come / say I want to not work, not study",
  fit: "plain",
  topics: ["working-life"],
  isA: ["social-action"],
  proposed: true,
});
