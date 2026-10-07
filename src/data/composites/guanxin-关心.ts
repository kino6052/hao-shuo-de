import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 359,
  phase: 1,
  zh: "关心",
  py: "guānxīn",
  en: "care about",
  ru: "заботиться",
  pos: "verb",
  hsd: [
    "{{word:guan1}}-{{word:xin1}}",
    "{{word:pa4}} X {{word:bu4}} {{word:hao3}}",
    "{{word:dui4}} X {{word:hen3}} {{word:hao3}}",
  ],
  tts: ["关心", "怕X不好", "对X很好"],
  literal: "close-heart / worry X isn't well / be good to X",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ma1ma}} {{word:hen3}} {{word:guan1}}-{{word:xin1}} {{word:wo3}}.",
      hanzi: "妈妈很关心我。",
      en: "Mom really cares about me.",
      ru: "Мама очень заботится обо мне.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:dui4}} {{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他对孩子很好。",
      en: "He's very good to the children.",
      ru: "Он очень добр к детям.",
    },
  ],
});
