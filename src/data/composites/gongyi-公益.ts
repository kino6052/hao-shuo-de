import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9083,
  phase: 4,
  zh: "公益",
  py: "gōngyì",
  en: "public welfare; charity",
  ru: "общественное благо; благотворительность",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:yao4}} {{word:jin1}}, {{word:bang1}} {{word:da4}}-{{word:jia1}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}",
    "{{word:bang1}} {{word:hen3}} {{word:duo1}} {{word:ren2}}-{{word:de}} {{word:huo2}}-{{word:dong4}}",
  ],
  tts: ["不要金，帮大家的工作", "帮很多人的活动"],
  literal: "work that helps everyone and wants no money / an activity that helps many people",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["activity-name"],
  proposed: true,
});
