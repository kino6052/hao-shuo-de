import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7138,
  phase: 4,
  zh: "捡",
  py: "jiǎn",
  en: "pick up (from the ground)",
  ru: "подбирать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:cong2}} {{word:di4}}-{{word:shang4}} {{word:na2}}-{{word:qi3}}-{{word:lai2}}",
    "{{word:na2}} {{word:di4}}-{{word:shang4}}-{{word:de}} X",
  ],
  tts: ["把X从地上拿起来", "拿地上的X"],
  literal: "take X up from the ground / take the X on the ground",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  proposed: true,
});
