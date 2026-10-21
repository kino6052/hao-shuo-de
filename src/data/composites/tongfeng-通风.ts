import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9233,
  phase: 4,
  zh: "通风",
  py: "tōngfēng",
  en: "ventilate; let in fresh air",
  ru: "проветривать; вентилировать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} {{word:kong1}}-{{word:qi4}} {{word:jin4}}-{{word:lai2}}, {{word:chu1}}-{{word:qu4}}",
    "{{word:ba3}} {{word:men2}} {{word:kai1}}-{{word:kai1}}, {{word:rang4}} {{word:kong1}}-{{word:qi4}} {{word:zou3}}",
  ],
  tts: ["让空气进来，出去", "把门开开，让空气走"],
  literal: "let the air come in and go out / open the door, let the air move",
  fit: "plain",
  topics: ["cleaning"],
  isA: ["cleaning-action"],
  proposed: true,
});
