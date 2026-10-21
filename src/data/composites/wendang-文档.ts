import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8287,
  phase: 4,
  zh: "文档",
  py: "wéndàng",
  en: "document; file (on a computer)",
  ru: "документ",
  pos: "noun",
  hsd: [
    "{{word:zai4}}-{{word:suan4}}-{{word:de}}-{{word:ji1}}-{{word:li3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zai4}}-{{word:suan4}}-{{word:de}}-{{word:ji1}}-{{word:shang4}}-{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["在算的机里的写的东西", "在算的机上写的东西"],
  literal: "the written thing inside a computer / a written thing on a computer",
  fit: "plain",
  topics: ["software-files-and-accounts"],
  isA: ["paper-thing"],
  proposed: true,
});
