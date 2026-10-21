import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7367,
  phase: 4,
  zh: "销量",
  py: "xiāoliàng",
  en: "sales volume; how much is sold",
  ru: "объём продаж",
  pos: "noun",
  hsd: [
    "{{word:bie2}}-{{word:ren2}} {{word:mai3}} {{word:le}} {{word:duo1}}-{{word:shao3}}",
    "{{word:gei3}}-{{word:dong1}}-{{light:xi1}}-{{word:de2}}-{{word:jin1}}-{{word:de}} {{word:duo1}}-{{word:shao3}}",
  ],
  tts: ["别人买了多少", "给东西得金的多少"],
  literal: "how much other people bought / how much of giving things for money",
  fit: "plain",
  topics: ["trade-and-the-market"],
  isA: ["idea"],
  proposed: true,
});
