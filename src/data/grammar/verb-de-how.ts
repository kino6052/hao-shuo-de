import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("verb-de-how", {
  meaning: {
    eng: "To say how someone does something, put -de after the verb and then a describing word: tā shuō de hǎo, he speaks well.",
    rus: "Чтобы сказать, как кто-то что-то делает, поставьте -de после глагола и затем описывающее слово: tā shuō de hǎo — он хорошо говорит.",
  },
  covers: [],
  tags: ["describe", "cat:quality", "cat:action"],
  template: { hsd: "Who + verb-{{word:de}} + adjective", eng: "Who does the verb in that way" },
  rules: [{ lhs: "VerbP", hsd: "@verb de VP", eng: "a verb, de, and how it is done" }],
  taught: "roles-of-a-word/how",
  examples: [
    ["Nǐ xiě de hěn hǎo.", "You write very well."],
    ["Tā shuō de bǐ wǒ hǎo.", "He speaks better than me."],
  ],
});
