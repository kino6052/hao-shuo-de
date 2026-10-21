import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8728,
  phase: 4,
  zh: "间接",
  py: "jiànjiē",
  en: "indirect; indirectly",
  ru: "косвенный; опосредованный",
  pos: "adjective",
  hsd: [
    "{{word:you3}} {{word:bie2}}-{{word:ren2}} {{word:zai4}} {{word:zhong1}}-{{word:jian1}}",
    "{{word:you3}} {{word:bie2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:zhong1}}-{{word:jian1}}",
  ],
  tts: ["有别人在中间", "有别的东西在中间"],
  literal: "someone else is in the middle / something else is in the middle",
  fit: "plain",
  topics: ["empty-messy-clear"],
  isA: ["condition-quality"],
  proposed: true,
});
