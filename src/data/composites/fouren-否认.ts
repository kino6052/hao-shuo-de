import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7429,
  phase: 4,
  zh: "否认",
  py: "fǒurèn",
  en: "deny (a fact or a charge)",
  ru: "отрицать; не признавать",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} {{word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:shuo1}} {{word:bu4}} {{word:shi4}} {{word:wo3}} {{word:zuo4}}-{{word:de}}",
  ],
  tts: ["说这不是真的", "说不是我做的"],
  literal: "say this is not true / say it was not done by me",
  fit: "plain",
  topics: ["agreeing-and-praising"],
  isA: ["speaking-action"],
  proposed: true,
});
