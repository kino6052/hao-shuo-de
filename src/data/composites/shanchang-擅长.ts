import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6482,
  phase: 4,
  zh: "擅长",
  py: "shàncháng",
  en: "be good at",
  ru: "хорошо уметь, быть мастером в",
  pos: "verb",
  hsd: [
    "{{word:zuo4}} X {{word:zuo4}}-{{word:de}} {{word:hen3}} {{word:hao3}}",
    "{{word:zuo4}} X, {{word:bi3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:hao3}}",
  ],
  tts: ["做X做得很好", "做X，比别的人好"],
  literal: "do X, do it very well / do X, better than other people",
  fit: "plain",
  topics: ["describing-people"],
  isA: ["character-quality"],
  proposed: true,
});
