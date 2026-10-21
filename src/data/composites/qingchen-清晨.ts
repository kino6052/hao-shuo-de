import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8000,
  phase: 4,
  zh: "清晨",
  py: "qīngchén",
  en: "early morning; dawn",
  ru: "раннее утро",
  pos: "noun",
  hsd: [
    "{{word:zao3}}-{{light:shang4}} {{word:zui4}} {{word:zao3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:hen3}} {{word:zao3}}-{{word:de}} {{word:zao3}}-{{light:shang4}}",
  ],
  tts: ["早上最早的时间", "很早的早上"],
  literal: "the earliest time of the morning / a very early morning",
  fit: "plain",
  topics: ["times-of-day"],
  isA: ["time-of-day-word"],
  proposed: true,
});
