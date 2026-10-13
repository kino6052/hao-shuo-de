import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("that-time", {
  meaning: {
    eng: "Nà-gè shí-jiān is at that time: nà-gè shí-jiān wǒ zài jiā, at that time I was at home.",
    rus: "Nà-gè shí-jiān — в то время: nà-gè shí-jiān wǒ zài jiā — в то время я был дома.",
  },
  covers: ["grammar:when"],
  template: { hsd: "{{word:na4}}-{{word:ge4}} {{word:shi2}}-{{word:jian1}}", eng: "At that time" },
  rules: [
    { lhs: "Time", hsd: "Count @measure_word =shi2 =jian1", eng: "a pointer, a counting word, and shí-jiān" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Nà-gè shí-jiān wǒ zài jiā.", "At that time I was at home."],
  ],
});
