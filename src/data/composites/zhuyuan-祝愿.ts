import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7925,
  phase: 4,
  zh: "祝愿",
  py: "zhùyuàn",
  en: "wish (someone well); extend good wishes",
  ru: "желать, пожелать",
  pos: "verb",
  hsd: [
    "{{word:xiang3}} X {{word:hen3}} {{word:hao3}}",
    "{{word:gei3}} X {{word:shuo1}} {{word:hao3}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["想X很好", "给X说好的话"],
  literal: "want X to be very good / say good words to X",
  fit: "plain",
  topics: ["parties-and-gifts"],
  isA: ["speaking-action"],
  proposed: true,
});
