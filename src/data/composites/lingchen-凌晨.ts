import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8403,
  phase: 4,
  zh: "凌晨",
  py: "língchén",
  en: "the small hours; before dawn; early morning",
  ru: "раннее утро; предрассветные часы",
  pos: "noun",
  hsd: [
    "{{word:tian1}} {{word:hai2}} {{word:bu4}} {{word:ming2}}-{{word:de}} {{word:zao3}}-{{light:shang4}}",
    "{{word:tian1}} {{word:kuai4}} {{word:ming2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["天还不明的早上", "天快明的时间"],
  literal: "the morning when the sky is not yet bright / the time when the sky is almost bright",
  fit: "plain",
  topics: ["times-of-day"],
  isA: ["time-of-day-word"],
  proposed: true,
});
