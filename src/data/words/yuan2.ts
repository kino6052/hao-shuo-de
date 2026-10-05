import { word } from "../../lib/word.ts";

export default word("yuan2", {
  term: "yuán",
  hanzi: "圆",
  pos: { eng: "adjective/noun", rus: "прилагательное/существительное", zh: "形容词/名词" },
  definition: {
    eng: "round, circular, spherical; ball, circle, wheel, cycle",
    rus: "круглый, кольцевидный, шарообразный; шар, круг, колесо, цикл",
    zh: "圆的，环形的，球形的；球，圆圈，轮子，循环",
  },
  necessity: {
    index: 3,
    eng: "Round: balls, wheels, the earth, and circles are described from it.",
    rus: "Круглый: через него описывают мячи, колёса, Землю и круги.",
  },
  maps: "sike",
  senses: {
    garden: {
      hanzi: "园",
      eng: "garden, park",
      rus: "сад, парк",
      compounds: ["gong1 yuan2"],
      why: {
        eng: "Written 园, {{word:yuan2}} means garden, park in {{word:gong1}}-{{word:yuan2}}; on its own it is round.",
        rus: "Записанное как 园, {{word:yuan2}} значит «сад, парк» в {{word:gong1}}-{{word:yuan2}}; само по себе — «круглый».",
      },
    },
    origin: {
      hanzi: "原",
      eng: "origin",
      rus: "исток",
      compounds: ["yuan2 lai2"],
      why: {
        eng: "Written 原, {{word:yuan2}} means origin in {{word:yuan2}}-{{word:lai2}}; on its own it is round.",
        rus: "Записанное как 原, {{word:yuan2}} значит «исток» в {{word:yuan2}}-{{word:lai2}}; само по себе — «круглый».",
      },
    },
  },
});
