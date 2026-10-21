import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8316,
  phase: 4,
  zh: "障碍",
  py: "zhàng’ài",
  en: "obstacle; barrier; hindrance",
  ru: "препятствие",
  pos: "noun",
  hsd: [
    "{{word:rang4}} X {{word:bu4}} {{word:neng2}} {{word:zou3}}-{{word:guo4}}-{{word:qu4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zai4}} X {{word:qian2}}-{{word:mian4}}, {{word:rang4}} X {{word:bu4}} {{word:neng2}} {{word:zou3}}",
  ],
  tts: ["让X不能走过去的东西", "在X前面，让X不能走"],
  literal: "a thing that makes X unable to get past / be in front of X so that X cannot go",
  fit: "plain",
  topics: ["hard-and-difficult"],
  isA: ["state-name"],
  proposed: true,
});
