import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8801,
  phase: 4,
  zh: "丧失",
  py: "sàngshī",
  en: "lose; be deprived of",
  ru: "терять; лишаться",
  pos: "verb",
  hsd: [
    "{{word:yi3}}-{{word:qian2}} {{word:you3}} X, {{word:xian4}}-{{word:zai4}} {{word:mei2}}-{{word:you3}} {{word:le}}",
    "{{word:you3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:mei2}} {{word:le}}",
  ],
  tts: ["以前有X，现在没有了", "有的东西没了"],
  literal: "had X before, do not have it now / the thing one had is gone",
  fit: "plain",
  topics: ["giving-and-getting"],
  isA: ["receiving"],
  proposed: true,
});
