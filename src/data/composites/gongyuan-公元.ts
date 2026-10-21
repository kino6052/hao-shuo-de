import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9317,
  phase: 4,
  zh: "公元",
  py: "gōngyuán",
  en: "AD; the Common Era",
  ru: "наша эра; н. э.",
  pos: "noun",
  hsd: [
    "{{word:cong2}} \"Yēsū\" {{word:sheng1}}-{{word:de}} {{word:nian2}} {{word:kai1shi3}} {{word:suan4}}-{{word:de}} {{word:nian2}}",
    "{{word:di4}}-{{word:yi1}} {{word:nian2}} {{word:hou4}}-{{word:mian4}}-{{word:de}} {{word:nian2}}",
  ],
  tts: ["从耶稣生的年开始算的年", "第一年后面的年"],
  literal: "the years counted from the year Jesus was born / the years after the first year",
  fit: "plain",
  topics: ["calendar"],
  isA: ["calendar-name"],
  proposed: true,
});
