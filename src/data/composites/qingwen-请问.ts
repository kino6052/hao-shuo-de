import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 543,
  phase: 2,
  zh: "请问",
  py: "qǐngwèn",
  en: "may I ask",
  ru: "скажите, пожалуйста",
  pos: "verb",
  hsd: ["{{word:wo3}} {{word:neng2}} {{word:wen4}} {{word:ma}}?"],
  tts: ["我能问吗？"],
  literal: "can I ask?",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:wen4}} {{word:ma}}? {{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:wei4}}-{{word:sheng1}}-{{word:jian1}} {{word:ma}}?",
      hanzi: "我能问吗？这里有卫生间吗？",
      en: "May I ask: is there a bathroom here?",
      ru: "Можно спросить: здесь есть ванная?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:wen4}} {{word:ma}}? {{Word:ni3}} {{word:jiao4}} {{word:shen2me}}?",
      hanzi: "我能问吗？你叫什么？",
      en: "May I ask: what's your name?",
      ru: "Можно спросить: как тебя зовут?",
    },
  ],
});
