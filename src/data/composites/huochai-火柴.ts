import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8052,
  phase: 4,
  zh: "火柴",
  py: "huǒchái",
  en: "match",
  ru: "спичка",
  pos: "noun",
  hsd: [
    "{{word:neng2}} {{word:sheng1}} {{word:huo3}}-{{word:de}}, {{word:xiao3}}-{{word:de}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:yong4}}-{{word:lai2}} {{word:sheng1}} {{word:huo3}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["能生火的，小的长的东西", "用来生火的小的东西"],
  literal: "a small long thing that can make fire / a small thing used to make fire",
  fit: "plain",
  topics: ["household-things"],
  isA: ["hand-tool"],
  proposed: true,
});
