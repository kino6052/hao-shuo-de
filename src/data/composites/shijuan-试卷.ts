import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6497,
  phase: 4,
  zh: "试卷",
  py: "shìjuàn",
  en: "exam paper; test paper",
  ru: "экзаменационная работа; лист с заданиями",
  pos: "noun",
  hsd: [
    "{{word:kan4}} {{word:ni3}} {{word:xue2}}-{{word:le}} {{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:kan4}} {{word:ni3}} {{word:xue2}}-{{word:de}} {{word:duo1}} {{word:hao3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["看你学了什么的写的东西", "看你学的多好的写的东西"],
  literal: "a written thing that shows what you have learned",
  fit: "plain",
  topics: ["exams-and-marks"],
  isA: ["paper-thing"],
  proposed: true,
});
