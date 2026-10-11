import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 350,
  phase: 1,
  zh: "休息",
  py: "xiūxi",
  en: "rest",
  ru: "отдыхать",
  pos: "verb",
  hsd: [
    "{{word:shui4jiao4}}",
    "{{word:zuo4}}-{{word:xia4}} {{word:yi1}}-{{word:xia4}}",
    "{{word:tang3}}-{{word:xia4}} {{word:yi1}}-{{word:xia4}}",
    "{{word:bu4}} {{word:dong4}} {{word:yi1}}-{{word:xia4}}",
  ],
  tts: ["睡觉", "坐下一下", "躺下一下", "不动一下"],
  literal: "sleep / sit down a while / lie down a while / not move a while",
  fit: "plain",
  note: "Resting can be sleep, or just sitting, lying down or standing still for a while.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shui4jiao4}}.",
      hanzi: "你要睡觉。",
      en: "You need to rest.",
      ru: "Тебе надо отдохнуть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:xia4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我坐下一下。",
      en: "I'll sit down and rest a bit.",
      ru: "Я немного посижу и отдохну.",
    },
  ],
});
