import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1373,
  phase: 3,
  zh: "演员",
  py: "yǎnyuán",
  en: "actor",
  ru: "актёр",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:gei3}}-{{word:ren2}}-{{word:kan4}}-{{word:de}} {{word:ren2}}"],
  tts: ["做给人看的人"],
  literal: "someone who acts for others to watch",
  fit: "plain",
  topics: ["films-and-media"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zuo4}}-{{word:gei3}}-{{word:ren2}}-{{word:kan4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是做给人看的人。",
      en: "He is an actor.",
      ru: "Он актёр.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shi4}} {{word:zuo4}}-{{word:gei3}}-{{word:ren2}}-{{word:kan4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爸爸是做给人看的人。",
      en: "My father is an actor.",
      ru: "Мой папа актёр.",
    },
  ],
});
