import { word } from "../../lib/word.ts";

export default word("liang3", {
  term: "liǎng",
  hanzi: "两",
  pos: { eng: "number", rus: "числительное", zh: "数词" },
  definition: {
    eng: "two; quantifies dual entities when coupled to the measure word (liang-ge)",
    rus: "два; используется для пары предметов вместе со счётным словом (liang-ge)",
    zh: "二，两；与量词搭配（liang-ge）表示两个",
  },
  necessity: {
    index: 4,
    eng: "Two of something: {{word:liang3}}-ge {{word:ren2}}. Mandarin uses it, not {{word:er4}}, before {{word:ge4}}.",
    rus: "Два чего-то: {{word:liang3}}-ge {{word:ren2}}. Перед {{word:ge4}} в китайском говорят его, а не {{word:er4}}.",
  },
  maps: "tu",
});
