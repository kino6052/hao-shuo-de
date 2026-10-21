import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9012,
  phase: 4,
  zh: "调动",
  py: "diàodòng",
  en: "transfer; move; deploy",
  ru: "перемещать; переводить; задействовать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:cong2}} {{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:na2}} {{word:dao4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["把X从一个地方拿到别的地方"],
  literal: "take X from one place to another place",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  proposed: true,
});
