import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8749,
  phase: 4,
  zh: "亏损",
  py: "kuīsǔn",
  en: "loss; run at a loss",
  ru: "убыток; нести убытки",
  pos: "verb",
  hsd: [
    "{{word:de2}}-{{word:dao4}}-{{word:de}} {{word:jin1}} {{word:bi3}} {{word:yong4}}-{{word:de}} {{word:jin1}} {{word:shao3}}",
    "{{word:yong4}}-{{word:de}} {{word:jin1}} {{word:bi3}} {{word:de2}}-{{word:dao4}}-{{word:de}} {{word:jin1}} {{word:duo1}}",
  ],
  tts: ["得到的金比用的金少", "用的金比得到的金多"],
  literal: "the money received is less than the money spent / the money spent is more than the money received",
  fit: "plain",
  topics: ["profit-loss-and-bankruptcy"],
  isA: ["receiving"],
  proposed: true,
});
