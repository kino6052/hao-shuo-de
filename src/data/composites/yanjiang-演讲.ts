import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6540,
  phase: 4,
  zh: "演讲",
  py: "yǎnjiǎng",
  en: "give a speech; lecture",
  ru: "выступать с речью; речь",
  pos: "verb",
  hsd: [
    "{{word:zai4}} {{word:da4}}-{{word:jia1}} {{word:qian2}}-{{word:mian4}} {{word:shuo1}} {{word:hua4}}",
    "{{word:zai4}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}-{{word:qian2}}-{{word:mian4}} {{word:shuo1}} {{word:hua4}}",
  ],
  tts: ["在大家前面说话", "在很多的人前面说话"],
  literal: "speak in front of everyone",
  fit: "plain",
  topics: ["talks-discussion-and-orders"],
  isA: ["speaking-action"],
  proposed: true,
});
