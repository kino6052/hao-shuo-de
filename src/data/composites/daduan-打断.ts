import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6887,
  phase: 4,
  zh: "打断",
  py: "dǎduàn",
  en: "interrupt; cut off",
  ru: "прерывать, перебивать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:bu4}} {{word:neng2}} {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}",
    "{{word:zai4}} {{word:ta1}} {{word:shuo1}} {{word:hua4}}-{{word:de}} {{word:shi2}}-{{light:hou4}}, {{word:shuo1}} {{word:hua4}}",
  ],
  tts: ["让X不能说下去", "在他说话的时候，说话"],
  literal: "make X unable to go on talking / speak while he is speaking",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  proposed: true,
});
