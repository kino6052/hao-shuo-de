import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8314,
  phase: 4,
  zh: "战胜",
  py: "zhànshèng",
  en: "defeat; overcome; triumph over",
  ru: "победить",
  pos: "verb",
  hsd: [
    "{{word:he2}} X {{word:da3}}, {{word:bi3}} X {{word:hao3}}",
    "{{word:he2}} X {{word:da3}}, {{word:de2}}-{{word:dao4}} {{word:hao3}}-{{word:de}} {{word:jie2}}-{{word:guo3}}",
  ],
  tts: ["和X打，比X好", "和X打，得到好的结果"],
  literal: "fight X and be better than X / fight X and get a good result",
  fit: "plain",
  topics: ["war-and-peace"],
  isA: ["social-action"],
  proposed: true,
});
