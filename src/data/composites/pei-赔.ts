import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7755,
  phase: 4,
  zh: "赔",
  py: "péi",
  en: "compensate; pay for damage; lose money",
  ru: "возмещать ущерб; нести убытки",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:huai4}} {{word:le}}, {{word:gei3}} X {{word:jin1}}",
    "{{word:de2}}-{{word:dao4}}-{{word:de}} {{word:jin1}} {{word:bi3}} {{word:yong4}}-{{word:de}} {{word:jin1}} {{word:shao3}}",
  ],
  tts: ["让X的东西坏了，给X金", "得到的金比用的金少"],
  literal: "make X's thing broken, give X money / the money got is less than the money used",
  fit: "plain",
  topics: ["earning-and-compensation"],
  isA: ["trade-action"],
  proposed: true,
});
