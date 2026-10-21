import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8066,
  phase: 4,
  zh: "泡",
  py: "pào",
  en: "soak; steep; bubble",
  ru: "замачивать; пузырь",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:shui3}}-{{word:li3}}",
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:chang2}} {{word:shi2}}-{{word:jian1}}",
    "{{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:qiu2}}",
  ],
  tts: ["把X放在水里", "把X放在水里长时间", "在水里的小的球"],
  literal: "put X in water / put X in water for a long time / the small ball in the water",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["making"],
  proposed: true,
});
