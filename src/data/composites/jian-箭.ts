import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9216,
  phase: 4,
  zh: "箭",
  py: "jiàn",
  en: "arrow",
  ru: "стрела",
  pos: "noun",
  hsd: [
    "{{word:fei1}}-{{word:qu4}} {{word:da3}}-{{word:ren2}}-{{word:de}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:hen3}} {{word:kuai4}} {{word:fei1}}-{{word:qu4}} {{word:da3}} X-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["飞去打人的长的东西", "很快飞去打X的东西"],
  literal: "a long thing that flies off to hit people / a thing that flies fast to hit X",
  fit: "plain",
  topics: ["war-and-peace"],
  isA: ["made-thing"],
  proposed: true,
});
