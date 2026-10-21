import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7024,
  phase: 4,
  zh: "斜",
  py: "xié",
  en: "slanted; to tilt",
  ru: "косой, наклонный; наклонять",
  pos: "adjective",
  hsd: [
    "{{word:yi1}}-{{word:bian1}} {{word:hen3}} {{word:gao1}}, {{word:yi1}}-{{word:bian1}} {{word:bu4}} {{word:gao1}}",
    "{{word:rang4}} X {{word:yi1}}-{{word:bian1}} {{word:hen3}} {{word:gao1}}, {{word:yi1}}-{{word:bian1}} {{word:bu4}} {{word:gao1}}",
  ],
  tts: ["一边很高，一边不高", "让X一边很高，一边不高"],
  literal: "one side is very high, one side is not high / make X high on one side and not on the other",
  fit: "plain",
  topics: ["shapes"],
  isA: ["shape-quality"],
  proposed: true,
});
