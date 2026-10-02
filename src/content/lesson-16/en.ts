// English text for lesson-16, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Numbers"] },
  summary: {
    en: [
      "Every language needs a way to count.",
      "In this lesson, you'll be able to count, say \"two animals\", \"number two\", \"three o'clock\", and \"a little water\", and do sums: \"three and four together is seven\".",
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
  exampleCount8: { en: ["The eight of us go outside."] },
  exampleCount9: { en: ["Nine people eat rice."] },
  exampleCount10: { en: ["Ten plants."] },
  exampleCount11: { en: ["The two people are the same."] },
  exampleCount12: { en: ["I want seven."] },
  exampleCount13: { en: ["She has nine sticks."] },
  exampleCount14: { en: ["Four people are outside."] },
  exampleCount15: { en: ["Six pieces of fruit went bad."] },
  exampleCount16: { en: ["Eight boxes are big."] },
  exampleCount17: { en: ["Four people come in from outside."] },
  exampleCount18: { en: ["I have five very sweet pieces of fruit."] },
  exampleCount19: { en: ["Three people got up."] },
  exampleCount20: { en: ["I have three kinds of fruit."] },
  exampleCount21: { en: ["Some of the people went."] },
  exampleCount22: { en: ["He put two boxes on the floor."] },
  exampleCount23: { en: ["I've been there three times."] },
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
  vocabDian: { en: ["o'clock; yī-diǎn: a little"] },
  proseClock: {
    en: [
      "**To say what time it is**, put {{word:dian3}} (o'clock) after the number.",
      "",
      "**number + {{word:dian3}}**",
      "",
      "Put the time before the verb: {{Word:wo3}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:chi1}}. Ask with {{word:shen2me}} {{word:shi2jian1}} (Lesson 8).",
    ],
    tldr: {
      en: [
        "number + {{word:dian3}} is the time: {{word:san1}}-{{word:dian3}} is three o'clock.",
      ],
    },
    necessity: { en: ["Now you can say what time it is."] },
  },
  exampleClock1: { en: ["It's three o'clock now."] },
  exampleClock2: { en: ["I eat at twelve o'clock."] },
  exampleClock3: { en: ["He goes to sleep at ten."] },
  proseLittle: {
    en: [
      "**To say a little**, say {{word:yi1}}-{{word:dian3}} (a little).",
      "",
      "**{{word:yi1}}-{{word:dian3}} + noun / adjective + {{word:yi1}}-{{word:dian3}}**",
      "",
      "Before a noun, it's a little of it: {{word:yi1}}-{{word:dian3}} {{word:shui3}}, a little water. After an adjective, it's a bit more: {{word:da4}} {{word:yi1}}-{{word:dian3}}, a bit bigger. And {{word:you3}} {{word:yi1}}-{{word:dian3}} before an adjective is \"a bit\": {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:leng3}}, a bit cold.",
    ],
    tldr: {
      en: [
        "{{word:yi1}}-{{word:dian3}} is a little: {{word:yi1}}-{{word:dian3}} {{word:shui3}}, {{word:da4}} {{word:yi1}}-{{word:dian3}}.",
      ],
    },
    necessity: { en: ["Now you can say a little, or a bit more."] },
  },
  exampleLittle1: { en: ["I want a little water."] },
  exampleLittle2: { en: ["I have a little money."] },
  exampleLittle3: { en: ["This one is a bit bigger."] },
  exampleLittle4: { en: ["The water is a bit cold."] },
  exampleLittle5: { en: ["Eat a bit more!"] },
  vocabNa: { en: ["take; take away"] },
  proseAddTake: {
    en: [
      "**To add**, put the numbers together with {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. **To take away**, use {{word:na2}} (take).",
      "",
      "**A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} C / {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B, {{word:shi4}} C**",
      "",
      "To ask for the answer, end with {{word:shi4}} {{word:duo1}}-{{word:shao3}}? {{word:na2}} is also just \"take\": {{Word:na2}} {{word:yi1}}-ge! (Take one!)",
    ],
    tldr: {
      en: [
        "Add: put the numbers together with {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. Take away: {{word:na2}}.",
      ],
    },
    necessity: { en: ["Now you can add and take away."] },
  },
  exampleAddTake1: { en: ["Three and four put together is seven. (3 + 4 = 7)"] },
  exampleAddTake2: { en: ["Five and five together is ten. (5 + 5 = 10)"] },
  exampleAddTake3: { en: ["Take three from seven, and it's four. (7 − 3 = 4)"] },
  exampleAddTake4: { en: ["Take six from ten: how much is it? (10 − 6 = ?)"] },
  exampleAddTake5: { en: ["Take one!"] },
  proseTimesShare: {
    en: [
      "**To multiply**, put a number together many times. **To divide**, see how many times you can take it away.",
      "",
      "**{{word:ba3}} A {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}, {{word:shi4}} C / {{word:cong2}} C {{word:li3}}-{{word:mian4}} {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}}**",
    ],
    tldr: {
      en: [
        "Multiply: put it together many times. Divide: count how many times you can take it away.",
      ],
    },
    necessity: { en: ["Now you can multiply and divide."] },
  },
  exampleTimesShare1: { en: ["Four put together three times is twelve. (3 × 4 = 12)"] },
  exampleTimesShare2: { en: ["Five put together twice is ten. (2 × 5 = 10)"] },
  exampleTimesShare3: { en: ["You can take four from twelve three times. (12 ÷ 4 = 3)"] },
  exampleTimesShare4: { en: ["How many times can you take five from ten? (10 ÷ 5 = ?)"] },
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
      {
        en: [
          "number + {{word:dian3}}, o'clock: {{Word:xian4zai4}} {{word:shi4}} {{word:san1}}-{{word:dian3}}. (It's three o'clock now.)",
        ],
      },
      {
        en: [
          "{{word:yi1}}-{{word:dian3}}, a little: {{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}. (I want a little water.) {{Word:zhe4}}-ge {{word:da4}} {{word:yi1}}-{{word:dian3}}. (This one is a bit bigger.)",
        ],
      },
      {
        en: [
          "A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, add: {{Word:san1}}, {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:qi1}}. (3 + 4 = 7) {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B, take away: {{Word:cong2}} {{word:qi1}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:san1}}, {{word:shi4}} {{word:si4}}. (7 − 3 = 4)",
        ],
      },
      {
        en: [
          "{{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}, multiply: {{Word:ba3}} {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}-{{word:er4}}. (3 × 4 = 12) {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}}, divide: {{Word:cong2}} {{word:shi2}}-{{word:er4}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:si4}}, {{word:neng2}} {{word:na2}} {{word:san1}}-{{word:ci4}}. (12 ÷ 4 = 3)",
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
  exercise14: { en: ["It's five o'clock now."] },
  exercise15: { en: ["This one is a bit smaller."] },
  exercise16: { en: ["Two and six together is eight."] },
  exercise17: { en: ["Take two from nine: it's seven."] },
  exercise18: { en: ["Three put together three times is nine."] },
  exercise19: { en: ["Take a little!"] },
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
  answer14: { en: ["{{Word:xian4zai4}} {{word:shi4}} {{word:wu3}}-{{word:dian3}}."] },
  answer15: { en: ["{{Word:zhe4}}-ge {{word:xiao3}} {{word:yi1}}-{{word:dian3}}."] },
  answer16: { en: ["{{Word:er4}}, {{word:liu4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:ba1}}."] },
  answer17: { en: ["{{Word:cong2}} {{word:jiu3}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:er4}}, {{word:shi4}} {{word:qi1}}."] },
  answer18: { en: ["{{Word:ba3}} {{word:san1}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:jiu3}}."] },
  answer19: { en: ["{{Word:na2}} {{word:yi1}}-{{word:dian3}}!"] },
  faqErInBigNumbers: {
    question: { en: ["Do I say {{word:liang3}} in 12 or 20 too?"] },
    en: [
      "No. Inside a bigger number, use {{word:er4}}, even with things: {{word:shi2}}-{{word:er4}}-ge {{word:ren2}} (12 people). {{word:liang3}} is only for two on its own.",
    ],
  },
  faqHaoDays: {
    question: { en: ["Is {{word:hao4}} only for things like \"number two\"?"] },
    en: [
      "It also numbers the days of the month: {{word:wu3}}-{{word:hao4}} is the 5th.",
    ],
  },
  faqYiTone: {
    question: { en: ["Why does {{word:yi1}}-ge sound like it has a different tone?"] },
    en: [
      "Before {{word:ge4}}, {{word:yi1}} is said with a rising tone (the second tone). The book still writes {{word:yi1}}. The appendix on tone changes lists when this happens.",
    ],
  },
  faqPlusWords: {
    question: { en: ["Is there a word for \"plus\"?"] },
    en: [
      "Mandarin has words for plus, minus, times, and divided by. Hao-shuo-de doesn't need them: put the numbers together ({{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}), or take them away ({{word:na2}}).",
    ],
  },
};

export default en;
