import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8715,
  phase: 4,
  zh: "患",
  py: "huàn",
  en: "suffer from (an illness); fall ill with",
  ru: "страдать (болезнью); заболеть",
  pos: "verb",
  hsd: [
    "{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}",
    "{{word:shen1ti3}} {{word:you3}} X-{{word:de}} {{word:wen4}}-{{word:ti2}}",
  ],
  tts: ["身体不好", "身体有X的问题"],
  literal: "the body is not well / the body has the problem of X",
  fit: "plain",
  topics: ["fever-colds-and-diseases"],
  isA: ["being-affected"],
  proposed: true,
});
