import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7501,
  phase: 4,
  zh: "悠久",
  py: "yōujiǔ",
  en: "long-standing; age-old",
  ru: "давний; многовековой",
  pos: "adjective",
  hsd: [
    "{{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:chang2}}",
    "{{word:cong2}} {{word:hen3}} {{word:duo1}} {{word:nian2}} {{word:yi3}}-{{word:qian2}} {{word:dao4}} {{word:xian4}}-{{word:zai4}}",
  ],
  tts: ["时间很长", "从很多年以前到现在"],
  literal: "the time is very long / from many years ago until now",
  fit: "plain",
  topics: ["new-and-old"],
  isA: ["age-or-newness"],
  proposed: true,
});
