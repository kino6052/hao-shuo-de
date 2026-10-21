import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("jiao-name", {
  meaning: {
    eng: "Jiào and a name says what someone is called: wǒ jiào \"Lisa\", my name is Lisa. Nǐ jiào shénme? asks the name.",
    rus: "Jiào и имя говорят, как кого-то зовут: wǒ jiào \"Lisa\" — меня зовут Лиза. Nǐ jiào shénme? спрашивает имя.",
  },
  covers: [],
  tags: ["greet", "cat:substance"],
  template: { hsd: "Who + {{word:jiao4}} + \"name\"", eng: "Who is called the name" },
  rules: [
    { lhs: "VP", hsd: "=jiao4 NP", eng: "jiào and a name: is called" },
  ],
  taught: "greetings/name",
  examples: [
    ["Wǒ jiào \"Lisa\".", "My name is Lisa."],
    ["Nǐ jiào shénme?", "What's your name?"],
  ],
});
