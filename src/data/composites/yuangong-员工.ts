import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1057,
  phase: 3,
  zh: "员工",
  py: "yuángōng",
  en: "employee",
  ru: "сотрудник",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}"],
  tts: ["工作的人"],
  literal: "the working person",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是工作的人。",
      en: "He is an employee.",
      ru: "Он сотрудник.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我有很多工作的人。",
      en: "I have many employees.",
      ru: "У меня много сотрудников.",
    },
  ],
});
