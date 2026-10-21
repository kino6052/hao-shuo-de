import { word } from "../../lib/word.ts";

export default word("qiu2", {
  term: "qiú",
  hanzi: "球",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "ball, sphere: {{word:wan2r}} {{word:qiu2}}, play with a ball; {{word:di4}}-{{word:qiu2}}, the Earth",
    rus: "мяч, шар: {{word:wan2r}} {{word:qiu2}} — играть в мяч; {{word:di4}}-{{word:qiu2}} — Земля",
    zh: "球，球体",
  },
  necessity: {
    index: 3,
    eng: "A ball: {{word:qiu2}}. Games and the Earth ({{word:di4}}-{{word:qiu2}}) need it; \"the round thing\" is clumsy.",
    rus: "Мяч: {{word:qiu2}}. Он нужен играм и Земле ({{word:di4}}-{{word:qiu2}}); «круглая вещь» неуклюже.",
  },
  topics: ["games-and-toys"],
  isA: ["toy-or-game"],
  paraphrase: {
    forms: [
      "{{word:yuan2}}-{{word:de}}, {{word:wan2r}} {{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    ],
    verdict: "clumsy",
  },
});
