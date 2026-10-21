import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8211,
  phase: 4,
  zh: "跟踪",
  py: "gēnzōng",
  en: "follow; tail; track",
  ru: "следить; выслеживать",
  pos: "verb",
  hsd: [
    "{{word:zai4}} X {{word:hou4}}-{{word:mian4}} {{word:zou3}}, {{word:ji4}}-{{word:xia4}} X {{word:qu4}} {{word:na3}}-{{word:li3}}",
    "{{word:kan4}} X {{word:qu4}} {{word:na3}}-{{word:li3}}",
  ],
  tts: ["在X后面走，记下X去哪里", "看X去哪里"],
  literal: "walk behind X and write down where X goes / watch where X goes",
  fit: "plain",
  topics: ["looking-and-checking"],
  isA: ["perceiving"],
  proposed: true,
});
