import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("place-first", {
  meaning: {
    eng: "A place with zài can come first, then the sentence: zài jiā wǒ jué-dé hǎo, at home I feel good.",
    rus: "Место с zài может стоять первым, затем предложение: zài jiā wǒ jué-dé hǎo — дома мне хорошо.",
  },
  covers: ["grammar:location"],
  template: { hsd: "{{word:zai4}} + place, sentence", eng: "At the place: the sentence" },
  rules: [
    { lhs: "Place", hsd: "=zai4 NP", eng: "zài and a place" },
    { lhs: "S", hsd: "Place S", eng: "a place, then a sentence" },
    { lhs: "S", hsd: "Place @comma S", eng: "a place, a comma, then a sentence" },
  ],
  taught: "where-it-is/in-on-under",
  examples: [
    ["Zài jiā wǒ jué-dé hǎo.", "At home I feel good."],
  ],
});
