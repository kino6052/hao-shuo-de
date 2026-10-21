import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6881,
  phase: 4,
  zh: "队长",
  py: "duìzhǎng",
  en: "team captain; team leader",
  ru: "капитан команды, старший в отряде",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{word:qi3}} {{word:zuo4}} X-{{word:de}} {{word:ren2}}-{{word:de}} {{word:tou2}}",
    "{{word:yi1}}-{{word:qi3}} {{word:zuo4}} X-{{word:de}} {{word:ren2}} {{word:li3}} {{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["一起做X的人的头", "一起做X的人里做决定的人"],
  literal: "the head of the people who do X together / the one who decides among the people who do X together",
  fit: "plain",
  topics: ["teams-and-clubs"],
  isA: ["person"],
  proposed: true,
});
