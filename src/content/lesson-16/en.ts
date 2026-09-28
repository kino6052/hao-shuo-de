// English text for lesson-16, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Numbers"] },
  summary: {
    en: [
      "Every language needs a way to count.",
      "In this lesson, you'll be able to count to ten and say \"one person\", \"two animals\", and \"number two\".",
    ],
  },
  vocabYi: { en: ["one"] },
  vocabEr: { en: ["two (counting, number two, 12, 20)"] },
  vocabSan: { en: ["three"] },
  vocabSi: { en: ["four"] },
  vocabWu: { en: ["five"] },
  vocabLiu: { en: ["six"] },
  vocabQi: { en: ["seven"] },
  vocabBa: { en: ["eight"] },
  vocabJiu: { en: ["nine"] },
  vocabShi: { en: ["ten"] },
  proseAloud: {
    en: [
      "**To count out loud**, say the numbers in order.",
      "",
      "**{{word:yi1}}, {{word:er4}}, {{word:san1}}, {{word:si4}}, {{word:wu3}} …**",
      "",
      "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}.",
    ],
    tldr: {
      en: [
        "Count {{word:yi1}}, {{word:er4}}, {{word:san1}} … {{word:shi2}}.",
      ],
    },
    necessity: { en: ["Now you can count to ten."] },
  },
  exampleAloud1: { en: ["One, two, three!"] },
  exampleAloud2: { en: ["Four, five, six."] },
  exampleAloud3: { en: ["Seven, eight, nine, ten."] },
  exampleAloud4: { en: ["Three is more than two."] },
  vocabLiang: { en: ["two (before gè)"] },
  proseCount: {
    en: [
      "**To count things**, put the number, then {{word:ge4}}, then the thing.",
      "",
      "**number + {{word:ge4}} + noun**",
      "",
      "For two things, say {{word:liang3}}, not {{word:er4}}: {{word:liang3}}-ge.",
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
  exampleCount17: { en: ["Four people come from the market."] },
  exampleCount18: { en: ["I have five very sweet pieces of fruit."] },
  exampleCount19: { en: ["Three people got up."] },
  exampleCount20: { en: ["I have three kinds of fruit."] },
  exampleCount21: { en: ["Some of the people went."] },
  proseTeens: {
    en: [
      "**To say numbers above ten**, put {{word:shi2}} (ten) before or after the other number.",
      "",
      "**{{word:shi2}} + number (11-19) / number + {{word:shi2}} (20, 30 …)**",
      "",
      "{{word:shi2}}-{{word:er4}} is 12 (ten and two). {{word:er4}}-{{word:shi2}} is 20 (two tens).",
    ],
    tldr: {
      en: [
        "{{word:shi2}}-{{word:er4}} is 12. {{word:er4}}-{{word:shi2}} is 20.",
      ],
    },
    necessity: { en: ["Now you can count past ten."] },
  },
  exampleTeens1: { en: ["Eleven people."] },
  exampleTeens2: { en: ["I have thirteen tools."] },
  exampleTeens3: { en: ["Fifteen animals are here."] },
  exampleTeens4: { en: ["Twelve pieces of fruit."] },
  exampleTeens5: { en: ["Twenty people."] },
  exampleTeens6: { en: ["Thirty boxes."] },
  vocabHao: { en: ["number (as in number two)"] },
  proseLabel: {
    en: [
      "**To say number one, number two**, put {{word:hao4}} after the number.",
      "",
      "**number + {{word:hao4}}**",
    ],
    tldr: {
      en: [
        "number + {{word:hao4}}: {{word:er4}}-{{word:hao4}} is number two.",
      ],
    },
    necessity: { en: ["Now you can name things by their number."] },
  },
  exampleLabel1: { en: ["My home is number five."] },
  exampleLabel2: { en: ["Where is number two?"] },
  exampleLabel3: { en: ["Where is number three?"] },
  exampleLabel4: { en: ["You're number one!"] },
  exampleLabel5: { en: ["Number five is in front of me."] },
  infoCounting: {
    title: { en: ["Counting"] },
    items: [
      {
        en: [
          "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}",
        ],
      },
      {
        en: [
          "number + {{word:ge4}} + noun: {{Word:san1}}-ge {{word:ren2}} (three people). For two things, {{word:liang3}}-ge.",
        ],
      },
      {
        en: [
          "Above ten: {{word:shi2}}-{{word:er4}} (12), {{word:er4}}-{{word:shi2}} (20)",
        ],
      },
      {
        en: [
          "number + {{word:hao4}}, number …: {{Word:er4}}-{{word:hao4}} (number two)",
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
  exercise12: { en: ["twelve people"] },
  exercise13: { en: ["Count from one to three."] },
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
  answer12: { en: ["{{Word:shi2}}-{{word:er4}}-ge {{word:ren2}}."] },
  answer13: { en: ["{{Word:yi1}}, {{word:er4}}, {{word:san1}}."] },
};

export default en;
