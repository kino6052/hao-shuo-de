import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8217,
  phase: 4,
  zh: "轨道",
  py: "guǐdào",
  en: "track; rail; orbit",
  ru: "рельсы; колея; орбита",
  pos: "noun",
  hsd: [
    "{{word:huo3}}-{{word:che1}} {{word:zou3}}-{{word:de}} {{word:lu4}}",
    "{{word:di4}}-{{word:qiu2}} {{word:zai4}} {{word:tian1}}-{{word:shang4}} {{word:zou3}}-{{word:de}} {{word:lu4}}",
  ],
  tts: ["火车走的路", "地球在天上走的路"],
  literal: "the road a train goes on / the road the earth takes in the sky",
  fit: "plain",
  topics: ["trains-and-stations"],
  isA: ["made-thing"],
  proposed: true,
});
