// To point at something, say zhè (this). Pattern: zhè shì + NOUN
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "this",
  scene: "Acts out 'zhè shì dòng-wù': the student holds Miao-miao up in both hands towards the reader like a trophy, the cat dangling and unimpressed; the student's bubble shows a small cat shape. Orange: the bubble outline.",
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
    pattern: "shi-copula",
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
  faq: [
    // why is there no word for "a" or "the"?
    {
      question: {
        en: "Why is there no word for \"a\" or \"the\"?",
        ru: "Как понять, о каком человеке речь — о любом или о конкретном?",
      },
      en: "Chinese doesn't have them. {{Word:zhe4}} {{word:shi4}} {{word:ren2}} can be \"This is a person\" or \"This is the person\". The situation tells you which.",
      ru: "Так же, как в русском: по ситуации. {{Word:zhe4}} {{word:shi4}} {{word:ren2}} может значить «Это человек» или «Это тот самый человек». Как и в русском, в китайском нет слов вроде английских «a» и «the».",
    },
  ],
});
