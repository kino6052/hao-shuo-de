import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7800,
  phase: 4,
  zh: "撑",
  py: "chēng",
  en: "prop up; support; hold open",
  ru: "подпирать; раскрывать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} X {{word:rang4}} Y {{word:bu4}} {{word:xia4}}-{{word:lai2}}",
    "{{word:yong4}} X {{word:rang4}} Y {{word:zai4}} {{word:shang4}}-{{word:mian4}}",
  ],
  tts: ["用X让Y不下来", "用X让Y在上面"],
  literal: "use X so that Y does not come down / use X so that Y stays up",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["holding"],
  proposed: true,
});
