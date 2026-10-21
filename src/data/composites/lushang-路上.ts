import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 896,
  phase: 2,
  zh: "路上",
  py: "lùshang",
  en: "on the road",
  ru: "в пути",
  pos: "noun",
  hsd: ["{{word:lu4}}-{{word:shang4}}"],
  tts: ["路上"],
  fit: "natural",
  kinds: ["built"],
  topics: ["the-road"],
  isA: ["place-word"],
  note: "Lesson {{lesson:moving}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:lu4}}-{{word:shang4}}.",
      hanzi: "他在路上。",
      en: "He is on the road.",
      ru: "Он в пути.",
    },
    {
      pinyin: "{{Word:lu4}}-{{word:shang4}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:ren2}}.",
      hanzi: "路上有很多人。",
      en: "There are many people on the road.",
      ru: "На дороге много людей.",
    },
  ],
});
