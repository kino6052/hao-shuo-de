import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6687,
  phase: 4,
  zh: "考生",
  py: "kǎoshēng",
  en: "examinee",
  ru: "экзаменуемый",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:ren2}} {{word:kan4}} {{word:ta1}} {{word:xue2}}-{{word:le}} {{word:shen2me}}-{{word:de}} {{word:ren2}}",
    "{{word:zuo4}} {{word:ti2}}-{{word:de}} {{word:xue2}}-{{word:sheng1}}",
  ],
  tts: ["让人看他学了什么的人", "做题的学生"],
  literal: "a person whom others check on what he has learned; a student doing questions",
  fit: "plain",
  topics: ["exams-and-marks"],
  isA: ["person"],
  proposed: true,
});
