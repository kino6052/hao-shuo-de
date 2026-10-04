// To name something there's no word for, describe it, then add -de and the
// noun. Pattern: description-de + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "name",
  words: [
    {
      term: "{{word:fang1fa3}}",
      hanzi: "方法",
      en: "way, method",
      ru: "способ, метод",
    },
  ],
  prose: {
    en: [
      "**To name something there's no word for**, describe it, then add -{{word:de}} and the noun.",
      "",
      "**description-{{word:de}} + noun**",
      "",
      "You already know this -{{word:de}}: {{word:hao3}}-{{word:de}} {{word:ren2}} (Lesson {{lesson:modifying-nouns}}), {{word:wo3}}-{{word:de}} {{word:bi2zi}} (Lesson {{lesson:pointing}}). The description can be as long as you need.",
    ],
    ru: [
      "**Чтобы назвать то, для чего нет слова**, опишите это, а потом добавьте -{{word:de}} и существительное.",
      "",
      "**описание-{{word:de}} + существительное**",
      "",
      "Это -{{word:de}} вы уже знаете: {{word:hao3}}-{{word:de}} {{word:ren2}} (урок {{lesson:modifying-nouns}}), {{word:wo3}}-{{word:de}} {{word:bi2zi}} (урок {{lesson:pointing}}). Описание может быть сколь угодно длинным.",
    ],
    tldr: {
      en: "description-{{word:de}} + noun: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}}, an animal in the water.",
      ru: "описание-{{word:de}} + существительное: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}} — животное в воде.",
    },
    necessity: {
      en: "When there's no word for something, you can still name it.",
      ru: "Даже если для чего-то нет слова, вы всё равно можете это назвать.",
    },
  },
  info: {
    en: "a longer description-{{word:de}} + noun: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}} (an animal in the water)",
    ru: "более длинное описание-{{word:de}} + существительное: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}} (животное в воде)",
  },
  examples: [
    {
      pinyin: "{{Word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}}.",
      hanzi: "在水里的动物。",
      en: "An animal that lives in the water.",
      ru: "Животное, которое живёт в воде.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "有力量的人。",
      en: "A strong person.",
      ru: "Сильный человек.",
    },
    {
      pinyin: "{{Word:xie3}}-{{word:de}} {{word:fang1fa3}}.",
      hanzi: "写的方法。",
      en: "The way of writing.",
      ru: "Способ писать.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:hao3}}-{{word:de}} {{word:fang1fa3}} {{word:ma}}?",
      hanzi: "你有好的方法吗？",
      en: "Do you have a good way?",
      ru: "У тебя есть хороший способ?",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:fang1fa3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个方法很好。",
      en: "This way is good.",
      ru: "Этот способ хороший.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}}-{{word:de}} {{word:yan2se4}} {{word:shi4}} {{word:lan2se4}}.",
      hanzi: "我爱的颜色是蓝色。",
      en: "The color I love is blue.",
      ru: "Цвет, который я люблю, — синий.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:you3}} {{word:jia4zhi2}}-{{word:de}} {{word:dong1xi}}.",
      hanzi: "这是有价值的东西。",
      en: "This is a valuable thing.",
      ru: "Это ценная вещь.",
    },
    {
      pinyin: "{{Word:tong1}}-{{word:dao4}}-{{word:jia1}}-{{word:de}} {{word:lu4}}.",
      hanzi: "通到家的路。",
      en: "The road that leads home.",
      ru: "Дорога, которая ведёт домой.",
    },
  ],
  exercises: [
    {
      en: "I have a way.",
      ru: "У меня есть способ.",
      answer: "{{Word:wo3}} {{word:you3}} {{word:fang1fa3}}.",
      hanzi: "我有方法。",
    },
  ],
});
