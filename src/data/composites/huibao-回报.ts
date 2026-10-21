import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8717,
  phase: 4,
  zh: "回报",
  py: "huíbào",
  en: "repay; return a favour; reward; returns",
  ru: "отплатить; отблагодарить; отдача",
  pos: "verb",
  hsd: [
    "{{word:ta1}} {{word:bang1}}-{{word:le}} {{word:ni3}}, {{word:ni3}} {{word:ye3}} {{word:bang1}} {{word:ta1}}",
    "{{word:gei3}} {{word:bang1}}-{{word:guo4}} {{word:ni3}}-{{word:de}} {{word:ren2}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["他帮了你，你也帮他", "给帮过你的人东西"],
  literal: "he helped you, you help him too / give things to the person who has helped you",
  fit: "plain",
  topics: ["sharing-and-giving"],
  isA: ["social-action"],
  proposed: true,
});
