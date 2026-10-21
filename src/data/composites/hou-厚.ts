import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7093,
  phase: 4,
  zh: "厚",
  py: "hòu",
  en: "thick (flat things)",
  ru: "толстый (о плоском)",
  pos: "adjective",
  hsd: [
    "{{word:liang3}}-{{light:ge4}} {{word:mian4}} {{word:zhong1}}-{{word:jian1}} {{word:hen3}} {{word:yuan3}}",
    "{{word:shang4}}-{{word:mian4}} {{word:he2}} {{word:xia4}}-{{word:mian4}} {{word:zhong1}}-{{word:jian1}} {{word:hen3}} {{word:yuan3}}",
  ],
  tts: ["两个面中间很远", "上面和下面中间很远"],
  literal: "the two sides are very far apart / the top and the bottom are very far apart",
  fit: "plain",
  topics: ["size"],
  isA: ["size-quality"],
  proposed: true,
});
