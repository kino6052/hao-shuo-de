import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6353,
  phase: 4,
  zh: "存款",
  py: "cúnkuǎn",
  en: "deposit; savings",
  ru: "вклад; класть на счёт",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:jin1}} {{word:fang4}} {{word:zai4}} {{word:fang4}}-{{word:jin1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:fang4}} {{word:zai4}} {{word:fang4}}-{{word:jin1}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["把金放在放金的地方", "放在放金的地方的金"],
  literal: "put money in the place that keeps money",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["trade-action"],
  proposed: true,
});
