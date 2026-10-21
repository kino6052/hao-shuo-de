import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8064,
  phase: 4,
  zh: "奶粉",
  py: "nǎifěn",
  en: "milk powder",
  ru: "сухое молоко",
  pos: "noun",
  hsd: [
    "{{word:fang4}} {{word:shui3}} {{word:jiu4}} {{word:neng2}} {{word:he1}}-{{word:de}} {{word:bai2}}-{{word:se4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:bai2}}-{{word:se4}}-{{word:de}} {{word:shui3}} {{word:zuo4}}-{{word:de}}, {{word:hen3}} {{word:xiao3}} {{word:hen3}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["放水就能喝的白色的东西", "动物的白色的水做的，很小很小的东西"],
  literal: "the white thing you can drink once you put water in / a very small thing made from the white water of animals",
  fit: "plain",
  topics: ["meat"],
  isA: ["dairy-or-egg"],
  proposed: true,
});
