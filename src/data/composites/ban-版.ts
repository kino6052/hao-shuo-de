import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7379,
  phase: 4,
  zh: "版",
  py: "bǎn",
  en: "edition; version (of a publication)",
  ru: "издание; версия",
  pos: "noun",
  hsd: [
    "X-{{word:de}} {{word:yi1}}-{{light:ge4}} {{word:bu4}}-{{word:tong2}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
    "{{word:shu1}} {{word:zuo4}}-{{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:yi1}}-{{word:ci4}}",
  ],
  tts: ["X的一个不同的样子", "书做出来的一次"],
  literal: "one different look of X / one time a book is made",
  fit: "plain",
  topics: ["writing"],
  isA: ["paper-thing"],
  proposed: true,
});
