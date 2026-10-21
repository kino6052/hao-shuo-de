import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6913,
  phase: 4,
  zh: "交警",
  py: "jiāojǐng",
  en: "traffic police",
  ru: "инспектор дорожной полиции, регулировщик",
  pos: "noun",
  hsd: [
    "{{word:zai4}} {{word:lu4}}-{{word:shang4}} {{word:rang4}} {{word:che1}} {{word:zou3}}, {{word:rang4}} {{word:che1}} {{word:bu4}} {{word:zou3}}-{{word:de}} {{word:ren2}}",
    "{{word:zai4}} {{word:lu4}}-{{word:shang4}} {{word:bang1}} {{word:che1}} {{word:he2}} {{word:ren2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["在路上让车走，让车不走的人", "在路上帮车和人的人"],
  literal: "the person on the road who lets cars go and makes cars stop / the person on the road who helps cars and people",
  fit: "plain",
  topics: ["police-and-safety"],
  isA: ["worker"],
  proposed: true,
});
