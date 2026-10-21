import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8905,
  phase: 4,
  zh: "发炎",
  py: "fāyán",
  en: "become inflamed; inflammation",
  ru: "воспаляться; воспаление",
  pos: "verb",
  hsd: [
    "{{word:shen1ti3}}-{{word:de}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}} {{word:bian4}} {{word:hong2}}, {{word:hen3}} {{word:tong4}}",
    "{{word:shen1ti3}}-{{word:de}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}} {{word:hong2}} {{word:le}}, {{word:tong4}}",
  ],
  tts: ["身体的一部分变红，很痛", "身体的一部分红了，痛"],
  literal: "a part of the body turns red, very painful / a part of the body is red, hurts",
  fit: "plain",
  topics: ["illness"],
  isA: ["being-affected"],
  proposed: true,
});
