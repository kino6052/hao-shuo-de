import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8177,
  phase: 4,
  zh: "嘲笑",
  py: "cháoxiào",
  en: "mock; laugh at; ridicule",
  ru: "насмехаться; высмеивать",
  pos: "verb",
  hsd: [
    "{{word:xiao4}} X, {{word:jue2}}-{{word:de}} X {{word:bu4}} {{word:hao3}}",
    "{{word:xiao4}} {{word:bie2}}-{{word:ren2}}-{{word:de}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["笑X，觉得X不好", "笑别人的不好"],
  literal: "laugh at X, feeling X is not good / laugh at what is bad in others",
  fit: "plain",
  topics: ["manners"],
  isA: ["social-action"],
  proposed: true,
});
