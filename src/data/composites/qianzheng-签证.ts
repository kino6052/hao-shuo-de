import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6723,
  phase: 4,
  zh: "签证",
  py: "qiānzhèng",
  en: "visa",
  ru: "виза",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:ni3}} {{word:neng2}} {{word:jin4}} {{word:bie2}}-{{word:de}} {{word:guo2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:jin4}} {{word:bie2}}-{{word:de}} {{word:guo2}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让你能进别的国的东西", "进别的国要的东西"],
  literal: "the thing that lets you be able to enter another country / the thing needed to enter another country",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["paper-thing"],
  proposed: true,
});
