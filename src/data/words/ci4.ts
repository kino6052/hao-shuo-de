import { word } from "../../lib/word.ts";

export default word("ci4", {
  term: "cì",
  hanzi: "次",
  pos: { eng: "measure word", rus: "счётное слово", zh: "量词" },
  definition: {
    eng: "time, occurrence: counts how often something happens (e.g. {{word:liang3}}-{{word:ci4}}, \"twice\"; {{word:hen3}} {{word:duo1}} {{word:ci4}}, \"many times\")",
    rus: "раз: счётное слово для того, сколько раз что-то происходит (напр. {{word:liang3}}-{{word:ci4}}, «дважды»)",
    zh: "次，量词，表示事情发生的次数（如：两次，很多次）",
  },
  necessity: {
    index: 4,
    eng: "Times, as in \"twice\": without it, you can't say how often something happens.",
    rus: "Раз, как в «дважды»: без него нельзя сказать, как часто что-то бывает.",
  },
});
