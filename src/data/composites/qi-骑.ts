import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 916,
  phase: 2,
  zh: "骑",
  py: "qí",
  en: "ride",
  ru: "ездить верхом",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:zai4}} X-{{word:shang4}} {{word:qu4}}"],
  tts: ["坐在X上去"],
  literal: "sit on X and go",
  fit: "plain",
  topics: ["vehicles"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:zai4}} X-{{word:shang4}} {{word:qu4}}.",
      hanzi: "我坐在X上去。",
      en: "I ride X.",
      ru: "Я еду верхом на X.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}}-{{word:zai4}} X-{{word:shang4}} {{word:qu4}} {{word:ma}}?",
      hanzi: "你坐在X上去吗？",
      en: "Are you riding X?",
      ru: "Ты едешь на X?",
    },
  ],
});
