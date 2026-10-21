import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8280,
  phase: 4,
  zh: "透露",
  py: "tòulù",
  en: "reveal; disclose; leak",
  ru: "разглашать; раскрывать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} {{word:ren2}} {{word:zhi1dao4}} {{word:mei2}}-{{word:you3}} {{word:ren2}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:ba3}} X {{word:shuo1}} {{word:gei3}} {{word:ren2}} {{word:ting1}}",
  ],
  tts: ["让人知道没有人知道的东西", "把X说给人听"],
  literal: "let people know what nobody knew / tell X to people",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  proposed: true,
});
