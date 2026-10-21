import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6795,
  phase: 4,
  zh: "中年",
  py: "zhōngnián",
  en: "middle age",
  ru: "средний возраст",
  pos: "noun",
  hsd: [
    "{{word:zhong1}}-{{word:nian2}}",
    "{{word:bu4}} {{word:xiao3}} {{word:ye3}} {{word:bu4}} {{word:lao3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:ren2}} {{word:huo2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}-{{word:de}} {{word:zhong1}}-{{word:jian1}}",
  ],
  tts: ["中年", "不小也不老的时间", "人活的时间的中间"],
  fit: "natural",
  topics: ["young-and-old"],
  isA: ["time-span"],
  proposed: true,
});
