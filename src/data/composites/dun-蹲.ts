import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7241,
  phase: 4,
  zh: "蹲",
  py: "dūn",
  en: "squat; crouch",
  ru: "сидеть на корточках",
  pos: "verb",
  hsd: [
    "{{word:shen1ti3}} {{word:xia4}}-{{word:qu4}}, {{word:jiao3}} {{word:zhan4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}, {{word:bu4}} {{word:zuo4}}-{{word:xia4}}",
    "{{word:jiao3}} {{word:zhan4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}, {{word:dan4}} {{word:shen1ti3}} {{word:xia4}}-{{word:qu4}}",
  ],
  tts: ["身体下去，脚站在地上，不坐下", "脚站在地上，但身体下去"],
  literal: "the body goes down, the feet stand on the floor, not sitting down / the feet stand on the floor, but the body goes down",
  fit: "plain",
  topics: ["posture"],
  isA: ["body-position"],
  proposed: true,
});
