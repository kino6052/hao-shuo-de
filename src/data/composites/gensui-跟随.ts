import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8370,
  phase: 4,
  zh: "跟随",
  py: "gēnsuí",
  en: "follow; accompany",
  ru: "следовать за; сопровождать",
  pos: "verb",
  hsd: [
    "{{word:zai4}} X {{word:hou4}}-{{word:mian4}} {{word:qu4}}",
    "{{word:he2}} X {{word:yi1}}-{{word:qi3}} {{word:zou3}}, {{word:zai4}} X {{word:hou4}}-{{word:mian4}}",
  ],
  tts: ["在X后面去", "和X一起走，在X后面"],
  literal: "go behind X / walk together with X, behind X",
  fit: "plain",
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  proposed: true,
});
