import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8630,
  phase: 4,
  zh: "股票",
  py: "gǔpiào",
  en: "stock; share (in a company)",
  ru: "акция; акции",
  pos: "noun",
  hsd: [
    "{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}, {{word:mai3}}-{{word:le}} {{word:yi3}}-{{word:hou4}} {{word:neng2}} {{word:de2}}-{{word:dao4}} {{word:jin1}}",
    "{{word:mai3}}-{{word:le}} {{word:jiu4}} {{word:you3}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["工作的地方的一部分，买了以后能得到金", "买了就有工作的地方的一部分的写的东西"],
  literal: "a part of a place of work; after buying it one can get money / a written thing that, once bought, gives one a part of a place of work",
  fit: "plain",
  topics: ["business-and-economy"],
  isA: ["money-thing"],
  proposed: true,
});
