// English text for moving, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Space 2 — Moving"] },
  summary: {
    en: [
      "We often talk about coming and going.",
      "In this lesson, you'll be able to say \"Where do you come from?\", \"Go!\", \"Get up!\", \"I've arrived home.\", and \"I'm going outside.\"",
    ],
  },
  vocabLai: { en: ["come"] },
  vocabQu: { en: ["go"] },
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
  exampleComeGo1: { en: ["I'm going to my parents' home."] },
  exampleComeGo2: { en: ["Are you coming to my home?"] },
  exampleComeGo3: { en: ["Go!"] },
  exampleComeGo4: { en: ["Come!"] },
  exampleComeGo6: { en: ["After eating, we go to your home."] },
  exampleComeGo7: { en: ["He comes over beside me."] },
  exampleComeGo9: { en: ["Come here a moment."] },
  exampleComeGo10: { en: ["You're here again!"] },
  vocabCong: { en: ["from"] },
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
  exampleFrom1: { en: ["I come from my parents' home."] },
  exampleFrom2: { en: ["He comes from home."] },
  exampleFrom3: { en: ["Where do you come from?"] },
  exampleFrom4: { en: ["He comes from the front."] },
  vocabDao: { en: ["arrive, to"] },
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
  exampleArrive2: { en: ["She got to that place."] },
  exampleArrive3: { en: ["When do you arrive?"] },
  vocabQi: { en: ["rise; qǐ-lái: get up"] },
  vocabWai: { en: ["out; wài-miàn: outside"] },
  vocabKou: { en: ["opening, door"] },
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
  exampleDirection7: { en: ["Go outside through this opening."] },
  exampleDirection8: { en: ["The box's opening is small."] },
  exampleDirection9: { en: ["Where is the door?"] },
  vocabDong: { en: ["move"] },
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
  vocabYuan: { en: ["far"] },
  vocabFujin: { en: ["nearby, the area near"] },
  proseFar: {
    en: [
      "**To say a place is far**, put {{word:hen3}} {{word:yuan3}} (very far) after it. **To say something is near**, put {{word:fu4jin4}} (nearby) after {{word:zai4}}, or after {{word:zai4}} and a place.",
      "",
      "**Place + {{word:hen3}} + {{word:yuan3}} / Thing + {{word:zai4}} (+ place) + {{word:fu4jin4}}**",
      "",
      "{{word:fu4jin4}} is a place word, like {{word:pang2bian1}}: say {{word:zai4}} {{word:fu4jin4}}, not {{word:hen3}} {{word:fu4jin4}}.",
    ],
    tldr: {
      en: [
        "{{word:yuan3}} is far: {{word:hen3}} {{word:yuan3}}. {{word:fu4jin4}} is nearby: {{word:zai4}} {{word:fu4jin4}}.",
      ],
    },
    necessity: { en: ["Now you can say how far you have to go."] },
  },
  exampleFar1: { en: ["That place is far."] },
  exampleFar2: { en: ["My home is nearby."] },
  exampleFar3: { en: ["Is your home far?"] },
  exampleFar4: { en: ["We go somewhere nearby."] },
  exampleFar5: { en: ["He comes from far away."] },
  exampleFar6: { en: ["Is there water near home?"] },
  vocabLu: { en: ["road, path, way"] },
  proseRoad: {
    en: [
      "**To talk about the way to a place**, use {{word:lu4}} (road, way).",
      "",
      "**{{word:lu4}} {{word:hen3}} {{word:yuan3}} / {{word:zhi1dao4}} {{word:lu4}} / {{word:lu4}}-{{word:shang4}}**",
    ],
    tldr: {
      en: [
        "{{word:lu4}} is the road or the way: {{Word:lu4}} {{word:hen3}} {{word:yuan3}}, it's a long way.",
      ],
    },
    necessity: { en: ["Now you can ask the way."] },
  },
  exampleFar7: { en: ["It's a long way."] },
  exampleFar8: { en: ["Do you know the way?"] },
  exampleFar9: { en: ["There are lots of people on the road."] },
  exampleFar10: { en: ["My home is on the left side of the road."] },
  infoComingAndGoing: {
    title: { en: ["Coming and Going"] },
    items: [
      {
        en: [
          "{{word:lai2}} / {{word:qu4}} + place: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}}. (I'm going to my parents' home.)",
        ],
      },
      {
        en: [
          "{{word:cong2}} + place + {{word:lai2}}: {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}}. (I come from home.)",
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
          "{{word:yuan3}} / {{word:fu4jin4}}, far / nearby: {{Word:na4}}-ge {{word:di4fang1}} {{word:hen3}} {{word:yuan3}}. (That place is far.) {{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}. (My home is nearby.)",
        ],
      },
      {
        en: [
          "{{word:lu4}}, road, way: {{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}? (Do you know the way?)",
        ],
      },
    ],
  },
  exercise1: { en: ["Where are you going?"] },
  exercise2: { en: ["She comes from home."] },
  exercise3: { en: ["We arrived home."] },
  exercise4: { en: ["Get up!"] },
  exercise5: { en: ["The animal is outside."] },
  exercise6: { en: ["The box's opening is big."] },
  exercise7: { en: ["Come down!"] },
  exercise8: { en: ["Don't move!"] },
  exercise9: { en: ["My parents' home is far."] },
  exercise10: { en: ["My home is nearby."] },
  exercise11: { en: ["Do you know the way?"] },
  answer1: { en: ["{{Word:ni3}} {{word:qu4}} {{word:na3li3}}?"] },
  answer2: {
    en: [
      "{{Word:ta1}} {{word:cong2}} {{word:jia1}} {{word:lai2}}.",
    ],
  },
  answer3: { en: ["{{Word:wo3}}-{{word:men}} {{word:dao4}} {{word:jia1}} {{word:le}}."] },
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
  answer9: { en: ["{{Word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:yuan3}}."] },
  answer10: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}.",
    ],
  },
  answer11: { en: ["{{Word:ni3}} {{word:zhi1dao4}} {{word:lu4}} {{word:ma}}?"] },
  faqDaoOrQu: {
    question: { en: ["What's the difference between {{word:qu4}} and {{word:dao4}}?"] },
    en: [
      "{{word:qu4}} is going toward a place. {{word:dao4}} is getting there: {{Word:wo3}} {{word:qu4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} (I'm on my way), {{Word:wo3}} {{word:dao4}} {{word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:le}} (I'm there now).",
    ],
  },
  faqCongOrder: {
    question: { en: ["Why does the place go in the middle of {{word:cong2}} … {{word:lai2}}?"] },
    en: [
      "In Chinese, \"from where\" comes before the verb, like most details about an action. {{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}} is \"I from home come\".",
    ],
  },
  faqLaiOrQu: {
    question: { en: ["How do I choose between {{word:lai2}} and {{word:qu4}}?"] },
    en: [
      "It depends on where the speaker is. {{word:lai2}} moves toward the speaker, {{word:qu4}} moves away. Someone downstairs calls {{word:xia4}}-{{word:lai2}}! (Come down!). Someone upstairs says {{word:xia4}}-{{word:qu4}}! (Go down!).",
    ],
  },
};

export default en;
