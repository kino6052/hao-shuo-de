import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 720,
  phase: 2,
  zh: "部门",
  py: "bùmén",
  en: "department",
  ru: "отдел",
  pos: "noun",
  hsd: [
    "{{word:bu4}}-{{word:men2}}",
    "{{word:yi1}}-{{word:qi3}}-{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["部门", "一起工作的人"],
  literal: "the people who work together",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["office"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shi4}} {{word:yi1}}-{{word:qi3}}-{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我们是一起工作的人。",
      en: "We are one department.",
      ru: "Мы один отдел.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yi1}}-{{word:qi3}}-{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的一起工作的人很好。",
      en: "His department is good.",
      ru: "Его отдел хороший.",
    },
  ],
});
