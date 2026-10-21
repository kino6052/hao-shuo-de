import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6180,
  phase: 4,
  zh: "企业",
  py: "qǐyè",
  en: "enterprise; business",
  ru: "предприятие",
  pos: "noun",
  hsd: [
    "{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:hen3}} {{word:duo1}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:gong1}}-{{word:zuo4}} {{word:de2}} {{word:jin1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["工作的地方", "很多人一起工作得金的地方"],
  literal: "the place where you work / the place where many people work together and get money",
  fit: "plain",
  topics: ["companies-and-products"],
  isA: ["group-of-people"],
  proposed: true,
});
