import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9287,
  phase: 4,
  zh: "现货",
  py: "xiànhuò",
  en: "goods in stock; spot goods",
  ru: "товар в наличии",
  pos: "noun",
  hsd: [
    "{{word:mai3}} {{word:le}} {{word:jiu4}} {{word:neng2}} {{word:na2}} {{word:zou3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:xian4}}-{{word:zai4}} {{word:you3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["买了就能拿走的东西", "买东西的地方现在有的东西"],
  literal: "things you can take away as soon as you buy them / things the shop has right now",
  fit: "plain",
  topics: ["shops"],
  isA: ["thing"],
  proposed: true,
});
