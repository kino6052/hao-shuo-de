import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7289,
  phase: 4,
  zh: "婴儿",
  py: "yīng’ér",
  en: "baby; infant",
  ru: "младенец",
  pos: "noun",
  hsd: [
    "{{word:hen3}} {{word:xiao3}}-{{word:de}} {{word:hai2}}-{{word:zi}}",
    "{{word:hai2}} {{word:bu4}} {{word:neng2}} {{word:shuo1}} {{word:hua4}}-{{word:de}} {{word:hai2}}-{{word:zi}}",
  ],
  tts: ["很小的孩子", "还不能说话的孩子"],
  literal: "a very small child / a child who still can't talk",
  fit: "plain",
  topics: ["babies-and-children"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
