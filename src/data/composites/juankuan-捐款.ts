import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8744,
  phase: 4,
  zh: "捐款",
  py: "juānkuǎn",
  en: "donate money; donation",
  ru: "пожертвовать деньги; пожертвование",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:jin1}} {{word:gei3}} X, {{word:bang1}} X",
    "{{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["把金给X，帮X", "帮人的金"],
  literal: "give money to X to help X / money to help people",
  fit: "plain",
  topics: ["sharing-and-giving"],
  isA: ["social-action"],
  proposed: true,
});
