import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zai-place", {
  meaning: {
    eng: "Says where someone or something is: zài goes before the place. A place can also come before the verb: where it is done.",
    rus: "Говорит, где кто-то или что-то находится: zài стоит перед местом. Место может стоять и перед глаголом: где это делается.",
  },
  covers: ["grammar:location"],
  tags: ["where", "cat:place"],
  template: { hsd: "Who + {{word:zai4}} + place", eng: "Who is at the place" },
  rules: [
    { lhs: "VerbP", hsd: "@verb =zai4 NP", eng: "a verb and where: stays at home" },
    { lhs: "VP", hsd: "=zai4 NP VP", eng: "zài, a place, then the verb: does it there" },
  ],
  taught: "where-it-is/where",
  examples: [
    ["Tā liú zài jiā.", "He stays at home."],
    ["Wǒ zài jiā zhǎo.", "I'm looking for it at home."],
  ],
});
