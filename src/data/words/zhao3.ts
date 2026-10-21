import { word } from "../../lib/word.ts";

export default word("zhao3", {
  term: "zhǎo",
  hanzi: "找",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to hunt, forage, search for, look for",
    rus: "охотиться, добывать, искать, разыскивать",
    zh: "打猎，觅食，寻找，搜寻",
  },
  necessity: {
    index: 3,
    eng: "Look for, find ({{word:zhao3}}-{{word:dao4}}). Searching for things comes up every day.",
    rus: "Искать, найти ({{word:zhao3}}-{{word:dao4}}). Искать что-то приходится каждый день.",
  },
  topics: ["seeing-and-looking"],
  isA: ["perceiving"],
  maps: "alasa",
  paraphrase: {
    forms: [
      "{{word:xiang3}} {{word:kan4}}-{{word:jian4}} {{word:ta1}}, {{word:kan4}} {{word:lai2}} {{word:kan4}} {{word:qu4}}",
    ],
    verdict: "clumsy",
  },
});
