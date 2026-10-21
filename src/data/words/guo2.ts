import { word } from "../../lib/word.ts";

export default word("guo2", {
  term: "guó",
  hanzi: "国",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: { eng: "country, nation", rus: "страна, государство", zh: "国" },
  necessity: {
    index: 3,
    eng: "A country. Nations, travel, and the news all need it.",
    rus: "Страна. Без неё не поговорить о народах, поездках и новостях.",
  },
  topics: ["countries-and-cities"],
  isA: ["settlement"],
  paraphrase: {
    forms: [
      "{{word:hen3}} {{word:duo1}} {{word:ren2}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:da4}} {{word:di4}}-{{light:fang1}}",
    ],
    verdict: "clumsy",
    note: "Needs disambiguation: many places could be called \"a big place where many people are together\".",
  },
});
