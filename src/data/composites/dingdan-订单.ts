import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8613,
  phase: 4,
  zh: "订单",
  py: "dìngdān",
  en: "order (a list of what to buy)",
  ru: "заказ; бланк заказа",
  pos: "noun",
  hsd: [
    "{{word:shuo1}} {{word:yao4}} {{word:mai3}} {{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:mai3}}-{{word:de}} {{word:ren2}} {{word:xie3}}-{{word:de}}, {{word:shuo1}} {{word:yao4}} {{word:mai3}} {{word:shen2me}}, {{word:mai3}} {{word:duo1}}-{{word:shao3}}",
  ],
  tts: ["说要买什么的写的东西", "买的人写的，说要买什么，买多少"],
  literal: "a written thing that says what is to be bought / written by the buyer: what is to be bought, how much to buy",
  fit: "plain",
  topics: ["buying-and-selling"],
  isA: ["paper-thing"],
  proposed: true,
});
