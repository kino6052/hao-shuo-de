import { word } from "../../lib/word.ts";

export default word("ba3", {
  term: "bǎ",
  hanzi: "把",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "grammatical object-introducing particle; used to implement the transitive state-change framework",
    rus: "грамматическая частица, вводящая объект; используется для реализации переходной конструкции изменения состояния",
    zh: "引出宾语的语法助词；用于实现及物性状态改变结构",
  },
  necessity: {
    index: 3,
    eng: "Puts the thing before the verb: {{word:ba3}} X {{word:fang4}} {{word:zai4}} …. Needed to say where you put something.",
    rus: "Ставит вещь перед глаголом: {{word:ba3}} X {{word:fang4}} {{word:zai4}} …. Без него не сказать, куда что-то положили.",
  },
  maps: "",
});
