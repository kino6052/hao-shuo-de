import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8130,
  phase: 4,
  zh: "场景",
  py: "chǎngjǐng",
  en: "scene (in a film or in life)",
  ru: "сцена; эпизод",
  pos: "noun",
  hsd: [
    "{{word:zai4}} {{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:kan4}}-{{word:dao4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:he2}} {{word:zai4}} {{word:na4}}-{{word:li3}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["在一个地方发生的东西", "看到的地方和在那里发生的东西"],
  literal: "what happens in one place / the place you see and what happens there",
  fit: "plain",
  topics: ["films-and-media"],
  isA: ["event"],
  proposed: true,
});
