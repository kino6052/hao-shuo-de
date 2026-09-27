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
  vocabWan: { en: ["finish"] },
  vocabKaishi: { en: ["to begin to, start to, manage to"] },
  vocabHou: { en: ["after, behind"] },
  vocabWanr: { en: ["play"] },
  vocabLiu: { en: ["stay, keep"] },
  proseDeShijian: {
    en: [
      'Hao-shuo-de also has no dedicated word for "when." Instead, "when X" is built the same way any other description is: bind X onto `{{word:shi2jian1}}` ("time, moment") with `-{{word:de}}`, the same particle from Lesson 3.',
      "`{{word:chi1}}-{{word:de}} {{word:shi2jian1}}` is literally \"the eating's time\" -- fronted as a context clause, it means \"when [I] eat.\"",
      "No new grammar is needed: it's just -de binding a description onto a noun (here, {{word:shi2jian1}}), and that whole phrase then fronted like any other context clause.",
    ],
    tldr: {
      en: [
        'To say "when I eat", say "my eating time": {{word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}.',
      ],
    },
    necessity: { en: ['There is no separate word for "when".'] },
  },
  example3: { en: ["When I eat, I'm content."] },
  completionMarkers: {
    en: [
      "`{{word:le}}` only tells you an action is DONE -- it doesn't say anything about how it went. Three more small words fill in that gap, glued straight onto the verb with a hyphen instead of standing in front of or after it on their own.",
      '`{{word:wan2}}` ("finish") says the action ran all the way to the end: `{{word:chi1}}-{{word:wan2}}`, "finish eating".',
      '`dào` ("reach, arrive") says the action successfully hit its target: `{{word:ting1}}-dào`, "hear" (listen-reach).',
      '`{{word:hao3}}` ("well, good") says the action came out well: `{{word:nong4}}-{{word:hao3}}`, "get it done right".',
    ],
    tldr: {
      en: [
        "Join {{word:wan2}} to a verb to say you finished it.",
      ],
    },
    necessity: {
      en: [
        "{{word:le}} only says it's done, but {{word:wan2}} says it's done all the way.",
      ],
    },
  },
  infoCompletionMarkers: {
    title: { en: ["Saying How an Action Finished"] },
    items: [
      {
        en: [
          '`{{word:wan2}}` ("finish") -- the action went all the way to the end: `{{word:chi1}}-{{word:wan2}}`, "finish eating."',
        ],
      },
      {
        en: [
          '`dào` ("reach") -- the action hit its target: `{{word:ting1}}-dào`, "hear" (listen-reach).',
        ],
      },
      {
        en: [
          '`{{word:hao3}}` ("well") -- the action came out well: `{{word:nong4}}-{{word:hao3}}`, "get it done right."',
        ],
      },
    ],
  },
  exampleCompletionMarker1: { en: ["I finished eating."] },
  exampleCompletionMarker2: { en: ["I heard it."] },
  exampleCompletionMarker3: { en: ["I got it done."] },
  example2L09: {
    en: [
      "I am learning Hao-shuo-de / beginning to know Hao-shuo-de.",
    ],
  },
  example6L09: { en: ["The plants started to have water."] },
  exercise2: { en: ['Say: "When you speak, I listen."'] },
  answer2: {
    en: [
      "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:ting1}}.",
    ],
  },
};

export default en;
