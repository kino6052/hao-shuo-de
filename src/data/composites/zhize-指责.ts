import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8327,
  phase: 4,
  zh: "指责",
  py: "zhǐzé",
  en: "blame; accuse; criticize",
  ru: "обвинять; упрекать",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} X {{word:zuo4}} {{word:huai4}} {{word:le}}",
    "{{word:shuo1}} X {{word:bu4}} {{word:dui4}}",
  ],
  tts: ["说X做坏了", "说X不对"],
  literal: "say X did it badly / say X is wrong",
  fit: "plain",
  topics: ["refusing-and-criticising"],
  isA: ["speaking-action"],
  proposed: true,
});
