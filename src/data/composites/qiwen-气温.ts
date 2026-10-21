import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6721,
  phase: 4,
  zh: "气温",
  py: "qìwēn",
  en: "air temperature",
  ru: "температура воздуха",
  pos: "noun",
  hsd: [
    "{{word:kong1}}-{{word:qi4}}-{{word:de}} {{word:duo1}} {{word:re4}}",
    "{{word:tian1}}-{{word:qi4}}-{{word:de}} {{word:duo1}} {{word:re4}}",
  ],
  tts: ["空气的多热", "天气的多热"],
  literal: "how hot the air is; how hot the weather is",
  fit: "plain",
  topics: ["weather"],
  isA: ["weather-thing"],
  proposed: true,
});
