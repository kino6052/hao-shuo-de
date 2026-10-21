import { word } from "../../lib/word.ts";

export default word("zhong4", {
  term: "zhòng",
  hanzi: "重",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "heavy: {{word:hen3}} {{word:zhong4}}, very heavy; {{word:zhong4}}-{{word:yao4}}, important",
    rus: "тяжёлый: {{word:hen3}} {{word:zhong4}} — очень тяжёлый; {{word:zhong4}}-{{word:yao4}} — важный",
    zh: "重",
  },
  necessity: {
    index: 3,
    eng: "Heavy, and important ({{word:zhong4}}-{{word:yao4}}).",
    rus: "«Тяжёлый» и «важный» ({{word:zhong4}}-{{word:yao4}}).",
  },
  topics: ["how-it-feels"],
  isA: ["touch-quality"],
  paraphrase: {
    forms: [
      "{{word:na2}}-{{word:qi3}}-{{word:lai2}}, {{word:yao4}} {{word:hen3}} {{word:duo1}} {{word:li4}}",
    ],
    verdict: "clumsy",
    note: "Lets us say \"important\" (zhòng-yào) and zhòng-diǎn.",
  },
});
