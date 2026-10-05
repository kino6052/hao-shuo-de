// To say what something is, put shì between two nouns. Pattern: NOUN + shì +
// NOUN
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "is",
  words: [
    {
      word: "shi4",
      en: "be, is",
      ru: "быть, являться",
    },
    {
      word: "dong1xi",
      en: "thing",
      ru: "вещь",
    },
    {
      word: "ren2",
      en: "person",
      ru: "человек",
    },
    {
      word: "nv3ren2",
      en: "woman",
      ru: "женщина",
    },
    {
      word: "nan2ren2",
      en: "man",
      ru: "мужчина",
    },
    {
      word: "dong4wu4",
      en: "animal",
      ru: "животное",
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
      "A noun is a word for a person, place, or thing. It can mean one or many: {{word:dong1xi}} is \"thing\" or \"things\".",
    ],
    ru: [
      "**Чтобы сказать, что одно есть другое**, поставьте {{word:shi4}} между двумя существительными.",
      "",
      "**СУЩЕСТВИТЕЛЬНОЕ + {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ**",
      "",
      "Существительное — это слово, которое называет человека, место или вещь. Оно может значить одно или много: {{word:dong1xi}} — это «вещь» или «вещи».",
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
    en: "NOUN + {{word:shi4}} + NOUN: {{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}. (A woman is a person.)",
    ru: "СУЩЕСТВИТЕЛЬНОЕ + {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ: {{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}. (Женщина — человек.)",
  },
  examples: [
    {
      pinyin: "{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "女人是人。",
      en: "A woman is a person.",
      ru: "Женщина — человек.",
    },
    {
      pinyin: "{{Word:nan2ren2}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "男人是人。",
      en: "A man is a person.",
      ru: "Мужчина — человек.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:shi4}} {{word:dong1xi}}.",
      hanzi: "植物是东西。",
      en: "A plant is a thing.",
      ru: "Растение — это вещь.",
    },
    {
      pinyin: "{{Word:dong4wu4}} {{word:bu4}} {{word:shi4}} {{word:dong1xi}}.",
      hanzi: "动物不是东西。",
      en: "Animals are not things.",
      ru: "Животные — не вещи.",
    },
  ],
  exercises: [
    {
      en: "Something is something.",
      ru: "Вещь есть вещь.",
      answer: "{{Word:dong1xi}} {{word:shi4}} {{word:dong1xi}}.",
      hanzi: "东西是东西。",
    },
    {
      en: "The woman is a person.",
      ru: "Женщина — человек.",
      answer: "{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}.",
      hanzi: "女人是人。",
    },
    {
      en: "Plants are things.",
      ru: "Растения — это вещи.",
      answer: "{{Word:zhi2wu4}} {{word:shi4}} {{word:dong1xi}}.",
      hanzi: "植物是东西。",
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
    // does shì change like am / is / are? (no)
    {
      question: {
        en: "Does {{word:shi4}} change like \"am\", \"is\", and \"are\"?",
        ru: "Меняются ли {{word:shi4}} и существительные, как слова в русском?",
      },
      en: "No. {{word:shi4}} never changes, and neither do the nouns: {{Word:nv3ren2}} {{word:shi4}} {{word:ren2}} can be \"A woman is a person\" or \"Women are people\". Chinese words don't change their form at all.",
      ru: "Нет. {{word:shi4}} никогда не меняется, и существительные тоже: {{Word:nv3ren2}} {{word:shi4}} {{word:ren2}} может значить «Женщина — человек» или «Женщины — люди». Китайские слова вообще не меняют форму: у них нет ни окончаний, ни падежей.",
    },
  ],
});
