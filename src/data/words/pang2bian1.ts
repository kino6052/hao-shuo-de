import { word } from "../../lib/word.ts";

export default word("pang2bian1", {
  term: "pángbiān",
  hanzi: "旁边",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "side, vicinity, area beside, hip",
    rus: "сторона, окрестность, область сбоку, бедро",
    zh: "旁边，附近，侧面区域，髋部",
  },
  necessity: {
    index: 4,
    eng: "Beside, next to. A basic position with no other word.",
    rus: "Рядом, сбоку. Базовое положение, для которого нет другого слова.",
  },
  topics: ["beside-and-around"],
  isA: ["place-relation"],
  maps: "poka",
  paraphrase: {
    forms: ["{{word:zuo3}}-{{word:bian1}} {{word:he2}} {{word:you4}}-{{word:bian1}}"],
    verdict: "fine",
  },
});
