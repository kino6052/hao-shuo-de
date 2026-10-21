import { word } from "../../lib/word.ts";

export default word("tang3", {
  term: "tǎng",
  hanzi: "躺",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to lie (down); {{word:tang3}}-{{word:xia4}}, \"lie down\"",
    rus: "лежать; {{word:tang3}}-{{word:xia4}} — «лечь»",
    zh: "躺",
  },
  necessity: {
    index: 3,
    eng: "Lie down. With {{word:zuo4}}-{{word:xia4}} and {{word:zhan4}}, one of the three ways a body rests.",
    rus: "Лежать. Вместе с {{word:zuo4}}-{{word:xia4}} и {{word:zhan4}} — одна из трёх поз тела.",
  },
  topics: ["posture"],
  isA: ["body-position"],
  paraphrase: {
    forms: ["{{word:shen1ti3}} {{word:ping2}} {{word:zai4}} {{word:di4}}-{{word:shang4}}"],
    verdict: "clumsy",
  },
});
