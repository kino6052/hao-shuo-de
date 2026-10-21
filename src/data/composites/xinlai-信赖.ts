import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8462,
  phase: 4,
  zh: "信赖",
  py: "xìnlài",
  en: "trust; rely on",
  ru: "доверять; полагаться",
  pos: "verb",
  hsd: [
    "{{word:xiang3}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:xiang3}} X {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:jue2}}-{{word:de}} X {{word:yi1}}-{{word:ding4}} {{word:hui4}} {{word:bang1}} {{word:wo3}}",
  ],
  tts: ["想是真的", "想X说的是真的", "觉得X一定会帮我"],
  literal: "think it is true / think what X says is true / feel X will surely help me",
  fit: "plain",
  topics: ["knowing-and-understanding"],
  isA: ["thinking-action"],
  proposed: true,
});
