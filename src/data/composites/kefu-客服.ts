import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6740,
  phase: 4,
  zh: "客服",
  py: "kèfú",
  en: "customer service",
  ru: "служба поддержки клиентов",
  pos: "noun",
  hsd: [
    "{{word:bang1}} {{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}",
    "{{word:bang1}} {{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["帮买东西的人的工作", "帮买东西的人工作的人"],
  literal: "the work of helping the people who buy / the person who works helping the people who buy",
  fit: "plain",
  topics: ["goods-and-customers"],
  isA: ["activity-name"],
  proposed: true,
});
