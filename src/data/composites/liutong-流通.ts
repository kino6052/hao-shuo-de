import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8761,
  phase: 4,
  zh: "流通",
  py: "liútōng",
  en: "circulate; flow; be in circulation",
  ru: "обращаться; циркулировать",
  pos: "verb",
  hsd: [
    "{{word:dong1}}-{{light:xi1}} {{word:cong2}} X {{word:dong4}} {{word:dao4}} Y",
    "{{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:ren2}} {{word:he2}} {{word:ren2}} {{word:zhong1}}-{{word:jian1}} {{word:dong4}}",
  ],
  tts: ["东西从X动到Y", "东西在人和人中间动"],
  literal: "things move from X to Y / things move between people",
  fit: "plain",
  topics: ["buying-supplying-and-launching"],
  isA: ["moving-action"],
  proposed: true,
});
