import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1360,
  phase: 3,
  zh: "校园",
  py: "xiàoyuán",
  en: "campus",
  ru: "кампус",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["学的地方"],
  literal: "the place for learning",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我在学的地方。",
      en: "I am on campus.",
      ru: "Я на территории школы.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "学的地方很大。",
      en: "The campus is big.",
      ru: "Территория школы большая.",
    },
  ],
});
