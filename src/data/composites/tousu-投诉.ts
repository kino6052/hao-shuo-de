import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8448,
  phase: 4,
  zh: "投诉",
  py: "tóusù",
  en: "complain (to an authority); lodge a complaint",
  ru: "подавать жалобу",
  pos: "verb",
  hsd: [
    "{{word:dui4}} {{word:shang4}}-{{word:mian4}}-{{word:de}} {{word:ren2}} {{word:shuo1}} X {{word:bu4}} {{word:hao3}}",
    "{{word:qu4}} {{word:dui4}} {{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}} {{word:shuo1}} X {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["对上面的人说X不好", "去对做决定的人说X不好"],
  literal: "tell the people above that X is not good / go tell the person who decides that X is not good",
  fit: "plain",
  topics: ["refusing-and-criticising"],
  isA: ["speaking-action"],
  proposed: true,
});
