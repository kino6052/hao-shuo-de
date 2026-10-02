// English text for lesson-19, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Relationships 1 — Inside a sentence"] },
  summary: {
    en: [
      "We often need to say who something is for, or what we do it with.",
      "In this lesson, you'll be able to say \"give it to me\", \"write with a tool\", \"you and me\", \"this or that\", and \"for me\".",
    ],
  },
  vocabGei: { en: ["give; to, for"] },
  proseGive: {
    en: [
      "**To say you give something to someone**, use {{word:gei3}}: the person first, then the thing.",
      "",
      "**Who + {{word:gei3}} + person + thing**",
      "",
      "{{word:gei3}} before a verb means for or to: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:xie3}}, I write to you.",
      "",
      "There's no word for \"buy\". Say {{word:gei3}}-{{word:jin1}}-{{word:de2}}-{{word:dong1xi}}: \"give money, get things\". A market is {{word:gei3}}-{{word:jin1}}-{{word:de2}}-{{word:dong1xi}}-{{word:de}} {{word:di4fang1}}, the place where you do that.",
    ],
    tldr: {
      en: [
        "{{word:gei3}} + person + thing: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}, I give you water.",
      ],
    },
    necessity: { en: ["Now you can say who gets what."] },
  },
  exampleGive1: { en: ["Give it to me."] },
  exampleGive2: { en: ["I give you water."] },
  exampleGive3: { en: ["She gives me clothes."] },
  exampleGive4: { en: ["I write to you."] },
  exampleGive5: { en: ["He gives me three, and I give him four."] },
  exampleGive6: { en: ["He gives me part of it."] },
  exampleGive7: { en: ["I'm going shopping."] },
  exampleGive8: { en: ["The market is near."] },
  exampleGive9: { en: ["Give me a little water."] },
  vocabYong: { en: ["use; with"] },
  vocabMo: { en: ["touch"] },
  vocabDa: { en: ["hit"] },
  proseWith: {
    en: [
      "**To say what you do something with**, put {{word:yong4}} and the thing before the verb.",
      "",
      "**Who + {{word:yong4}} + thing + verb**",
    ],
    tldr: {
      en: [
        "{{word:yong4}} + thing + verb: {{Word:wo3}} {{word:yong4}} {{word:gong1ju4}} {{word:xie3}}, I write with a tool.",
      ],
    },
    necessity: { en: ["Now you can say how you do things."] },
  },
  exampleWith1: { en: ["I write with a tool."] },
  exampleWith2: { en: ["He eats with his hands."] },
  exampleWith3: { en: ["Touch it with your hand."] },
  exampleWith4: { en: ["He hits it with a stick."] },
  exampleWith5: { en: ["I touch the animal with my hand."] },
  exampleWith6: { en: ["Don't hit the animal with a stick."] },
  exampleWith7: { en: ["He made a box out of clay."] },
  exampleWith8: { en: ["The animal touches my hand with its nose."] },
  exampleWith9: { en: ["He uses a new way."] },
  exampleWith10: { en: ["Let me use your tool for a moment."] },
  exampleWith11: { en: ["I open the box with a tool."] },
  exampleWith12: { en: ["He takes the fruit with his hand."] },
  vocabHe: { en: ["and (between nouns)"] },
  vocabHuozhe: { en: ["or"] },
  proseAndOr: {
    en: [
      "**To join two nouns**, put {{word:he2}} (and) or {{word:huo4zhe3}} (or) between them.",
      "",
      "**A + {{word:he2}} / {{word:huo4zhe3}} + B**",
      "",
      "{{word:he2}} joins nouns only, not whole sentences.",
    ],
    tldr: {
      en: [
        "{{word:he2}} is and, {{word:huo4zhe3}} is or: {{word:ni3}} {{word:he2}} {{word:wo3}}, you and me.",
      ],
    },
    necessity: { en: ["Now you can talk about two things at once."] },
  },
  exampleAndOr1: { en: ["You and me."] },
  exampleAndOr2: { en: ["He and I go outside."] },
  exampleAndOr3: { en: ["I want this one or that one."] },
  exampleAndOr4: { en: ["Eat fruit or rice."] },
  exampleAndOr5: { en: ["I want a red one or a blue one."] },
  exampleAndOr6: { en: ["Six men and seven women."] },
  exampleAndOr7: { en: ["I want eight or nine."] },
  vocabDui: { en: ["toward, for"] },
  proseToward: {
    en: [
      "**To say how someone is toward someone**, put {{word:dui4}} and the person before the adjective.",
      "",
      "**A + {{word:dui4}} + B + adjective**",
      "",
      '{{word:dui4}} X {{word:lai2}} {{word:shuo1}} means "for X": {{word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}}, for me.',
    ],
    tldr: {
      en: [
        "{{word:dui4}} + person + adjective: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}, he's good to me.",
      ],
    },
    necessity: { en: ["Now you can say how things are for someone."] },
  },
  exampleToward1: { en: ["He's good to me."] },
  exampleToward2: { en: ["Water is good for plants."] },
  exampleToward3: { en: ["For me, this is good."] },
  exampleToward4: { en: ["The sun is bad for your skin."] },
  vocabQun: { en: ["group"] },
  proseGroup: {
    en: [
      "**To talk about a group**, use {{word:qun2}} (group) in place of {{word:ge4}}.",
      "",
      "**{{word:yi1}} / {{word:zhe4}} / {{word:na4}} + {{word:qun2}} + noun**",
    ],
    tldr: {
      en: [
        "{{word:yi1}}-{{word:qun2}} {{word:ren2}} is a group of people.",
      ],
    },
    necessity: { en: ["Now you can talk about many at once."] },
  },
  exampleGroup1: { en: ["A group of people is outside."] },
  exampleGroup2: { en: ["That group of animals is big."] },
  exampleGroup3: { en: ["I give that group of people water."] },
  infoInsideASentence: {
    title: { en: ["Joining Words in a Sentence"] },
    items: [
      {
        en: [
          "{{word:gei3}} + person + thing, give: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}. (I give you water.)",
        ],
      },
      {
        en: [
          "{{word:yong4}} + thing + verb, with: {{Word:wo3}} {{word:yong4}} {{word:gong1ju4}} {{word:xie3}}. (I write with a tool.)",
        ],
      },
      {
        en: [
          "A {{word:he2}} B, and (nouns only): {{word:ni3}} {{word:he2}} {{word:wo3}} (you and me)",
        ],
      },
      {
        en: [
          "A {{word:huo4zhe3}} B, or: {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge (this one or that one)",
        ],
      },
      {
        en: [
          "A {{word:dui4}} B + adjective, toward / for: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}. (He's good to me.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Give me the box."] },
  exercise2: { en: ["She writes with a stick."] },
  exercise3: { en: ["I want fruit and rice."] },
  exercise4: { en: ["this one or that one"] },
  exercise5: { en: ["The sun is good for plants."] },
  exercise6: { en: ["a group of animals"] },
  exercise7: { en: ["Don't hit him."] },
  exercise8: { en: ["Can I touch it?"] },
  answer1: { en: ["{{Word:gei3}} {{word:wo3}} {{word:he2zi}}."] },
  answer2: {
    en: [
      "{{Word:ta1}} {{word:yong4}} {{word:gun4zi}} {{word:xie3}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:wo3}} {{word:yao4}} {{word:shui3guo3}} {{word:he2}} {{word:mi3fan4}}.",
    ],
  },
  answer4: {
    en: ["{{Word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge."],
  },
  answer5: {
    en: [
      "{{Word:ri4}} {{word:dui4}} {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer6: { en: ["{{Word:yi1}}-{{word:qun2}} {{word:dong4wu4}}."] },
  answer7: {
    en: [
      "{{Word:bu4}} {{word:yao4}} {{word:da3}} {{word:ta1}}.",
    ],
  },
  answer8: {
    en: [
      "{{Word:wo3}} {{word:neng2}} {{word:mo1}} {{word:ma}}?",
    ],
  },
  faqAndSentences: {
    question: { en: ["How do I say \"and\" between two sentences?"] },
    en: [
      "Put them side by side with a comma: {{Word:wo3}} {{word:chi1}}, {{word:ta1}} {{word:shui4jiao4}} (I eat, and he sleeps). For \"too\", add {{word:ye3}}: {{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
    ],
  },
  faqGeiForOrTo: {
    question: { en: ["Does {{word:gei3}} {{word:ni3}} {{word:xie3}} mean \"write to you\" or \"write for you\"?"] },
    en: [
      "It can mean either. The situation tells you which.",
    ],
  },
  faqHuozheQuestion: {
    question: { en: ["Can I use {{word:huo4zhe3}} in a question?"] },
    en: [
      "Yes, but then it's a yes-or-no question: {{Word:ni3}} {{word:yao4}} {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge {{word:ma}}? asks \"Do you want one of these?\". To make someone choose, full Mandarin uses a different word for \"or\".",
    ],
  },
};

export default en;
