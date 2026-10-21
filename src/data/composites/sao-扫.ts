import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7238,
  phase: 4,
  zh: "扫",
  py: "sǎo",
  en: "sweep",
  ru: "подметать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:rang4}} {{word:di4}} {{word:gan1jing4}}",
    "{{word:ba3}} {{word:di4}}-{{word:shang4}} {{word:bu4}} {{word:gan1jing4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:na2}}-{{word:zou3}}",
  ],
  tts: ["用工具让地干净", "把地上不干净的东西拿走"],
  literal: "use a tool to make the floor clean / take away the not-clean things on the floor",
  fit: "plain",
  topics: ["cleaning"],
  isA: ["cleaning-action"],
  proposed: true,
});
