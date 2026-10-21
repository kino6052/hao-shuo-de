import { word } from "../../lib/word.ts";

export default word("yi1fu", {
  term: "yīfu",
  hanzi: "衣服",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "clothing, cloth, fabric, textile, privacy layer",
    rus: "одежда, ткань, материя, текстиль, покров, скрывающий тело",
    zh: "衣服，布，织物，纺织品，遮蔽身体的层",
  },
  necessity: {
    index: 3,
    eng: "Clothes and cloth. Wearing, buying, and washing them comes up every day.",
    rus: "Одежда и ткань. Носить, покупать и стирать её приходится каждый день.",
  },
  topics: ["everyday-clothes"],
  isA: ["garment"],
  maps: "len",
  paraphrase: {
    forms: [
      "{{word:shen1ti3}}-{{word:shang4}}, {{word:rang4}} {{word:shen1ti3}} {{word:bu4}} {{word:leng3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    ],
    verdict: "clumsy",
  },
});
