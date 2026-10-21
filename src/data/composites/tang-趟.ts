import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8500,
  phase: 4,
  zh: "趟",
  py: "tàng",
  en: "trip; time (counting word for trips)",
  ru: "раз; поездка (счётное слово для ходок)",
  pos: "classifier",
  hsd: ["{{word:ci4}}"],
  tts: ["次"],
  fit: "natural",
  topics: ["counting-words"],
  isA: ["counting-word"],
  proposed: true,
});
