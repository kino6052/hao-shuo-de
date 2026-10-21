import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7393,
  phase: 4,
  zh: "病情",
  py: "bìngqíng",
  en: "condition of an illness; the state of a patient",
  ru: "состояние больного",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
    "{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:ren2}} {{word:xian4}}-{{word:zai4}} {{word:duo1}} {{word:hao3}}, {{word:duo1}} {{word:huai4}}",
  ],
  tts: ["身体不好的现在的样子", "身体不好的人现在多好，多坏"],
  literal: "the way the not-good body is now / how good, how bad a person with a not-good body is now",
  fit: "plain",
  topics: ["fever-colds-and-diseases"],
  isA: ["state-name"],
  proposed: true,
});
