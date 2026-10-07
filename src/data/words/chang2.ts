import { word } from "../../lib/word.ts";

export default word("chang2", {
  term: "cháng",
  hanzi: "长",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "long: {{word:hen3}} {{word:chang2}}, very long; {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, a stick; {{word:chang2}} {{word:shi2}}-{{word:jian1}}, a long time",
    rus: "длинный: {{word:hen3}} {{word:chang2}} — очень длинный; {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} — палка; {{word:chang2}} {{word:shi2}}-{{word:jian1}} — долго",
    zh: "长",
  },
  necessity: {
    index: 4,
    eng: "Long things and a long time: before it, long was just {{word:da4}}.",
    rus: "Длинные вещи и долгое время: раньше «длинный» было просто {{word:da4}}.",
  },
  senses: {
    often: {
      hanzi: "常",
      eng: "often",
      rus: "часто",
      why: {
        eng: "Written 常, {{word:chang2}} means often, in {{word:chang2}}-{{word:chang2}}: what goes on long and long again. On its own it is long.",
        rus: "Записанное как 常, {{word:chang2}} значит «часто» в {{word:chang2}}-{{word:chang2}}: то, что длится и повторяется. Само по себе — «длинный».",
      },
      compounds: ["chang2 chang2"],
    },
  },
});
