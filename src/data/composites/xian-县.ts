import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6533,
  phase: 4,
  zh: "县",
  py: "xiàn",
  en: "county",
  ru: "уезд",
  pos: "noun",
  hsd: [
    "{{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:bi3}} {{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:jia1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:xiao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["国家里的小的地方", "比有很多的家的地方小的地方"],
  literal: "a small place in the country",
  fit: "plain",
  topics: ["countries-and-cities"],
  isA: ["settlement"],
  proposed: true,
});
