import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8040,
  phase: 4,
  zh: "粘贴",
  py: "zhāntiē",
  en: "paste; stick on",
  ru: "вставить; приклеить",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} Y-{{word:shang4}}, {{word:rang4}} X {{word:bu4}} {{word:dong4}}",
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} Y-{{word:li3}}",
  ],
  tts: ["把X放在Y上，让X不动", "把X放在Y里"],
  literal: "put X on Y and make X not move / put X in Y",
  fit: "plain",
  topics: ["typing-clicking-and-downloading"],
  isA: ["handling-action"],
  proposed: true,
});
