import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9105,
  phase: 4,
  zh: "捐赠",
  py: "juānzèng",
  en: "donate; contribute",
  ru: "жертвовать; дарить на благотворительность",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:gei3}} {{word:bie2}}-{{word:ren2}}, {{word:bu4}} {{word:yao4}} {{word:jin1}}",
    "{{word:ba3}} X {{word:gei3}} Y, {{word:bang1}} Y",
  ],
  tts: ["把X给别人，不要金", "把X给Y，帮Y"],
  literal: "give X to others, want no money / give X to Y, help Y",
  fit: "plain",
  topics: ["giving-and-getting"],
  isA: ["handling-action"],
  proposed: true,
});
