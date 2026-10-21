import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8600,
  phase: 4,
  zh: "冲击",
  py: "chōngjī",
  en: "hit hard; charge at; impact",
  ru: "удар; ударять; штурмовать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:hen3}} {{word:da4}}-{{word:de}} {{word:li4}} {{word:da3}} {{word:dao4}} X {{word:shang4}}",
    "{{word:hen3}} {{word:kuai4}} {{word:da3}}-{{word:dao4}} X, {{word:rang4}} X {{word:dong4}}",
  ],
  tts: ["用很大的力打到X上", "很快打到X，让X动"],
  literal: "hit X with a very big force / quickly hit X and make X move",
  fit: "plain",
  topics: ["pushing-and-pulling"],
  isA: ["handling-action"],
  proposed: true,
});
