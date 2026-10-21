import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6781,
  phase: 4,
  zh: "请教",
  py: "qǐngjiào",
  en: "ask for advice; consult",
  ru: "обращаться за советом",
  pos: "verb",
  hsd: [
    "{{word:wen4}} {{word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:zen3me}} {{word:zuo4}}",
    "{{word:wen4}} {{word:zhi1dao4}}-{{word:de}} {{word:ren2}}, {{word:xiang3}} {{word:xue2}}",
  ],
  tts: ["问知道的人怎么做", "问知道的人，想学"],
  literal: "ask the person who knows how to do it / ask the person who knows, wanting to learn",
  fit: "plain",
  topics: ["asking-and-answering"],
  isA: ["speaking-action"],
  proposed: true,
});
