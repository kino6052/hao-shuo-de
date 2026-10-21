import { word } from "../../lib/word.ts";

export default word("guan1", {
  term: "guān",
  hanzi: "关",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to close, shut; to turn off (e.g. {{word:guan1}} {{word:huo3}}, \"turn off the fire\")",
    rus: "закрывать; выключать (напр. {{word:guan1}} {{word:huo3}}, «выключить огонь»)",
    zh: "关，关上，关掉（如：关火）",
  },
  necessity: {
    index: 3,
    eng: "Close, turn off: doors, lights, machines. {{word:bu4}} {{word:kai1}} is a state, not an action.",
    rus: "Закрыть, выключить: двери, свет, машины. {{word:bu4}} {{word:kai1}} — состояние, а не действие.",
  },
  topics: ["pushing-and-pulling"],
  isA: ["handling-action"],
  paraphrase: {
    forms: [
      "{{word:rang4}} {{word:li3}}-{{word:mian4}} {{word:he2}} {{word:wai4}}-{{word:mian4}} {{word:bu4}} {{word:tong1}}",
    ],
    verdict: "clumsy",
  },
});
