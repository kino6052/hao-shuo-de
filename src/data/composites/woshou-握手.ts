import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7197,
  phase: 4,
  zh: "握手",
  py: "wòshǒu",
  en: "shake hands",
  ru: "пожимать руки",
  pos: "verb",
  hsd: [
    "{{word:ni3}} {{word:na2}} {{word:ta1}}-{{word:de}} {{word:shou3}}, {{word:ta1}} {{word:ye3}} {{word:na2}} {{word:ni3}}-{{word:de}} {{word:shou3}}",
    "{{word:shou3}} {{word:he2}} {{word:shou3}} {{word:na2}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["你拿他的手，他也拿你的手", "手和手拿在一起"],
  literal: "you take his hand, he also takes your hand / hand and hand held together",
  fit: "plain",
  topics: ["meeting-and-parting"],
  isA: ["social-action"],
  proposed: true,
});
