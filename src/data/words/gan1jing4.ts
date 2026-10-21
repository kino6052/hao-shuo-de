import { word } from "../../lib/word.ts";

export default word("gan1jing4", {
  term: "gānjìng",
  hanzi: "干净",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "clean: {{word:hen3}} {{word:gan1jing4}}, very clean; {{word:bu4}} {{word:gan1jing4}}, dirty; washing is {{word:yong4}} {{word:shui3}} {{word:rang4}} X {{word:gan1jing4}}",
    rus: "чистый: {{word:hen3}} {{word:gan1jing4}} — очень чистый; {{word:bu4}} {{word:gan1jing4}} — грязный; мыть — {{word:yong4}} {{word:shui3}} {{word:rang4}} X {{word:gan1jing4}}",
    zh: "干净",
  },
  necessity: {
    index: 4,
    eng: "Clean and dirty, and with it washing: use water to make it clean.",
    rus: "Чистый и грязный, а с ним и мытьё: водой сделать чистым.",
  },
  topics: ["cleaning"],
  isA: ["condition-quality"],
  paraphrase: {
    forms: [
      "{{word:mei2}}-{{word:you3}} {{word:huai4}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:shang4}}-{{word:mian4}}",
    ],
    verdict: "clumsy",
    note: "Too useful to drop.",
  },
});
