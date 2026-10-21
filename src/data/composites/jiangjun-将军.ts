import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8234,
  phase: 4,
  zh: "将军",
  py: "jiāngjūn",
  en: "general (army officer)",
  ru: "генерал",
  pos: "noun",
  hsd: [
    "{{word:wei4}} {{word:guo2}} {{word:da3}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:tou2}}",
    "{{word:wei4}} {{word:guo2}} {{word:da3}}-{{word:de}} {{word:ren2}} {{word:zhong1}} {{word:zui4}} {{word:da4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["为国打的人的头", "为国打的人中最大的人"],
  literal: "the head of the people who fight for the country / the biggest person among the people who fight for the country",
  fit: "plain",
  topics: ["war-and-peace"],
  isA: ["worker"],
  proposed: true,
});
