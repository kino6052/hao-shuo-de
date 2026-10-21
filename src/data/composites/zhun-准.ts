import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1260,
  phase: 3,
  zh: "准",
  py: "zhǔn",
  en: "accurate",
  ru: "точный",
  pos: "adjective",
  hsd: ["{{word:dui4}}", "{{word:hen3}} {{word:dui4}}"],
  tts: ["对", "很对"],
  literal: "right / very right",
  fit: "plain",
  topics: ["exact-clear-and-obvious"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:hen3}} {{word:dui4}}.",
      hanzi: "你说的很对。",
      en: "What you say is very accurate.",
      ru: "То, что ты говоришь, очень точно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hen3}} {{word:dui4}}.",
      hanzi: "他说的很对。",
      en: "What he says is accurate.",
      ru: "То, что он говорит, точно.",
    },
  ],
});
