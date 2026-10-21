import { word } from "../../lib/word.ts";

export default word("zhan4", {
  term: "zhàn",
  hanzi: "站",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to stand; {{word:zhan4}}-{{word:qi3}}-{{word:lai2}}, \"stand up\"",
    rus: "стоять; {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} — «встать»",
    zh: "站",
  },
  necessity: {
    index: 3,
    eng: "Stand. With {{word:zuo4}}-{{word:xia4}} and {{word:tang3}}, one of the three ways a body rests.",
    rus: "Стоять. Вместе с {{word:zuo4}}-{{word:xia4}} и {{word:tang3}} — одна из трёх поз тела.",
  },
  topics: ["posture"],
  isA: ["body-position"],
  paraphrase: {
    forms: [
      "{{word:yong4}} {{word:jiao3}} {{word:zai4}} {{word:di4}}-{{word:shang4}} {{word:bu4}} {{word:dong4}}",
    ],
    verdict: "clumsy",
  },
});
