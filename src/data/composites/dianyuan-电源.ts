import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8193,
  phase: 4,
  zh: "电源",
  py: "diànyuán",
  en: "power source; power supply",
  ru: "источник питания",
  pos: "noun",
  hsd: [
    "\"diàn\" {{word:lai2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:gei3}} {{word:ji1}}-{{word:qi4}} \"diàn\"-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["电来的地方", "给机器电的东西"],
  literal: "the place electricity comes from / the thing that gives a machine electricity",
  fit: "plain",
  topics: ["home-electronics"],
  isA: ["electric-device"],
  proposed: true,
});
