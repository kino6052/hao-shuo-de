import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9204,
  phase: 4,
  zh: "转交",
  py: "zhuǎnjiāo",
  en: "hand over (on someone's behalf); pass on to",
  ru: "передать (от имени другого); переправить",
  pos: "verb",
  hsd: [
    "{{word:bang1}} {{word:wo3}} {{word:ba3}} X {{word:gei3}} Y",
    "{{word:ba3}} X {{word:na2}}-{{word:gei3}} Y",
  ],
  tts: ["帮我把X给Y", "把X拿给Y"],
  literal: "give X to Y for me / take X and give it to Y",
  fit: "plain",
  topics: ["sending-and-delivering"],
  isA: ["handling-action"],
  proposed: true,
});
