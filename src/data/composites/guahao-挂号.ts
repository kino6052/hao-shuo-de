import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6925,
  phase: 4,
  zh: "挂号",
  py: "guàhào",
  en: "register at a hospital; get an appointment",
  ru: "записаться на приём (в больнице)",
  pos: "verb",
  hsd: [
    "{{word:kan4}} {{word:shen1ti3}} {{word:yi3}}-{{word:qian2}}, {{word:xie3}} {{word:jiao4}} {{word:shen2me}}",
  ],
  tts: ["看身体以前，写叫什么"],
  literal: "before the body is looked at, write what you are called",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["social-action"],
  proposed: true,
});
