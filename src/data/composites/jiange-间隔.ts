import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8727,
  phase: 4,
  zh: "间隔",
  py: "jiàngé",
  en: "interval; gap; space between; to separate",
  ru: "промежуток; интервал; разделять",
  pos: "noun",
  hsd: [
    "X {{word:he2}} Y {{word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:kong1}}-{{word:jian1}}",
    "{{word:ba3}} X {{word:he2}} Y {{word:fen1}}-{{word:kai1}}",
  ],
  tts: ["X和Y中间的空间", "把X和Y分开"],
  literal: "the space between X and Y / separate X and Y",
  fit: "plain",
  topics: ["near-and-far"],
  isA: ["distance"],
  proposed: true,
});
