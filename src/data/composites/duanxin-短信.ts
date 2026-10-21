import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 877,
  phase: 2,
  zh: "短信",
  py: "duǎnxìn",
  en: "text message",
  ru: "SMS",
  pos: "noun",
  hsd: ["{{word:xiao3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["小的写的东西"],
  literal: "a small written thing",
  fit: "plain",
  topics: ["phone-calls-and-messages"],
  isA: ["paper-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:xiao3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有小的写的东西。",
      en: "I have a text message.",
      ru: "У меня есть сообщение.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:wo3}} {{word:xiao3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他给我小的写的东西。",
      en: "He sends me a text message.",
      ru: "Он присылает мне сообщение.",
    },
  ],
});
