import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1026,
  phase: 3,
  zh: "会议",
  py: "huìyì",
  en: "meeting",
  ru: "собрание, совещание",
  pos: "noun",
  hsd: ["{{word:kai1}}-{{word:hui4}}"],
  tts: ["开会"],
  literal: "hold a meeting",
  fit: "natural",
  note: "Real Mandarin: 开会.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:ming2}}-{{word:tian1}} {{word:kai1}}-{{word:hui4}}.",
      hanzi: "我们明天开会。",
      en: "We have a meeting tomorrow.",
      ru: "Завтра у нас собрание.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kai1}}-{{word:hui4}} {{word:ma}}?",
      hanzi: "你开会吗？",
      en: "Are you in the meeting?",
      ru: "Ты на собрании?",
    },
  ],
});
