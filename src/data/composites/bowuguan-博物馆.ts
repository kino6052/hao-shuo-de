import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1049,
  phase: 3,
  zh: "博物馆",
  py: "bówùguǎn",
  en: "museum",
  ru: "музей",
  pos: "noun",
  hsd: [
    "{{word:gei3}}-{{word:ren2}}-{{word:kan4}}-{{word:lao3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["给人看老东西的地方"],
  literal: "the place that shows people old things",
  fit: "plain",
  topics: ["history-and-culture"],
  isA: ["building"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:gei3}}-{{word:ren2}}-{{word:kan4}}-{{word:lao3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我们去给人看老东西的地方。",
      en: "We're going to the museum.",
      ru: "Мы идём в музей.",
    },
    {
      pinyin: "{{Word:gei3}}-{{word:ren2}}-{{word:kan4}}-{{word:lao3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "给人看老东西的地方在那里。",
      en: "The museum is over there.",
      ru: "Музей вон там.",
    },
  ],
});
