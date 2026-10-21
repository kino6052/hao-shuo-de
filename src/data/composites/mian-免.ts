import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8251,
  phase: 4,
  zh: "免",
  py: "miǎn",
  en: "be exempt from; spare; not have to",
  ru: "освобождать; избавлять от; не нужно",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:yong4}} {{word:zuo4}}",
    "{{word:rang4}} X {{word:bu4}} {{word:yong4}} {{word:zuo4}} Y",
  ],
  tts: ["不用做", "让X不用做Y"],
  literal: "no need to do / let X not need to do Y",
  fit: "plain",
  topics: ["deciding"],
  isA: ["starting-and-stopping"],
  proposed: true,
});
