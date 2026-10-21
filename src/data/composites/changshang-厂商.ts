import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8996,
  phase: 4,
  zh: "厂商",
  py: "chǎngshāng",
  en: "manufacturer; maker and seller",
  ru: "производитель; фирма-изготовитель",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:zuo4}} {{word:dong1}}-{{light:xi1}} {{word:gei3}} {{word:ren2}} {{word:mai3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:zuo4}} {{word:dong1}}-{{light:xi1}} {{word:gei3}} {{word:ren2}} {{word:mai3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["做东西的工作的地方", "做东西给人买的地方", "做东西给人买的人"],
  literal: "the working place that makes things / a place that makes things for people to buy / a person who makes things for people to buy",
  fit: "plain",
  topics: ["companies-and-products"],
  isA: ["group-of-people"],
  proposed: true,
});
