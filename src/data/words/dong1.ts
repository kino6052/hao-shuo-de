import { word } from "../../lib/word.ts";

export default word("dong1", {
  term: "dōng",
  hanzi: "东",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "east; with {{word:xi1}} said lightly, {{word:dong1}}-{{light:xi1}} is a thing (\"east and west\": everything)",
    rus: "восток; с лёгким {{word:xi1}} — {{word:dong1}}-{{light:xi1}}, вещь («восток и запад»: всё)",
    zh: "东",
  },
  necessity: {
    index: 4,
    eng: "East, and the first half of {{word:dong1}}-{{light:xi1}}, \"thing\", which most descriptions end in.",
    rus: "Восток и первая половина {{word:dong1}}-{{light:xi1}}, «вещь», которой кончается большинство описаний.",
  },
  senses: {
    winter: {
      hanzi: "冬",
      eng: "winter",
      rus: "зима",
      compounds: ["dong1 tian1"],
      why: {
        eng: "Written 冬, {{word:dong1}} means winter in {{word:dong1}}-{{word:tian1}}; on its own it is east.",
        rus: "Записанное как 冬, {{word:dong1}} значит «зима» в {{word:dong1}}-{{word:tian1}}; само по себе — «восток».",
      },
    },
  },
});
