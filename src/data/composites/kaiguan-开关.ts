import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7160,
  phase: 4,
  zh: "开关",
  py: "kāiguān",
  en: "switch",
  ru: "выключатель",
  pos: "noun",
  hsd: [
    "{{word:kai1}}-{{word:guan1}}",
    "{{word:kai1}} {{word:deng1}}, {{word:guan1}} {{word:deng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["开关", "开灯，关灯的东西"],
  literal: "open-close / the thing that turns the light on and off",
  fit: "plain",
  topics: ["home-electronics"],
  isA: ["electric-device"],
  proposed: true,
});
