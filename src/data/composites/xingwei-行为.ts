import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1188,
  phase: 3,
  zh: "行为",
  py: "xíngwéi",
  en: "behavior",
  ru: "поведение",
  pos: "noun",
  hsd: [
    "{{word:zuo4}}-{{word:fa3}}",
    "{{word:sheng1}}-{{word:huo2}} {{word:fang1}}-{{word:fa3}}",
    "{{word:fang1}}-{{word:fa3}}",
  ],
  tts: ["做法", "生活方法", "方法"],
  literal: "the way of doing / the way of living / the way",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}}-{{word:de}} {{word:zuo4}}-{{word:fa3}}.",
      hanzi: "我看他的做法。",
      en: "I watch his behavior.",
      ru: "Я смотрю на его поведение.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:ai4}} {{word:ta1}}-{{word:de}} {{word:sheng1}}-{{word:huo2}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我不爱他的生活方法。",
      en: "I don't like his way of behaving.",
      ru: "Мне не нравится, как он себя ведёт.",
    },
  ],
});
