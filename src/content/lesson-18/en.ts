// English text for lesson-18, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Changing the Role of a Word"] },
  summary: {
    en: [
      "One word can do more than one job.",
      "In this lesson, you'll be able to say \"food\" ({{word:chi1}}-{{word:de}}), \"the one who writes\", and \"speak well\".",
    ],
  },
  vocabCi: { en: ["word"] },
  proseThing: {
    en: [
      "**To name the thing an action is about**, put -{{word:de}} after the verb.",
      "",
      "**verb-{{word:de}}**",
      "",
      "One {{word:ci2}} (word) can do more than one job: {{word:chi1}} is eat, and {{word:chi1}}-{{word:de}} is food.",
    ],
    tldr: {
      en: [
        "verb-{{word:de}} names the thing: {{word:chi1}}-{{word:de}} is food, something to eat.",
      ],
    },
    necessity: {
      en: ["Now you can make new nouns from verbs you know."],
    },
  },
  exampleThing1: { en: ["I want something to eat."] },
  exampleThing2: { en: ["This is what I wrote."] },
  exampleThing3: { en: ["What is this word?"] },
  exampleThing4: { en: ["How do you say this word?"] },
  exampleThing5: { en: ["I know this word."] },
  exampleThing6: { en: ["All ten pieces of food went bad."] },
  exampleThing7: { en: ["What he's eating is yellow fruit."] },
  prosePerson: {
    en: [
      "**To name the one who does something**, put -{{word:de}} {{word:ren2}} after the verb.",
      "",
      "**verb-{{word:de}} {{word:ren2}}**",
    ],
    tldr: {
      en: [
        "verb-{{word:de}} {{word:ren2}} is the one who does it: {{word:xie3}}-{{word:de}} {{word:ren2}}, the one who writes.",
      ],
    },
    necessity: { en: ["Now you can name people by what they do."] },
  },
  examplePerson1: { en: ["The one who writes."] },
  examplePerson2: { en: ["The one speaking is my parent."] },
  examplePerson3: { en: ["The one who knows doesn't talk."] },
  proseHow: {
    en: [
      "**To say how someone does something**, put -{{word:de}} after the verb, then the adjective.",
      "",
      "**Who + verb-{{word:de}} + adjective**",
    ],
    tldr: {
      en: [
        "verb-{{word:de}} + adjective says how: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}, she speaks well.",
      ],
    },
    necessity: { en: ["Now you can say how well something is done."] },
  },
  exampleHow1: { en: ["She speaks well."] },
  exampleHow2: { en: ["You write very well."] },
  exampleHow3: { en: ["He eats a lot."] },
  exampleHow4: { en: ["He speaks better than me."] },
  vocabFangfa: { en: ["way, method"] },
  vocabBizi: { en: ["nose"] },
  vocabPifu: { en: ["skin"] },
  proseName: {
    en: [
      "**To name something there's no word for**, describe it, then add -{{word:de}} and the noun.",
      "",
      "**description-{{word:de}} + noun**",
      "",
      "You already know this -{{word:de}}: {{word:hao3}}-{{word:de}} {{word:ren2}} (Lesson 3), {{word:wo3}}-{{word:de}} {{word:bi2zi}} (Lesson 4). The description can be as long as you need.",
    ],
    tldr: {
      en: [
        "description-{{word:de}} + noun: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}}, an animal in the water.",
      ],
    },
    necessity: {
      en: [
        "When there's no word for something, you can still name it.",
      ],
    },
  },
  exampleName1: { en: ["An animal that lives in the water."] },
  exampleName2: { en: ["A strong person."] },
  exampleName3: { en: ["The way of writing."] },
  exampleName4: { en: ["Do you have a good way?"] },
  exampleName5: { en: ["This way is good."] },
  exampleName6: { en: ["My nose is big."] },
  exampleName7: { en: ["Your nose is red."] },
  exampleName8: { en: ["The animal's nose is small."] },
  exampleName9: { en: ["The animal's skin is hard."] },
  exampleName10: { en: ["My skin is hot."] },
  exampleName11: { en: ["Her skin is healthy."] },
  exampleName12: { en: ["The color I love is blue."] },
  exampleName13: { en: ["This is a valuable thing."] },
  infoJobsOfDe: {
    title: { en: ["The Jobs of -de"] },
    items: [
      {
        en: [
          "verb-{{word:de}}, the thing: {{word:chi1}}-{{word:de}} (food, something to eat)",
        ],
      },
      {
        en: [
          "verb-{{word:de}} {{word:ren2}}, the one who: {{word:xie3}}-{{word:de}} {{word:ren2}} (the one who writes)",
        ],
      },
      {
        en: [
          "verb-{{word:de}} + adjective, how: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}. (She speaks well.)",
        ],
      },
      {
        en: [
          "adjective-{{word:de}} + noun: {{word:hao3}}-{{word:de}} {{word:ren2}} (a good person). Whose: {{word:wo3}}-{{word:de}} {{word:bi2zi}} (my nose).",
        ],
      },
      {
        en: [
          "a longer description-{{word:de}} + noun: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}} (an animal in the water)",
        ],
      },
    ],
  },
  exercise1: { en: ["Do you have anything to eat?"] },
  exercise2: { en: ["the one who speaks"] },
  exercise3: { en: ["You write well."] },
  exercise4: { en: ["How do you write this word?"] },
  exercise5: { en: ["I have a way."] },
  exercise6: { en: ["My nose is small."] },
  exercise7: { en: ["Her skin is white."] },
  answer1: {
    en: [
      "{{Word:ni3}} {{word:you3}} {{word:chi1}}-{{word:de}} {{word:ma}}?",
    ],
  },
  answer2: { en: ["{{Word:shuo1}}-{{word:de}} {{word:ren2}}."] },
  answer3: {
    en: [
      "{{Word:ni3}} {{word:xie3}}-{{word:de}} {{word:hao3}}.",
    ],
  },
  answer4: {
    en: [
      "{{Word:zhe4}}-ge {{word:ci2}} {{word:zen3me}} {{word:xie3}}?",
    ],
  },
  answer5: { en: ["{{Word:wo3}} {{word:you3}} {{word:fang1fa3}}."] },
  answer6: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
    ],
  },
  answer7: {
    en: [
      "{{Word:ta1}}-{{word:de}} {{word:pi2fu1}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
    ],
  },
};

export default en;
