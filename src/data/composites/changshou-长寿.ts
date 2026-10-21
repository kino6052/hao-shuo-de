import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8899,
  phase: 4,
  zh: "长寿",
  py: "chángshòu",
  en: "long-lived; longevity",
  ru: "долгожительство; долгая жизнь",
  pos: "adjective",
  hsd: [
    "{{word:huo2}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:nian2}}",
    "{{word:huo2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:chang2}}",
  ],
  tts: ["活很多的年", "活的时间很长"],
  literal: "live many years / the time lived is very long",
  fit: "plain",
  topics: ["birth-and-death"],
  isA: ["bodily-state"],
  proposed: true,
});
