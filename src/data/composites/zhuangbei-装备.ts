import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8335,
  phase: 4,
  zh: "装备",
  py: "zhuāngbèi",
  en: "equipment; gear; equip",
  ru: "оборудование; снаряжение; оснащать",
  pos: "noun",
  hsd: [
    "{{word:yao4}} {{word:yong4}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:he2}} {{word:dong1}}-{{light:xi1}}",
    "{{word:gei3}} X {{word:yao4}} {{word:yong4}}-{{word:de}} {{word:gong1}}-{{word:ju4}}",
  ],
  tts: ["要用的工具和东西", "给X要用的工具"],
  literal: "the tools and things one needs / give X the tools it needs",
  fit: "plain",
  topics: ["hobbies-and-outings"],
  isA: ["tool"],
  proposed: true,
});
