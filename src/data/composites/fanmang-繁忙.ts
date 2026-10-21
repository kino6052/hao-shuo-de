import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8690,
  phase: 4,
  zh: "繁忙",
  py: "fánmáng",
  en: "busy; hectic",
  ru: "загруженный; напряжённый (о работе)",
  pos: "adjective",
  hsd: [
    "{{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}",
    "{{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}} {{word:dou1}} {{word:yao4}} {{word:zuo4}}",
  ],
  tts: ["有很多东西要做", "很多东西都要做"],
  literal: "have many things to do / many things all need doing",
  fit: "plain",
  topics: ["work-days-and-busy"],
  isA: ["condition-quality"],
  proposed: true,
});
