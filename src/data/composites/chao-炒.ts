import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7059,
  phase: 4,
  zh: "炒",
  py: "chǎo",
  en: "stir-fry",
  ru: "жарить, обжаривать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:zai4}} {{word:re4}}-{{word:de}} {{word:you2}} {{word:li3}} {{word:kuai4}} {{word:dong4}}",
    "{{word:yong4}} {{word:you2}} {{word:zai4}} {{word:huo3}}-{{word:shang4}} {{word:zuo4}} X",
  ],
  tts: ["让X在热的油里快动", "用油在火上做X"],
  literal: "let X move fast in hot oil / use oil to cook X on the fire",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["making"],
  proposed: true,
});
