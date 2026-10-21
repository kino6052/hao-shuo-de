import { word } from "../../lib/word.ts";

export default word("ying4", {
  term: "yìng",
  hanzi: "硬",
  pos: { eng: "adjective/noun", rus: "прилагательное/существительное", zh: "形容词/名词" },
  definition: {
    eng: "hard, stone-like; rock, stone, metal",
    rus: "твёрдый, каменистый; камень, скала, металл",
    zh: "硬的，石头般的；岩石，石头，金属",
  },
  necessity: {
    index: 3,
    eng: "Hard, like stone: rock, metal, and glass are described from it.",
    rus: "Твёрдый, как камень: через него описывают камень, металл и стекло.",
  },
  topics: ["how-it-feels"],
  isA: ["touch-quality"],
  maps: "kiwen",
  paraphrase: {
    forms: ["{{word:yong4}} {{word:shou3}} {{word:mo1}}, {{word:ta1}} {{word:bu4}} {{word:bian4}}"],
    verdict: "clumsy",
  },
});
