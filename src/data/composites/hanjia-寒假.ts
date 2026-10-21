import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6898,
  phase: 4,
  zh: "寒假",
  py: "hánjià",
  en: "winter vacation",
  ru: "зимние каникулы",
  pos: "noun",
  hsd: [
    "{{word:dong1}}-{{word:tian1}} {{word:bu4}} {{word:xue2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:leng3}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:bu4}} {{word:xue2}}",
  ],
  tts: ["冬天不学的时间", "冷的时间不学"],
  literal: "the time in winter when one does not study / the cold time, no studying",
  fit: "plain",
  topics: ["holidays-and-festivals"],
  isA: ["time-span"],
  proposed: true,
});
