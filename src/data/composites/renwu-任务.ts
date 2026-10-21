import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1022,
  phase: 3,
  zh: "任务",
  py: "rènwu",
  en: "task",
  ru: "задание",
  pos: "noun",
  hsd: ["{{word:yao4}} {{word:zuo4}}-{{word:de}}"],
  tts: ["要做的"],
  literal: "what is to be done",
  fit: "plain",
  topics: ["managing-and-progress"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yao4}} {{word:zuo4}}-{{word:de}}.",
      hanzi: "我有要做的。",
      en: "I have a task.",
      ru: "У меня есть задача.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:yao4}} {{word:zuo4}}-{{word:de}}.",
      hanzi: "这是要做的。",
      en: "This is the task.",
      ru: "Это задача.",
    },
  ],
});
