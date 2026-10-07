import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 394,
  phase: 1,
  zh: "开会",
  py: "kāihuì",
  en: "have a meeting",
  ru: "проводить собрание",
  pos: "verb",
  hsd: ["{{word:kai1}}-{{word:hui4}}"],
  tts: ["开会"],
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
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:kai1}}-{{word:hui4}}.",
      hanzi: "他在开会。",
      en: "He's in a meeting.",
      ru: "Он на собрании.",
    },
  ],
});
