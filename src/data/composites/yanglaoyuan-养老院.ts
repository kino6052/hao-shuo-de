import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8566,
  phase: 4,
  zh: "养老院",
  py: "yǎnglǎoyuàn",
  en: "nursing home; old people's home",
  ru: "дом престарелых",
  pos: "noun",
  hsd: [
    "{{word:hen3}} {{word:duo1}} {{word:lao3}}-{{word:ren2}} {{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:jia1}}",
    "{{word:you3}} {{word:ren2}} {{word:bang1}} {{word:lao3}}-{{word:ren2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["很多老人一起的家", "有人帮老人的地方"],
  literal: "the home of many old people together / a place where people help old people",
  fit: "plain",
  topics: ["young-and-old"],
  isA: ["building"],
  proposed: true,
});
