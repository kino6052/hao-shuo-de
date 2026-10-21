import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8486,
  phase: 4,
  zh: "支撑",
  py: "zhīchēng",
  en: "prop up; support; hold up",
  ru: "подпирать; поддерживать; держать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} X {{word:rang4}} Y {{word:bu4}} {{word:xia4}}-{{word:lai2}}",
    "{{word:zai4}} Y {{word:xia4}}-{{word:mian4}} {{word:bu4}} {{word:rang4}} Y {{word:dao4}} {{word:di4}}-{{word:shang4}}",
  ],
  tts: ["用X让Y不下来", "在Y下面不让Y到地上"],
  literal: "use X to keep Y from coming down / under Y, not let Y reach the ground",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["holding"],
  proposed: true,
});
