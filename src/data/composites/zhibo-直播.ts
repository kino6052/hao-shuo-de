import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1155,
  phase: 3,
  zh: "直播",
  py: "zhíbō",
  en: "live broadcast",
  ru: "прямая трансляция",
  pos: "verb",
  hsd: [
    "{{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:gei3}} {{word:ren2}} {{word:kan4}}",
  ],
  tts: ["发生的时间给人看"],
  literal: "show it while it happens",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:gei3}} {{word:ren2}} {{word:kan4}}.",
      hanzi: "他在发生的时间给人看。",
      en: "He is live streaming.",
      ru: "Он ведёт прямой эфир.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:gei3}} {{word:ren2}} {{word:kan4}}.",
      hanzi: "我要发生的时间给人看。",
      en: "I want to broadcast live.",
      ru: "Я хочу вести прямой эфир.",
    },
  ],
});
