import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7251,
  phase: 4,
  zh: "夹",
  py: "jiā",
  en: "clamp; pinch; hold between",
  ru: "зажимать, брать щипцами",
  pos: "verb",
  hsd: [
    "{{word:cong2}} {{word:liang3}}-{{word:bian1}} {{word:yong4}}-{{word:li4}}, {{word:rang4}} X {{word:bu4}} {{word:neng2}} {{word:dong4}}",
    "{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:liang3}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:zhong1}}-{{word:jian1}}",
  ],
  tts: ["从两边用力，让X不能动", "把X放在两个东西中间"],
  literal: "push hard from the two sides so X cannot move / put X between two things",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  proposed: true,
});
