// English text for lesson-13, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 2 — Comparing"] },
  summary: {
    en: [
      "We often compare one thing with another.",
      "In this lesson, you'll be able to say \"I'm bigger than you.\", \"They're the same.\", and \"I want different clothes.\"",
    ],
  },
  vocabBi: { en: ["than"] },
  vocabYiyang: { en: ["the same"] },
  vocabButong: { en: ["different"] },
  vocabYing: { en: ["hard"] },
  vocabYuan: { en: ["round"] },
  vocabGunzi: { en: ["stick"] },
  vocabXian: { en: ["line, rope, thread"] },
  vocabBiede: { en: ["other, else"] },
  vocabZhong: { en: ["kind, type"] },
  proseThan: {
    en: [
      "**To say one thing is more than another**, put {{word:bi3}} (than) between them, then the adjective.",
      "",
      "**A + {{word:bi3}} + B + adjective**",
      "",
      "Don't put {{word:hen3}} in these sentences: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}, not {{word:hen3}} {{word:da4}}.",
    ],
    tldr: {
      en: [
        "A {{word:bi3}} B + adjective: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}, I'm bigger than you.",
      ],
    },
    necessity: { en: ["Now you can compare two things."] },
  },
  exampleThan1: { en: ["I'm bigger than you."] },
  exampleThan2: { en: ["The stick is harder than the rope."] },
  exampleThan3: { en: ["This fruit is sweeter than that one."] },
  exampleThan4: { en: ["This box is rounder than that one."] },
  exampleThan5: { en: ["What is harder than a stick?"] },
  exampleThan6: { en: ["I have less money than you."] },
  exampleThan7: { en: ["The market is farther than home."] },
  exampleThan8: { en: ["My home is nearer than yours."] },
  exampleThan9: { en: ["People are worth more than money."] },
  proseSame: {
    en: [
      "**To say things are the same**, use {{word:yi1yang4}}.",
      "",
      "**Things + {{word:yi1yang4}} / {{word:yi1yang4}}-{{word:de}} + noun**",
    ],
    tldr: {
      en: [
        "{{word:yi1yang4}} means the same. {{word:yi1yang4}}-{{word:de}} {{word:he2zi}} is the same box.",
      ],
    },
    necessity: { en: ["Now you can say two things match."] },
  },
  exampleSame1: { en: ["They're the same."] },
  exampleSame2: { en: ["Our clothes are the same."] },
  exampleSame3: { en: ["I want the same thread."] },
  proseDifferent: {
    en: [
      "**To say things are different**, use {{word:bu4tong2}}.",
      "",
      "**Things + {{word:bu4tong2}} / {{word:bu4tong2}}-{{word:de}} + noun**",
      "",
      "For another one, or something else, use {{word:bie2de}} (other): {{Word:wo3}} {{word:yao4}} {{word:bie2de}}, I want something else.",
    ],
    tldr: {
      en: [
        "{{word:bu4tong2}} means different. {{word:bie2de}} means other: {{word:bie2de}} {{word:ren2}}, other people.",
      ],
    },
    necessity: {
      en: [
        "Now you can say two things don't match, and ask for another.",
      ],
    },
  },
  exampleDifferent1: { en: ["They're different."] },
  exampleDifferent2: { en: ["I want different clothes."] },
  exampleDifferent3: { en: ["This place is very different."] },
  exampleDifferent4: { en: ["I want something else."] },
  exampleDifferent5: { en: ["Do you have other clothes?"] },
  exampleDifferent6: { en: ["The other people are bigger than me."] },
  proseKind: {
    en: [
      "**To say what kind**, use {{word:zhong3}} (kind). It goes after {{word:zhe4}} or {{word:na4}}, like {{word:ge4}}.",
      "",
      "**{{word:zhe4}}-{{word:zhong3}} / {{word:na4}}-{{word:zhong3}} + noun**",
    ],
    tldr: {
      en: [
        "{{word:zhe4}}-{{word:zhong3}} + noun means this kind of: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}}, this kind of fruit.",
      ],
    },
    necessity: {
      en: [
        "Now you can talk about kinds of things, and compare them.",
      ],
    },
  },
  exampleKind1: { en: ["This kind of fruit is sweet."] },
  exampleKind2: { en: ["This kind is better than that kind."] },
  exampleKind3: { en: ["I want that kind of stick."] },
  proseShapeFeel: {
    en: [
      "**To say how something looks or feels**, use adjectives like {{word:ying4}} (hard) and {{word:yuan2}} (round).",
      "",
      "**Thing + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}}**",
    ],
    tldr: {
      en: [
        "{{word:ying4}} is hard, {{word:yuan2}} is round. They work like any adjective.",
      ],
    },
    necessity: { en: ["Now you have more to compare."] },
  },
  exampleShapeFeel1: { en: ["The stick is hard."] },
  exampleShapeFeel2: { en: ["The moon is round."] },
  exampleShapeFeel3: { en: ["The thread is in the box."] },
  exampleShapeFeel4: { en: ["I have a stick."] },
  exampleShapeFeel5: { en: ["This opening is round."] },
  infoComparing: {
    title: { en: ["Comparing"] },
    items: [
      {
        en: [
          "A {{word:bi3}} B + adjective: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}. (I'm bigger than you.) No {{word:hen3}} here.",
        ],
      },
      {
        en: [
          "{{word:yi1yang4}}, the same: {{Word:ta1}}-{{word:men}} {{word:yi1yang4}}. (They're the same.)",
        ],
      },
      {
        en: [
          "{{word:bu4tong2}}, different: {{Word:wo3}} {{word:yao4}} {{word:bu4tong2}}-{{word:de}} {{word:yi1fu}}. (I want different clothes.)",
        ],
      },
      {
        en: [
          "{{word:bie2de}}, other: {{Word:wo3}} {{word:yao4}} {{word:bie2de}}. (I want something else.)",
        ],
      },
      {
        en: [
          "{{word:zhe4}}-{{word:zhong3}} + noun, this kind of: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} (this kind of fruit)",
        ],
      },
    ],
  },
  exercise1: { en: ["This stick is harder than that one."] },
  exercise2: { en: ["You're bigger than me."] },
  exercise3: { en: ["Their homes are the same."] },
  exercise4: { en: ["I want a different box."] },
  exercise5: { en: ["The moon is round."] },
  exercise6: { en: ["Where is the rope?"] },
  exercise7: { en: ["Is the stick hard?"] },
  exercise8: { en: ["I want something else."] },
  exercise9: { en: ["This kind of fruit is sweet."] },
  answer1: {
    en: [
      "{{Word:zhe4}}-ge {{word:gun4zi}} {{word:bi3}} {{word:na4}}-ge {{word:ying4}}.",
    ],
  },
  answer2: {
    en: ["{{Word:ni3}} {{word:bi3}} {{word:wo3}} {{word:da4}}."],
  },
  answer3: {
    en: [
      "{{Word:ta1}}-{{word:men}}-{{word:de}} {{word:jia1}} {{word:yi1yang4}}.",
    ],
  },
  answer4: {
    en: [
      "{{Word:wo3}} {{word:yao4}} {{word:bu4tong2}}-{{word:de}} {{word:he2zi}}.",
    ],
  },
  answer5: { en: ["{{Word:yue4}} {{word:hen3}} {{word:yuan2}}."] },
  answer6: { en: ["{{Word:xian4}} {{word:zai4}} {{word:na3li3}}?"] },
  answer7: { en: ["{{Word:gun4zi}} {{word:ying4}} {{word:ma}}?"] },
  answer8: { en: ["{{Word:wo3}} {{word:yao4}} {{word:bie2de}}."] },
  answer9: {
    en: [
      "{{Word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} {{word:hen3}} {{word:tian2}}.",
    ],
  },
};

export default en;
