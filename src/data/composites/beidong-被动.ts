import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7385,
  phase: 4,
  zh: "被动",
  py: "bèidòng",
  en: "passive; reactive",
  ru: "пассивный",
  pos: "adjective",
  hsd: [
    "{{word:bie2}}-{{word:ren2}} {{word:dong4}} {{word:le}}, {{word:wo3}} {{word:jiu4}} {{word:dong4}}",
    "{{word:bu4}} {{word:shi4}} {{word:wo3}} {{word:xiang3}} {{word:zuo4}}, {{word:shi4}} {{word:bie2}}-{{word:ren2}} {{word:rang4}} {{word:wo3}} {{word:zuo4}}",
  ],
  tts: ["别人动了，我就动", "不是我想做，是别人让我做"],
  literal: "other people move, then I move / it is not that I want to do it, other people make me do it",
  fit: "plain",
  topics: ["careful-hardworking-and-lazy"],
  isA: ["character-quality"],
  proposed: true,
});
