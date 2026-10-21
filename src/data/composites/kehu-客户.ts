import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6199,
  phase: 4,
  zh: "客户",
  py: "kèhù",
  en: "client; customer",
  ru: "клиент",
  pos: "noun",
  hsd: [
    "{{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}}",
    "{{word:mai3}} {{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["买东西的人", "买帮人的工作的人"],
  literal: "a person who buys things / a person who buys the work of helping",
  fit: "plain",
  topics: ["goods-and-customers"],
  isA: ["social-role"],
  proposed: true,
});
