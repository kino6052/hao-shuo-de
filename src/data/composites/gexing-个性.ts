import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6379,
  phase: 4,
  zh: "个性",
  py: "gèxìng",
  en: "personality",
  ru: "характер, индивидуальность",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:he2}} {{word:bie2}}-{{word:ren2}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:yi1}}-{{light:ge4}} {{word:ren2}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
  ],
  tts: ["一个人和别人不一样的地方", "一个人的样子"],
  literal: "the place where one person is not the same as other people",
  fit: "plain",
  topics: ["describing-people"],
  isA: ["idea"],
  proposed: true,
});
