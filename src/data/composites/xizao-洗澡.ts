import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 566,
  phase: 2,
  zh: "洗澡",
  py: "xǐzǎo",
  en: "bathe",
  ru: "мыться",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:shui3}} {{word:rang4}} {{word:shen1ti3}} {{word:gan1jing4}}"],
  tts: ["用水让身体干净"],
  literal: "use water to make the body clean",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yong4}} {{word:shui3}} {{word:rang4}} {{word:shen1ti3}} {{word:gan1jing4}}.",
      hanzi: "我要用水让身体干净。",
      en: "I want to take a bath.",
      ru: "Я хочу принять ванну.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:yong4}} {{word:shui3}} {{word:rang4}} {{word:shen1ti3}} {{word:gan1jing4}}.",
      hanzi: "他在用水让身体干净。",
      en: "He's taking a bath.",
      ru: "Он принимает ванну.",
    },
  ],
});
