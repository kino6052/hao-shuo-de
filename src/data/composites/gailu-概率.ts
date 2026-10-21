import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9354,
  phase: 4,
  zh: "概率",
  py: "gàilǜ",
  en: "probability; chance",
  ru: "вероятность",
  pos: "noun",
  hsd: [
    "X {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:ke3}}-{{word:neng2}} {{word:you3}} {{word:duo1}} {{word:da4}}",
    "{{word:yi1}}-{{word:ling2}}-{{word:ling2}} {{word:ci4}} {{word:li3}}, X {{word:fa1}}-{{word:sheng1}} {{word:duo1}}-{{word:shao3}} {{word:ci4}}",
  ],
  tts: ["X发生的可能有多大", "一零零次里，X发生多少次"],
  literal: "how big the chance is that X happens / out of a hundred times, how many times X happens",
  fit: "plain",
  topics: ["totals-and-parts"],
  isA: ["how-much"],
  proposed: true,
});
