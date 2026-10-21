import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1415,
  phase: 3,
  zh: "谈",
  py: "tán",
  en: "talk",
  ru: "разговаривать",
  pos: "verb",
  hsd: ["{{word:shuo1}}"],
  tts: ["说"],
  fit: "word",
  topics: ["chatting"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shuo1}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我们说一下。",
      en: "Let's talk for a moment.",
      ru: "Давай немного поговорим.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:he2}} {{word:wo3}} {{word:shuo1}} {{word:ma}}?",
      hanzi: "你要和我说吗？",
      en: "Do you want to talk with me?",
      ru: "Ты хочешь поговорить со мной?",
    },
  ],
});
