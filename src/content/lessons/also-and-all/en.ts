// English text for also-and-all, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 3 — Also and all"] },
  summary: {
    en: [
      "We often want to add one more thing, or talk about all of them.",
      "In this lesson, you'll be able to say \"I also eat.\", \"We all eat.\", \"I eat everything.\", and \"Most people eat rice.\"",
    ],
  },
  vocabYe: { en: ["also, too"] },
  vocabZhiwu: { en: ["plant"] },
  vocabHuo: { en: ["fire"] },
  vocabKongqi: { en: ["air"] },
  vocabKai: { en: ["open; turn on"] },
  vocabGuan: { en: ["close; turn off"] },
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
  exampleAlsoDo6: { en: ["I'm beside him too."] },
  exampleAlsoDo7: { en: ["He doesn't move either."] },
  exampleAlsoDo8: { en: ["The other people came too."] },
  exampleAlsoDo9: { en: ["The box is open, and the door is open too."] },
  exampleAlsoDo10: { en: ["I turned off the fire, and so did he."] },
  proseAlsoIs: {
    en: [
      "**To say something is also like that**, put {{word:ye3}} before {{word:hen3}} and the adjective.",
      "",
      "**Thing + {{word:ye3}} + {{word:hen3}} + adjective**",
    ],
    tldr: {
      en: [
        "{{word:ye3}} {{word:hen3}} + adjective: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}, she's cold too.",
      ],
    },
    necessity: { en: ["Now you can say two things are alike."] },
  },
  exampleAlsoIs1: { en: ["I'm cold, and he's cold too."] },
  exampleAlsoIs2: { en: ["The air is cold too."] },
  exampleAlsoIs3: { en: ["The fire is hot, and the sun is hot too."] },
  exampleAlsoIs4: { en: ["The sun is round, and the moon is round too."] },
  exampleAlsoIs5: { en: ["Your home is far too."] },
  vocabDou: { en: ["all; shénme-dōu: everything"] },
  proseAll: {
    en: [
      "**To say they all do something**, put {{word:dou1}} (all) right before the verb, after the people or things.",
      "",
      "**People or things + {{word:dou1}} + verb**",
      "",
      "{{word:dou1}} comes after the who, like {{word:ye3}}. It never goes before a noun.",
    ],
    tldr: {
      en: [
        "Put {{word:dou1}} before the verb: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}, we all eat.",
      ],
    },
    necessity: { en: ["Now you can talk about every one of them."] },
  },
  exampleAll1: { en: ["We all eat."] },
  exampleAll2: { en: ["All plants need water."] },
  exampleAll3: { en: ["They're all well."] },
  exampleAll4: { en: ["The fruit is all eaten."] },
  exampleAll5: { en: ["The air outside is good."] },
  exampleAll6: { en: ["Where is the fire?"] },
  exampleAll7: { en: ["The doors are all open."] },
  exampleAll8: { en: ["The fires are all off."] },
  proseEverything: {
    en: [
      "**To say everything**, put {{word:shen2me}}-{{word:dou1}} before the verb.",
      "",
      "**Who + {{word:shen2me}}-{{word:dou1}} + verb**",
      "",
      "With {{word:bu4}} or {{word:mei2}}, it means nothing: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:bu4}} {{word:yao4}}, I don't want anything.",
      "{{word:na3li3}}-{{word:dou1}} means everywhere.",
    ],
    tldr: {
      en: [
        "{{word:shen2me}}-{{word:dou1}} + verb: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}, I eat everything.",
      ],
    },
    necessity: { en: ["Now you can say everything, and nothing."] },
  },
  exampleEverything1: { en: ["I eat everything."] },
  exampleEverything2: { en: ["He knows everything."] },
  exampleEverything3: { en: ["I don't want anything."] },
  exampleEverything4: { en: ["He didn't see anything."] },
  exampleEverything5: { en: ["There's air everywhere."] },
  vocabBufen: { en: ["part"] },
  prosePart: {
    en: [
      "**To say part of something**, use {{word:bu4fen}} (part).",
      "",
      "**{{word:zhe4}} / {{word:na4}} / {{word:da4}} + {{word:bu4fen}}**",
      "",
      "{{word:da4}} {{word:bu4fen}} (the big part) means most: {{Word:da4}} {{word:bu4fen}} {{word:ren2}}, most people.",
    ],
    tldr: {
      en: [
        "{{word:bu4fen}} means part. {{word:da4}} {{word:bu4fen}} means most.",
      ],
    },
    necessity: {
      en: ["Now you can talk about some of it, not all of it."],
    },
  },
  examplePart1: { en: ["This part is good."] },
  examplePart2: { en: ["That part is hot."] },
  examplePart3: { en: ["Most people eat rice."] },
  examplePart4: { en: ["Most plants are small."] },
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
          "{{word:ye3}} {{word:hen3}} + adjective: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}. (She's cold too.)",
        ],
      },
      {
        en: [
          "{{word:dou1}} + verb, all: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}. (We all eat.)",
        ],
      },
      {
        en: [
          "{{word:shen2me}}-{{word:dou1}} + verb, everything: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}. (I eat everything.) With {{word:bu4}}: nothing. {{word:na3li3}}-{{word:dou1}}: everywhere.",
        ],
      },
      {
        en: [
          "{{word:bu4fen}}, part: {{Word:zhe4}} {{word:bu4fen}} {{word:hen3}} {{word:hao3}}. (This part is good.) {{word:da4}} {{word:bu4fen}}: most.",
        ],
      },
    ],
  },
  exercise1: { en: ["I want some too."] },
  exercise2: { en: ["The water is hot too."] },
  exercise3: { en: ["We all want fruit."] },
  exercise4: { en: ["I eat everything."] },
  exercise5: { en: ["Most people eat rice."] },
  exercise6: { en: ["The plant is small."] },
  exercise7: { en: ["The fire is really hot."] },
  exercise8: { en: ["The air here is cold."] },
  exercise9: { en: ["Is the box open?"] },
  exercise10: { en: ["Turn off the fire!"] },
  answer1: { en: ["{{Word:wo3}} {{word:ye3}} {{word:yao4}}."] },
  answer2: {
    en: [
      "{{Word:shui3}} {{word:ye3}} {{word:hen3}} {{word:re4}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:yao4}} {{word:shui3guo3}}.",
    ],
  },
  answer4: {
    en: [
      "{{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}.",
    ],
  },
  answer5: {
    en: [
      "{{Word:da4}} {{word:bu4fen}} {{word:ren2}} {{word:chi1}} {{word:mi3fan4}}.",
    ],
  },
  answer6: { en: ["{{Word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}."] },
  answer7: { en: ["{{Word:huo3}} {{word:zhen1}} {{word:re4}}."] },
  answer8: {
    en: [
      "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:kong1qi4}} {{word:hen3}} {{word:leng3}}.",
    ],
  },
  answer9: { en: ["{{Word:he2zi}} {{word:kai1}} {{word:le}} {{word:ma}}?"] },
  answer10: { en: ["{{Word:guan1}} {{word:huo3}}!"] },
  faqMeToo: {
    question: { en: ["How do I say \"me too\"?"] },
    en: [
      "Say {{Word:wo3}} {{word:ye3}} {{word:shi4}}, or repeat the verb: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. {{word:ye3}} needs something after it, so {{word:wo3}} {{word:ye3}} alone isn't a sentence.",
    ],
  },
  faqMeiDidnt: {
    question: { en: ["Why is {{word:mei2}} used without {{word:you3}} here?"] },
    en: [
      "Before a verb, {{word:mei2}} means \"didn't\": {{Word:wo3}} {{word:mei2}} {{word:chi1}} (I didn't eat). That's why {{word:shen2me}}-{{word:dou1}} {{word:mei2}} is \"nothing\" for something that didn't happen, and {{word:shen2me}}-{{word:dou1}} {{word:bu4}} is for now or in general.",
    ],
  },
  faqAllPeople: {
    question: { en: ["How do I say \"all people\" if {{word:dou1}} can't go before a noun?"] },
    en: [
      "Put {{word:dou1}} after them, before the verb: {{Word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}} (Everyone needs water).",
    ],
  },
};

export default en;
