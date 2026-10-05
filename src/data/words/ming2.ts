import { word } from "../../lib/word.ts";

export default word("ming2", {
  term: "míng",
  hanzi: "明",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: { eng: "bright, light, clear", rus: "яркий, светлый, ясный", zh: "明" },
  necessity: {
    index: 2,
    eng: "Bright; dark is {{word:bu4}} {{word:ming2}}. {{word:you3}} {{word:ri4}}-{{word:de}} would work only for sunlight.",
    rus: "Яркий; тёмный — {{word:bu4}} {{word:ming2}}. {{word:you3}} {{word:ri4}}-{{word:de}} подошло бы только для солнца.",
  },
  senses: {
    name: {
      hanzi: "名",
      eng: "name",
      rus: "имя",
      compounds: ["you3 ming2"],
      why: {
        eng: "Written 名, {{word:ming2}} means name in {{word:you3}}-{{word:ming2}}; on its own it is bright.",
        rus: "Записанное как 名, {{word:ming2}} значит «имя» в {{word:you3}}-{{word:ming2}}; само по себе — «яркий».",
      },
    },
  },
});
