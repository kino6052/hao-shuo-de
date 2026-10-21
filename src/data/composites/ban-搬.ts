import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8050,
  phase: 4,
  zh: "搬",
  py: "bān",
  en: "move; carry; relocate",
  ru: "переносить; переезжать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:cong2}} {{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:na2}} {{word:dao4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:ba3}}-{{word:zai4}}-{{word:jia1}}-{{word:li3}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:na2}}-{{word:dao4}}-{{word:xin1}}-{{word:de}} {{word:jia1}}",
  ],
  tts: ["把X从一个地方拿到别的地方", "把在家里的东西拿到心的家"],
  literal: "take X from one place to another place / take the things of the home to a new home",
  fit: "plain",
  topics: ["carrying-and-holding"],
  isA: ["handling-action"],
  proposed: true,
});
