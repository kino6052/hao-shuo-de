import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8773,
  phase: 4,
  zh: "赔偿",
  py: "péicháng",
  en: "compensate; pay for damage; indemnify",
  ru: "возмещать ущерб; компенсировать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:huai4}} {{word:le}}, {{word:gei3}} X {{word:jin1}}",
    "{{word:gei3}} X {{word:jin1}}, {{word:rang4}} X {{word:bu4}} {{word:shao3}}",
  ],
  tts: ["让X的东西坏了，给X金", "给X金，让X不少"],
  literal: "X's thing was made bad, give X money / give X money so that X does not lose out",
  fit: "plain",
  topics: ["earning-and-compensation"],
  isA: ["trade-action"],
  proposed: true,
});
