import { word } from "../../lib/word.ts";

export default word("le", {
  term: "le",
  hanzi: "了",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "perfective aspect marker, completed change of state",
    rus: "показатель совершённого вида, завершённое изменение состояния",
    zh: "完成体标记，表示状态变化已完成",
  },
  necessity: {
    index: 5,
    eng: "Says it happened, or it changed: {{word:wo3}} {{word:chi1}} {{word:le}}. The past and changes need it.",
    rus: "Говорит, что что-то случилось или изменилось: {{word:wo3}} {{word:chi1}} {{word:le}}. Без него ни прошлого, ни перемен.",
  },
  maps: "pini",
});
