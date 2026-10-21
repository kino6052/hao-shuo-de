import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6170,
  phase: 4,
  zh: "煮",
  py: "zhǔ",
  en: "boil; cook in water",
  ru: "варить",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:huo3}}-{{word:shang4}}-{{word:de}} {{word:shui3}} {{word:li3}}",
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:re4}} {{word:shui3}} {{word:li3}}",
  ],
  tts: ["把X放在火上的水里", "把X放在热水里"],
  literal: "put X in the water on the fire / put X in hot water",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["making"],
  proposed: true,
});
