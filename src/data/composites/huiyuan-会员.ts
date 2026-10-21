import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6667,
  phase: 4,
  zh: "会员",
  py: "huìyuán",
  en: "member (of a club or group)",
  ru: "член (клуба)",
  pos: "noun",
  hsd: [
    "{{word:zai4}} X {{word:li3}}-{{word:de}} {{word:ren2}}",
    "{{word:jin4}}-{{word:dao4}} X-{{word:li3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["在X里的人", "进到X里的人"],
  literal: "a person who is in X; a person who went into X",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["social-role"],
  proposed: true,
});
