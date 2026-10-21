import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6531,
  phase: 4,
  zh: "先后",
  py: "xiānhòu",
  en: "one after another; order",
  ru: "один за другим; очерёдность",
  pos: "adverb",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:zai4}} {{word:qian2}}, {{word:yi1}}-{{light:ge4}} {{word:zai4}} {{word:hou4}}",
    "{{word:yi1}}-{{light:ge4}} {{word:yi1}}-{{light:ge4}}-{{word:de}}",
  ],
  tts: ["一个在前，一个在后", "一个一个的"],
  literal: "one in front, one behind",
  fit: "plain",
  topics: ["before-and-after"],
  isA: ["time-order"],
  proposed: true,
});
