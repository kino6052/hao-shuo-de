import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7066,
  phase: 4,
  zh: "翅膀",
  py: "chìbǎng",
  en: "wing",
  ru: "крыло",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:dong4}}-{{word:wu4}} {{word:fei1}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
    "{{word:rang4}} X {{word:fei1}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["让动物飞的部分", "让X飞的部分"],
  literal: "the part that lets an animal fly / the part that lets X fly",
  fit: "plain",
  topics: ["wild-animals"],
  isA: ["body-part"],
  proposed: true,
});
