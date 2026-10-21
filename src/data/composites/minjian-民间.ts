import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8765,
  phase: 4,
  zh: "民间",
  py: "mínjiān",
  en: "among the people; folk; popular (non-official)",
  ru: "в народе; народный",
  pos: "noun",
  hsd: [
    "{{word:ren2}}-{{word:men}} {{word:zhong1}}-{{word:jian1}}",
    "{{word:bu4}} {{word:shi4}} {{word:guo2}}-{{word:jia1}}-{{word:de}}, {{word:shi4}} {{word:ren2}}-{{word:men}}-{{word:de}}",
  ],
  tts: ["人们中间", "不是国家的，是人们的"],
  literal: "among the people / not the country's, the people's",
  fit: "plain",
  topics: ["people-together"],
  isA: ["group-of-people"],
  proposed: true,
});
