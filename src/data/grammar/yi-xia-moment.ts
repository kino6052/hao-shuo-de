import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yi-xia-moment", {
  meaning: {
    eng: "Says to do something for a moment: yī-xià goes after the verb. It also softens a request.",
    rus: "Говорит, что что-то делается ненадолго: yī-xià стоит после глагола. Оно же смягчает просьбу.",
  },
  covers: [],
  template: { hsd: "Who + verb + {{word:yi1}}-{{word:xia4}}", eng: "Who does the verb for a moment" },
  rules: [
    { lhs: "Moment", hsd: "=yi1 =xia4", eng: "yī-xià, a moment" },
    { lhs: "VerbP", hsd: "@verb Moment", eng: "a verb and a moment" },
    { lhs: "VerbP", hsd: "@verb le Moment", eng: "a verb, le, and a moment" },
  ],
  taught: "around-an-action/moment",
  examples: [
    ["Děng yī-xià.", "Wait a moment."],
    ["Wǒ yòu kàn le yī-xià.", "I had another look."],
  ],
});
