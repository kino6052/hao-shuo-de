import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6422,
  phase: 4,
  zh: "居住",
  py: "jūzhù",
  en: "live; reside",
  ru: "проживать",
  pos: "verb",
  hsd: ["X-{{word:de}} {{word:jia1}} {{word:zai4}} …", "{{word:zai4}} Y {{word:you3}} {{word:jia1}}"],
  tts: ["X的家在…", "在Y有家"],
  literal: "X's home is at … / have a home at Y",
  fit: "plain",
  topics: ["housing"],
  isA: ["body-action"],
  proposed: true,
});
