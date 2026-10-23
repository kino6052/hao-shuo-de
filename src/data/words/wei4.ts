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
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  senses: {
    taste: {
      hanzi: "味",
      eng: "taste",
      rus: "вкус",
      compounds: ["wei4 dao4"],
      why: {
        eng: "{{hanzi:Written 味, }}{{word:wei4#taste}} means taste in {{word:wei4}}-{{word:dao4}}; on its own it is for.",
        rus: "{{hanzi:Записанное как 味, }}{{word:wei4#taste}} значит «вкус» в {{word:wei4}}-{{word:dao4}}; само по себе — «для».",
      },
    },
    notyet: {
      hanzi: "未",
      eng: "not yet",
      rus: "ещё не",
      compounds: ["wei4 lai2"],
      why: {
        eng: "{{hanzi:Written 未, }}{{word:wei4#notyet}} means not yet in {{word:wei4}}-{{word:lai2}}; on its own it is for.",
        rus: "{{hanzi:Записанное как 未, }}{{word:wei4#notyet}} значит «ещё не» в {{word:wei4}}-{{word:lai2}}; само по себе — «для».",
      },
    },
    guard: {
      hanzi: "卫",
      eng: "guard, keep clean",
      rus: "охранять, беречь",
      why: {
        eng: "{{hanzi:Written 卫, }}{{word:wei4#guard}} means guarding health in {{word:wei4}}-{{word:sheng1}} (clean, hygiene) and {{word:wei4}}-{{word:sheng1}}-{{word:jian1}} (bathroom); on its own it is for.",
        rus: "{{hanzi:Записанное как 卫, }}{{word:wei4#guard}} значит «беречь здоровье» в {{word:wei4}}-{{word:sheng1}} (чистота, гигиена) и {{word:wei4}}-{{word:sheng1}}-{{word:jian1}} (туалет); само по себе — «для».",
      },
      compounds: ["wei4 sheng1", "wei4 sheng1 jian1"],
    },
  },
  paraphrase: { forms: ["{{word:gei3}}", "{{word:dui4}}"], verdict: "clumsy" },
});
