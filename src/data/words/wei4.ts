import { word } from "../../lib/word.ts";

export default word("wei4", {
  term: "wèi",
  hanzi: "为",
  pos: { eng: "preposition/coverb", rus: "предлог/коверб", zh: "介词/动介词" },
  definition: {
    eng: "for, for the sake of: {{word:wei4}}-{{word:shen2me}}, why (\"for what\")",
    rus: "для, ради: {{word:wei4}}-{{word:shen2me}} — почему («для чего»)",
    zh: "为",
  },
  necessity: {
    index: 3,
    eng: "For: {{word:wei4}}-{{word:shen2me}}, why, is \"for what\".",
    rus: "Для: {{word:wei4}}-{{word:shen2me}} — почему, «для чего».",
  },
  senses: {
    taste: {
      hanzi: "味",
      eng: "taste",
      rus: "вкус",
      compounds: ["wei4 dao4"],
      why: {
        eng: "Written 味, {{word:wei4}} means taste in {{word:wei4}}-{{word:dao4}}; on its own it is for.",
        rus: "Записанное как 味, {{word:wei4}} значит «вкус» в {{word:wei4}}-{{word:dao4}}; само по себе — «для».",
      },
    },
    notyet: {
      hanzi: "未",
      eng: "not yet",
      rus: "ещё не",
      compounds: ["wei4 lai2"],
      why: {
        eng: "Written 未, {{word:wei4}} means not yet in {{word:wei4}}-{{word:lai2}}; on its own it is for.",
        rus: "Записанное как 未, {{word:wei4}} значит «ещё не» в {{word:wei4}}-{{word:lai2}}; само по себе — «для».",
      },
    },
  },
});
