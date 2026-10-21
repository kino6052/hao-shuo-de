import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8532,
  phase: 4,
  zh: "中毒",
  py: "zhòngdú",
  en: "be poisoned; poisoning",
  ru: "отравиться; отравление",
  pos: "verb",
  hsd: [
    "{{word:chi1}}-{{word:le}} {{word:rang4}} {{word:shen1ti3}} {{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:shen1ti3}} {{word:jin4}}-{{word:le}} {{word:rang4}} {{word:shen1ti3}} {{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["吃了让身体坏的东西", "身体进了让身体坏的东西"],
  literal: "ate a thing that makes the body bad / a thing that makes the body bad got into the body",
  fit: "plain",
  topics: ["germs-poison-and-allergy"],
  isA: ["being-affected"],
  proposed: true,
});
