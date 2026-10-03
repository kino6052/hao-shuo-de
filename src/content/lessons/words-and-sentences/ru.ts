// Russian text for words-and-sentences, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Слова и предложения"] },
  summary: {
    ru: [
      "В любом языке нужно уметь выразить простые факты о людях, вещах и животных.",
      "В этом уроке вы научитесь говорить «Это человек.» и «Животное — не фрукт.»",
    ],
  },
  vocabShi: { ru: ["быть, являться"] },
  vocabDongxi: { ru: ["вещь"] },
  vocabRen: { ru: ["человек"] },
  vocabNuren: { ru: ["женщина"] },
  vocabNanren: { ru: ["мужчина"] },
  vocabDongwu: { ru: ["животное"] },
  vocabShuiguo: { ru: ["фрукт"] },
  proseIs: {
    ru: [
      "**Чтобы сказать, что одно есть другое**, поставьте {{word:shi4}} между двумя существительными.",
      "",
      "**СУЩЕСТВИТЕЛЬНОЕ + {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ**",
      "",
      "Существительное — это слово, которое называет человека, место или вещь. Оно может значить одно или много: {{word:dong1xi}} — это «вещь» или «вещи».",
      "В русском на месте {{word:shi4}} часто стоит тире: «Женщина — человек».",
    ],
    tldr: {
      ru: [
        "Чтобы сказать, что одно есть другое, поставьте между ними {{word:shi4}}.",
      ],
    },
    necessity: {
      ru: ["Это самое простое предложение, какое можно составить."],
    },
  },
  exampleIs1: { ru: ["Женщина — человек."] },
  exampleIs2: { ru: ["Мужчина — человек."] },
  exampleIs3: { ru: ["Фрукт — это вещь."] },
  exampleIs4: { ru: ["Животные — не вещи."] },
  vocabZhe: { ru: ["это, этот"] },
  proseThis: {
    ru: [
      "**Чтобы показать на что-то**, скажите {{word:zhe4}} (это).",
      "",
      "**{{Word:zhe4}} {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ**",
    ],
    tldr: {
      ru: ["{{Word:zhe4}} {{word:shi4}} + существительное: это …"],
    },
    necessity: {
      ru: ["Теперь вы можете назвать то, что у вас перед глазами."],
    },
  },
  exampleThis1: { ru: ["Это человек."] },
  exampleThis2: { ru: ["Это фрукт."] },
  exampleThis3: { ru: ["Это животное."] },
  exampleThis4: { ru: ["Это мужчина."] },
  vocabBu: { ru: ["не"] },
  proseNot: {
    ru: [
      "**Чтобы сказать, что одно не есть другое**, поставьте {{word:bu4}} перед {{word:shi4}}.",
      "",
      "**СУЩЕСТВИТЕЛЬНОЕ + {{word:bu4}} {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ**",
    ],
    tldr: {
      ru: [
        "Чтобы сказать «не является», поставьте {{word:bu4}} перед {{word:shi4}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, чем что-то не является."] },
  },
  exampleNot1: { ru: ["Животное — не фрукт."] },
  exampleNot2: { ru: ["Это не животное."] },
  exampleNot3: { ru: ["Женщина — не мужчина."] },
  exampleNot4: { ru: ["Фрукт — не человек."] },
  infoIsAndIsNot: {
    title: { ru: ["Как сказать, что это такое"] },
    items: [
      {
        ru: [
          "СУЩЕСТВИТЕЛЬНОЕ + {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. (Это человек.)",
        ],
      },
      {
        ru: [
          "СУЩЕСТВИТЕЛЬНОЕ + {{word:bu4}} {{word:shi4}} + СУЩЕСТВИТЕЛЬНОЕ: {{Word:dong4wu4}} {{word:bu4}} {{word:shi4}} {{word:shui3guo3}}. (Животное — не фрукт.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Вещь есть вещь."] },
  exercise2: { ru: ["Это животное."] },
  exercise3: { ru: ["Женщина — человек."] },
  exercise4: { ru: ["Это женщина."] },
  exercise5: { ru: ["Фрукты — это вещи."] },
  exercise6: { ru: ["Это мужчина."] },
  exercise7: { ru: ["Это не фрукт."] },
  exercise8: { ru: ["Животное — не человек."] },
  answer1: {
    ru: ["{{Word:dong1xi}} {{word:shi4}} {{word:dong1xi}}."],
  },
  answer2: { ru: ["{{Word:zhe4}} {{word:shi4}} {{word:dong4wu4}}."] },
  answer3: { ru: ["{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}."] },
  answer4: { ru: ["{{Word:zhe4}} {{word:shi4}} {{word:nv3ren2}}."] },
  answer5: {
    ru: ["{{Word:shui3guo3}} {{word:shi4}} {{word:dong1xi}}."],
  },
  answer6: { ru: ["{{Word:zhe4}} {{word:shi4}} {{word:nan2ren2}}."] },
  answer7: {
    ru: ["{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:shui3guo3}}."],
  },
  answer8: {
    ru: ["{{Word:dong4wu4}} {{word:bu4}} {{word:shi4}} {{word:ren2}}."],
  },
  faqAOrThe: {
    question: {
      ru: ["Как понять, о каком человеке речь — о любом или о конкретном?"],
    },
    ru: [
      "Так же, как в русском: по ситуации. {{Word:zhe4}} {{word:shi4}} {{word:ren2}} может значить «Это человек» или «Это тот самый человек». Как и в русском, в китайском нет слов вроде английских «a» и «the».",
    ],
  },
  faqShiNeverChanges: {
    question: {
      ru: ["Меняются ли {{word:shi4}} и существительные, как слова в русском?"],
    },
    ru: [
      "Нет. {{word:shi4}} никогда не меняется, и существительные тоже: {{Word:nv3ren2}} {{word:shi4}} {{word:ren2}} может значить «Женщина — человек» или «Женщины — люди». Китайские слова вообще не меняют форму: у них нет ни окончаний, ни падежей.",
    ],
  },
};

export default ru;
