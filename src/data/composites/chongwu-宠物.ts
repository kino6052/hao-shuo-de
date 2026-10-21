import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6880,
  phase: 4,
  zh: "宠物",
  py: "chǒngwù",
  en: "pet",
  ru: "домашнее животное",
  pos: "noun",
  hsd: [
    "{{word:zai4}} {{word:jia1}}-{{word:li3}} {{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:huo2}}-{{word:de}} {{word:dong4}}-{{word:wu4}}",
    "{{word:zai4}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}}",
  ],
  tts: ["在家里和人一起活的动物", "在家里的动物"],
  literal: "an animal that lives with people at home / an animal of the home",
  fit: "plain",
  topics: ["pets"],
  isA: ["animal"],
  proposed: true,
});
