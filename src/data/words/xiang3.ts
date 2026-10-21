import { word } from "../../lib/word.ts";

export default word("xiang3", {
  term: "xiǎng",
  hanzi: "想",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to think; to want to, would like to (before a verb: {{word:wo3}} {{word:xiang3}} {{word:chi1}} {{word:fan4}}, I'd like to eat); to miss",
    rus: "думать; хотеть (перед глаголом: {{word:wo3}} {{word:xiang3}} {{word:chi1}} {{word:fan4}} — я хочу есть); скучать",
    zh: "想",
  },
  necessity: {
    index: 5,
    eng: "Think and would like to: one of the most used verbs in Mandarin.",
    rus: "«Думать» и «хотеть»: один из самых частых глаголов китайского.",
  },
  topics: ["knowing-and-understanding"],
  isA: ["thinking-action"],
  paraphrase: {
    forms: ["{{word:zai4}} {{word:xin1}}-{{word:li3}} {{word:zhao3}}", "{{word:yao4}}"],
    verdict: "clumsy",
    note: "Potentially an atom: connect it to yào and jué-de.",
  },
});
