import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 545,
  phase: 2,
  zh: "足球",
  py: "zúqiú",
  en: "soccer",
  ru: "футбол",
  pos: "noun",
  hsd: ["{{word:yong4}}-{{word:jiao3}}-{{word:wan2r}}-{{word:de}} {{word:qiu2}}"],
  tts: ["用脚玩儿的球"],
  literal: "the ball you play with your feet",
  fit: "plain",
  topics: ["ball-sports"],
  isA: ["toy-or-game"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ai4}} {{word:yong4}}-{{word:jiao3}}-{{word:wan2r}}-{{word:de}} {{word:qiu2}}.",
      hanzi: "他爱用脚玩儿的球。",
      en: "He loves soccer.",
      ru: "Он любит футбол.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yao4}} {{word:kan4}} {{word:yong4}}-{{word:jiao3}}-{{word:wan2r}}-{{word:de}} {{word:qiu2}}.",
      hanzi: "我们要看用脚玩儿的球。",
      en: "We want to watch soccer.",
      ru: "Мы хотим смотреть футбол.",
    },
  ],
});
