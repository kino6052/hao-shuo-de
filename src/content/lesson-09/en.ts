// English text for lesson-09, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Time 2 — Around an action"] },
  summary: {
    en: [
      "We often talk about what happens around an action: before it, after it, or while it goes on.",
      "In this lesson, you'll be able to say \"When I eat, …\", \"I finished eating.\", \"after eating\", \"I started to play.\", and \"He ate again.\"",
    ],
  },
  vocabWanr: { en: ["play"] },
  proseWhen: {
    en: [
      '**To say "when"**, say "the time of" it: put -{{word:de}} {{word:shi2jian1}} after the action, then a comma.',
      "",
      "**Who + verb-{{word:de}} {{word:shi2jian1}}, the rest**",
      "",
      'There is no separate word for "when". {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}} is "the time I eat".',
    ],
    tldr: {
      en: [
        '"When I eat" is {{word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, "the time I eat".',
      ],
    },
    necessity: {
      en: [
        "Now you can say what happens when something else happens.",
      ],
    },
  },
  exampleWhen1: { en: ["When I eat, I don't talk."] },
  exampleWhen2: { en: ["When you speak, I listen."] },
  exampleWhen3: { en: ["When he sleeps, I play."] },
  vocabWan: { en: ["finish; after a verb: finished"] },
  proseFinished: {
    en: [
      "**To say you finished doing something**, join {{word:wan2}} to the verb, and add {{word:le}}.",
      "",
      "**Who + verb-{{word:wan2}} {{word:le}}**",
      "",
      "{{word:le}} only says it's done. {{word:wan2}} says it's done all the way.",
    ],
    tldr: {
      en: [
        "verb-{{word:wan2}} {{word:le}} means you finished doing it.",
      ],
    },
    necessity: { en: ["Now you can say you're all done."] },
  },
  exampleFinished1: { en: ["I finished eating."] },
  exampleFinished2: { en: ["Did you finish writing?"] },
  exampleFinished3: { en: ["She finished reading."] },
  vocabHou: { en: ["after; behind"] },
  vocabLiu: { en: ["stay, keep"] },
  proseAfter: {
    en: [
      '**To say "after doing something"**, put {{word:hou4}} after the finished action, then a comma.',
      "",
      "**verb-{{word:wan2}} {{word:hou4}}, the rest**",
    ],
    tldr: {
      en: [
        'verb-{{word:wan2}} {{word:hou4}} means "after doing it".',
      ],
    },
    necessity: { en: ["Now you can put two actions in order."] },
  },
  exampleAfter1: { en: ["After eating, I sleep."] },
  exampleAfter2: { en: ["After writing, I play."] },
  exampleAfter3: { en: ["After reading, you speak."] },
  exampleAfter4: { en: ["After eating, what happened?"] },
  exampleAfter5: { en: ["After eating, she stays."] },
  exampleAfter6: { en: ["After reading it, I'll keep this one."] },
  vocabKaishi: { en: ["start"] },
  proseStart: {
    en: [
      "**To say something starts**, put {{word:kai1shi3}} before the verb.",
      "",
      "**Who + {{word:kai1shi3}} + verb**",
    ],
    tldr: {
      en: [
        "Put {{word:kai1shi3}} before a verb to say it starts.",
      ],
    },
    necessity: { en: ["Now you can say when something begins."] },
  },
  exampleStart1: { en: ["I started to play."] },
  exampleStart2: { en: ["He starts to eat."] },
  exampleStart3: { en: ["Have you started writing?"] },
  exampleStart4: { en: ["I'm starting to write now."] },
  exampleStart5: { en: ["I've started learning to speak."] },
  vocabYixia: { en: ["a moment; after a verb: for a moment"] },
  proseMoment: {
    en: [
      "**To do something just for a moment**, put {{word:yi1xia4}} (a moment) after the verb.",
      "",
      "**Who + verb + {{word:yi1xia4}}**",
      "",
      'It makes a request softer: {{Word:deng3}} {{word:yi1xia4}}! is "Wait a moment!"',
    ],
    tldr: {
      en: [
        "Put {{word:yi1xia4}} after a verb to do it for a moment: {{Word:deng3}} {{word:yi1xia4}}!",
      ],
    },
    necessity: {
      en: [
        "Now you can ask for a moment, or do something just a little.",
      ],
    },
  },
  exampleMoment1: { en: ["Wait a moment!"] },
  exampleMoment2: { en: ["Let me have a look."] },
  exampleMoment3: { en: ["Stay a moment."] },
  exampleMoment4: { en: ["Let's play for a bit."] },
  vocabYou: { en: ["again"] },
  proseAgain: {
    en: [
      "**To say something happens again**, put {{word:you4}} (again) before the verb, and {{word:le}} after it.",
      "",
      "**Who + {{word:you4}} + verb + {{word:le}}**",
      "",
      "To say you're about to do it again, add {{word:yao4}}: {{Word:wo3}} {{word:you4}} {{word:yao4}} {{word:chi1}} {{word:le}}.",
    ],
    tldr: {
      en: [
        "Put {{word:you4}} before the verb to say it happened again.",
      ],
    },
    necessity: { en: ["Now you can say something happened again."] },
  },
  exampleAgain1: { en: ["He ate again."] },
  exampleAgain2: { en: ["You fell asleep again!"] },
  exampleAgain3: { en: ["I had another look."] },
  exampleAgain4: { en: ["I'm going to eat again."] },
  vocabCi: { en: ["time, as in \"many times\""] },
  proseTimes: {
    en: [
      "**To say how many times**, put {{word:ci4}} (time) after {{word:hen3}} {{word:duo1}} or {{word:duo1}}-{{word:shao3}}.",
      "",
      "**verb + {{word:hen3}} {{word:duo1}} {{word:ci4}} / {{word:duo1}}-{{word:shao3}} {{word:ci4}}?**",
      "",
      "{{word:zhe4}}-{{word:ci4}} is \"this time\". With numbers (Lesson 16), {{word:ci4}} counts: two times, three times.",
    ],
    tldr: {
      en: [
        "{{word:hen3}} {{word:duo1}} {{word:ci4}} is many times. {{word:zhe4}}-{{word:ci4}} is this time.",
      ],
    },
    necessity: { en: ["Now you can say how often something happens."] },
  },
  exampleTimes1: { en: ["I've seen it many times."] },
  exampleTimes2: { en: ["How many times have you eaten it?"] },
  exampleTimes3: { en: ["This time I'll wait for you."] },
  exampleTimes4: { en: ["He's said it many times."] },
  infoAroundAnAction: {
    title: { en: ["Around an Action"] },
    items: [
      {
        en: [
          "verb-{{word:de}} {{word:shi2jian1}}, when: {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:shuo1}}. (When I eat, I don't talk.)",
        ],
      },
      {
        en: [
          "verb-{{word:wan2}} {{word:le}}, finished: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. (I finished eating.)",
        ],
      },
      {
        en: [
          "verb-{{word:wan2}} {{word:hou4}}, after: {{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}. (After eating, I sleep.)",
        ],
      },
      {
        en: [
          "{{word:kai1shi3}} + verb, start: {{Word:wo3}} {{word:kai1shi3}} {{word:wan2r}} {{word:le}}. (I started to play.)",
        ],
      },
      {
        en: [
          "verb + {{word:yi1xia4}}, for a moment: {{Word:deng3}} {{word:yi1xia4}}! (Wait a moment!)",
        ],
      },
      {
        en: [
          "{{word:you4}} + verb + {{word:le}}, again: {{Word:ta1}} {{word:you4}} {{word:chi1}} {{word:le}}. (He ate again.)",
        ],
      },
      {
        en: [
          "{{word:hen3}} {{word:duo1}} {{word:ci4}}, many times: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}. (I've seen it many times.)",
        ],
      },
    ],
  },
  exercise1: { en: ["When I write, I don't eat."] },
  exercise2: { en: ["I finished writing."] },
  exercise3: { en: ["After reading, I sleep."] },
  exercise4: { en: ["She started to eat."] },
  exercise5: { en: ["Do you want to play?"] },
  exercise6: { en: ["After eating, I'll stay."] },
  exercise7: { en: ["Wait a moment!"] },
  exercise8: { en: ["She fell asleep again."] },
  exercise9: { en: ["I've eaten it many times."] },
  answer1: {
    en: [
      "{{Word:wo3}} {{word:xie3}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:chi1}}.",
    ],
  },
  answer2: {
    en: [
      "{{Word:wo3}} {{word:xie3}}-{{word:wan2}} {{word:le}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:kan4}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}.",
    ],
  },
  answer4: {
    en: [
      "{{Word:ta1}} {{word:kai1shi3}} {{word:chi1}} {{word:le}}.",
    ],
  },
  answer5: {
    en: [
      "{{Word:ni3}} {{word:yao4}} {{word:wan2r}} {{word:ma}}?",
    ],
  },
  answer6: { en: ["{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:hui4}} {{word:liu2}}."] },
  answer7: { en: ["{{Word:deng3}} {{word:yi1xia4}}!"] },
  answer8: { en: ["{{Word:ta1}} {{word:you4}} {{word:shui4jiao4}} {{word:le}}."] },
  answer9: { en: ["{{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}."] },
  faqWanOrWanr: {
    question: { en: ["Are {{word:wan2}} and {{word:wan2r}} the same word?"] },
    en: [
      "No, they're two different words. {{word:wan2}} is \"finish\": {{word:chi1}}-{{word:wan2}} {{word:le}}. {{word:wan2r}} is \"play\", and the -r at the end is part of the word.",
    ],
  },
  faqWanAndLe: {
    question: { en: ["Do I need both -{{word:wan2}} and {{word:le}}?"] },
    en: [
      "To say you finished, yes: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. Without {{word:le}}, {{word:chi1}}-{{word:wan2}} is only part of a sentence, like in {{word:chi1}}-{{word:wan2}} {{word:hou4}}, … (after eating, …).",
    ],
  },
};

export default en;
