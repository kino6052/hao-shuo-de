import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7152,
  phase: 4,
  zh: "顺便",
  py: "shùnbiàn",
  en: "while at it; in passing",
  ru: "заодно, попутно",
  pos: "adverb",
  hsd: [
    "{{word:zai4}} {{word:zuo4}} X-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:ye3}} {{word:zuo4}} Y",
    "{{word:yi1}}-{{word:bian1}} {{word:zuo4}} X, {{word:yi1}}-{{word:bian1}} {{word:zuo4}} Y",
  ],
  tts: ["在做X的时候也做Y", "一边做X，一边做Y"],
  literal: "when doing X, also do Y / one side do X, one side do Y",
  fit: "plain",
  topics: ["quietly-together-step-by-step"],
  isA: ["adverb-word"],
  proposed: true,
});
