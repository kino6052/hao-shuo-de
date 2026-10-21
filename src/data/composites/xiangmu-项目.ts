import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1000,
  phase: 2,
  zh: "项目",
  py: "xiàngmù",
  en: "project",
  ru: "проект",
  pos: "noun",
  hsd: ["{{word:yao4}} {{word:zuo4}}-{{word:de}}"],
  tts: ["要做的"],
  literal: "what is to be done",
  fit: "plain",
  topics: ["office"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yao4}} {{word:zuo4}}-{{word:de}}.",
      hanzi: "我有要做的。",
      en: "I have a project.",
      ru: "У меня есть проект.",
    },
    {
      pinyin: "{{Word:yao4}} {{word:zuo4}}-{{word:de}} {{word:hen3}} {{word:da4}}.",
      hanzi: "要做的很大。",
      en: "The project is big.",
      ru: "Проект большой.",
    },
  ],
});
