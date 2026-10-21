import { word } from "../../lib/word.ts";

export default word("zhong1", {
  term: "zhōng",
  hanzi: "中",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "middle, center (e.g. {{word:zhong1}}-{{word:jian1}}, \"in the middle\")",
    rus: "середина, центр (например, {{word:zhong1}}-{{word:jian1}} — «посередине»)",
    zh: "中",
  },
  necessity: {
    index: 2,
    eng: "Middle: with {{word:jian1}}, {{word:zhong1}}-{{word:jian1}}, in the middle. China and many composites use it.",
    rus: "Середина: с {{word:jian1}} — {{word:zhong1}}-{{word:jian1}}, посередине. Его используют Китай и многие составные слова.",
  },
  topics: ["up-down-in-out"],
  isA: ["place-relation"],
  paraphrase: { forms: ["{{word:zui4}} {{word:li3}}-{{word:mian4}}"], verdict: "clumsy" },
});
