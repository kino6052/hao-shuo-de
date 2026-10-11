import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 456,
  phase: 1,
  zh: "网上",
  py: "wǎngshang",
  en: "online",
  ru: "в интернете",
  pos: "noun",
  hsd: ["{{word:wang3}}-{{word:shang4}}", "{{word:zai4}} {{word:wang3}}-{{word:shang4}}"],
  tts: ["网上", "在网上"],
  literal: "on the net",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:mai3}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我在网上买东西。",
      en: "I shop online.",
      ru: "Я покупаю вещи в интернете.",
    },
    {
      pinyin: "{{Word:wang3}}-{{word:shang4}} {{word:shuo1}} {{word:ta1}} {{word:lai2}} {{word:le}}.",
      hanzi: "网上说他来了。",
      en: "Online they say he's come.",
      ru: "В интернете пишут, что он приехал.",
    },
  ],
});
