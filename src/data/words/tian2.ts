import { word } from "../../lib/word.ts";

export default word("tian2", {
  term: "tián",
  hanzi: "甜",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "sweet, fragrant, cute, innocent, adorable",
    rus: "сладкий, ароматный, милый, невинный, очаровательный",
    zh: "甜的，香的，可爱的，天真的，讨人喜欢的",
  },
  necessity: {
    index: 3,
    eng: "Sweet: the one taste you can name. Other tastes are {{word:wei4}}-{{word:dao4}} {{word:hao3}} or {{word:bu4}} {{word:hao3}}.",
    rus: "Сладкий — единственный вкус, который можно назвать. Остальные — {{word:wei4}}-{{word:dao4}} {{word:hao3}} или {{word:bu4}} {{word:hao3}}.",
  },
  topics: ["tastes"],
  isA: ["taste-quality"],
  maps: "suwi",
  atom: {
    eng: "A taste: you learn sweet by tasting it; the other words only point back to that taste.",
    rus: "Вкус: сладкое узнают, попробовав; другие слова лишь указывают на этот вкус.",
  },
});
