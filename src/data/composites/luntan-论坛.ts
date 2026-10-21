import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8250,
  phase: 4,
  zh: "论坛",
  py: "lùntán",
  en: "forum; online forum",
  ru: "форум",
  pos: "noun",
  hsd: [
    "{{word:wang3}}-{{word:shang4}} {{word:shuo1}} {{word:hua4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:hen3}} {{word:duo1}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}} X-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["网上说话的地方", "很多人一起说X的地方"],
  literal: "a place to talk on the net / a place where many people talk about X together",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["place"],
  proposed: true,
});
