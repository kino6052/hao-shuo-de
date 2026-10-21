import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9058,
  phase: 4,
  zh: "前提",
  py: "qiántí",
  en: "precondition; prerequisite; premise",
  ru: "предпосылка; условие",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} X {{word:yi3}}-{{word:qian2}} {{word:yao4}} {{word:you3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zhe4}}-{{light:ge4}} {{word:mei2}}-{{word:you3}}, {{word:jiu4}} {{word:bu4}} {{word:neng2}} {{word:zuo4}} X",
  ],
  tts: ["做X以前要有的东西", "这个没有，就不能做X"],
  literal: "what must be there before doing X / if this is missing, X can't be done",
  fit: "plain",
  topics: ["reasons-sources-and-conditions"],
  isA: ["cause-and-effect"],
  proposed: true,
});
