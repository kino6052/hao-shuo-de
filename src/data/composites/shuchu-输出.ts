import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9242,
  phase: 4,
  zh: "输出",
  py: "shūchū",
  en: "export; output; send out",
  ru: "вывозить; выводить; экспорт",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:na2}}-{{word:chu1}}-{{word:lai2}} {{word:gei3}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:ba3}} X {{word:gei3}} {{word:chu1}}-{{word:qu4}}",
  ],
  tts: ["把X拿出来给别的地方", "把X给出去"],
  literal: "take X out and give it to another place / give X out",
  fit: "plain",
  topics: ["sending-and-delivering"],
  isA: ["handling-action"],
  proposed: true,
});
