// English text for lesson-16, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Numbers"] },
  summary: {
    en: [
      "Every language needs a way to count.",
      "In this lesson, you'll be able to count to ten and say \"one person\", \"two animals\", and \"number three\".",
    ],
  },
  vocabYi: { en: ["one"] },
  vocabLiang: { en: ["two (before gè)"] },
  vocabHao: { en: ["number (as in number three)"] },
  vocabSan: { en: ["three"] },
  vocabSi: { en: ["four"] },
  vocabWu: { en: ["five"] },
  vocabLiu: { en: ["six"] },
  vocabQi: { en: ["seven"] },
  vocabBa: { en: ["eight"] },
  vocabJiu: { en: ["nine"] },
  vocabShi: { en: ["ten"] },
  proseCount: {
    en: [
      "**To count things**, put the number, then {{word:ge4}}, then the thing.",
      "",
      "**number + {{word:ge4}} + noun**",
      "",
      "1 {{word:yi1}}, 2 {{word:liang3}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}.",
      "For two things, say {{word:liang3}}: {{word:liang3}}-ge.",
    ],
    tldr: {
      en: [
        "number + {{word:ge4}} + noun: {{word:san1}}-ge {{word:ren2}}, three people.",
      ],
    },
    necessity: { en: ["Now you can say how many."] },
  },
  exampleCount1: { en: ["One person."] },
  exampleCount2: { en: ["Two animals."] },
  exampleCount3: { en: ["Three boxes."] },
  exampleCount4: { en: ["I have four pieces of fruit."] },
  exampleCount5: { en: ["Five people are in the house."] },
  exampleCount6: { en: ["He wants six."] },
  exampleCount7: { en: ["Seven sticks are on the floor."] },
  exampleCount8: { en: ["The eight of us go to the market."] },
  exampleCount9: { en: ["Nine people eat rice."] },
  exampleCount10: { en: ["Ten plants."] },
  exampleCount11: { en: ["The two people are the same."] },
  exampleCount12: { en: ["I want seven."] },
  exampleCount13: { en: ["She has nine sticks."] },
  exampleCount14: { en: ["Four people are outside."] },
  exampleCount15: { en: ["Six pieces of fruit went bad."] },
  exampleCount16: { en: ["Eight boxes are big."] },
  proseTeens: {
    en: [
      "**To say 11 to 19**, say {{word:shi2}} (ten), then the number.",
      "",
      "**{{word:shi2}} + number**",
    ],
    tldr: {
      en: ["{{word:shi2}}-{{word:yi1}} is 11, ten and one."],
    },
    necessity: { en: ["Now you can count past ten."] },
  },
  exampleTeens1: { en: ["Eleven people."] },
  exampleTeens2: { en: ["I have thirteen tools."] },
  exampleTeens3: { en: ["Fifteen animals are here."] },
  proseLabel: {
    en: [
      "**To say number one, number three**, put {{word:hao4}} after the number.",
      "",
      "**number + {{word:hao4}}**",
    ],
    tldr: {
      en: [
        "number + {{word:hao4}}: {{word:san1}}-{{word:hao4}} is number three.",
      ],
    },
    necessity: { en: ["Now you can name things by their number."] },
  },
  exampleLabel1: { en: ["My home is number five."] },
  exampleLabel2: { en: ["Where is number three?"] },
  exampleLabel3: { en: ["You're number one!"] },
  infoCounting: {
    title: { en: ["Counting"] },
    items: [
      {
        en: [
          "1 {{word:yi1}}, 2 {{word:liang3}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}",
        ],
      },
      {
        en: [
          "number + {{word:ge4}} + noun: {{Word:san1}}-ge {{word:ren2}} (three people). For two, {{word:liang3}}-ge.",
        ],
      },
      {
        en: [
          "11 to 19, {{word:shi2}} + number: {{word:shi2}}-{{word:yi1}} (11)",
        ],
      },
      {
        en: [
          "number + {{word:hao4}}, number …: {{Word:san1}}-{{word:hao4}} (number three)",
        ],
      },
    ],
  },
  exercise1: { en: ["one box"] },
  exercise2: { en: ["two people"] },
  exercise3: { en: ["I have three tools."] },
  exercise4: { en: ["four plants"] },
  exercise5: { en: ["Five people eat."] },
  exercise6: { en: ["I want six."] },
  exercise7: { en: ["seven animals"] },
  exercise8: { en: ["eight sticks"] },
  exercise9: { en: ["nine pieces of fruit"] },
  exercise10: { en: ["ten people"] },
  exercise11: { en: ["Where is number four?"] },
  answer1: { en: ["{{Word:yi1}}-ge {{word:he2zi}}."] },
  answer2: { en: ["{{Word:liang3}}-ge {{word:ren2}}."] },
  answer3: {
    en: [
      "{{Word:wo3}} {{word:you3}} {{word:san1}}-ge {{word:gong1ju4}}.",
    ],
  },
  answer4: { en: ["{{Word:si4}}-ge {{word:zhi2wu4}}."] },
  answer5: { en: ["{{Word:wu3}}-ge {{word:ren2}} {{word:chi1}}."] },
  answer6: { en: ["{{Word:wo3}} {{word:yao4}} {{word:liu4}}-ge."] },
  answer7: { en: ["{{Word:qi1}}-ge {{word:dong4wu4}}."] },
  answer8: { en: ["{{Word:ba1}}-ge {{word:gun4zi}}."] },
  answer9: { en: ["{{Word:jiu3}}-ge {{word:shui3guo3}}."] },
  answer10: { en: ["{{Word:shi2}}-ge {{word:ren2}}."] },
  answer11: {
    en: [
      "{{Word:si4}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
    ],
  },
};

export default en;
