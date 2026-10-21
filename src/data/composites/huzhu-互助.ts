import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8380,
  phase: 4,
  zh: "互助",
  py: "hùzhù",
  en: "help each other; mutual aid",
  ru: "взаимопомощь",
  pos: "verb",
  hsd: [
    "X {{word:bang1}} Y, Y {{word:ye3}} {{word:bang1}} X",
    "{{word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:wo3}} {{word:ye3}} {{word:bang1}} {{word:ni3}}",
  ],
  tts: ["X帮Y，Y也帮X", "你帮我，我也帮你"],
  literal: "X helps Y, Y also helps X / you help me, I also help you",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["social-action"],
  proposed: true,
});
