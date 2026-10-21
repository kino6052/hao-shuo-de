import { word } from "../../lib/word.ts";

export default word("lai2", {
  term: "lái",
  hanzi: "来",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to come, arrive, happen; {{word:wo3}} {{word:lai2}} + verb, \"let me do it\"",
    rus: "приходить, прибывать, происходить; {{word:wo3}} {{word:lai2}} + глагол — «давай я сделаю»",
    zh: "来，到达，发生",
  },
  necessity: {
    index: 5,
    eng: "Come, toward you. With {{word:qu4}}, it gives every movement a direction.",
    rus: "Приходить, к тебе. Вместе с {{word:qu4}} задаёт направление любому движению.",
  },
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  maps: "kama",
  paraphrase: { forms: ["{{word:dao4}} {{word:wo3}} {{word:zhe4}}-{{word:li3}}"], verdict: "clumsy" },
});
