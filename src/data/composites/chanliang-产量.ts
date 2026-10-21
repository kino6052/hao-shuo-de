import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7346,
  phase: 4,
  zh: "产量",
  py: "chǎnliàng",
  en: "output; yield; production amount",
  ru: "объём производства, урожайность",
  pos: "noun",
  hsd: [
    "{{word:zuo4}}-{{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:shu4}}",
    "{{word:zuo4}}-{{word:le}} {{word:duo1}}-{{word:shao3}}",
  ],
  tts: ["做出来的东西的数", "做了多少"],
  literal: "the number of things made / how much was made",
  fit: "plain",
  topics: ["farms-and-factories"],
  isA: ["amount-word"],
  proposed: true,
});
