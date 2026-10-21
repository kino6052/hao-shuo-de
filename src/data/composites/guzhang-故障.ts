import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8213,
  phase: 4,
  zh: "故障",
  py: "gùzhàng",
  en: "breakdown; fault; malfunction",
  ru: "неисправность; поломка",
  pos: "noun",
  hsd: [
    "{{word:ji1}}-{{word:qi4}} {{word:huai4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:ji1}}-{{word:qi4}} {{word:huai4}} {{word:le}}",
  ],
  tts: ["机器坏的地方", "机器坏了"],
  literal: "the place where the machine is broken / the machine is broken",
  fit: "plain",
  topics: ["repairs"],
  isA: ["state-name"],
  proposed: true,
});
