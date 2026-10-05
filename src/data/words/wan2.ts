import { word } from "../../lib/word.ts";

export default word("wan2", {
  term: "wán",
  hanzi: "完",
  pos: { eng: "verb complement", rus: "глагольный комплемент", zh: "动词补语" },
  definition: {
    eng: "finish, be done, run out; binds directly after a verb via a hyphen to mark a resultative completion (chī-wán, \"finish eating\")",
    rus: "закончить, быть готовым, закончиться; присоединяется через дефис прямо после глагола, обозначая результативное завершение (chī-wán, «доесть»)",
    zh: "完，完毕，用尽；通过连字符直接附着在动词之后，表示动作的结果性完成（chī-wán，「吃完」）",
  },
  necessity: {
    index: 4,
    eng: "Finish, be done: {{word:chi1}}-{{word:wan2}}, finish eating. Without it, nothing ever ends.",
    rus: "Закончить: {{word:chi1}}-{{word:wan2}} — доесть. Без него ничего не заканчивается.",
  },
  maps: "pini",
});
