import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7320,
  phase: 4,
  zh: "粥",
  py: "zhōu",
  en: "porridge; congee",
  ru: "каша; рисовая каша",
  pos: "noun",
  hsd: [
    "{{word:yong4}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:shui3}}-{{word:zuo4}}-{{word:de}} {{word:fan4}}",
    "{{word:shui3}} {{word:duo1}}-{{word:de}} {{word:fan4}}",
  ],
  tts: ["用很多的水做的饭", "水多的饭"],
  literal: "the meal made with a lot of water / the meal with much water",
  fit: "plain",
  topics: ["grains-and-bread"],
  isA: ["staple-food"],
  proposed: true,
});
