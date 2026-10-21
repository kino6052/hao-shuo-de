import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8110,
  phase: 4,
  zh: "不禁",
  py: "bùjīn",
  en: "cannot help (doing); involuntarily",
  ru: "невольно; не мочь не",
  pos: "adverb",
  hsd: [
    "{{word:bu4}} {{word:xiang3}} X, {{word:dan4}} X {{word:le}}",
    "{{word:mei2}} {{word:xiang3}} {{word:jiu4}} X {{word:le}}",
  ],
  tts: ["不想X，但X了", "没想就X了"],
  literal: "did not want to X, but X-ed / X-ed without thinking",
  fit: "plain",
  topics: ["adverbs"],
  isA: ["adverb-word"],
  proposed: true,
});
