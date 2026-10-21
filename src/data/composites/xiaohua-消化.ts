import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6534,
  phase: 4,
  zh: "消化",
  py: "xiāohuà",
  en: "digest",
  ru: "переваривать",
  pos: "verb",
  hsd: [
    "{{word:du4zi}} {{word:ba3}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bian4}}, {{word:rang4}} {{word:shen1ti3}} {{word:neng2}} {{word:yong4}}",
    "{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:du4zi}}-{{word:li3}} {{word:bian4}}",
  ],
  tts: ["肚子把吃的东西变，让身体能用", "吃的东西在肚子里变"],
  literal: "the belly changes eaten things so the body can use them",
  fit: "plain",
  topics: ["inside-the-body"],
  isA: ["body-action"],
  proposed: true,
});
