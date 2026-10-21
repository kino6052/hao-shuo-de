import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9333,
  phase: 4,
  zh: "就读",
  py: "jiùdú",
  en: "attend school; be enrolled at",
  ru: "учиться (в школе, вузе)",
  pos: "verb",
  hsd: ["{{word:zai4}} {{word:xue2}}-{{word:xiao4}} {{word:xue2}}", "{{word:zai4}} X {{word:xue2}}"],
  tts: ["在学校学", "在X学"],
  literal: "study at school / study at X",
  fit: "plain",
  topics: ["studying"],
  isA: ["learning-and-teaching"],
  proposed: true,
});
