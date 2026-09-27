// English text for lesson-14, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 3 — Also and all"] },
  summary: {
    en: [
      "We often want to add one more thing, or talk about all of them.",
      "In this lesson, you'll be able to say \"I also eat.\" and \"All the plants are good.\"",
    ],
  },
  vocabYe: { en: ["also, too"] },
  vocabQuanbu: { en: ["all"] },
  vocabZhiwu: { en: ["plant"] },
  vocabHuo: { en: ["fire"] },
  vocabKongqi: { en: ["air"] },
  proseAlsoDo: {
    en: [
      "**To say someone also does something**, put {{word:ye3}} (also) right before the verb.",
      "",
      "**Who + {{word:ye3}} + verb**",
      "",
      "{{word:ye3}} comes after the who, never at the start of the sentence.",
    ],
    tldr: {
      en: [
        "Put {{word:ye3}} right before the verb: {{Word:wo3}} {{word:ye3}} {{word:chi1}}, I eat too.",
      ],
    },
    necessity: { en: ["Now you can add one more person or thing."] },
  },
  exampleAlsoDo1: { en: ["I eat too."] },
  exampleAlsoDo2: { en: ["Do you want some too?"] },
  exampleAlsoDo3: { en: ["Plants need air too."] },
  exampleAlsoDo4: { en: ["He's looking at the fire too."] },
  exampleAlsoDo5: { en: ["I got up too."] },
  exampleAlsoDo6: { en: ["I'm beside him too."] },
  proseAlsoIs: {
    en: [
      "**To say something is also like that**, put {{word:ye3}} before {{word:hen3}} and the describing word.",
      "",
      "**Thing + {{word:ye3}} + {{word:hen3}} + describing word**",
    ],
    tldr: {
      en: [
        "{{word:ye3}} {{word:hen3}} + describing word: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}, she's cold too.",
      ],
    },
    necessity: { en: ["Now you can say two things are alike."] },
  },
  exampleAlsoIs1: { en: ["I'm cold, and he's cold too."] },
  exampleAlsoIs2: { en: ["The air is cold too."] },
  exampleAlsoIs3: { en: ["The fire is hot, and the sun is hot too."] },
  exampleAlsoIs4: { en: ["The sun is round, and the moon is round too."] },
  proseAll: {
    en: [
      "**To say all**, use {{word:quan2bu4}}.",
      "",
      "**{{word:quan2bu4}}-{{word:de}} + noun / verb + {{word:quan2bu4}}**",
    ],
    tldr: {
      en: [
        "{{word:quan2bu4}} means all: {{Word:wo3}} {{word:yao4}} {{word:quan2bu4}}, I want all of it.",
      ],
    },
    necessity: { en: ["Now you can talk about every one of them."] },
  },
  exampleAll1: { en: ["I want all of it."] },
  exampleAll2: { en: ["All the plants are good."] },
  exampleAll3: { en: ["It's all eaten."] },
  exampleAll4: { en: ["Plants need water."] },
  exampleAll5: { en: ["The air outside is good."] },
  exampleAll6: { en: ["Where is the fire?"] },
  infoAlsoAndAll: {
    title: { en: ["Also and All"] },
    items: [
      {
        en: [
          "{{word:ye3}} + verb, also: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. (I eat too.)",
        ],
      },
      {
        en: [
          "{{word:ye3}} {{word:hen3}} + describing word: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}. (She's cold too.)",
        ],
      },
      {
        en: [
          "{{word:quan2bu4}}, all: {{Word:wo3}} {{word:yao4}} {{word:quan2bu4}}. (I want all of it.) {{word:quan2bu4}}-{{word:de}} + noun means all the …",
        ],
      },
    ],
  },
  exercise1: { en: ["I want some too."] },
  exercise2: { en: ["The water is hot too."] },
  exercise3: { en: ["I want all the fruit."] },
  exercise4: { en: ["The plant is small."] },
  exercise5: { en: ["The fire is really hot."] },
  exercise6: { en: ["The air here is cold."] },
  answer1: { en: ["{{Word:wo3}} {{word:ye3}} {{word:yao4}}."] },
  answer2: {
    en: [
      "{{Word:shui3}} {{word:ye3}} {{word:hen3}} {{word:re4}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:wo3}} {{word:yao4}} {{word:quan2bu4}}-{{word:de}} {{word:shui3guo3}}.",
    ],
  },
  answer4: { en: ["{{Word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}."] },
  answer5: { en: ["{{Word:huo3}} {{word:zhen1}} {{word:re4}}."] },
  answer6: {
    en: [
      "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:kong1qi4}} {{word:hen3}} {{word:leng3}}.",
    ],
  },
};

export default en;
