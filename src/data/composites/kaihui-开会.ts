import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 394,
  phase: 1,
  zh: "开会",
  py: "kāihuì",
  en: "have a meeting",
  ru: "проводить собрание",
  pos: "verb",
  hsd: [
    "{{word:kai1}}-{{word:hui4}}",
    "{{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}} {{word:hua4}}",
  ],
  tts: ["开会", "很多的人一起说话"],
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["office"],
  isA: ["social-action"],
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
