// English text for lesson-15, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 4 — Becoming and making"] },
  summary: {
    en: [
      "Things change, and we often make them change.",
      "In this lesson, you'll be able to say \"It got better.\", \"The fruit went bad.\", \"I fixed it.\", and \"He's very strong.\"",
    ],
  },
  vocabHuai: { en: ["bad, broken"] },
  proseChanged: {
    en: [
      "**To say something changed**, put {{word:le}} after the adjective.",
      "",
      "**Thing + adjective + {{word:le}}**",
    ],
    tldr: {
      en: [
        "{{word:le}} after an adjective means it changed: {{Word:shui3}} {{word:re4}} {{word:le}}, the water got hot.",
      ],
    },
    necessity: { en: ["Now you can say how things turned out."] },
  },
  exampleChanged1: { en: ["The water got hot."] },
  exampleChanged2: { en: ["It's better now."] },
  exampleChanged3: { en: ["The fruit went bad."] },
  exampleChanged4: { en: ["The tool is broken."] },
  vocabBian: { en: ["become, change"] },
  vocabNi: { en: ["mud, paste"] },
  proseBecame: {
    en: [
      "**To say something became different**, put {{word:bian4}} (become) before the adjective, and {{word:le}} after.",
      "",
      "**Thing + {{word:bian4}} + adjective + {{word:le}}**",
    ],
    tldr: {
      en: [
        "{{word:bian4}} + adjective + {{word:le}} means it became that.",
      ],
    },
    necessity: { en: ["Now you can describe a change."] },
  },
  exampleBecame1: { en: ["The water turned cold."] },
  exampleBecame2: { en: ["He got better."] },
  exampleBecame3: { en: ["The air turned hot."] },
  exampleBecame4: { en: ["The water turned into mud."] },
  exampleBecame5: { en: ["There's mud on the floor."] },
  vocabNong: { en: ["do, make"] },
  vocabDe: { en: ["get"] },
  proseMake: {
    en: [
      "**To say you make something so**, put {{word:nong4}} (do, make) before the result.",
      "",
      "**Who + {{word:nong4}} + result**",
      "",
      '{{word:nong4}} {{word:hao3}} is "fix it", and {{word:nong4}} {{word:huai4}} is "break it". {{word:de2}} means get: {{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}? (What did you get?)',
    ],
    tldr: {
      en: [
        "{{word:nong4}} + result: {{word:nong4}} {{word:hao3}} means fix it.",
      ],
    },
    necessity: { en: ["Now you can say what you did to something."] },
  },
  exampleMake1: { en: ["I fixed it."] },
  exampleMake2: { en: ["You broke it."] },
  exampleMake3: { en: ["Can you fix it?"] },
  exampleMake4: { en: ["What did you get?"] },
  exampleMake5: { en: ["I got new clothes."] },
  vocabBa: { en: ["puts the thing first: bǎ + thing + action"] },
  proseBa: {
    en: [
      "**To say what you do to a thing**, put {{word:ba3}} and the thing before the action.",
      "",
      "**Who + {{word:ba3}} + thing + {{word:nong4}} + result**",
    ],
    tldr: {
      en: [
        "{{word:ba3}} + thing comes before the action: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
      ],
    },
    necessity: {
      en: ["Now you can say exactly which thing you changed."],
    },
  },
  exampleBa1: { en: ["I fixed the tool."] },
  exampleBa2: { en: ["He broke the box."] },
  exampleBa3: { en: ["Heat up the water."] },
  exampleBa4: { en: ["He made the opening bigger."] },
  exampleBa5: { en: ["He made all the water hot."] },
  vocabFang: { en: ["put"] },
  proseFang: {
    en: [
      "**To say where you put a thing**, put {{word:ba3}} and the thing first, then {{word:fang4}} {{word:zai4}} (put at) and the place.",
      "",
      "**Who + {{word:ba3}} + thing + {{word:fang4}} {{word:zai4}} + place**",
    ],
    tldr: {
      en: [
        "{{word:ba3}} + thing + {{word:fang4}} {{word:zai4}} + place says where you put it.",
      ],
    },
    necessity: {
      en: ["Now you can say where things go."],
    },
  },
  exampleFang1: { en: ["I put the clothes on the floor."] },
  exampleFang2: { en: ["He put the tool in the box."] },
  exampleFang3: { en: ["Put the fruit here."] },
  exampleFang4: { en: ["Where did you put my money?"] },
  vocabLiliang: { en: ["strength; yǒu lìliàng: strong"] },
  proseStrong: {
    en: [
      '**To say strong**, say {{word:you3}} {{word:li4liang4}}, "have strength".',
      "",
      "**Who + {{word:hen3}} {{word:you3}} {{word:li4liang4}}**",
    ],
    tldr: {
      en: [
        "{{word:you3}} {{word:li4liang4}}, have strength, means strong.",
      ],
    },
    necessity: {
      en: [
        "When there's no word for something, you can build it from words you know.",
      ],
    },
  },
  exampleStrong1: { en: ["He's very strong."] },
  exampleStrong2: { en: ["I have no strength."] },
  exampleStrong3: { en: ["Your hands are very strong."] },
  exampleStrong4: { en: ["His body is strong."] },
  infoBecomingAndMaking: {
    title: { en: ["Becoming and Making"] },
    items: [
      {
        en: [
          "adjective + {{word:le}}, it changed: {{Word:shui3}} {{word:re4}} {{word:le}}. (The water got hot.)",
        ],
      },
      {
        en: [
          "{{word:bian4}} + adjective + {{word:le}}, became: {{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}. (The water turned cold.)",
        ],
      },
      {
        en: [
          "{{word:nong4}} + result, make it so: {{Word:wo3}} {{word:nong4}} {{word:hao3}} {{word:le}}. (I fixed it.)",
        ],
      },
      {
        en: [
          "{{word:ba3}} + thing + {{word:nong4}} + result: {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}. (I fixed the tool.)",
        ],
      },
      {
        en: [
          "{{word:ba3}} + thing + {{word:fang4}} {{word:zai4}} + place, put: {{Word:wo3}} {{word:ba3}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:di4}}-{{word:shang4}} {{word:le}}. (I put the clothes on the floor.)",
        ],
      },
      {
        en: [
          "{{word:you3}} {{word:li4liang4}}, strong: {{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}. (He's very strong.)",
        ],
      },
    ],
  },
  exercise1: { en: ["The rice got cold."] },
  exercise2: { en: ["My tool is broken."] },
  exercise3: { en: ["The water became hot."] },
  exercise4: { en: ["I fixed the box."] },
  exercise5: { en: ["She is very strong."] },
  exercise6: { en: ["What did he get?"] },
  exercise7: { en: ["There's mud on my clothes."] },
  exercise8: { en: ["Put the box here."] },
  answer1: { en: ["{{Word:mi3fan4}} {{word:leng3}} {{word:le}}."] },
  answer2: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:gong1ju4}} {{word:huai4}} {{word:le}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:shui3}} {{word:bian4}} {{word:re4}} {{word:le}}.",
    ],
  },
  answer4: {
    en: [
      "{{Word:wo3}} {{word:ba3}} {{word:he2zi}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
    ],
  },
  answer5: {
    en: [
      "{{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}.",
    ],
  },
  answer6: {
    en: [
      "{{Word:ta1}} {{word:de2}} {{word:le}} {{word:shen2me}}?",
    ],
  },
  answer7: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:yi1fu}}-{{word:shang4}} {{word:you3}} {{word:ni2}}.",
    ],
  },
  answer8: {
    en: ["{{Word:ba3}} {{word:he2zi}} {{word:fang4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}."],
  },
  faqLeSameWord: {
    question: { en: ["Is this {{word:le}} the same as in Lesson 8?"] },
    en: [
      "It's the same word, with a slightly different job. After a verb, it says the action is done. After an adjective, it says something changed: {{Word:shui3}} {{word:re4}} {{word:le}} (The water got hot).",
    ],
  },
  faqWhenBa: {
    question: { en: ["When do I use {{word:ba3}}?"] },
    en: [
      "When you do something to a thing, and it ends up a certain way: fixed, broken, finished. {{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:huai4}} {{word:le}} (I broke the tool). Just looking at a thing doesn't change it, so {{Word:wo3}} {{word:kan4}} {{word:gong1ju4}} has no {{word:ba3}}.",
    ],
  },
  faqBianOrLe: {
    question: { en: ["Is there a difference between {{word:leng3}} {{word:le}} and {{word:bian4}} {{word:leng3}} {{word:le}}?"] },
    en: [
      "Both say it got cold. {{word:bian4}} makes the change itself the point: it turned cold.",
    ],
  },
};

export default en;
