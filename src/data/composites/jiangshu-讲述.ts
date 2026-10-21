import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7449,
  phase: 4,
  zh: "讲述",
  py: "jiǎngshù",
  en: "narrate; tell",
  ru: "рассказывать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:shuo1}} {{word:gei3}} {{word:ren2}} {{word:ting1}}",
    "{{word:shuo1}} X {{word:shi4}} {{word:zen3me}} {{word:fa1}}-{{word:sheng1}}-{{word:de}}",
  ],
  tts: ["把X说给人听", "说X是怎么发生的"],
  literal: "say X to people to hear / say how X happened",
  fit: "plain",
  topics: ["explaining-and-describing"],
  isA: ["speaking-action"],
  proposed: true,
});
