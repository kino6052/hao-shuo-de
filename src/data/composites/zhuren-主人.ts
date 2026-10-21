import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1233,
  phase: 3,
  zh: "主人",
  py: "zhǔrén",
  en: "owner, host",
  ru: "хозяин",
  pos: "noun",
  hsd: ["{{word:you3}} X-{{word:de}} {{word:ren2}}"],
  tts: ["有X的人"],
  literal: "the person who has X",
  fit: "plain",
  topics: ["parties-and-gifts"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:you3}} {{word:zhe4}}-{{light:ge4}} {{word:jia1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我是有这个家的人。",
      en: "I am the owner of this home.",
      ru: "Я хозяин этого дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:you3}} {{word:na4}}-{{light:ge4}} {{word:che1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是有那个车的人。",
      en: "He is the owner of that car.",
      ru: "Он владелец той машины.",
    },
  ],
});
