import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 596,
  phase: 2,
  zh: "下载",
  py: "xiàzài",
  en: "download",
  ru: "скачать",
  pos: "verb",
  hsd: ["{{word:cong2}} {{word:wang3}}-{{word:shang4}} {{word:na2}}-{{word:xia4}}-{{word:lai2}}"],
  tts: ["从网上拿下来"],
  literal: "take it down from the net",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:cong2}} {{word:wang3}}-{{word:shang4}} {{word:na2}}-{{word:xia4}}-{{word:lai2}} {{word:shu1}}.",
      hanzi: "我从网上拿下来书。",
      en: "I download a book from the internet.",
      ru: "Я скачиваю книгу из интернета.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:cong2}} {{word:wang3}}-{{word:shang4}} {{word:na2}}-{{word:xia4}}-{{word:lai2}} {{word:ma}}?",
      hanzi: "你能从网上拿下来吗？",
      en: "Can you download it from the internet?",
      ru: "Ты можешь скачать это из интернета?",
    },
  ],
});
