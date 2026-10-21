import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7489,
  phase: 4,
  zh: "问卷",
  py: "wènjuàn",
  en: "questionnaire",
  ru: "анкета; опросник",
  pos: "noun",
  hsd: [
    "{{word:xie3}} {{word:wen4}}-{{word:ti2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:you3}} {{word:hen3}} {{word:duo1}} {{word:wen4}}-{{word:ti2}}-{{word:de}}, {{word:rang4}} {{word:ren2}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["写问题的东西", "有很多问题的，让人写的东西"],
  literal: "a thing where questions are written / a thing with many questions that people write on",
  fit: "plain",
  topics: ["asking-and-answering"],
  isA: ["paper-thing"],
  proposed: true,
});
