import { word } from "../../lib/word.ts";

export default word("luan4", {
  term: "luàn",
  hanzi: "乱",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "messy, in a mess; {{word:zuo4}}-{{word:luan4}}, \"make a mess\"",
    rus: "беспорядочный, в беспорядке; {{word:zuo4}}-{{word:luan4}} — «устроить беспорядок»",
    zh: "乱",
  },
  necessity: {
    index: 2,
    eng: "Messy. {{word:bu4}} {{word:hao3}} is too vague; tidy is {{word:bu4}} {{word:luan4}}.",
    rus: "Беспорядочный. {{word:bu4}} {{word:hao3}} слишком размыто; аккуратный — {{word:bu4}} {{word:luan4}}.",
  },
  topics: ["empty-messy-clear"],
  isA: ["condition-quality"],
  paraphrase: {
    forms: [
      "{{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:zai4}} {{word:ta1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    ],
    verdict: "clumsy",
  },
});
