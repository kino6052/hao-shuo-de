import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6802,
  phase: 4,
  zh: "租",
  py: "zū",
  en: "rent; lease",
  ru: "арендовать, снимать; сдавать",
  pos: "verb",
  hsd: [
    "{{word:gei3}} {{word:jin1}}, {{word:yong4}} {{word:bie2}}-{{word:ren2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:rang4}} {{word:ren2}} {{word:gei3}} {{word:jin1}} {{word:yong4}} X",
  ],
  tts: ["给金，用别人的东西", "让人给金用X"],
  literal: "pay money to use another person's thing / let people pay money to use X",
  fit: "plain",
  topics: ["housing"],
  isA: ["trade-action"],
  proposed: true,
});
