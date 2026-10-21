import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6030,
  phase: 4,
  zh: "领",
  py: "lǐng",
  en: "lead; receive",
  ru: "вести; получать",
  pos: "verb",
  hsd: [
    "{{word:zou3}} {{word:zai4}} {{word:qian2}}-{{word:mian4}}, {{word:rang4}} X {{word:lai2}}",
    "{{word:qu4}} {{word:na2}} X",
  ],
  tts: ["走在前面，让X来", "去拿X"],
  literal: "walk in front so X follows / go and get X",
  fit: "plain",
  topics: ["giving-and-getting"],
  isA: ["receiving"],
  proposed: true,
});
