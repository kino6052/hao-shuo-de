import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1363,
  phase: 3,
  zh: "毕业生",
  py: "bìyèshēng",
  en: "graduate",
  ru: "выпускник",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:wan2}}-{{word:de}} {{word:ren2}}"],
  tts: ["学完的人"],
  literal: "someone who finished learning",
  fit: "plain",
  topics: ["teachers-and-students"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:xue2}}-{{word:wan2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是学完的人。",
      en: "He is a graduate.",
      ru: "Он выпускник.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:xie1}} {{word:xue2}}-{{word:wan2}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "那些学完的人很好。",
      en: "Those graduates are good.",
      ru: "Те выпускники хорошие.",
    },
  ],
});
