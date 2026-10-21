import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6322,
  phase: 4,
  zh: "本科",
  py: "běnkē",
  en: "undergraduate course; bachelor's degree",
  ru: "бакалавриат",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:xue2}}-{{word:li3}} {{word:di4}}-{{word:yi1}}-{{light:ge4}} {{word:xue2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zai4}} {{word:da4}}-{{word:xue2}} {{word:xue2}} {{word:si4}}-{{word:nian2}}",
  ],
  tts: ["大学里第一个学的东西", "在大学学四年"],
  literal: "the first thing studied at university; four years of study at university",
  fit: "plain",
  topics: ["school-days-and-years"],
  isA: ["idea"],
  proposed: true,
});
