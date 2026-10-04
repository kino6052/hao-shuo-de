import { word } from "../../lib/word.ts";

export default word("guo4", {
  term: "guò",
  hanzi: "过",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "placed right after a verb to say you have done it at least once before (e.g. {{word:chi1}}-{{word:guo4}}, \"have eaten before\")",
    rus: "ставится сразу после глагола и означает, что действие уже когда-то совершалось (например, {{word:chi1}}-{{word:guo4}}, «когда-то ел»)",
    zh: "用在动词后，表示曾经做过（如 {{word:chi1}}-{{word:guo4}}，“吃过”）",
  },
  necessity: {
    index: 4,
    eng: "Have done it before: {{word:kan4}}-{{word:guo4}}, have seen. Experience has no other way to be said.",
    rus: "Уже когда-то делал: {{word:kan4}}-{{word:guo4}} — видел. Опыт иначе не выразить.",
  },
});
