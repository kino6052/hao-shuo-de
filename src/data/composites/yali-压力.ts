import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1051,
  phase: 3,
  zh: "压力",
  py: "yālì",
  en: "pressure, stress",
  ru: "давление, стресс",
  pos: "noun",
  hsd: ["{{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:zhong4}}"],
  tts: ["觉得很重"],
  literal: "feel that it is heavy",
  fit: "plain",
  topics: ["worry-and-fear"],
  isA: ["feeling-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:hen3}} {{word:zhong4}}.",
      hanzi: "我觉得很重。",
      en: "I feel under pressure.",
      ru: "Я чувствую давление.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jue2}}-{{word:de2}} {{word:hen3}} {{word:zhong4}}.",
      hanzi: "他觉得很重。",
      en: "He feels under pressure.",
      ru: "Он чувствует давление.",
    },
  ],
});
