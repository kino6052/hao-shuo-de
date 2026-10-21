import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8003,
  phase: 4,
  zh: "人行道",
  py: "rénxíngdào",
  en: "sidewalk; pavement",
  ru: "тротуар",
  pos: "noun",
  hsd: [
    "{{word:lu4}}-{{word:de}} {{word:pang2bian1}} {{word:gei3}} {{word:ren2}} {{word:zou3}}-{{word:de}} {{word:lu4}}",
    "{{word:ren2}} {{word:zou3}}-{{word:de}} {{word:lu4}}",
  ],
  tts: ["路的旁边给人走的路", "人走的路"],
  literal: "the road beside the road for people to walk on / the road people walk on",
  fit: "plain",
  topics: ["the-road"],
  isA: ["place"],
  proposed: true,
});
