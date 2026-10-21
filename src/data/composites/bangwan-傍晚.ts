import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7044,
  phase: 4,
  zh: "傍晚",
  py: "bàngwǎn",
  en: "dusk; early evening",
  ru: "сумерки; ранний вечер",
  pos: "noun",
  hsd: [
    "{{word:ri4}} {{word:xia4}}-{{word:qu4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:wan3}}-{{word:shang4}} {{word:zui4}} {{word:zao3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["日下去的时间", "晚上最早的时间"],
  literal: "the time when the sun goes down / the earliest time of the evening",
  fit: "plain",
  topics: ["times-of-day"],
  isA: ["time-of-day-word"],
  proposed: true,
});
