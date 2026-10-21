import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7323,
  phase: 4,
  zh: "自言自语",
  py: "zìyán-zìyǔ",
  en: "talk to oneself",
  ru: "говорить с самим собой",
  pos: "verb",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:shuo1}} {{word:hua4}}, {{word:mei2}}-{{word:you3}} {{word:ren2}} {{word:ting1}}",
    "{{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:zai4}} {{word:shuo1}} {{word:hua4}}",
  ],
  tts: ["一个人说话，没有人听", "一个人在说话"],
  literal: "one person talks, nobody listens / one person is talking",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  proposed: true,
});
