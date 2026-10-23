// To name something there's no word for, describe it, then add -de and the
// noun. Pattern: description-de + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "name",
  scene: "Acts out 'zài-shuǐ-lǐ-de dòng-wù': a duck-like animal swims in a pond while the student points at it and rolls a hand to describe 'the one that lives in water'; the bird mixes it up in a second bubble. Green: the pond.",
  words: [
    {
      word: "fa3",
      en: "way, method; {{word:fang1}}-{{word:fa3}}: method",
      ru: "способ; {{word:fang1}}-{{word:fa3}} — способ",
    },
    {
      word: "ji1",
      en: "machine",
      ru: "машина, механизм",
    },
    {
      word: "guo3",
      en: "fruit; {{word:shui3}}-{{word:guo3}}: fruit to eat",
      ru: "плод; {{word:shui3}}-{{word:guo3}} — фрукты",
    },
    {
      word: "jie2",
      sense: "result",
      en: "result: {{word:jie2}}-{{word:guo3}}",
      ru: "результат: {{word:jie2}}-{{word:guo3}}",
    },
  ],
  prose: {
    en: [
      "**To name something there's no word for**, describe it, then add -{{word:de}} and the noun.",
      "",
      "**description-{{word:de}} + noun**",
      "",
      "You already know this -{{word:de}}: {{word:hao3}}-{{word:de}} {{word:ren2}} (Lesson {{lesson:modifying-nouns}}), {{word:wo3}}-{{word:de}} {{word:zhi2wu4}} (Lesson {{lesson:pointing}}). The description can be as long as you need.",
      "Everyday things are named this way too. {{word:sheng1}} means give birth: {{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} (what a flying animal gives birth to) is an egg. Some names are just two words: {{word:shou3}}-{{word:ji1}} (hand machine) is a phone, {{word:fei1}}-{{word:ji1}} (flying machine) is a plane, and {{word:shui3}}-{{word:guo3}} (water fruit) is fruit. {{word:jie2}} is tie, and {{word:jie2}}-{{word:guo3}} (tie fruit) is the result: where a thing ends up.",
    ],
    ru: [
      "**Чтобы назвать то, для чего нет слова**, опишите это, а потом добавьте -{{word:de}} и существительное.",
      "",
      "**описание-{{word:de}} + существительное**",
      "",
      "Это -{{word:de}} вы уже знаете: {{word:hao3}}-{{word:de}} {{word:ren2}} (урок {{lesson:modifying-nouns}}), {{word:wo3}}-{{word:de}} {{word:zhi2wu4}} (урок {{lesson:pointing}}). Описание может быть сколь угодно длинным.",
      "Так называют и обычные вещи. {{word:sheng1}} значит «рожать»: {{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} (то, что рождает летающее животное) — яйцо. Некоторые названия — просто два слова: {{word:shou3}}-{{word:ji1}} («ручная машина») — телефон, {{word:fei1}}-{{word:ji1}} («летающая машина») — самолёт, а {{word:shui3}}-{{word:guo3}} («водяной плод») — фрукты. {{word:jie2}} — «завязать», а {{word:jie2}}-{{word:guo3}} («завязанный плод») — результат: то, чем всё кончилось.",
    ],
    tldr: {
      en: "description-{{word:de}} + noun: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}}, an animal in the water.",
      ru: "описание-{{word:de}} + существительное: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}} — животное в воде.",
    },
    necessity: {
      en: "When there's no word for something, you can still name it.",
      ru: "Даже если для чего-то нет слова, вы всё равно можете это назвать.",
    },
  },
  info: {
    pattern: "de-modifier",
    en: "a longer description-{{word:de}} + noun: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}} (an animal in the water), {{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} (an egg)",
    ru: "более длинное описание-{{word:de}} + существительное: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}} (животное в воде), {{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} (яйцо)",
  },
  examples: [
    {
      pinyin: "{{Word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "在水里的动物。",
      en: "An animal that lives in the water.",
      ru: "Животное, которое живёт в воде.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:li4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "有力的人。",
      en: "A strong person.",
      ru: "Сильный человек.",
    },
    {
      pinyin: "{{Word:xie3}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "写的方法。",
      en: "The way of writing.",
      ru: "Способ писать.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:ji1}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "我的手机在家里。",
      en: "My phone is at home.",
      ru: "Мой телефон дома.",
    },
    {
      pinyin: "{{Word:shui3}}-{{word:guo3}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "水果很甜。",
      en: "Fruit is sweet.",
      ru: "Фрукты сладкие.",
    },
    {
      pinyin: "{{Word:jie2}}-{{word:guo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "结果很好。",
      en: "The result is good.",
      ru: "Результат хороший.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是飞的动物生的东西。",
      en: "This is an egg.",
      ru: "Это яйцо.",
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
      answer: "{{Word:wo3}} {{word:you3}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我有方法。",
    },
    {
      en: "Where is your phone?",
      ru: "Где твой телефон?",
      answer: "{{Word:ni3}}-{{word:de}} {{word:shou3}}-{{word:ji1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你的手机在哪里？",
    },
    {
      en: "I want fruit.",
      ru: "Я хочу фруктов.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "我要水果。",
    },
    {
      en: "This is a valuable thing.",
      ru: "Это ценная вещь.",
      answer: "{{Word:zhe4}} {{word:shi4}} {{word:you3}}-{{word:jia4zhi2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是有价值的东西。",
    },
    {
      en: "Do you have a good way?",
      ru: "У тебя есть хороший способ?",
      answer: "{{Word:ni3}} {{word:you3}} {{word:hao3}}-{{word:de}} {{word:fang1}}-{{word:fa3}} {{word:ma}}?",
      hanzi: "你有好的方法吗？",
    },
    {
      en: "The plane is in the sky.",
      ru: "Самолёт в небе.",
      answer: "{{Word:fei1}}-{{word:ji1}} {{word:zai4}} {{word:tian1}}-{{word:shang4}}.",
      hanzi: "飞机在天上。",
    },
    {
      en: "What is the result?",
      ru: "Каков результат?",
      answer: "{{Word:jie2}}-{{word:guo3}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "结果是什么？",
    },
  ],
});
