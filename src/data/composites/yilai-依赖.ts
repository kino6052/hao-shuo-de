import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8472,
  phase: 4,
  zh: "依赖",
  py: "yīlài",
  en: "depend on; rely on; dependent (on)",
  ru: "зависеть; полагаться",
  pos: "verb",
  hsd: [
    "{{word:zhan4}} {{word:zai4}} X {{word:pang2bian1}}, {{word:yong4}} X",
    "{{word:mei2}}-{{word:you3}} X {{word:jiu4}} {{word:bu4}} {{word:neng2}} {{word:zuo4}}",
  ],
  tts: ["站在X旁边，用X", "没有X就不能做"],
  literal: "stand next to X, use X / without X one cannot do it",
  fit: "plain",
  topics: ["helping-and-supporting"],
  isA: ["social-action"],
  proposed: true,
});
