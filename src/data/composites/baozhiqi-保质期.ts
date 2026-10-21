import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8123,
  phase: 4,
  zh: "保质期",
  py: "bǎozhìqī",
  en: "shelf life; expiry period",
  ru: "срок годности",
  pos: "noun",
  hsd: [
    "{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:huai4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:neng2}} {{word:liu2}} {{word:duo1}} {{word:chang2}}",
  ],
  tts: ["吃的东西不坏的时间", "吃的东西能留多长"],
  literal: "the time food does not go bad / how long food can be kept",
  fit: "plain",
  topics: ["how-often"],
  isA: ["time-span"],
  proposed: true,
});
