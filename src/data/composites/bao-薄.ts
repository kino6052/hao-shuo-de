import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7045,
  phase: 4,
  zh: "薄",
  py: "báo",
  en: "thin (flat things)",
  ru: "тонкий (о плоском)",
  pos: "adjective",
  hsd: [
    "{{word:liang3}}-{{light:ge4}} {{word:mian4}} {{word:zhong1}}-{{word:jian1}} {{word:bu4}} {{word:yuan3}}",
    "{{word:shang4}}-{{word:mian4}} {{word:he2}} {{word:xia4}}-{{word:mian4}} {{word:zhong1}}-{{word:jian1}} {{word:bu4}} {{word:yuan3}}",
  ],
  tts: ["两个面中间不远", "上面和下面中间不远"],
  literal: "the two sides are not far apart / the top and the bottom are not far apart",
  fit: "plain",
  topics: ["size"],
  isA: ["size-quality"],
  proposed: true,
});
