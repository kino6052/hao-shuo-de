import { word } from "../../lib/word.ts";

export default word("jie2", {
  term: "jié",
  hanzi: "结",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to tie, knot, bind together: {{word:ba3}} {{word:xian4}} {{word:jie2}}-{{word:hao3}}, tie the thread up; in {{word:jie2}}-{{word:guo3}}, the result",
    rus: "завязывать, связывать: {{word:ba3}} {{word:xian4}} {{word:jie2}}-{{word:hao3}} — завязать нитку; в {{word:jie2}}-{{word:guo3}} — результат",
    zh: "结，系，结果",
  },
  necessity: {
    index: 4,
    eng: "Tie, knot: {{word:jie2}}. It also ends things: {{word:jie2}}-{{word:guo3}}, the result.",
    rus: "Завязывать, узел: {{word:jie2}}. Им же всё заканчивается: {{word:jie2}}-{{word:guo3}} — результат.",
  },
  senses: {
    result: {
      hanzi: "结",
      eng: "result, how it ends up",
      rus: "результат, чем всё кончилось",
      why: {
        eng: "Where a thing is tied up, it ends: {{word:jie2}}-{{word:guo3}} is the result. On its own it is tie.",
        rus: "Где вещь завязана, там она кончается: {{word:jie2}}-{{word:guo3}} — результат. Сам по себе — «завязывать».",
      },
      compounds: ["jie2 guo3"],
    },
  },
  paraphrase: {
    forms: [
      "{{word:rang4}} {{word:xian4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:bu4}} {{word:neng2}} {{word:kai1}}",
    ],
    verdict: "clumsy",
  },
});
