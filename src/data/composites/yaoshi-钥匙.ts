import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 905,
  phase: 2,
  zh: "钥匙",
  py: "yàoshi",
  en: "key",
  ru: "ключ",
  pos: "noun",
  hsd: [
    "{{word:rang4}}-{{word:ren2}}-{{word:kai1}}-{{word:men2}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}",
  ],
  tts: ["让人开门的小的工具"],
  literal: "a small tool that lets a person open the door",
  fit: "plain",
  topics: ["house-and-doors"],
  isA: ["tool"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}} {{word:rang4}}-{{word:ren2}}-{{word:kai1}}-{{word:men2}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我找让人开门的小的工具。",
      en: "I'm looking for my key.",
      ru: "Я ищу ключ.",
    },
    {
      pinyin: "{{Word:rang4}}-{{word:ren2}}-{{word:kai1}}-{{word:men2}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "让人开门的小的工具在家。",
      en: "The key is at home.",
      ru: "Ключ дома.",
    },
  ],
});
