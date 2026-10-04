import { word } from "../../lib/word.ts";

export default word("huai4", {
  term: "huài",
  hanzi: "坏",
  pos: { eng: "adjective/verb", rus: "прилагательное/глагол", zh: "形容词/动词" },
  definition: {
    eng: "bad, negative, broken, damaged, non-essential",
    rus: "плохой, отрицательный, сломанный, повреждённый, второстепенный",
    zh: "坏的，负面的，坏掉的，受损的，非必要的",
  },
  necessity: {
    index: 5,
    eng: "Bad, broken. {{word:bu4}} {{word:hao3}} is only \"not good\": this says something went wrong.",
    rus: "Плохой, сломанный. {{word:bu4}} {{word:hao3}} — лишь «не хороший», а это значит, что что-то испортилось.",
  },
  maps: "ike, pakala",
});
