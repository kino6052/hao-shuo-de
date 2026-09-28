// English text for lesson-11, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Space 2 — Moving"] },
  summary: {
    en: [
      "We often talk about coming and going.",
      "In this lesson, you'll be able to say \"I come from the market.\", \"Go!\", \"Get up!\", \"I've arrived home.\", and \"I'm going outside.\"",
    ],
  },
  vocabCong: { en: ["from"] },
  vocabLai: { en: ["come"] },
  vocabQu: { en: ["go"] },
  vocabQi: { en: ["rise; qǐ-lái: get up"] },
  vocabWai: { en: ["out; wài-miàn: outside"] },
  vocabShichang: { en: ["market"] },
  vocabKou: { en: ["opening, door"] },
  vocabDao: { en: ["arrive, to"] },
  vocabDong: { en: ["move"] },
  vocabYuan: { en: ["far"] },
  vocabJin: { en: ["near"] },
  proseComeGo: {
    en: [
      "**To say you come or go somewhere**, put {{word:lai2}} (come) or {{word:qu4}} (go) before the place.",
      "",
      "**Who + {{word:lai2}} / {{word:qu4}} + place**",
      "",
      "On its own, it's an order: {{Word:qu4}}! (Go!)",
    ],
    tldr: {
      en: [
        "{{word:lai2}} is come, {{word:qu4}} is go. Put the place after them.",
      ],
    },
    necessity: { en: ["Now you can say where you're going."] },
  },
  exampleComeGo1: { en: ["I'm going to the market."] },
  exampleComeGo2: { en: ["Are you coming to my home?"] },
  exampleComeGo3: { en: ["Go!"] },
  exampleComeGo4: { en: ["Come!"] },
  exampleComeGo5: { en: ["I've been to the market."] },
  exampleComeGo6: { en: ["After eating, we go to the market."] },
  exampleComeGo7: { en: ["He comes over beside me."] },
  exampleComeGo8: { en: ["We're going to the market now."] },
  exampleComeGo9: { en: ["Come here a moment."] },
  proseFrom: {
    en: [
      "**To say where you come from**, put {{word:cong2}} (from) before the place, then {{word:lai2}}.",
      "",
      "**Who + {{word:cong2}} + place + {{word:lai2}}**",
    ],
    tldr: {
      en: ["Put {{word:cong2}} before the place you come from."],
    },
    necessity: { en: ["Now you can say where someone comes from."] },
  },
  exampleFrom1: { en: ["I come from the market."] },
  exampleFrom2: { en: ["He comes from home."] },
  exampleFrom3: { en: ["Where do you come from?"] },
  exampleFrom4: { en: ["He comes from the front."] },
  proseArrive: {
    en: [
      "**To say you arrive somewhere**, put {{word:dao4}} (arrive) before the place.",
      "",
      "**Who + {{word:dao4}} + place + {{word:le}}**",
    ],
    tldr: {
      en: [
        "Put {{word:dao4}} before a place to say you arrive there.",
      ],
    },
    necessity: { en: ["Now you can say you got there."] },
  },
  exampleArrive1: { en: ["I've arrived home."] },
  exampleArrive2: { en: ["She got to the market."] },
  exampleArrive3: { en: ["When do you arrive?"] },
  proseDirection: {
    en: [
      "**To say which way you move**, join {{word:qi3}} (up), {{word:shang4}} (up), or {{word:xia4}} (down) to {{word:lai2}} or {{word:qu4}}.",
      "",
      "**{{word:qi3}}-{{word:lai2}} / {{word:shang4}}-{{word:lai2}} / {{word:xia4}}-{{word:lai2}}**",
      "",
      "{{word:qi3}}-{{word:lai2}} is get up. {{word:shang4}}-{{word:lai2}} is come up, and {{word:xia4}}-{{word:lai2}} is come down. Use {{word:qu4}} for going away: {{word:shang4}}-{{word:qu4}}, go up.",
      "{{word:wai4}}-{{word:mian4}} is outside, and {{word:kou3}} is an opening, like a door.",
    ],
    tldr: {
      en: [
        "{{word:qi3}}-{{word:lai2}} is get up. {{word:wai4}}-{{word:mian4}} is outside.",
      ],
    },
    necessity: { en: ["Now you can say up, down, and out."] },
  },
  exampleDirection1: { en: ["Get up!"] },
  exampleDirection2: { en: ["I got up."] },
  exampleDirection3: { en: ["Come down!"] },
  exampleDirection4: { en: ["He went up."] },
  exampleDirection5: { en: ["I'm going outside."] },
  exampleDirection6: { en: ["She's outside."] },
  exampleDirection7: { en: ["Go outside through this opening."] },
  exampleDirection8: { en: ["The box's opening is small."] },
  exampleDirection9: { en: ["Where is the door?"] },
  proseMove: {
    en: [
      "**To say something moves**, use {{word:dong4}} (move).",
      "",
      "**Who + {{word:dong4}}**",
      "",
      "{{Word:bu4}} {{word:yao4}} {{word:dong4}}! means \"Don't move!\" And {{word:dong4wu4}} (animal) is a \"moving thing\".",
    ],
    tldr: {
      en: [
        "{{word:dong4}} means move: {{Word:ta1}} {{word:dong4}} {{word:le}}, it moved.",
      ],
    },
    necessity: {
      en: [
        "Now you can say something is moving, or tell it to stop.",
      ],
    },
  },
  exampleMove1: { en: ["It moved."] },
  exampleMove2: { en: ["Don't move!"] },
  exampleMove3: { en: ["The animal is moving."] },
  exampleMove4: { en: ["Can you move?"] },
  proseFar: {
    en: [
      "**To say a place is far or near**, use {{word:yuan3}} (far) or {{word:jin4}} (near).",
      "",
      "**Place + {{word:hen3}} + {{word:yuan3}} / {{word:jin4}}**",
    ],
    tldr: {
      en: [
        "{{word:yuan3}} is far, {{word:jin4}} is near: {{Word:shi4chang3}} {{word:hen3}} {{word:yuan3}}.",
      ],
    },
    necessity: { en: ["Now you can say how far you have to go."] },
  },
  exampleFar1: { en: ["The market is far."] },
  exampleFar2: { en: ["My home is near."] },
  exampleFar3: { en: ["Is your home far?"] },
  exampleFar4: { en: ["We go to the nearby market."] },
  exampleFar5: { en: ["He comes from far away."] },
  infoComingAndGoing: {
    title: { en: ["Coming and Going"] },
    items: [
      {
        en: [
          "{{word:lai2}} / {{word:qu4}} + place: {{Word:wo3}} {{word:qu4}} {{word:shi4chang3}}. (I'm going to the market.)",
        ],
      },
      {
        en: [
          "{{word:cong2}} + place + {{word:lai2}}: {{Word:wo3}} {{word:cong2}} {{word:shi4chang3}} {{word:lai2}}. (I come from the market.)",
        ],
      },
      {
        en: [
          "{{word:dao4}} + place, arrive: {{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}. (I've arrived home.)",
        ],
      },
      {
        en: [
          "{{word:qi3}}-{{word:lai2}} (get up), {{word:shang4}}-{{word:lai2}} (come up), {{word:xia4}}-{{word:lai2}} (come down); with {{word:qu4}} for going away.",
        ],
      },
      {
        en: [
          "{{word:dong4}}, move: {{Word:bu4}} {{word:yao4}} {{word:dong4}}! (Don't move!)",
        ],
      },
      {
        en: [
          "{{word:yuan3}} / {{word:jin4}}, far / near: {{Word:shi4chang3}} {{word:hen3}} {{word:yuan3}}. (The market is far.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Where are you going?"] },
  exercise2: { en: ["She comes from home."] },
  exercise3: { en: ["We arrived at the market."] },
  exercise4: { en: ["Get up!"] },
  exercise5: { en: ["The animal is outside."] },
  exercise6: { en: ["The box's opening is big."] },
  exercise7: { en: ["Come down!"] },
  exercise8: { en: ["Don't move!"] },
  exercise9: { en: ["The market is far."] },
  exercise10: { en: ["My home is near."] },
  answer1: { en: ["{{Word:ni3}} {{word:qu4}} {{word:na3li3}}?"] },
  answer2: {
    en: [
      "{{Word:ta1}} {{word:cong2}} {{word:jia1}} {{word:lai2}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:wo3}}-{{word:men}} {{word:dao4}} {{word:shi4chang3}} {{word:le}}.",
    ],
  },
  answer4: { en: ["{{Word:qi3}}-{{word:lai2}}!"] },
  answer5: {
    en: [
      "{{Word:dong4wu4}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
    ],
  },
  answer6: {
    en: [
      "{{Word:he2zi}}-{{word:de}} {{word:kou3}} {{word:hen3}} {{word:da4}}.",
    ],
  },
  answer7: { en: ["{{Word:xia4}}-{{word:lai2}}!"] },
  answer8: { en: ["{{Word:bu4}} {{word:yao4}} {{word:dong4}}!"] },
  answer9: {
    en: ["{{Word:shi4chang3}} {{word:hen3}} {{word:yuan3}}."],
  },
  answer10: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:jin4}}.",
    ],
  },
};

export default en;
