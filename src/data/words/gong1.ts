import { word } from "../../lib/word.ts";

export default word("gong1", {
  term: "gōng",
  hanzi: "工",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "work, labour: {{word:gong1}}-{{word:ju4}}, a tool; {{word:gong1}}-{{word:ren2}}, a worker",
    rus: "работа, труд: {{word:gong1}}-{{word:ju4}} — инструмент; {{word:gong1}}-{{word:ren2}} — рабочий",
    zh: "工",
  },
  necessity: {
    index: 3,
    eng: "Work: {{word:gong1}}-{{word:ju4}} (tool) and {{word:gong1}}-{{word:ren2}} (worker) are built on it.",
    rus: "Работа: на нём построены {{word:gong1}}-{{word:ju4}} (инструмент) и {{word:gong1}}-{{word:ren2}} (рабочий).",
  },
  senses: {
    public: {
      hanzi: "公",
      eng: "public",
      rus: "общий",
      compounds: ["gong1 yuan2"],
      why: {
        eng: "Written 公, {{word:gong1}} means public in {{word:gong1}}-{{word:yuan2}}; on its own it is work.",
        rus: "Записанное как 公, {{word:gong1}} значит «общий» в {{word:gong1}}-{{word:yuan2}}; само по себе — «работа».",
      },
    },
  },
});
