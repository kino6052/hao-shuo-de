import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8592,
  phase: 4,
  zh: "产地",
  py: "chǎndì",
  en: "place of origin; where something is produced",
  ru: "место производства; происхождение",
  pos: "noun",
  hsd: [
    "{{word:dong1}}-{{light:xi1}} {{word:cong2}} {{word:na4}}-{{word:li3}} {{word:lai2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:zuo4}}-{{word:chu1}} X-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["东西从那里来的地方", "做出X的地方"],
  literal: "the place a thing comes from / the place that makes X",
  fit: "plain",
  topics: ["farms-and-factories"],
  isA: ["place"],
  proposed: true,
});
