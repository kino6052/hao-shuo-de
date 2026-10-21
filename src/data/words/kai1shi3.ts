import { word } from "../../lib/word.ts";

export default word("kai1shi3", {
  term: "kāishǐ",
  hanzi: "开始",
  pos: { eng: "verb/auxiliary", rus: "глагол/вспомогательный глагол", zh: "动词/助动词" },
  definition: {
    eng: "to begin, start, open; turn on; manage to",
    rus: "начинать, стартовать, открывать; включать; суметь",
    zh: "开始，启动，打开；打开（设备）；设法做到",
  },
  necessity: {
    index: 4,
    eng: "Begin, start. Without it, you can't say when something starts.",
    rus: "Начинать. Без него не сказать, когда что-то начинается.",
  },
  topics: ["deciding"],
  isA: ["starting-and-stopping"],
  maps: "open, kama",
  paraphrase: {
    forms: ["{{word:cong2}} {{word:bu4}} {{word:zuo4}} {{word:dao4}} {{word:zuo4}}"],
    verdict: "clumsy",
  },
});
