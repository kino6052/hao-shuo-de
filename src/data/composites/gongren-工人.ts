import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1486,
  phase: 3,
  zh: "工人",
  py: "gōngrén",
  en: "worker",
  ru: "рабочий",
  pos: "noun",
  hsd: [
    "{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
    "{{word:gong1}}-{{word:ren2}}",
    "{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["工作的人", "工人", "做的人"],
  literal: "a person who works",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shi4}} {{word:gong1}}-{{word:ren2}}.",
      hanzi: "我爸爸是工人。",
      en: "My father is a worker.",
      ru: "Мой папа рабочий.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是工作的人。",
      en: "He is a worker.",
      ru: "Он рабочий.",
    },
  ],
});
