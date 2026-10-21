import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8088,
  phase: 4,
  zh: "中奖",
  py: "zhòngjiǎng",
  en: "win a prize (in a draw or lottery)",
  ru: "выиграть приз (в лотерее)",
  pos: "verb",
  hsd: [
    "{{word:mei2}} {{word:zuo4}} {{word:shen2me}} {{word:jiu4}} {{word:de2}}-{{word:dao4}} {{word:hen3}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:shuo1}}-{{word:de}} {{word:hao4}} {{word:dui4}} {{word:le}}, {{word:jiu4}} {{word:de2}}-{{word:dao4}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["没做什么就得到很好的东西", "说的号对了，就得到东西"],
  literal: "get a very good thing without doing anything / the number said was right, so get something",
  fit: "plain",
  topics: ["giving-and-getting"],
  isA: ["receiving"],
  proposed: true,
});
