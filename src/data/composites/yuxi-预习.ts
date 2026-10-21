import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7632,
  phase: 4,
  zh: "预习",
  py: "yùxí",
  en: "preview; study ahead",
  ru: "готовиться заранее; предварительно изучать",
  pos: "verb",
  hsd: [
    "{{word:zao3}} {{word:yi1}}-{{word:dian3}} {{word:xue2}} X",
    "{{word:zai4}} {{word:bie2}}-{{word:ren2}} {{word:shuo1}} X {{word:yi3}}-{{word:qian2}}, {{word:xue2}} X",
  ],
  tts: ["早一点学X", "在别人说X以前，学X"],
  literal: "learn X a bit earlier / before others say X, learn X",
  fit: "plain",
  topics: ["studying"],
  isA: ["learning-and-teaching"],
  proposed: true,
});
