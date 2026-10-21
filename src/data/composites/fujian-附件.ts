import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9080,
  phase: 4,
  zh: "附件",
  py: "fùjiàn",
  en: "attachment; accessory; enclosure",
  ru: "приложение; вложение; принадлежность",
  pos: "noun",
  hsd: [
    "{{word:he2}} X {{word:yi1}}-{{word:qi3}} {{word:gei3}}-{{word:de}} {{word:bie2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:he2}} X {{word:yi1}}-{{word:qi3}} {{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["和X一起给的别的东西", "和X一起来的东西"],
  literal: "another thing given together with X / a thing that comes together with X",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["made-thing"],
  proposed: true,
});
