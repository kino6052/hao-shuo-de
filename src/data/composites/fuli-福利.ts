import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8620,
  phase: 4,
  zh: "福利",
  py: "fúlì",
  en: "welfare; benefits (from work)",
  ru: "льготы; социальные блага",
  pos: "noun",
  hsd: [
    "{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:ye3}} {{word:gei3}} {{word:ren2}}-{{word:de}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:gei3}} {{word:ren2}}-{{word:de}} {{word:bie2}}-{{word:de}} {{word:hao3}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["工作的地方也给人的好的东西", "工作的地方给人的别的好东西"],
  literal: "the good things the workplace gives people besides / the other good things the workplace gives people",
  fit: "plain",
  topics: ["working-life"],
  isA: ["idea"],
  proposed: true,
});
