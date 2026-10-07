import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 78,
  phase: 1,
  zh: "今天",
  py: "jīntiān",
  en: "today",
  ru: "сегодня",
  pos: "noun",
  hsd: ["{{word:jin1}}-{{word:tian1}}", "{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:ri4}}"],
  tts: ["今天", "现在的日"],
  literal: "the day of now",
  fit: "natural",
  note: "Understood, but not how people say it.",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
      hanzi: "今天我不去。",
      en: "I'm not going today.",
      ru: "Сегодня я не пойду.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:tian1}}-{{word:qi4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "今天天气很好。",
      en: "The weather is nice today.",
      ru: "Сегодня хорошая погода.",
    },
  ],
});
