import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 277,
  phase: 1,
  zh: "影响",
  py: "yǐngxiǎng",
  en: "affect",
  ru: "влиять",
  pos: "verb",
  hsd: [
    "X {{word:ba3}} Y {{word:bian4}}",
    "X {{word:dui4}} Y {{word:hao3}}",
    "X {{word:dui4}} Y {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["X把Y变", "X对Y好", "X对Y不好"],
  literal: "X changes Y / X is good for Y / X is bad for Y",
  fit: "plain",
  proposed: true,
});
