import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6997,
  phase: 4,
  zh: "约会",
  py: "yuēhuì",
  en: "date; appointment; arrange to meet",
  ru: "свидание; встреча по договорённости",
  pos: "noun",
  hsd: [
    "{{word:shuo1}}-{{word:hao3}}-{{word:de}} {{word:jian4}}-{{word:mian4}}",
    "{{word:shuo1}} {{word:hao3}} {{word:he2}} X {{word:jian4}}-{{word:mian4}}",
  ],
  tts: ["说好的见面", "说好和X见面"],
  literal: "an agreed meeting / agree to meet X",
  fit: "plain",
  topics: ["meeting-and-parting"],
  isA: ["social-action"],
  proposed: true,
});
