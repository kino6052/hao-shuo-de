import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8667,
  phase: 4,
  zh: "证实",
  py: "zhèngshí",
  en: "confirm; verify; prove true",
  ru: "подтверждать; доказывать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} {{word:ren2}} {{word:zhi1dao4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:kan4}}-{{word:chu1}} X {{word:shi4}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["让人知道是真的", "看出X是真的"],
  literal: "let people know it is true / see that X is true",
  fit: "plain",
  topics: ["looking-and-checking"],
  isA: ["thinking-action"],
  proposed: true,
});
