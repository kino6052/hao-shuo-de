import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7823,
  phase: 4,
  zh: "割",
  py: "gē",
  en: "cut; reap",
  ru: "резать; жать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:ba3}} X {{word:fen1}}-{{word:kai1}}",
    "{{word:ba3}} X {{word:cong2}} Y-{{word:shang4}} {{word:fen1}}-{{word:kai1}}",
  ],
  tts: ["用工具把X分开", "把X从Y上分开"],
  literal: "use a tool to separate X / separate X from Y",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["handling-action"],
  proposed: true,
});
