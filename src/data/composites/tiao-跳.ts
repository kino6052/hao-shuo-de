import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 572,
  phase: 2,
  zh: "跳",
  py: "tiào",
  en: "jump",
  ru: "прыгать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:jiao3}} {{word:cong2}} {{word:di4}}-{{word:shang4}} {{word:qi3}}-{{word:lai2}}",
  ],
  tts: ["用脚从地上起来"],
  literal: "rise off the ground with your feet",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:jiao3}} {{word:cong2}} {{word:di4}}-{{word:shang4}} {{word:qi3}}-{{word:lai2}}.",
      hanzi: "他用脚从地上起来。",
      en: "He jumps up from the ground.",
      ru: "Он подпрыгивает с земли.",
    },
    {
      pinyin: "{{Word:xiao3}}-{{word:hai2}}-{{word:zi}} {{word:yong4}} {{word:jiao3}} {{word:cong2}} {{word:di4}}-{{word:shang4}} {{word:qi3}}-{{word:lai2}}.",
      hanzi: "小孩子用脚从地上起来。",
      en: "The child jumps up.",
      ru: "Ребёнок подпрыгивает.",
    },
  ],
});
