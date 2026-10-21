import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9024,
  phase: 4,
  zh: "供给",
  py: "gōngjǐ",
  en: "supply; provide",
  ru: "снабжать; поставлять",
  pos: "verb",
  hsd: [
    "{{word:gei3}} {{word:ren2}} {{word:ta1}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:rang4}} {{word:ren2}} {{word:yao4}} X {{word:jiu4}} {{word:you3}} X",
  ],
  tts: ["给人他要的东西", "让人要X就有X"],
  literal: "give people the things they need / let people have X when they want X",
  fit: "plain",
  topics: ["giving-and-gifts"],
  isA: ["handling-action"],
  proposed: true,
});
