import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("calling-hail", {
  meaning: {
    eng: "Someone can be called or greeted first, then a comma and what is said: māma, wǒ huí lái le, Mom, I'm back; nǐ hǎo, nǐ shì xué-shēng ma, hello, are you a student?",
    rus: "Сначала можно позвать или поприветствовать, затем запятая и то, что говорят: māma, wǒ huí lái le — мама, я вернулся; nǐ hǎo, nǐ shì xué-shēng ma — здравствуйте, вы студент?",
  },
  covers: [],
  tags: ["greet", "cat:relation"],
  template: { hsd: "Name, sentence", eng: "Someone, then what is said to them" },
  rules: [
    { lhs: "Hail", hsd: "NP", eng: "a name or a word for someone" },
    { lhs: "Hail", hsd: "NP =hao3", eng: "a greeting: nǐ hǎo" },
    { lhs: "Hail", hsd: "=zhen1 de", eng: "zhēn-de, really" },
    { lhs: "Utt", hsd: "Hail @comma S", eng: "a call, then a sentence" },
    { lhs: "Utt", hsd: "Hail @comma Q", eng: "a call, then a question" },
    { lhs: "Utt", hsd: "Hail @comma VP", eng: "a call, then an order" },
    { lhs: "Utt", hsd: "Hail @comma NP", eng: "a call, then a name or who" },
    { lhs: "Utt", hsd: "S @comma NP", eng: "a sentence, then the thing it points at: nǐ kàn, X" },
    { lhs: "Utt", hsd: "S @comma NP @comma S", eng: "a sentence, the thing it points at, and one more sentence" },
    { lhs: "Utt", hsd: "@quoted @comma S", eng: "a sound in quotes, then a sentence" },
  ],
  taught: "greetings/calling",
  examples: [
    ["Māma, wǒ huí lái le!", "Mom, I'm back!"],
    ["Nǐ hǎo, nǐ shì xué-shēng ma?", "Hello, are you a student?"],
    ["Nà, wǒ-men zǒu.", "Well then, let us go."],
  ],
});
