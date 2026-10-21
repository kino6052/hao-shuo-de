import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8315,
  phase: 4,
  zh: "章",
  py: "zhāng",
  en: "chapter; section (of a book)",
  ru: "глава",
  pos: "noun",
  hsd: [
    "{{word:shu1}}-{{word:li3}}-{{word:de}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}}",
    "{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}-{{word:li3}}-{{word:de}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["书里的一部分", "写的东西里的一部分"],
  literal: "one part of a book / one part of a written thing",
  fit: "plain",
  topics: ["writing"],
  isA: ["paper-thing"],
  proposed: true,
});
