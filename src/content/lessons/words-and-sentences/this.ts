// To point at something, say zhè (this). Pattern: zhè shì + NOUN
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "this",
  words: [
    {
      word: "zhe4",
      en: "this",
      ru: "это, этот",
    },
  ],
  prose: {
    en: [
      "**To point at something**, say {{word:zhe4}} (this).",
      "",
      "**{{Word:zhe4}} {{word:shi4}} + NOUN**",
    ],
    ru: [
      "**Чтобы показать на что-то**, скажите {{word:zhe4}} (это).",
      "",
      "**{{Word:zhe4}} {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ**",
    ],
    tldr: {
      en: "{{Word:zhe4}} {{word:shi4}} + noun: this is …",
      ru: "{{Word:zhe4}} {{word:shi4}} + существительное: это …",
    },
    necessity: {
      en: "Now you can name what's in front of you.",
      ru: "Теперь вы можете назвать то, что у вас перед глазами.",
    },
  },
  info: {
    en: "{{word:zhe4}} {{word:shi4}} + NOUN, this is: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. (This is a person.)",
    ru: "{{word:zhe4}} {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ — это: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. (Это человек.)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "这是人。",
      en: "This is a person.",
      ru: "Это человек.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zhi2wu4}}.",
      hanzi: "这是植物。",
      en: "This is a plant.",
      ru: "Это растение.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这是动物。",
      en: "This is an animal.",
      ru: "Это животное.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:nan2}}-{{word:ren2}}.",
      hanzi: "这是男人。",
      en: "This is a man.",
      ru: "Это мужчина.",
    },
  ],
  exercises: [
    {
      en: "This is an animal.",
      ru: "Это животное.",
      answer: "{{Word:zhe4}} {{word:shi4}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这是动物。",
    },
    {
      en: "This is a woman.",
      ru: "Это женщина.",
      answer: "{{Word:zhe4}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}.",
      hanzi: "这是女人。",
    },
    {
      en: "This is a man.",
      ru: "Это мужчина.",
      answer: "{{Word:zhe4}} {{word:shi4}} {{word:nan2}}-{{word:ren2}}.",
      hanzi: "这是男人。",
    },
  ],
});
