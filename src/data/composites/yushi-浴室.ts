import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8039,
  phase: 4,
  zh: "浴室",
  py: "yùshì",
  en: "bathroom; shower room",
  ru: "ванная; душевая",
  pos: "noun",
  hsd: [
    "{{word:yong4}} {{word:shui3}} {{word:rang4}} {{word:shen1ti3}} {{word:gan1jing4}}-{{word:de}} {{word:fang2}}-{{word:jian1}}",
    "{{word:yong4}} {{word:shui3}} {{word:rang4}} {{word:shen1ti3}} {{word:gan1jing4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["用水让身体干净的房间", "用水让身体干净的地方"],
  literal: "the room where you use water to make the body clean / the place where you use water to make the body clean",
  fit: "plain",
  topics: ["bathroom"],
  isA: ["room"],
  proposed: true,
});
