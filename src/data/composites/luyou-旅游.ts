import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 853,
  phase: 2,
  zh: "旅游",
  py: "lǚyóu",
  en: "travel",
  ru: "путешествовать",
  pos: "verb",
  hsd: [
    "{{word:qu4}} {{word:hen3}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:wan2r}}",
  ],
  tts: ["去很远的地方玩儿"],
  literal: "go far away to play",
  fit: "natural",
  topics: ["a-trip"],
  isA: ["activity-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:hen3}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:wan2r}}.",
      hanzi: "我去很远的地方玩儿。",
      en: "I'm going travelling.",
      ru: "Я еду путешествовать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:qu4}} {{word:hen3}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:wan2r}}.",
      hanzi: "他去很远的地方玩儿。",
      en: "He is going travelling.",
      ru: "Он едет путешествовать.",
    },
  ],
});
