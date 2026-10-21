import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7875,
  phase: 4,
  zh: "求助",
  py: "qiúzhù",
  en: "ask for help; seek help",
  ru: "обращаться за помощью",
  pos: "verb",
  hsd: [
    "{{word:jiao4}} {{word:ren2}} {{word:bang1}} {{word:wo3}}",
    "{{word:wen4}} {{word:ren2}} {{word:neng2}} {{word:bu4}} {{word:neng2}} {{word:bang1}} {{word:wo3}}",
  ],
  tts: ["叫人帮我", "问人能不能帮我"],
  literal: "call a person to help me / ask people whether they can help me",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["social-action"],
  proposed: true,
});
