// English text for greetings-and-feelings, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Greetings and Feelings"] },
  summary: {
    en: [
      "Every day, we greet people and say how we feel.",
      "In this lesson, you'll be able to say \"Hello!\", \"Thank you!\", \"What's your name?\", \"Eat!\", \"Don't laugh!\", \"I feel cold.\", and \"I'm scared of bugs.\"",
    ],
  },
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
  exampleHello5: { en: ["Where are you from?"] },
  exampleHello6: { en: ["You're back!"] },
  exampleHello7: { en: ["Hi! Come in and sit down!"] },
  vocabXie: { en: ["thank; xiè-xie: thank you"] },
  proseThanks: {
    en: [
      "**To say thank you**, say {{word:xie4}}-xie: {{word:xie4}} (thank) said twice, with the second one short and light.",
      "",
      "**{{word:xie4}}-xie! / {{word:xie4}}-xie {{word:ni3}}!**",
      "",
      "To answer, say {{word:bu4}} {{word:yong4}} {{word:xie4}}: \"no need to thank me\". Lesson {{lesson:doubling-words}} shows more words you can say twice.",
    ],
    tldr: {
      en: [
        "{{word:xie4}}-xie is thank you. {{word:bu4}} {{word:yong4}} {{word:xie4}} is you're welcome.",
      ],
    },
    necessity: { en: ["Now you can thank people."] },
  },
  exampleThanks1: { en: ["Thank you!"] },
  exampleThanks2: { en: ["Thank you!"] },
  exampleThanks3: { en: ["You're welcome."] },
  exampleThanks4: { en: ["Thank you for giving me water."] },
  vocabJiao: { en: ["be called; call, make an animal sound"] },
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
  exampleName4: { en: ["He's called Tom or Tim."] },
  vocabPa: { en: ["be scared (of)"] },
  vocabXiao: { en: ["laugh, smile"] },
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
  exampleOrder3: { en: ["Don't talk!"] },
  exampleOrder5: { en: ["Stay here!"] },
  exampleOrder6: { en: ["Don't touch my nose!"] },
  exampleOrder7: { en: ["Pass me the salt! (the thing that makes it taste good)"] },
  exampleOrder8: { en: ["If you're cold, come inside!"] },
  exampleOrder9: { en: ["One, two, three, go!"] },
  exampleOrder11: { en: ["Don't laugh!"] },
  vocabJuede: { en: ["feel, think"] },
  vocabChongzi: { en: ["bug"] },
  proseFeel: {
    en: [
      "**To say how you feel**, put {{word:jue2de}} (feel) before the adjective.",
      "",
      "**Who + {{word:jue2de}} + adjective**",
      "",
      "{{word:pa4}} means be scared of: {{Word:wo3}} {{word:pa4}} {{word:chong2zi}}, I'm scared of bugs.",
    ],
    tldr: {
      en: [
        "{{word:jue2de}} + adjective says how you feel: {{Word:wo3}} {{word:jue2de}} {{word:leng3}}.",
      ],
    },
    necessity: { en: ["Now you can say how you feel."] },
  },
  exampleFeel2: { en: ["I feel cold."] },
  exampleFeel4: { en: ["I'm scared of bugs."] },
  exampleFeel5: { en: ["She's scared of fire."] },
  exampleFeel8: { en: ["I feel good, because you've come."] },
  exampleFeel9: { en: ["Her animal died, and she feels bad."] },
  exampleFeel10: { en: ["I think this color is nice."] },
  exampleFeel12: { en: ["The animal lived, and I feel good."] },
  exampleFeel22: { en: ["I'm most scared of bugs."] },
  proseLaugh: {
    en: [
      "**To say someone laughs or smiles**, use {{word:xiao4}}.",
      "",
      "**Who + {{word:xiao4}}**",
    ],
    tldr: {
      en: [
        "{{word:xiao4}} is laugh or smile: {{Word:ta1}} {{word:xiao4}} {{word:le}}, she smiled.",
      ],
    },
    necessity: { en: ["Now you can say someone laughed."] },
  },
  exampleFeel13: { en: ["She smiled."] },
  exampleFeel14: { en: ["Why are you laughing?"] },
  vocabXin: { en: ["heart"] },
  proseHeart: {
    en: [
      "**To say how you are inside**, use {{word:xin1}} (heart). It joins other words.",
      "",
      "**{{word:kai1}}-{{word:xin1}} / {{word:xiao3}}-{{word:xin1}} / {{word:fang4}}-{{word:xin1}}**",
      "",
      "{{word:kai1}}-{{word:xin1}} (open heart) is \"happy\", {{word:xiao3}}-{{word:xin1}} (small heart) is \"careful\", and {{word:fang4}}-{{word:xin1}} (put the heart down) is \"don't worry\".",
    ],
    tldr: {
      en: [
        "{{word:kai1}}-{{word:xin1}} is happy, {{word:xiao3}}-{{word:xin1}} is careful, {{word:fang4}}-{{word:xin1}} is don't worry.",
      ],
    },
    necessity: { en: ["Now you can say you're happy, and tell someone to be careful."] },
  },
  exampleFeel17: { en: ["I'm very happy."] },
  exampleFeel18: { en: ["Are you happy?"] },
  exampleFeel19: { en: ["Welcome! I'm so glad you came!"] },
  exampleFeel20: { en: ["Be careful!"] },
  exampleFeel21: { en: ["Don't worry, it doesn't matter."] },
  exampleFeel23: { en: ["I don't feel well. I want to lie down."] },
  vocabShengyin: { en: ["sound, voice"] },
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
  exampleHear5: { en: ["I heard a word I'd never heard before."] },
  exampleHear6: { en: ["I hear a sound. What happened?"] },
  exampleHear7: { en: ["I hear an animal flying."] },
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
          "{{word:jue2de}} + adjective, feel: {{Word:wo3}} {{word:jue2de}} {{word:leng3}}. (I feel cold.)",
        ],
      },
      {
        en: [
          "{{word:pa4}} + thing, scared of: {{Word:wo3}} {{word:pa4}} {{word:chong2zi}}. (I'm scared of bugs.)",
        ],
      },
      {
        en: [
          "{{word:xie4}}-xie, thank you: {{Word:xie4}}-xie {{word:ni3}}! (Thank you!) {{Word:bu4}} {{word:yong4}} {{word:xie4}}. (You're welcome.)",
        ],
      },
      {
        en: [
          "{{word:kai1}}-{{word:xin1}}, happy: {{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}. (I'm very happy.) {{Word:xiao3}}-{{word:xin1}}! (Be careful!)",
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
  exercise8: { en: ["I'm coming right now!"] },
  exercise9: { en: ["Don't laugh at me!"] },
  exercise10: { en: ["Thank you for giving me fruit."] },
  exercise11: { en: ["You're welcome."] },
  exercise12: { en: ["I'm very happy."] },
  exercise13: { en: ["Be careful!"] },
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
  answer8: { en: ["{{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:lai2}}!"] },
  answer9: { en: ["{{Word:bu4}} {{word:yao4}} {{word:xiao4}} {{word:wo3}}!"] },
  answer10: { en: ["{{Word:xie4}}-xie {{word:ni3}} {{word:gei3}} {{word:wo3}} {{word:shui3guo3}}."] },
  answer11: { en: ["{{Word:bu4}} {{word:yong4}} {{word:xie4}}."] },
  answer12: { en: ["{{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}."] },
  answer13: { en: ["{{Word:xiao3}}-{{word:xin1}}!"] },
  faqNihaoma: {
    question: { en: ["Is {{word:ni3}} {{word:hao3}} {{word:ma}} like \"How are you?\""] },
    en: [
      "It is, but people don't say it as often as English speakers say \"How are you?\". It's a real question, mostly for someone you haven't seen in a while. {{Word:ni3}} {{word:hao3}}! is the everyday hello.",
    ],
  },
  faqJuedeThink: {
    question: { en: ["Can I use {{word:jue2de}} for \"I think\"?"] },
    en: [
      "Yes. {{word:jue2de}} works for opinions too: {{Word:wo3}} {{word:jue2de}} {{word:zhe4}}-ge {{word:hen3}} {{word:hao3}} (I think this is good).",
    ],
  },
};

export default en;
