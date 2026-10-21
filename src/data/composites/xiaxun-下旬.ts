import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9238,
  phase: 4,
  zh: "下旬",
  py: "xiàxún",
  en: "the last ten days of a month",
  ru: "последняя декада месяца",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:yue4}}-{{word:de}} {{word:di4}}-{{word:er4}}-{{word:shi2}}-{{word:yi1}} {{word:tian1}} {{word:dao4}} {{word:zui4}}-{{word:hou4}} {{word:yi1}} {{word:tian1}}",
    "{{word:yi1}}-{{light:ge4}} {{word:yue4}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:shi2}} {{word:tian1}}",
  ],
  tts: ["一个月的第二十一天到最后一天", "一个月的最后十天"],
  literal: "from the twenty-first day to the last day of a month / the last ten days of a month",
  fit: "plain",
  topics: ["calendar"],
  isA: ["time-span"],
  proposed: true,
});
