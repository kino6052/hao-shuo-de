import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8255,
  phase: 4,
  zh: "排名",
  py: "páimíng",
  en: "ranking; rank; place in a ranking",
  ru: "рейтинг; место в рейтинге",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} {{word:shei2}} {{word:shi4}} {{word:di4}}-{{word:yi1}}, {{word:shei2}} {{word:shi4}} {{word:di4}}-{{word:er4}}",
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:di4}}-{{word:yi1}}, {{word:di4}}-{{word:er4}}, {{word:di4}}-{{word:san1}}",
  ],
  tts: ["说谁是第一，谁是第二", "把X放在第一，第二，第三"],
  literal: "say who is first, who is second / put X as first, second, third",
  fit: "plain",
  topics: ["exams-and-marks"],
  isA: ["placing"],
  proposed: true,
});
