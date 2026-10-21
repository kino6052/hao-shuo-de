import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8117,
  phase: 4,
  zh: "硕士",
  py: "shuòshì",
  en: "master's degree; person with a master's degree",
  ru: "магистр; степень магистра",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:xue2}} {{word:hou4}} {{word:hai2}} {{word:xue2}}-{{word:de}} {{word:ren2}}",
    "{{word:xue2}}-{{word:de}} {{word:bi3}} {{word:da4}}-{{word:xue2}}-{{word:sheng1}} {{word:duo1}}, {{word:bi3}} {{word:xue2}} {{word:zui4}} {{word:duo1}}-{{word:de}} {{word:ren2}} {{word:shao3}}",
  ],
  tts: ["大学后还学的人", "学的比大学生多，比学最多的人少"],
  literal: "a person who still studies after university / a person who has studied more than a college student and less than the one who studied most",
  fit: "plain",
  topics: ["school-days-and-years"],
  isA: ["person"],
  proposed: true,
});
