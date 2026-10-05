import { word } from "../../lib/word.ts";

export default word("mei2", {
  term: "méi",
  hanzi: "没",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "negative particle used exclusively to negate the verb you (to form meiyou)",
    rus: "отрицательная частица, используемая исключительно для отрицания глагола you (образует meiyou)",
    zh: "专用于否定动词 you 的否定助词（构成 meiyou）",
  },
  necessity: {
    index: 5,
    eng: "\"Not\" for {{word:you3}}: {{word:mei2}}-{{word:you3}}, there isn't, I don't have. {{word:bu4}} can't do this job.",
    rus: "«Не» для {{word:you3}}: {{word:mei2}}-{{word:you3}} — нет, не имею. {{word:bu4}} эту работу не делает.",
  },
  maps: "",
});
