import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8511,
  phase: 4,
  zh: "清扫",
  py: "qīngsǎo",
  en: "sweep clean; clean up",
  ru: "подметать; убирать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:gan1jing4}}",
    "{{word:ba3}} X {{word:shang4}}-{{word:mian4}} {{word:bu4}} {{word:gan1jing4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:na2}}-{{word:zou3}}",
  ],
  tts: ["让X干净", "把X上面不干净的东西拿走"],
  literal: "make X clean / take away the dirty things on X",
  fit: "plain",
  topics: ["cleaning"],
  isA: ["cleaning-action"],
  proposed: true,
});
