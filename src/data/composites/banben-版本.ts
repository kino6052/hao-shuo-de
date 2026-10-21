import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7342,
  phase: 4,
  zh: "版本",
  py: "bǎnběn",
  en: "version; edition",
  ru: "версия; издание",
  pos: "noun",
  hsd: [
    "X-{{word:de}} {{word:yi1}}-{{light:ge4}} {{word:bu4}}-{{word:tong2}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
    "{{word:xin1#new}}-{{word:de}} X {{word:he2}} {{word:lao3}}-{{word:de}} X {{word:bu4}}-{{word:tong2}}",
  ],
  tts: ["X的一个不同的样子", "新的X和老的X不同"],
  literal: "one different look of X / the new X and the old X differ",
  fit: "plain",
  topics: ["different-and-varied"],
  isA: ["idea"],
  proposed: true,
});
