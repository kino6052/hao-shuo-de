import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8114,
  phase: 4,
  zh: "代价",
  py: "dàijià",
  en: "price paid; cost (of doing something)",
  ru: "цена (которую приходится заплатить); издержки",
  pos: "noun",
  hsd: [
    "{{word:wei4}} {{word:de2}}-{{word:dao4}} X, {{word:yao4}} {{word:gei3}}-{{word:chu1}}-{{word:qu4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:wei4}} {{word:zuo4}} X, {{word:mei2}}-{{word:you3}} {{word:le}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["为得到X，要给出去的东西", "为做X，没有了的东西"],
  literal: "the thing you have to give away to get X / the thing that is gone because of doing X",
  fit: "plain",
  topics: ["harm-and-bad-results"],
  isA: ["idea"],
  proposed: true,
});
