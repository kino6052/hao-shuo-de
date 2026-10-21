import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8313,
  phase: 4,
  zh: "占据",
  py: "zhànjù",
  en: "occupy; take up; hold (a place)",
  ru: "занимать; захватывать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:yong4}} {{word:le}}",
    "{{word:zai4}} X {{word:li3}}-{{word:mian4}}, {{word:bu4}} {{word:rang4}} {{word:bie2}}-{{word:ren2}} {{word:zai4}}",
  ],
  tts: ["把X的地方用了", "在X里面，不让别人在"],
  literal: "use up the place of X / be in X so that others cannot be",
  fit: "plain",
  topics: ["carrying-and-holding"],
  isA: ["owning"],
  proposed: true,
});
