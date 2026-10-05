import { word } from "../../lib/word.ts";

export default word("hai2", {
  term: "hái",
  hanzi: "还",
  pos: { eng: "adverb", rus: "наречие", zh: "副词" },
  definition: {
    eng: "still, also, yet: {{word:ta1}} {{word:hai2}} {{word:zai4}} {{word:jia1}}, he's still at home; {{word:hai2}}-{{word:shi4}}, or (in a question)",
    rus: "ещё, всё ещё, также: {{word:ta1}} {{word:hai2}} {{word:zai4}} {{word:jia1}} — он всё ещё дома; {{word:hai2}}-{{word:shi4}} — или (в вопросе)",
    zh: "还，仍然",
  },
  necessity: {
    index: 4,
    eng: "Still and yet: without it, \"it's still going on\" and \"or?\" in a question have no word.",
    rus: "«Ещё» и «всё ещё»: без него не сказать «это всё ещё идёт» и «или?» в вопросе.",
  },
  senses: {
    child: {
      hanzi: "孩",
      eng: "child",
      rus: "ребёнок",
      why: {
        eng: "Written 孩, {{word:hai2}} means child in {{word:hai2}}-{{light:zi}}; on its own it is still.",
        rus: "Записанное как 孩, {{word:hai2}} значит «ребёнок» в {{word:hai2}}-{{light:zi}}; само по себе — «ещё».",
      },
      compounds: ["hai2 zi"],
    },
  },
});
