import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 5789,
  phase: 4,
  zh: "点赞",
  py: "diǎnzàn",
  en: "like (online)",
  ru: "ставить лайк",
  pos: "verb",
  hsd: [
    "{{word:kan4}} {{word:le}} X, {{word:dian3}} {{word:yi1}} {{word:xia4}}, {{word:shuo1}} {{word:hao3}}",
  ],
  tts: ["看了X，点一下，说好"],
  literal: "see X, tap once, say it is good",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["social-action"],
  proposed: true,
});
