import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7101,
  phase: 4,
  zh: "端",
  py: "duān",
  en: "carry level with both hands",
  ru: "нести двумя руками",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:liang3}}-{{light:ge4}} {{word:shou3}}-{{word:shang4}} {{word:na2}}",
    "{{word:yong4}} {{word:liang3}}-{{light:ge4}} {{word:shou3}} {{word:na2}}, {{word:rang4}} X {{word:ping2}}",
  ],
  tts: ["把X放在两个手上拿", "用两个手拿，让X平"],
  literal: "put X on the two hands and hold it / hold it with two hands, keeping X level",
  fit: "plain",
  topics: ["carrying-and-holding"],
  isA: ["holding"],
  proposed: true,
});
