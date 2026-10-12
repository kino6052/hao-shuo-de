import { word } from "../../lib/word.ts";

export default word("yan3jing", {
  term: "yǎnjing",
  hanzi: "眼睛",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: { eng: "eye", rus: "глаз", zh: "眼睛" },
  necessity: {
    index: 3,
    eng: "The eyes. {{word:kan4}}-{{word:de}} {{word:bu4}}-{{light:fen1}} would work, but eyes come up too often for that.",
    rus: "Глаза. Можно сказать {{word:kan4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}, но глаза нужны слишком часто.",
  },
  atom: {
    eng: "The eye is learned by pointing at it; \"the part that sees\" leans on kàn, which is said with the eyes.",
    rus: "Глаз усваивают, показывая на него; «часть, которая видит» опирается на kàn, а kàn объясняют через глаза.",
  },
});
