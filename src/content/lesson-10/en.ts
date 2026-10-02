// English text for lesson-10, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Space 1 — Where it is"] },
  summary: {
    en: [
      "We often need to say where things are.",
      "In this lesson, you'll be able to say \"The box is on the floor.\", \"inside the house\", \"in front of me\", and \"Where is it?\"",
    ],
  },
  vocabLi: { en: ["in, inside"] },
  proseWhere: {
    en: [
      "**To say where someone or something is**, put {{word:zai4}} (be at) before the place.",
      "",
      "**Who + {{word:zai4}} + place**",
      "",
      'In Lesson 8, {{word:zai4}} before a verb meant "right now". Before a place, it means "is at".',
    ],
    tldr: {
      en: [
        "Put {{word:zai4}} before a place to say where someone is.",
      ],
    },
    necessity: { en: ["Now you can say where people and things are."] },
  },
  exampleWhere1: { en: ["I'm at home."] },
  exampleWhere2: { en: ["Are your parents at home?"] },
  exampleWhere3: { en: ["He's here."] },
  exampleWhere4: { en: ["He stays at home."] },
  exampleWhere5: { en: ["She might be at home."] },
  exampleWhere6: { en: ["He's at home again."] },
  vocabNali: { en: ["where"] },
  proseWhereQuestion: {
    en: [
      '**To ask "where?"**, put {{word:na3li3}} where the place would go.',
      "",
      "**Who + {{word:zai4}} {{word:na3li3}}?**",
      "",
      'Answer with {{word:zhe4}}-{{word:li3}} ("here") or {{word:na4}}-{{word:li3}} ("there").',
    ],
    tldr: {
      en: [
        '{{word:na3li3}} means "where". Answer with {{word:zhe4}}-{{word:li3}} (here) or {{word:na4}}-{{word:li3}} (there).',
      ],
    },
    necessity: { en: ["Now you can ask where things are."] },
  },
  exampleWhereQuestion1: { en: ["Where are you?"] },
  exampleWhereQuestion2: { en: ["Where is the box?"] },
  exampleWhereQuestion3: { en: ["It's over there."] },
  vocabShang: { en: ["on, up"] },
  vocabXia: { en: ["under, down"] },
  vocabMian: { en: ["side; joins a place word: lǐ-miàn, qián-miàn"] },
  vocabDi: { en: ["floor, ground"] },
  proseInOnUnder: {
    en: [
      "**To say in or on something**, join {{word:li3}} (in) or {{word:shang4}} (on) to the place.",
      "",
      "**Thing + {{word:zai4}} + place-{{word:li3}} / place-{{word:shang4}}**",
      "",
      "For under, say {{word:xia4}}-{{word:mian4}} (the bottom side): {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
    ],
    tldr: {
      en: [
        "Join {{word:li3}} (in) or {{word:shang4}} (on) to the place: {{word:he2zi}}-{{word:li3}}, in the box.",
      ],
    },
    necessity: { en: ["Now you can say exactly where something is."] },
  },
  exampleInOnUnder1: { en: ["The water is in the box."] },
  exampleInOnUnder2: { en: ["The tool is on the floor."] },
  exampleInOnUnder3: { en: ["The fruit is under the box."] },
  exampleInOnUnder4: { en: ["The clothes are in the house."] },
  exampleInOnUnder5: { en: ["My clothes are on the floor."] },
  exampleInOnUnder6: { en: ["There is water under the box."] },
  exampleInOnUnder7: { en: ["My feet are in the water."] },
  vocabQian: { en: ["front; qián-miàn: in front"] },
  vocabPang: { en: ["beside (in pángbiān)"] },
  vocabBian: { en: ["side"] },
  vocabPangbian: { en: ["beside, next to"] },
  proseSides: {
    en: [
      "**To say in front, behind, or beside**, join {{word:mian4}} (side) to {{word:qian2}} (front) or {{word:hou4}} (back), or use {{word:pang2bian1}} (beside).",
      "",
      "**Thing + {{word:zai4}} + X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:pang2bian1}}**",
      "",
      "{{word:mian4}} joins the others too: {{word:li3}}-{{word:mian4}} (inside), {{word:shang4}}-{{word:mian4}} (on top), {{word:xia4}}-{{word:mian4}} (below).",
      "{{word:pang2bian1}} is {{word:pang2}} (beside) + {{word:bian1}} (side). {{word:zhe4}}-{{word:bian1}} is this side, {{word:na4}}-{{word:bian1}} is that side.",
    ],
    tldr: {
      en: [
        "Join {{word:mian4}} to {{word:qian2}} or {{word:hou4}} for in front or behind. {{word:pang2bian1}} means beside.",
      ],
    },
    necessity: {
      en: ["Now you can place things around other things."],
    },
  },
  exampleSides1: { en: ["Someone is in front of me."] },
  exampleSides2: { en: ["The animal is behind the house."] },
  exampleSides3: { en: ["I'm beside you."] },
  exampleSides4: { en: ["She's inside."] },
  exampleSides5: { en: ["There is an animal in front of the house."] },
  exampleSides6: { en: ["My parents are beside me."] },
  exampleSides7: { en: ["The box is on that side."] },
  exampleSides8: { en: ["He's beside me."] },
  exampleSides9: { en: ["The fruit is beside the box."] },
  infoWhereThingsAre: {
    title: { en: ["Where Things Are"] },
    items: [
      {
        en: [
          "{{word:zai4}} + place: {{Word:wo3}} {{word:zai4}} {{word:jia1}}. (I'm at home.)",
        ],
      },
      {
        en: [
          "{{word:na3li3}}, where: {{Word:ni3}} {{word:zai4}} {{word:na3li3}}? (Where are you?)",
        ],
      },
      {
        en: [
          "place-{{word:li3}} (in), place-{{word:shang4}} (on): {{Word:shui3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}. (The water is in the box.)",
        ],
      },
      {
        en: [
          "X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:xia4}}-{{word:mian4}} / {{word:pang2bian1}}: {{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}. (I'm beside you.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Where is my tool?"] },
  exercise2: { en: ["The fruit is in the box."] },
  exercise3: { en: ["The box is on the floor."] },
  exercise4: { en: ["The animal is under the box."] },
  exercise5: { en: ["I'm in front of you."] },
  exercise6: { en: ["She is beside me."] },
  exercise7: { en: ["He is on this side."] },
  exercise8: { en: ["The man is beside the house."] },
  answer1: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:gong1ju4}} {{word:zai4}} {{word:na3li3}}?",
    ],
  },
  answer2: {
    en: [
      "{{Word:shui3guo3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:he2zi}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ],
  },
  answer4: {
    en: [
      "{{Word:dong4wu4}} {{word:zai4}} {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
    ],
  },
  answer5: {
    en: [
      "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
    ],
  },
  answer6: {
    en: [
      "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2bian1}}.",
    ],
  },
  answer7: {
    en: [
      "{{Word:ta1}} {{word:zai4}} {{word:zhe4}}-{{word:bian1}}.",
    ],
  },
  answer8: {
    en: [
      "{{Word:nan2ren2}} {{word:zai4}} {{word:jia1}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
    ],
  },
  faqZaiSameWord: {
    question: { en: ["Is {{word:zai4}} in {{word:zai4}} {{word:jia1}} the same word as in {{word:zai4}} {{word:chi1}}?"] },
    en: [
      "Yes. {{word:zai4}} means \"at\". {{Word:wo3}} {{word:zai4}} {{word:chi1}} is really \"I'm at eating\": you're in the middle of it.",
    ],
  },
  faqThingNeedsLi: {
    question: { en: ["Why is it {{word:zai4}} {{word:jia1}}, but {{word:zai4}} {{word:he2zi}}-{{word:li3}}?"] },
    en: [
      "A home is already a place. A thing like a box needs -{{word:li3}} or -{{word:shang4}} to become one: in the box, on the box. {{word:zai4}} {{word:he2zi}} on its own sounds wrong.",
    ],
  },
  faqLiOrLimian: {
    question: { en: ["What's the difference between -{{word:li3}} and {{word:li3}}-{{word:mian4}}?"] },
    en: [
      "-{{word:li3}} joins a place: {{word:he2zi}}-{{word:li3}}. {{word:li3}}-{{word:mian4}} can also stand on its own: {{Word:ta1}} {{word:zai4}} {{word:li3}}-{{word:mian4}} (She's inside).",
    ],
  },
};

export default en;
