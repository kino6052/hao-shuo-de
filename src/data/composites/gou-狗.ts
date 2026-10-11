import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 529,
  phase: 2,
  zh: "狗",
  py: "gǒu",
  en: "dog",
  ru: "собака",
  pos: "noun",
  hsd: ["{{word:jiao4}} \"wāng-wāng\"-{{word:de}} {{word:dong4}}-{{word:wu4}}"],
  tts: ["叫汪汪的动物"],
  literal: "the animal that says \"wang-wang\"",
  fit: "plain",
  note: "Lesson {{lesson:greetings-and-feelings}}: animals by their sound.",
  examples: [
    {
      pinyin: "{{Word:jiao4}} \"wāng-wāng\"-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "叫“汪汪”的动物在家里。",
      en: "The dog is at home.",
      ru: "Собака дома.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:jiao4}} \"wāng-wāng\"-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "我爱叫“汪汪”的动物。",
      en: "I love dogs.",
      ru: "Я люблю собак.",
    },
  ],
});
