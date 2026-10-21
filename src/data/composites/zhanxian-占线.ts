import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7896,
  phase: 4,
  zh: "占线",
  py: "zhànxiàn",
  en: "(phone) line is busy",
  ru: "занято (о телефоне)",
  pos: "verb",
  hsd: [
    "{{word:bie2}}-{{word:ren2}} {{word:zai4}} {{word:yong4}} {{word:hua4}}-{{word:ji1}}, {{word:wo3}} {{word:da3}}-{{word:bu4}}-{{word:jin4}}-{{word:qu4}}",
  ],
  tts: ["别人在用话机，我打不进去"],
  literal: "someone else is using the phone, I cannot get in",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["happening"],
  proposed: true,
});
