import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1394,
  phase: 3,
  zh: "组",
  py: "zǔ",
  en: "group",
  ru: "группа",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ren2}}"],
  tts: ["一起的人"],
  literal: "the people together",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shi4}} {{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我们是一起的人。",
      en: "We are a group.",
      ru: "Мы одна группа.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是我们一起的人。",
      en: "He is in our group.",
      ru: "Он в нашей группе.",
    },
  ],
});
