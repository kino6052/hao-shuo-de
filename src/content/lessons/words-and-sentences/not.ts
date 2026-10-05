// To say something is not something, put bù before shì. Pattern: NOUN + bù
// shì + NOUN
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "not",
  words: [
    {
      word: "bu4",
      en: "not",
      ru: "не",
    },
  ],
  prose: {
    en: [
      "**To say something is not something**, put {{word:bu4}} before {{word:shi4}}.",
      "",
      "**NOUN + {{word:bu4}} {{word:shi4}} + NOUN**",
    ],
    ru: [
      "**Чтобы сказать, что одно не есть другое**, поставьте {{word:bu4}} перед {{word:shi4}}.",
      "",
      "**СУЩЕСТВИТЕЛЬНОЕ + {{word:bu4}} {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ**",
    ],
    tldr: {
      en: "To say it is not, put {{word:bu4}} before {{word:shi4}}.",
      ru: "Чтобы сказать «не является», поставьте {{word:bu4}} перед {{word:shi4}}.",
    },
    necessity: {
      en: "Now you can say what something is not.",
      ru: "Теперь вы можете сказать, чем что-то не является.",
    },
  },
  info: {
    en: "NOUN + {{word:bu4}} {{word:shi4}} + NOUN: {{Word:dong4}}-{{word:wu4}} {{word:bu4}} {{word:shi4}} {{word:zhi2wu4}}. (An animal is not a plant.)",
    ru: "СУЩЕСТВИТЕЛЬНОЕ + {{word:bu4}} {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ: {{Word:dong4}}-{{word:wu4}} {{word:bu4}} {{word:shi4}} {{word:zhi2wu4}}. (Животное — не растение.)",
  },
  examples: [
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:bu4}} {{word:shi4}} {{word:zhi2wu4}}.",
      hanzi: "动物不是植物。",
      en: "An animal is not a plant.",
      ru: "Животное — не растение.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这不是动物。",
      en: "This is not an animal.",
      ru: "Это не животное.",
    },
    {
      pinyin: "{{Word:nv3}}-{{word:ren2}} {{word:bu4}} {{word:shi4}} {{word:nan2ren2}}.",
      hanzi: "女人不是男人。",
      en: "A woman is not a man.",
      ru: "Женщина — не мужчина.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:bu4}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "植物不是人。",
      en: "A plant is not a person.",
      ru: "Растение — не человек.",
    },
  ],
  exercises: [
    {
      en: "This is not a plant.",
      ru: "Это не растение.",
      answer: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:zhi2wu4}}.",
      hanzi: "这不是植物。",
    },
    {
      en: "An animal is not a person.",
      ru: "Животное — не человек.",
      answer: "{{Word:dong4}}-{{word:wu4}} {{word:bu4}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "动物不是人。",
    },
  ],
});
