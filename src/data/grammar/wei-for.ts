import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("wei-for", {
  meaning: {
    eng: "Wèi before a person and a verb says for whom: wǒ wèi nǐ zuò le fàn, I cooked for you. Wèi-le starts a reason for doing: wèi-le hái-zi, tā gōng-zuò, for his children he works.",
    rus: "Wèi перед человеком и глаголом говорит, для кого: wǒ wèi nǐ zuò le fàn — я приготовил для тебя. Wèi-le начинает цель: wèi-le hái-zi, tā gōng-zuò — ради детей он работает.",
  },
  covers: ["grammar:for"],
  tags: ["with-for", "cat:relation"],
  template: { hsd: "{{word:wei4}} + who + verb / {{word:wei4}}-{{word:le}} + reason, sentence", eng: "Do it for someone / for the sake of" },
  rules: [
    { lhs: "VP", hsd: "=wei4 NP VP", eng: "wèi, someone, and a verb: for him" },
    { lhs: "Purpose", hsd: "=wei4 le NP", eng: "wèi-le and a person: for the children" },
    { lhs: "Purpose", hsd: "=wei4 le VP", eng: "wèi-le and a verb: in order to" },
    { lhs: "S", hsd: "Purpose @comma S", eng: "the purpose, a comma, then the sentence" },
    { lhs: "VP", hsd: "Purpose VP", eng: "the purpose, then what is done" },
  ],
  taught: "inside-a-sentence/give",
  examples: [
    ["Wǒ wèi nǐ zuò le fàn.", "I cooked for you."],
    ["Wèi-le hái-zi, tā gōng-zuò.", "He works for his children."],
  ],
});
