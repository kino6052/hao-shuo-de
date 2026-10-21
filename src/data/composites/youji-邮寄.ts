import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6839,
  phase: 4,
  zh: "邮寄",
  py: "yóujì",
  en: "send by mail; post",
  ru: "отправлять по почте",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}}",
    "{{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["把X给远的人", "给远的人"],
  literal: "give X to a far person / give to a far person",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["handling-action"],
  proposed: true,
});
