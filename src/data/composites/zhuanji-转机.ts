import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8412,
  phase: 4,
  zh: "转机",
  py: "zhuǎnjī",
  en: "change planes; transfer (flight)",
  ru: "делать пересадку (на самолёте)",
  pos: "verb",
  hsd: [
    "{{word:xia4}} {{word:fei1}}-{{word:ji1}}, {{word:shang4}} {{word:bie2}}-{{word:de}} {{word:fei1}}-{{word:ji1}}",
    "{{word:cong2}} {{word:yi1}}-{{light:ge4}} {{word:fei1}}-{{word:ji1}} {{word:qu4}} {{word:bie2}}-{{word:de}} {{word:fei1}}-{{word:ji1}}",
  ],
  tts: ["下飞机，上别的飞机", "从一个飞机去别的飞机"],
  literal: "get off a plane, get on another plane / go from one plane to another plane",
  fit: "plain",
  topics: ["planes-and-airports"],
  isA: ["moving-action"],
  proposed: true,
});
