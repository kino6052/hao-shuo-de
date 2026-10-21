import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9222,
  phase: 4,
  zh: "求婚",
  py: "qiúhūn",
  en: "propose (marriage)",
  ru: "сделать предложение (руки и сердца)",
  pos: "verb",
  hsd: [
    "{{word:wen4}} {{word:ta1}} {{word:yao4}} {{word:bu4}} {{word:yao4}} {{word:he2}} {{word:wo3}} {{word:bian4}} {{word:yi1}}-{{light:ge4}} {{word:jia1}}",
    "{{word:wen4}} X {{word:neng2}} {{word:bu4}} {{word:neng2}} {{word:he2}} {{word:wo3}} {{word:bian4}} {{word:yi1}}-{{light:ge4}} {{word:jia1}}",
  ],
  tts: ["问她要不要和我变一个家", "问X能不能和我变一个家"],
  literal: "ask her whether she wants to become one home with me / ask X whether X can become one home with me",
  fit: "plain",
  topics: ["love-and-marriage"],
  isA: ["social-action"],
  proposed: true,
});
