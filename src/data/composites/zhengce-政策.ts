import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8122,
  phase: 4,
  zh: "政策",
  py: "zhèngcè",
  en: "policy",
  ru: "политика (курс); политика государства",
  pos: "noun",
  hsd: [
    "{{word:guo2}}-{{word:jia1}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:zuo4}}-{{word:fa3}}",
    "{{word:guo2}}-{{word:jia1}} {{word:shuo1}} {{word:yao4}} {{word:zen3me}} {{word:zuo4}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["国家决定的做法", "国家说要怎么做的话"],
  literal: "the way of doing that a country decided / the words a country says about how to do it",
  fit: "plain",
  topics: ["government"],
  isA: ["idea"],
  proposed: true,
});
