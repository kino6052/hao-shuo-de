import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("when-clause", {
  meaning: {
    eng: "Says \"when\" something happens: say \"the time of\" it, with -de shíjiān after the action, then a comma.",
    rus: "Говорит, «когда» что-то происходит: «время» действия, то есть -de shíjiān после действия, потом запятая.",
  },
  covers: [],
  template: { hsd: "Who + verb-{{word:de}} {{word:shi2}}-{{word:jian1}}, the rest", eng: "When who does the verb, the rest" },
  rules: [{ lhs: "Time", hsd: "S de =shi2 =jian1", eng: "a sentence and -de shíjiān: the time when it happens" }],
  taught: "around-an-action/when",
  examples: [
    ["Wǒ chī-de shí-jiān, wǒ bù shuō.", "When I eat, I don't talk."],
    ["Tā shuìjiào-de shí-jiān, wǒ wánr.", "When he sleeps, I play."],
  ],
});
