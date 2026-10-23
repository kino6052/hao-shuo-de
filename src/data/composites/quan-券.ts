import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9223,
  phase: 4,
  zh: "券",
  py: "quàn",
  en: "coupon; voucher; ticket",
  ru: "купон; ваучер; талон",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:ni3}} {{word:shao3}} {{word:gei3}} {{word:jin1}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:you3}} {{word:le}} {{word:ta1}} {{word:jiu4}} {{word:neng2}} {{word:na2}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让你少给金的写的东西", "有了它就能拿东西的写的东西"],
  literal: "a written thing that lets you pay less money / a written thing with which you can take things",
  fit: "plain",
  topics: ["prices-and-discounts"],
  isA: ["paper-thing"],
  proposed: true,
});
