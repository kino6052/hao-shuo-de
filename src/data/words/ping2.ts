import { word } from "../../lib/word.ts";

export default word("ping2", {
  term: "píng",
  hanzi: "平",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "flat, level, even: {{word:lu4}} {{word:hen3}} {{word:ping2}}, the road is flat; {{word:shui3}}-{{word:ping2}}, level",
    rus: "ровный, плоский: {{word:lu4}} {{word:hen3}} {{word:ping2}} — дорога ровная; {{word:shui3}}-{{word:ping2}} — уровень",
    zh: "平，平坦",
  },
  necessity: {
    index: 3,
    eng: "Flat, like the ground or water: {{word:ping2}}. It is in {{word:ping2}}-{{word:chang2}}, {{word:ping2}}-{{word:shi2}} and {{word:shui3}}-{{word:ping2}}.",
    rus: "Ровный, как земля или вода: {{word:ping2}}. Он есть в {{word:ping2}}-{{word:chang2}}, {{word:ping2}}-{{word:shi2}} и {{word:shui3}}-{{word:ping2}}.",
  },
  topics: ["shapes"],
  isA: ["shape-quality"],
  paraphrase: {
    forms: ["{{word:he2}} {{word:di4}} {{word:yi1}}-{{word:yang4}}"],
    verdict: "clumsy",
    note: "One of the most useful words.",
  },
});
