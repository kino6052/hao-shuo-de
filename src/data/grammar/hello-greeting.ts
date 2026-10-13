import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hello-greeting", {
  meaning: {
    eng: "A greeting is someone and hǎo: nǐ hǎo, hello; nǐ-men hǎo, hello to you all; xīn-nián hǎo, happy New Year.",
    rus: "Приветствие — это кто-то и hǎo: nǐ hǎo — здравствуй; nǐ-men hǎo — здравствуйте всем; xīn-nián hǎo — с Новым годом.",
  },
  covers: [],
  template: { hsd: "{{word:ni3}} {{word:hao3}}!", eng: "Hello!" },
  rules: [{ lhs: "Utt", hsd: "NP =hao3", eng: "someone and hǎo: a greeting" }],
  taught: "greetings-and-feelings/hello",
  examples: [
    ["Nǐ hǎo!", "Hello!"],
    ["Nǐ-men hǎo!", "Hello, everyone!"],
    ["Xīn-nián hǎo!", "Happy New Year!"],
  ],
});
