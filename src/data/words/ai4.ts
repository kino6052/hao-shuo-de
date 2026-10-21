import { word } from "../../lib/word.ts";

export default word("ai4", {
  term: "ài",
  hanzi: "爱",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to love, have compassion for, show deep affection to",
    rus: "любить, испытывать сострадание, проявлять глубокую привязанность",
    zh: "爱，怜悯，表达深厚的感情",
  },
  necessity: {
    index: 4,
    eng: "Love, and before a verb, \"love to\". Liking is {{word:ai4}} too.",
    rus: "Любить, а перед глаголом — «любить что-то делать». «Нравиться» — тоже {{word:ai4}}.",
  },
  topics: ["liking-loving-and-missing"],
  isA: ["feeling-and-wanting"],
  maps: "olin",
  paraphrase: {
    forms: ["{{word:hen3}} {{word:xiang3}} {{word:rang4}} {{word:ta1}} {{word:hao3}}"],
    verdict: "clumsy",
  },
});
