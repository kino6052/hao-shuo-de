import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8696,
  phase: 4,
  zh: "服用",
  py: "fúyòng",
  en: "take (medicine); consume (as a dose)",
  ru: "принимать (лекарство)",
  pos: "verb",
  hsd: [
    "{{word:chi1}} {{word:rang4}} {{word:shen1ti3}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:ba3}} {{word:rang4}} {{word:shen1ti3}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:chi1}}-{{word:xia4}}-{{word:qu4}}",
  ],
  tts: ["吃让身体好的东西", "把让身体好的东西吃下去"],
  literal: "eat the thing that makes the body well / eat down the thing that makes the body well",
  fit: "plain",
  topics: ["at-the-doctor"],
  isA: ["eating-and-drinking-action"],
  proposed: true,
});
