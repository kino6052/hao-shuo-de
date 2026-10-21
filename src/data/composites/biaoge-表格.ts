import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6324,
  phase: 4,
  zh: "表格",
  py: "biǎogé",
  en: "form, table",
  ru: "бланк, таблица",
  pos: "noun",
  hsd: [
    "{{word:you3}} {{word:hen3}} {{word:duo1}} {{word:xiao3}}-{{word:fang1}}-{{word:de}}, {{word:xie3}} {{word:zi4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zai4}} {{word:fang1}}-{{word:li3}} {{word:xie3}} {{word:zi4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["有很多小方的，写字的东西", "在方里写字的东西"],
  literal: "a thing with many small squares, for writing in",
  fit: "plain",
  topics: ["office"],
  isA: ["paper-thing"],
  proposed: true,
});
