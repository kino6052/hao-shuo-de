import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6882,
  phase: 4,
  zh: "除夕",
  py: "chúxī",
  en: "New Year's Eve (Chinese)",
  ru: "канун Нового года (по лунному календарю)",
  pos: "noun",
  hsd: [
    "{{word:xin1}}-{{word:nian2}}-{{word:de}} {{word:qian2}}-{{word:yi1}}-{{word:tian1}}",
    "{{word:zhe4}}-{{word:yi1}}-{{word:nian2}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:wan3}}-{{light:shang4}}",
  ],
  tts: ["新年的前一天", "这一年的最后一个晚上"],
  literal: "the day before the new year / the last evening of this year",
  fit: "plain",
  topics: ["holidays-and-festivals"],
  isA: ["calendar-name"],
  proposed: true,
});
