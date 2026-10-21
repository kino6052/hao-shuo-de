import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9236,
  phase: 4,
  zh: "往年",
  py: "wǎngnián",
  en: "past years; in previous years",
  ru: "прошлые годы; в прежние годы",
  pos: "noun",
  hsd: [
    "{{word:guo4}}-{{word:qu4}}-{{word:de}} {{word:nian2}}",
    "{{word:qu4}}-{{word:nian2}} {{word:he2}} {{word:qu4}}-{{word:nian2}} {{word:yi3}}-{{word:qian2}}",
  ],
  tts: ["过去的年", "去年和去年以前"],
  literal: "the years that have gone / last year and before last year",
  fit: "plain",
  topics: ["years-and-centuries"],
  isA: ["time-span"],
  proposed: true,
});
