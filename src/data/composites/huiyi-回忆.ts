import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6666,
  phase: 4,
  zh: "回忆",
  py: "huíyì",
  en: "recall; memories",
  ru: "вспоминать; воспоминание",
  pos: "verb",
  hsd: [
    "{{word:xiang3}} {{word:yi3}}-{{word:qian2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:xiang3}}-{{word:qi3}} {{word:yi3}}-{{word:qian2}}",
  ],
  tts: ["想以前的东西", "想起以前"],
  literal: "think about the things of before; think back to before",
  fit: "plain",
  topics: ["remembering-and-forgetting"],
  isA: ["thinking-action"],
  proposed: true,
});
