import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8987,
  phase: 4,
  zh: "反馈",
  py: "fǎnkuì",
  en: "feedback; give feedback",
  ru: "обратная связь; отклик",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:jie2}}-{{word:guo3}} {{word:he2}} {{word:kan4}}-{{word:fa3}} {{word:shuo1}} {{word:gei3}} X",
    "{{word:ba3}} X-{{word:de}} {{word:jie2}}-{{word:guo3}} {{word:shuo1}}-{{word:hui2}}-{{word:qu4}}",
  ],
  tts: ["把结果和看法说给X", "把X的结果说回去"],
  literal: "tell X the result and the view / tell the result of X back",
  fit: "plain",
  topics: ["introducing-and-passing-on"],
  isA: ["speaking-action"],
  proposed: true,
});
