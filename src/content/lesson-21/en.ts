// English text for lesson-21, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Greetings and Feelings"] },
  summary: {
    en: [
      "Every day, we greet people and say how we feel.",
      "In this lesson, you'll be able to say \"Hello!\", \"What's your name?\", \"Eat!\", \"I feel cold.\", and \"I'm scared of bugs.\"",
    ],
  },
  vocabJuede: { en: ["feel, think"] },
  vocabPa: { en: ["be scared (of)"] },
  vocabJiao: { en: ["be called; call, make an animal sound"] },
  vocabShengyin: { en: ["sound, voice"] },
  vocabChongzi: { en: ["bug"] },
  vocabXing: { en: ["sex"] },
  proseHello: {
    en: [
      "**To say hello**, say {{word:ni3}} {{word:hao3}}.",
      "",
      "**{{Word:ni3}} {{word:hao3}}! / {{Word:ni3}} {{word:hao3}} {{word:ma}}?**",
      "",
      "To many people, say {{word:ni3}}-{{word:men}} {{word:hao3}}.",
    ],
    tldr: {
      en: [
        "{{Word:ni3}} {{word:hao3}}! means hello. {{Word:ni3}} {{word:hao3}} {{word:ma}}? means how are you?",
      ],
    },
    necessity: { en: ["It's the first thing you say to anyone."] },
  },
  exampleHello1: { en: ["Hello!"] },
  exampleHello2: { en: ["How are you?"] },
  exampleHello3: { en: ["I'm fine."] },
  exampleHello4: { en: ["I'm off. / Bye."] },
  proseName: {
    en: [
      "**To say your name**, use {{word:jiao4}} (be called), with the name in quotes.",
      "",
      '**Who + {{word:jiao4}} + "name"**',
      "",
      'Animals {{word:jiao4}} too: {{Word:dong4wu4}} {{word:jiao4}} "wang-wang" means the animal goes woof.',
    ],
    tldr: {
      en: [
        '{{word:jiao4}} + name: {{Word:wo3}} {{word:jiao4}} "Lisa", my name is Lisa.',
      ],
    },
    necessity: {
      en: ["Now you can tell people your name, and ask theirs."],
    },
  },
  exampleName1: { en: ["My name is Lisa."] },
  exampleName2: { en: ["What's your name?"] },
  exampleName3: { en: ["That animal goes woof woof."] },
  proseOrder: {
    en: [
      "**To tell someone to do something**, just say the verb. For don't, put {{word:bu4}} {{word:yao4}} first.",
      "",
      "**Verb! / {{word:bu4}} {{word:yao4}} + verb!**",
    ],
    tldr: {
      en: [
        "A verb on its own is an order: {{Word:chi1}}! (Eat!) {{word:bu4}} {{word:yao4}} + verb means don't.",
      ],
    },
    necessity: { en: ["Now you can ask people to do things."] },
  },
  exampleOrder1: { en: ["Eat!"] },
  exampleOrder2: { en: ["Wait!"] },
  exampleOrder3: { en: ["Don't talk!"] },
  exampleOrder4: { en: ["Don't be scared."] },
  proseFeel: {
    en: [
      "**To say how you feel**, put {{word:jue2de}} (feel) before the describing word.",
      "",
      "**Who + {{word:jue2de}} + describing word**",
      "",
      "{{word:pa4}} means be scared of: {{Word:wo3}} {{word:pa4}} {{word:chong2zi}}, I'm scared of bugs.",
    ],
    tldr: {
      en: [
        "{{word:jue2de}} + describing word says how you feel: {{Word:wo3}} {{word:jue2de}} {{word:leng3}}.",
      ],
    },
    necessity: { en: ["Now you can say how you feel."] },
  },
  exampleFeel1: { en: ["I feel good."] },
  exampleFeel2: { en: ["I feel cold."] },
  exampleFeel3: { en: ["Do you feel good?"] },
  exampleFeel4: { en: ["I'm scared of bugs."] },
  exampleFeel5: { en: ["She's scared of fire."] },
  exampleFeel6: { en: ["Sex and love are different."] },
  exampleFeel7: { en: ["They don't talk about sex."] },
  proseHear: {
    en: [
      "**To say you hear a sound**, say {{word:ting1}}-{{word:dao4}} (hear) and {{word:sheng1yin1}} (sound).",
      "",
      "**Who + {{word:ting1}}-{{word:dao4}} + {{word:sheng1yin1}}**",
    ],
    tldr: {
      en: [
        "{{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}} means hear a sound.",
      ],
    },
    necessity: { en: ["Now you can talk about what you hear."] },
  },
  exampleHear1: { en: ["I hear a strange sound."] },
  exampleHear2: { en: ["Your voice is nice."] },
  exampleHear3: { en: ["The bug's sound is quiet."] },
  exampleHear4: { en: ["There's a bug!"] },
  infoGreetingsAndFeelings: {
    title: { en: ["Greetings and Feelings"] },
    items: [
      {
        en: [
          "{{Word:ni3}} {{word:hao3}}!, hello. {{Word:ni3}} {{word:hao3}} {{word:ma}}?, how are you?",
        ],
      },
      {
        en: [
          "{{word:jiao4}} + \"name\": {{Word:wo3}} {{word:jiao4}} \"Lisa\". (My name is Lisa.) {{Word:ni3}} {{word:jiao4}} {{word:shen2me}}? (What's your name?)",
        ],
      },
      {
        en: [
          "A verb on its own is an order: {{Word:chi1}}! (Eat!) {{Word:bu4}} {{word:yao4}} + verb: don't.",
        ],
      },
      {
        en: [
          "{{word:jue2de}} + describing word, feel: {{Word:wo3}} {{word:jue2de}} {{word:leng3}}. (I feel cold.)",
        ],
      },
      {
        en: [
          "{{word:pa4}} + thing, scared of: {{Word:wo3}} {{word:pa4}} {{word:chong2zi}}. (I'm scared of bugs.)",
        ],
      },
    ],
  },
  exercise1: { en: ['His name is "Tom".'] },
  exercise2: { en: ["Hello, everyone!"] },
  exercise3: { en: ["Don't wait!"] },
  exercise4: { en: ["Do you feel cold?"] },
  exercise5: { en: ["I'm not scared."] },
  exercise6: { en: ["I hear a sound."] },
  exercise7: { en: ["There's a bug on my hand."] },
  exercise8: { en: ["Sex is not love."] },
  answer1: { en: ['{{Word:ta1}} {{word:jiao4}} "Tom".'] },
  answer2: { en: ["{{Word:ni3}}-{{word:men}} {{word:hao3}}!"] },
  answer3: { en: ["{{Word:bu4}} {{word:yao4}} {{word:deng3}}!"] },
  answer4: {
    en: [
      "{{Word:ni3}} {{word:jue2de}} {{word:leng3}} {{word:ma}}?",
    ],
  },
  answer5: { en: ["{{Word:wo3}} {{word:bu4}} {{word:pa4}}."] },
  answer6: {
    en: [
      "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:sheng1yin1}}.",
    ],
  },
  answer7: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:shang4}} {{word:you3}} {{word:chong2zi}}.",
    ],
  },
  answer8: {
    en: [
      "{{Word:xing4}} {{word:bu4}} {{word:shi4}} {{word:ai4}}.",
    ],
  },
};

export default en;
