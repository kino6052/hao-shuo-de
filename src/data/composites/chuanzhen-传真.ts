import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9360,
  phase: 4,
  zh: "传真",
  py: "chuánzhēn",
  en: "fax",
  ru: "факс",
  pos: "noun",
  hsd: [
    "{{word:yong4}} {{word:hua4}}-{{word:ji1}}-{{word:de}} {{word:xian4}} {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["用话机的线给远的人的写的东西"],
  literal: "a written thing given to a far-away person by the phone's line",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["paper-thing"],
  proposed: true,
});
