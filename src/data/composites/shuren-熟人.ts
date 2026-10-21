import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7010,
  phase: 4,
  zh: "熟人",
  py: "shúrén",
  en: "acquaintance; someone you know",
  ru: "знакомый",
  pos: "noun",
  hsd: [
    "{{word:wo3}} {{word:zhi1dao4}}-{{word:de}} {{word:ren2}}",
    "{{word:wo3}} {{word:jian4}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["我知道的人", "我见过很多次的人"],
  literal: "a person I know / a person I have seen many times",
  fit: "plain",
  topics: ["friends-and-neighbours"],
  isA: ["social-role"],
  proposed: true,
});
