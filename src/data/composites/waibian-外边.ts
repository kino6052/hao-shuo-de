import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 828,
  phase: 2,
  zh: "外边",
  py: "wàibian",
  en: "outside",
  ru: "снаружи",
  pos: "noun",
  hsd: ["{{word:wai4}}-{{word:bian1}}", "{{word:wai4}}-{{word:mian4}}"],
  tts: ["外边", "外面"],
  literal: "the outside",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["near-and-far"],
  isA: ["place-word"],
  note: "Lesson {{lesson:moving}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wai4}}-{{word:bian1}}.",
      hanzi: "他在外边。",
      en: "He is outside.",
      ru: "Он снаружи.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "水在外面。",
      en: "The water is outside.",
      ru: "Вода снаружи.",
    },
  ],
});
