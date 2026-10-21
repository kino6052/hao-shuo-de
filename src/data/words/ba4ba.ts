import { word } from "../../lib/word.ts";

export default word("ba4ba", {
  term: "bàba",
  hanzi: "爸爸",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "dad: {{word:ba4ba}}-{{word:ma1ma}}, mom and dad, parents",
    rus: "папа: {{word:ba4ba}}-{{word:ma1ma}} — мама и папа, родители",
    zh: "爸爸",
  },
  necessity: {
    index: 4,
    eng: "Dad, and with {{word:ma1ma}}, the parents ({{word:ba4ba}}-{{word:ma1ma}}).",
    rus: "Папа, а с {{word:ma1ma}} — родители ({{word:ba4ba}}-{{word:ma1ma}}).",
  },
  topics: ["parents-and-children"],
  isA: ["relative"],
  paraphrase: {
    forms: [
      "{{word:sheng1}} {{word:wo3}}-{{word:de}}, {{word:bu4}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}-{{word:de}} {{word:ren2}}",
    ],
    verdict: "fine",
  },
});
