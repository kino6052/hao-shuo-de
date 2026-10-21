import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1344,
  phase: 3,
  zh: "播放",
  py: "bōfàng",
  en: "play (a video or song)",
  ru: "воспроизводить",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:ren2}} {{word:kan4}}"],
  tts: ["给人看"],
  literal: "let people watch",
  fit: "plain",
  topics: ["television-radio-and-media"],
  isA: ["playing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ren2}} {{word:kan4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我给人看这个。",
      en: "I play this for people.",
      ru: "Я показываю это людям.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:ren2}} {{word:kan4}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "他给人看那个。",
      en: "He plays that for people.",
      ru: "Он показывает людям то.",
    },
  ],
});
