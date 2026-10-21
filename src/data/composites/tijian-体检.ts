import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6753,
  phase: 4,
  zh: "体检",
  py: "tǐjiǎn",
  en: "physical exam; checkup",
  ru: "медосмотр",
  pos: "verb",
  hsd: [
    "{{word:kan4}} {{word:shen1ti3}} {{word:hao3}} {{word:bu4}} {{word:hao3}}",
    "{{word:hao3}}-{{word:hao3}} {{word:kan4}} {{word:shen1ti3}}",
  ],
  tts: ["看身体好不好", "好好看身体"],
  literal: "see if the body is well / look at the body carefully",
  fit: "plain",
  topics: ["at-the-doctor"],
  isA: ["perceiving"],
  proposed: true,
});
