import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8318,
  phase: 4,
  zh: "招收",
  py: "zhāoshōu",
  en: "recruit; take on; enroll",
  ru: "набирать; принимать",
  pos: "verb",
  hsd: [
    "{{word:jiao4}} {{word:ren2}} {{word:lai2}}, {{word:rang4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}",
    "{{word:jiao4}} {{word:ren2}} {{word:lai2}} {{word:gong1}}-{{word:zuo4}} {{word:he2}} {{word:xue2}}",
  ],
  tts: ["叫人来，让他进来", "叫人来工作和学"],
  literal: "call people and let them in / call people to come and work or study",
  fit: "plain",
  topics: ["working-life"],
  isA: ["social-action"],
  proposed: true,
});
