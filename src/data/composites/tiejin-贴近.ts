import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8520,
  phase: 4,
  zh: "贴近",
  py: "tiējìn",
  en: "get close to; be close to; draw near",
  ru: "приближаться; быть близко",
  pos: "verb",
  hsd: [
    "{{word:dao4}} X {{word:fu4jin4}}",
    "{{word:he2}} X {{word:bu4}} {{word:yuan3}}",
    "{{word:zou3}} {{word:dao4}} X-{{word:de}} {{word:pang2bian1}}",
  ],
  tts: ["到X附近", "和X不远", "走到X的旁边"],
  literal: "get to near X / not far from X / walk to X's side",
  fit: "plain",
  topics: ["near-far-and-distance"],
  isA: ["distance"],
  proposed: true,
});
