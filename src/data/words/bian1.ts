import { word } from "../../lib/word.ts";

export default word("bian1", {
  term: "biān",
  hanzi: "边",
  pos: { eng: "noun/suffix", rus: "существительное/суффикс", zh: "名词/后缀" },
  definition: {
    eng: "side, edge; joins {{word:zhe4}} or {{word:na4}} via a hyphen to form a place word (e.g. {{word:zhe4}}-{{word:bian1}}, \"this side\"; {{word:na4}}-{{word:bian1}}, \"that side\")",
    rus: "сторона, край; присоединяется к {{word:zhe4}} или {{word:na4}} через дефис, образуя слово места (например, {{word:zhe4}}-{{word:bian1}} — «эта сторона», {{word:na4}}-{{word:bian1}} — «та сторона»)",
    zh: "边，边缘；通过连字符与 {{word:zhe4}} 或 {{word:na4}} 结合，构成方位词（例如 {{word:zhe4}}-{{word:bian1}}，“这边”；{{word:na4}}-{{word:bian1}}，“那边”）",
  },
  necessity: {
    index: 3,
    eng: "Side, edge: {{word:zhe4}}-{{word:bian1}}, this side; {{word:na4}}-{{word:bian1}}, over there.",
    rus: "Сторона, край: {{word:zhe4}}-{{word:bian1}} — эта сторона, {{word:na4}}-{{word:bian1}} — там.",
  },
  maps: "",
  classes: {
    measure_word: {
      why: {
        eng: "Counts the sides of a flat shape: sān-biān is three sides, so sān-biān-de yàng-zi is a three-sided shape.",
        rus: "Считает стороны плоской фигуры: sān-biān — три стороны, а sān-biān-de yàng-zi — трёхсторонняя фигура.",
      },
      example: "Wǒ yào sān-biān-de yàng-zi.",
      proposed: true,
    },
  },
});
