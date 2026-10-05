import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 143,
  phase: 1,
  zh: "先",
  py: "xiān",
  en: "first",
  ru: "сначала",
  hsd: ["X-{{word:wan2}} {{word:hou4}}, Y", "Y {{word:qian2}}, X"],
  tts: ["X完后，Y", "Y前，X"],
  literal: "after finishing X, Y / before Y, X",
  fit: "skip",
  note: "Say the first action first.",
});
