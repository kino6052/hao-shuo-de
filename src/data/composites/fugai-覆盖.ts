import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6134,
  phase: 4,
  zh: "覆盖",
  py: "fùgài",
  en: "cover; covered",
  ru: "покрывать; накрывать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} Y-{{word:shang4}}, {{word:rang4}} Y {{word:kan4}}-{{word:bu4}}-{{word:jian4}}",
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} Y-{{word:shang4}}-{{word:mian4}}",
  ],
  tts: ["把X放在Y上，让Y看不见", "把X放在Y上面"],
  literal: "put X on Y so that Y cannot be seen / put X on top of Y",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["placing"],
  proposed: true,
});
