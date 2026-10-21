import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8925,
  phase: 4,
  zh: "减压",
  py: "jiǎnyā",
  en: "relieve stress; reduce pressure",
  ru: "снимать стресс; снижать давление",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:xin1}}-{{word:li3}} {{word:bu4}} {{word:zhong4}}",
    "{{word:rang4}} X {{word:bu4}} {{word:jue2}}-{{word:de}} {{word:hen3}} {{word:zhong4}}",
  ],
  tts: ["让X心里不重", "让X不觉得很重"],
  literal: "make X not heavy in the heart / make X not feel very heavy",
  fit: "plain",
  topics: ["worry-and-fear"],
  isA: ["becoming"],
  proposed: true,
});
