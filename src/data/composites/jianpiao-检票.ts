import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8348,
  phase: 4,
  zh: "检票",
  py: "jiǎnpiào",
  en: "check tickets",
  ru: "проверять билеты",
  pos: "verb",
  hsd: [
    "{{word:kan4}} {{word:ni3}} {{word:you3}} {{word:mei2}} {{word:you3}} {{word:rang4}} {{word:ren2}} {{word:jin4}}-{{word:qu4}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["看你有没有让人进去的写的东西"],
  literal: "look whether you have the written thing that lets people in",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["perceiving"],
  proposed: true,
});
