import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8043,
  phase: 4,
  zh: "折",
  py: "zhé",
  en: "break; snap; fold",
  ru: "сломать; сложить",
  pos: "verb",
  hsd: [
    "{{word:bian4}} {{word:liang3}}-{{light:ge4}} {{word:bu4}}-{{light:fen1}}",
    "{{word:rang4}} X {{word:bian4}} {{word:liang3}}-{{light:ge4}} {{word:bu4}}-{{light:fen1}}",
    "{{word:ba3}} X-{{word:de}} {{word:yi1}}-{{word:bian1}} {{word:fang4}} {{word:zai4}} X {{word:shang4}}-{{word:mian4}}",
  ],
  tts: ["变两个部分", "让X变两个部分", "把X的一边放在X上面"],
  literal: "become two parts / make X become two parts / put one side of X on top of X",
  fit: "plain",
  topics: ["pushing-and-pulling"],
  isA: ["handling-action"],
  proposed: true,
});
