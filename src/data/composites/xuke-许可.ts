import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8296,
  phase: 4,
  zh: "许可",
  py: "xǔkě",
  en: "permit; allow; permission; licence",
  ru: "разрешать; разрешение",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:zuo4}}",
    "{{word:shuo1}} X {{word:ke3}}-{{word:yi3}} {{word:zuo4}}",
    "{{word:shuo1}} {{word:ke3}}-{{word:yi3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让X做", "说X可以做", "说可以的写的东西"],
  literal: "let X do it / say X may do it / a written thing that says you may",
  fit: "plain",
  topics: ["agreeing-and-allowing"],
  isA: ["social-action"],
  proposed: true,
});
