import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8214,
  phase: 4,
  zh: "官",
  py: "guān",
  en: "official; officer; government officer",
  ru: "чиновник; должностное лицо",
  pos: "noun",
  hsd: [
    "{{word:wei4}} {{word:guo2}}-{{word:jia1}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
    "{{word:guo2}}-{{word:jia1}}-{{word:li3}} {{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["为国家工作的人", "国家里做决定的人"],
  literal: "a person who works for the country / a person who decides in the country",
  fit: "plain",
  topics: ["government"],
  isA: ["worker"],
  proposed: true,
});
