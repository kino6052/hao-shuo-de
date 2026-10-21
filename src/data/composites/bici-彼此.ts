import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6860,
  phase: 4,
  zh: "彼此",
  py: "bǐcǐ",
  en: "each other; one another",
  ru: "друг друга",
  pos: "pronoun",
  hsd: [
    "{{word:ni3}} {{word:dui4}} {{word:ta1}}, {{word:ta1}} {{word:ye3}} {{word:dui4}} {{word:ni3}}",
    "{{word:wo3}} {{word:dui4}} {{word:ni3}}, {{word:ni3}} {{word:ye3}} {{word:dui4}} {{word:wo3}}",
  ],
  tts: ["你对他，他也对你", "我对你，你也对我"],
  literal: "you to him, he also to you / I to you, you also to me",
  fit: "plain",
  topics: ["self-and-others"],
  isA: ["pronoun"],
  proposed: true,
});
