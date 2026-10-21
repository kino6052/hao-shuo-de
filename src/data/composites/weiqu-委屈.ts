import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8025,
  phase: 4,
  zh: "委屈",
  py: "wěiqu",
  en: "feel wronged; aggrieved; to wrong someone",
  ru: "чувствовать себя обиженным; обидеть",
  pos: "adjective",
  hsd: [
    "{{word:jue2}}-{{word:de}} {{word:bu4}} {{word:dui4}}, {{word:xin1}}-{{word:li3}} {{word:nan2}}-{{word:guo4}}",
    "{{word:xin1}}-{{word:li3}} {{word:bu4}} {{word:kai1}}-{{word:xin1}}, {{word:jue2}}-{{word:de}} {{word:bie2}}-{{word:ren2}} {{word:bu4}} {{word:dui4}}",
    "{{word:rang4}} X {{word:xin1}}-{{word:li3}} {{word:nan2}}-{{word:guo4}}",
  ],
  tts: ["觉得不对，心里难过", "心里不开心，觉得别人不对", "让X心里难过"],
  literal: "feel it is not right, sad in the heart / unhappy in the heart, feel others are wrong / make X sad in the heart",
  fit: "plain",
  topics: ["sad-and-angry"],
  isA: ["feeling-quality"],
  proposed: true,
});
