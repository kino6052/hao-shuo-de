import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 623,
  phase: 2,
  zh: "句子",
  py: "jùzi",
  en: "sentence",
  ru: "предложение",
  pos: "noun",
  hsd: ["{{word:fang4}}-{{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ci2}}"],
  tts: ["放在一起的词"],
  literal: "words put together",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xie3}} {{word:le}} {{word:hen3}}-{{word:duo1}} {{word:fang4}}-{{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ci2}}.",
      hanzi: "我写了很多放在一起的词。",
      en: "I wrote many sentences.",
      ru: "Я написал много предложений.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:xie3}} {{word:fang4}}-{{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ci2}} {{word:ma}}?",
      hanzi: "你能写放在一起的词吗？",
      en: "Can you write a sentence?",
      ru: "Ты можешь написать предложение?",
    },
  ],
});
