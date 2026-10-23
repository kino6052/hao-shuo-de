// To say what something is, put shì between two nouns. Pattern: NOUN + shì +
// NOUN
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "is",
  scene: "Acts out 'zhè shì rén': the student sits at a table with Miao-miao and cuts a small stick figure, a plain simple person, out of orange paper with scissors, then holds it up; Miao-miao nods. Orange: the paper stick figure.",
  words: [
    {
      word: "shi4",
      en: "be, is",
      ru: "быть, являться",
    },
    {
      word: "xi1",
      en: "west",
      ru: "запад",
    },
    {
      word: "dong1",
      en: "east; {{word:dong1}}-{{light:xi1}}: thing",
      ru: "восток; {{word:dong1}}-{{light:xi1}} — вещь",
    },
    {
      word: "ren2",
      en: "person",
      ru: "человек",
    },
    {
      word: "nv3",
      en: "female; {{word:nv3}}-{{word:ren2}}: woman",
      ru: "женский; {{word:nv3}}-{{word:ren2}} — женщина",
    },
    {
      word: "nan2",
      sense: "male",
      en: "male (in {{word:nan2}}-{{word:ren2}}: man)",
      ru: "мужской (в {{word:nan2}}-{{word:ren2}} — мужчина)",
    },
    {
      word: "dong4",
      en: "move",
      ru: "двигаться",
    },
    {
      word: "wu4",
      en: "creature, thing; {{word:dong4}}-{{word:wu4}}: animal",
      ru: "существо; {{word:dong4}}-{{word:wu4}} — животное",
    },
    {
      word: "zhi2wu4",
      en: "plant",
      ru: "растение",
    },
  ],
  prose: {
    en: [
      "**To say what something is**, put {{word:shi4}} between two nouns.",
      "",
      "**NOUN + {{word:shi4}} + NOUN**",
      "",
      "A noun is a word for a person, place, or thing. It can mean one or many: {{word:dong1}}-{{light:xi1}} is \"thing\" or \"things\".",
    ],
    ru: [
      "**Чтобы сказать, что одно есть другое**, поставьте {{word:shi4}} между двумя существительными.",
      "",
      "**СУЩЕСТВИТЕЛЬНОЕ + {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ**",
      "",
      "Существительное — это слово, которое называет человека, место или вещь. Оно может значить одно или много: {{word:dong1}}-{{light:xi1}} — это «вещь» или «вещи».",
      "В русском на месте {{word:shi4}} часто стоит тире: «Женщина — человек».",
    ],
    tldr: {
      en: "To say one thing is another, put {{word:shi4}} between them.",
      ru: "Чтобы сказать, что одно есть другое, поставьте между ними {{word:shi4}}.",
    },
    necessity: {
      en: "This is the simplest sentence you can make.",
      ru: "Это самое простое предложение, какое можно составить.",
    },
  },
  info: {
    pattern: "shi-copula",
    en: "NOUN + {{word:shi4}} + NOUN: {{Word:nv3}}-{{word:ren2}} {{word:shi4}} {{word:ren2}}. (A woman is a person.)",
    ru: "СУЩЕСТВИТЕЛЬНОЕ + {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ: {{Word:nv3}}-{{word:ren2}} {{word:shi4}} {{word:ren2}}. (Женщина — человек.)",
  },
  examples: [
    {
      pinyin: "{{Word:nv3}}-{{word:ren2}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "女人是人。",
      en: "A woman is a person.",
      ru: "Женщина — человек.",
    },
    {
      pinyin: "{{Word:nan2}}-{{word:ren2}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "男人是人。",
      en: "A man is a person.",
      ru: "Мужчина — человек.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:shi4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "植物是东西。",
      en: "A plant is a thing.",
      ru: "Растение — это вещь.",
    },
  ],
  exercises: [
    {
      en: "Something is something.",
      ru: "Вещь есть вещь.",
      answer: "{{Word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "东西是东西。",
    },
    {
      en: "The woman is a person.",
      ru: "Женщина — человек.",
      answer: "{{Word:nv3}}-{{word:ren2}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "女人是人。",
    },
    {
      en: "Plants are things.",
      ru: "Растения — это вещи.",
      answer: "{{Word:zhi2wu4}} {{word:shi4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "植物是东西。",
    },
  ],
  faq: [
    // does shì change like am / is / are? (no)
    {
      question: {
        en: "Does {{word:shi4}} change like \"am\", \"is\", and \"are\"?",
        ru: "Меняются ли {{word:shi4}} и существительные, как слова в русском?",
      },
      en: "No. {{word:shi4}} never changes, and neither do the nouns: {{Word:nv3}}-{{word:ren2}} {{word:shi4}} {{word:ren2}} can be \"A woman is a person\" or \"Women are people\". Chinese words don't change their form at all.",
      ru: "Нет. {{word:shi4}} никогда не меняется, и существительные тоже: {{Word:nv3}}-{{word:ren2}} {{word:shi4}} {{word:ren2}} может значить «Женщина — человек» или «Женщины — люди». Китайские слова вообще не меняют форму: у них нет ни окончаний, ни падежей.",
    },
  ],
});
