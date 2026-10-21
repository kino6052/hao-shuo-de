import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8332,
  phase: 4,
  zh: "主张",
  py: "zhǔzhāng",
  en: "advocate; maintain; propose; stance",
  ru: "отстаивать; настаивать; позиция",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} {{word:wo3}} {{word:xiang3}} {{word:yao4}} X",
    "{{word:shuo1}} {{word:wo3}} {{word:jue2}}-{{word:de}} {{word:yao4}} {{word:zuo4}} X",
  ],
  tts: ["说我想要X", "说我觉得要做X"],
  literal: "say I want X / say I feel X must be done",
  fit: "plain",
  topics: ["ideas-and-opinions"],
  isA: ["speaking-action"],
  proposed: true,
});
