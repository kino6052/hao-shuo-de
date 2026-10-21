import { word } from "../../lib/word.ts";

export default word("kai1", {
  term: "kāi",
  hanzi: "开",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to open; to turn on (e.g. {{word:bao1}} {{word:kai1}} {{word:le}}, \"the box is open\")",
    rus: "открывать, открываться; включать (напр. {{word:bao1}} {{word:kai1}} {{word:le}}, «коробка открыта»)",
    zh: "开，打开（如：盒子开了）",
  },
  necessity: {
    index: 3,
    eng: "Open, turn on: doors, boxes, lights, cars ({{word:kai1}} {{word:che1}}, drive).",
    rus: "Открыть, включить: двери, коробки, свет, машины ({{word:kai1}} {{word:che1}} — водить).",
  },
  topics: ["pushing-and-pulling"],
  isA: ["handling-action"],
  paraphrase: {
    forms: [
      "{{word:rang4}} {{word:li3}}-{{word:mian4}} {{word:he2}} {{word:wai4}}-{{word:mian4}} {{word:tong1}}",
    ],
    verdict: "clumsy",
  },
});
