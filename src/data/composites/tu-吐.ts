import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7275,
  phase: 4,
  zh: "吐",
  py: "tǔ",
  en: "spit; vomit; throw up",
  ru: "плевать; рвать, тошнить",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:cong2}} {{word:kou3}}-{{word:li3}} {{word:chu1}}-{{word:lai2}}",
    "{{word:rang4}} {{word:du4zi}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:cong2}} {{word:kou3}}-{{word:li3}} {{word:chu1}}-{{word:lai2}}",
  ],
  tts: ["让X从口里出来", "让肚子里的东西从口里出来"],
  literal: "let X come out of the mouth / let what is in the belly come out of the mouth",
  fit: "plain",
  topics: ["body-needs"],
  isA: ["body-action"],
  proposed: true,
});
