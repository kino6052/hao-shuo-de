import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9229,
  phase: 4,
  zh: "上旬",
  py: "shàngxún",
  en: "the first ten days of a month",
  ru: "первая декада месяца",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:yue4}}-{{word:de}} {{word:di4}}-{{word:yi1}} {{word:tian1}} {{word:dao4}} {{word:di4}}-{{word:shi2}} {{word:tian1}}",
    "{{word:yi1}}-{{light:ge4}} {{word:yue4}}-{{word:de}} {{word:qian2}}-{{word:mian4}}-{{word:de}} {{word:shi2}} {{word:tian1}}",
  ],
  tts: ["一个月的第一天到第十天", "一个月的前面的十天"],
  literal: "from the first day to the tenth day of a month / the first ten days of a month",
  fit: "plain",
  topics: ["calendar"],
  isA: ["time-span"],
  proposed: true,
});
