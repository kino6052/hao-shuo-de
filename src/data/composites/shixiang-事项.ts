import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8815,
  phase: 4,
  zh: "事项",
  py: "shìxiàng",
  en: "item; matter (on a list); point to deal with",
  ru: "пункт; вопрос; дело (в списке)",
  pos: "noun",
  hsd: [
    "{{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}}-{{word:li3}}-{{word:de}} {{word:yi1}}-{{light:ge4}}",
    "{{word:yi1}}-{{light:ge4}} {{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["很多东西里的一个", "一个要做的东西"],
  literal: "one of many things / one thing that is to be done",
  fit: "plain",
  topics: ["office"],
  isA: ["activity-name"],
  proposed: true,
});
