import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8857,
  phase: 4,
  zh: "叙述",
  py: "xùshù",
  en: "narrate; recount; relate",
  ru: "рассказывать; излагать; повествовать",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} X {{word:zen3me}} {{word:fa1}}-{{word:sheng1}}-{{word:de}}",
    "{{word:cong2}} {{word:kai1shi3}} {{word:shuo1}} {{word:dao4}} {{word:wan2}}",
  ],
  tts: ["说X怎么发生的", "从开始说到完"],
  literal: "say how X happened / tell it from the start to the end",
  fit: "plain",
  topics: ["explaining-and-describing"],
  isA: ["speaking-action"],
  proposed: true,
});
