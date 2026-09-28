// English text for lesson-09, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Time 2 — Around an action"] },
  summary: {
    en: [
      "We often talk about what happens around an action: before it, after it, or while it goes on.",
      "In this lesson, you'll be able to say \"When I eat, …\", \"I finished eating.\", \"after eating\", and \"I started to play.\"",
    ],
  },
  vocabWan: { en: ["finish; after a verb: finished"] },
  vocabKaishi: { en: ["start"] },
  vocabHou: { en: ["after; behind"] },
  vocabWanr: { en: ["play"] },
  vocabLiu: { en: ["stay, keep"] },
  vocabYixia: { en: ["a moment; after a verb: for a moment"] },
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
  proseStay: {
    en: [
      "**To say you stay, or keep something**, use {{word:liu2}}.",
      "",
      "**Who + {{word:liu2}} (+ thing)**",
    ],
    tldr: { en: ["{{word:liu2}} means stay, or keep."] },
    necessity: { en: ["Now you can say you stay, or keep something."] },
  },
  exampleStay1: { en: ["I'll keep this one."] },
  exampleStay2: { en: ["Do you want to stay?"] },
  exampleStay3: { en: ["After eating, she stays."] },
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
    ],
  },
  exercise1: { en: ["When I write, I don't eat."] },
  exercise2: { en: ["I finished writing."] },
  exercise3: { en: ["After reading, I sleep."] },
  exercise4: { en: ["She started to eat."] },
  exercise5: { en: ["Do you want to play?"] },
  exercise6: { en: ["I will stay."] },
  exercise7: { en: ["Wait a moment!"] },
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
  answer6: { en: ["{{Word:wo3}} {{word:hui4}} {{word:liu2}}."] },
  answer7: { en: ["{{Word:deng3}} {{word:yi1xia4}}!"] },
};

export default en;
