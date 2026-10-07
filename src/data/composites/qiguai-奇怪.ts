import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 380,
  phase: 1,
  zh: "奇怪",
  py: "qíguài",
  en: "strange",
  ru: "странный",
  pos: "adjective",
  hsd: [
    "{{word:yi3}}-{{word:qian2}}-{{word:mei2}}-{{word:kan4}}-{{word:guo4}}-{{word:de}}",
    "{{word:nan2}}-{{word:ming2}}-{{word:bai2}}-{{word:de}}",
    "{{word:nan2}}-{{word:kan4}}-{{word:de}}",
    "{{word:nan2}}-{{word:ting1}}-{{word:de}}",
  ],
  tts: ["以前没看过的", "难明白的", "难看的", "难听的"],
  literal: "never seen before / hard to understand / ugly / unpleasant to hear",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:yi3}}-{{word:qian2}}-{{word:mei2}}-{{word:kan4}}-{{word:guo4}}-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这是以前没看过的动物。",
      en: "This is a strange animal.",
      ru: "Это странное животное.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:hua4}} {{word:shi4}} {{word:nan2}}-{{word:ming2}}-{{word:bai2}}-{{word:de}}.",
      hanzi: "他的话是难明白的。",
      en: "What he says is strange.",
      ru: "Его слова странные.",
    },
  ],
});
