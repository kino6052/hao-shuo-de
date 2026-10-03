// Russian text for colors, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Цвета"] },
  summary: {
    ru: [
      "Цвета помогают отличать вещи друг от друга.",
      "В этом уроке вы научитесь говорить «красная коробка», «Вода синяя.» и «Какого это цвета?»",
    ],
  },
  vocabBaise: { ru: ["белый"] },
  vocabHeise: { ru: ["чёрный"] },
  vocabHongse: { ru: ["красный"] },
  vocabHuangse: { ru: ["жёлтый"] },
  proseColorThing: {
    ru: [
      "**Чтобы назвать цвет вещи**, поставьте перед ней цвет и -{{word:de}}.",
      "",
      "**цвет-{{word:de}} + существительное**",
    ],
    tldr: {
      ru: [
        "цвет-{{word:de}} + существительное: {{word:hong2se4}}-{{word:de}} {{word:he2zi}} — красная коробка.",
      ],
    },
    necessity: { ru: ["Теперь вы можете различать вещи по цвету."] },
  },
  exampleColorThing1: { ru: ["Красная коробка."] },
  exampleColorThing2: { ru: ["Белая одежда."] },
  exampleColorThing3: { ru: ["Чёрное животное."] },
  exampleColorThing4: { ru: ["Жёлтый фрукт."] },
  exampleColorThing5: { ru: ["Положи красную одежду сюда."] },
  exampleColorThing6: { ru: ["Возьми красную."] },
  vocabLanse: { ru: ["синий, голубой, зелёный"] },
  proseIsColor: {
    ru: [
      "**Чтобы сказать, какого цвета что-то**, поставьте {{word:shi4}} перед цветом, а -{{word:de}} — после него.",
      "",
      "**Вещь + {{word:shi4}} + цвет-{{word:de}}**",
    ],
    tldr: {
      ru: [
        "Вещь + {{word:shi4}} + цвет-{{word:de}}: {{Word:shui3}} {{word:shi4}} {{word:lan2se4}}-{{word:de}} — вода синяя.",
      ],
    },
    necessity: { ru: ["Теперь вы можете описать то, что видите."] },
  },
  exampleIsColor1: { ru: ["Коробка красная."] },
  exampleIsColor3: { ru: ["Моя одежда белая."] },
  exampleIsColor5: { ru: ["Грязь на полу чёрная."] },
  exampleIsColor7: { ru: ["Тело этого животного жёлтое."] },
  exampleIsColor9: { ru: ["Четыре животных белые, а пять — чёрные."] },
  exampleIsColor10: { ru: ["Семь коробок красные, а восемь — синие."] },
  exampleIsColor12: { ru: ["Коробка справа красная."] },
  exampleIsColor13: { ru: ["Залетело чёрное животное."] },
  vocabYanse: { ru: ["цвет"] },
  proseWhatColor: {
    ru: [
      "**Чтобы спросить «какого цвета?»**, скажите {{word:shen2me}} {{word:yan2se4}} там, где стоял бы цвет.",
      "",
      "**Вещь + {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?**",
    ],
    tldr: {
      ru: [
        "{{word:shen2me}} {{word:yan2se4}} значит «какого цвета».",
      ],
    },
    necessity: { ru: ["Теперь вы можете спрашивать о цветах."] },
  },
  exampleWhatColor1: { ru: ["Какого цвета твоя одежда?"] },
  exampleWhatColor2: { ru: ["Какого цвета этот фрукт?"] },
  exampleWhatColor3: { ru: ["Я люблю синий цвет."] },
  exampleWhatColor5: { ru: ["Эти две коробки одного цвета."] },
  exampleWhatColor6: { ru: ["Какого цвета номер шесть?"] },
  exampleWhatColor7: { ru: ["У тебя есть другие цвета?"] },
  exampleWhatColor8: { ru: ["Это хороший цвет."] },
  exampleWhatColor9: { ru: ["Этот цвет чуть лучше."] },
  infoColors: {
    title: { ru: ["Цвета"] },
    items: [
      {
        ru: [
          "цвет-{{word:de}} + существительное: {{word:hong2se4}}-{{word:de}} {{word:he2zi}} (красная коробка)",
        ],
      },
      {
        ru: [
          "Вещь + {{word:shi4}} + цвет-{{word:de}}: {{Word:he2zi}} {{word:shi4}} {{word:hong2se4}}-{{word:de}}. (Коробка красная.)",
        ],
      },
      {
        ru: [
          "{{word:shen2me}} {{word:yan2se4}} — какого цвета: {{Word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}? (Какого цвета твоя одежда?)",
        ],
      },
    ],
  },
  exercise1: { ru: ["белая коробка"] },
  exercise2: { ru: ["Фрукт жёлтый."] },
  exercise3: { ru: ["Какого цвета растение?"] },
  exercise4: { ru: ["Я хочу красную одежду."] },
  exercise5: { ru: ["Животное чёрное."] },
  exercise6: { ru: ["Коробка синяя."] },
  answer1: { ru: ["{{Word:bai2se4}}-{{word:de}} {{word:he2zi}}."] },
  answer2: {
    ru: [
      "{{Word:shui3guo3}} {{word:shi4}} {{word:huang2se4}}-{{word:de}}.",
    ],
  },
  answer3: {
    ru: [
      "{{Word:zhi2wu4}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
    ],
  },
  answer4: {
    ru: [
      "{{Word:wo3}} {{word:yao4}} {{word:hong2se4}}-{{word:de}} {{word:yi1fu}}.",
    ],
  },
  answer5: {
    ru: [
      "{{Word:dong4wu4}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
    ],
  },
  answer6: {
    ru: [
      "{{Word:he2zi}} {{word:shi4}} {{word:lan2se4}}-{{word:de}}.",
    ],
  },
  faqLanBlueGreen: {
    question: { ru: ["Почему {{word:lan2se4}} значит и синий, и зелёный?"] },
    ru: [
      "В полном китайском {{word:lan2se4}} — это синий, а для зелёного есть своё слово. Hǎo-shuō-de держит список коротким, поэтому {{word:lan2se4}} — это и синий, и голубой, и зелёный. Чтобы ясно сказать «зелёный», опишите его: {{word:zhi2wu4}}-{{word:de}} {{word:yan2se4}} (цвет растений).",
    ],
  },
  faqColorNoHen: {
    question: { ru: ["Почему {{word:shi4}} {{word:hong2se4}}-{{word:de}}, а не {{word:hen3}} {{word:hong2se4}}?"] },
    ru: [
      "Слова цвета вроде {{word:hong2se4}} работают как существительные («красный цвет»), поэтому {{word:hen3}} с ними не ставят. {{Word:he2zi}} {{word:shi4}} {{word:hong2se4}}-{{word:de}} — это «Коробка — красного цвета».",
    ],
  },
};

export default ru;
