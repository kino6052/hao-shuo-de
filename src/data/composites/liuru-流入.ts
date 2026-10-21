import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8760,
  phase: 4,
  zh: "流入",
  py: "liúrù",
  en: "flow into; pour in",
  ru: "втекать; вливаться",
  pos: "verb",
  hsd: [
    "{{word:dong4}} {{word:jin4}} X {{word:li3}}-{{word:mian4}}",
    "{{word:cong2}} {{word:wai4}}-{{word:mian4}} {{word:dong4}} {{word:dao4}} {{word:li3}}-{{word:mian4}}",
  ],
  tts: ["动进X里面", "从外面动到里面"],
  literal: "move into the inside of X / move from the outside to the inside",
  fit: "plain",
  topics: ["going-in-and-coming-out"],
  isA: ["moving-action"],
  proposed: true,
});
