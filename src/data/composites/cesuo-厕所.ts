import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 506,
  phase: 2,
  zh: "厕所",
  py: "cèsuǒ",
  en: "toilet",
  ru: "туалет",
  pos: "noun",
  hsd: ["{{word:wei4}}-{{word:sheng1}}-{{word:jian1}}"],
  tts: ["卫生间"],
  fit: "natural",
  transparent: true,
  note: "People say it politely in Mandarin too.",
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:wei4}}-{{word:sheng1}}-{{word:jian1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你的卫生间在哪里？",
      en: "Where is your toilet?",
      ru: "Где у тебя туалет?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qu4}} {{word:wei4}}-{{word:sheng1}}-{{word:jian1}}.",
      hanzi: "我要去卫生间。",
      en: "I need to go to the toilet.",
      ru: "Мне нужно в туалет.",
    },
  ],
});
