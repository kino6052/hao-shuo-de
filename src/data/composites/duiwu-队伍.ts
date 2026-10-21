import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6665,
  phase: 4,
  zh: "队伍",
  py: "duìwu",
  en: "team; ranks; a line of people",
  ru: "команда; строй",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{word:qi3}} {{word:zuo4}} X-{{word:de}} {{word:ren2}}",
    "{{word:hen3}} {{word:duo1}} {{word:yi1}}-{{word:qi3}} {{word:zou3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["一起做X的人", "很多一起走的人"],
  literal: "the people who do X together; many people who walk together",
  fit: "plain",
  topics: ["teams-and-clubs"],
  isA: ["group-of-people"],
  proposed: true,
});
