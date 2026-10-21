import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6241,
  phase: 4,
  zh: "推荐",
  py: "tuījiàn",
  en: "recommend",
  ru: "рекомендовать",
  pos: "verb",
  hsd: [
    "{{word:dui4}} {{word:ren2}} {{word:shuo1}} X {{word:hen3}} {{word:hao3}}",
    "{{word:shuo1}} X {{word:hao3}}, {{word:rang4}} {{word:bie2}}-{{word:ren2}} {{word:yao4}} X",
  ],
  tts: ["对人说X很好", "说X好，让别人要X"],
  literal: "tell people X is very good / say X is good, make others want X",
  fit: "plain",
  topics: ["comments-and-recommending"],
  isA: ["speaking-action"],
  proposed: true,
});
