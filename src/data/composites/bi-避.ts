import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6600,
  phase: 4,
  zh: "避",
  py: "bì",
  en: "avoid; stay away from",
  ru: "избегать; держаться подальше",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:he2}} X {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
    "{{word:bu4}} {{word:dao4}} X {{word:na4}}-{{word:li3}} {{word:qu4}}",
  ],
  tts: ["不和X在一起", "不到X那里去"],
  literal: "not be together with X / not go to where X is",
  fit: "plain",
  topics: ["leaving-stopping-and-retreating"],
  isA: ["moving-action"],
  proposed: true,
});
