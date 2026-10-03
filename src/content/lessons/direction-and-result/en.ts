// English text for direction-and-result, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Verbs 2 — Direction and result"] },
  summary: {
    en: [
      "A verb can say more than the action: which way it goes, and how it ends.",
      "In this lesson, you'll be able to say \"Come in!\", \"He took out the money.\", \"I found it.\", and \"I can't see it.\"",
    ],
  },
  vocabNa: { en: ["take, pick up, hold"] },
  proseTowardAway: {
    en: [
      "**To say which way an action goes**, put {{word:lai2}} (toward you) or {{word:qu4}} (away from you) right after the verb.",
      "",
      "**verb-{{word:lai2}} / verb-{{word:qu4}}**",
      "",
      "{{word:na2}}-{{word:lai2}} is \"bring\", and {{word:na2}}-{{word:qu4}} is \"take away\". Put the thing first with {{word:ba3}} (Lesson {{lesson:becoming-and-making}}): {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}!",
    ],
    tldr: {
      en: [
        "verb-{{word:lai2}} comes toward you, verb-{{word:qu4}} goes away: {{word:na2}}-{{word:lai2}} is bring.",
      ],
    },
    necessity: { en: ["Now you can say bring and take away."] },
  },
  exampleTowardAway1: { en: ["You take this one."] },
  exampleTowardAway2: { en: ["Bring the water!"] },
  exampleTowardAway3: { en: ["I brought the fruit."] },
  exampleTowardAway4: { en: ["He took the box away."] },
  exampleTowardAway5: { en: ["Take your clothes away!"] },
  vocabJin: { en: ["go in, enter"] },
  vocabChu: { en: ["go out, come out"] },
  vocabHui: { en: ["go back, come back"] },
  proseInOut: {
    en: [
      "**To say in, out, and back**, use {{word:jin4}} (go in), {{word:chu1}} (go out), and {{word:hui2}} (go back). Add {{word:lai2}} or {{word:qu4}} to show which way, like {{word:shang4}}-{{word:lai2}} (Lesson {{lesson:moving}}).",
      "",
      "**{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:jin4}}-{{word:lai2}} is \"come in\", toward the speaker. {{word:chu1}}-{{word:qu4}} is \"go out\", away from the speaker. A place goes right after: {{word:hui2}} {{word:jia1}} is \"go home\".",
    ],
    tldr: {
      en: [
        "{{word:jin4}} is in, {{word:chu1}} is out, {{word:hui2}} is back. Add {{word:lai2}} or {{word:qu4}}: {{word:jin4}}-{{word:lai2}}!",
      ],
    },
    necessity: { en: ["Now you can come in, go out, and go home."] },
  },
  exampleInOut1: { en: ["Come in!"] },
  exampleInOut2: { en: ["Don't go in!"] },
  exampleInOut3: { en: ["He went out."] },
  exampleInOut4: { en: ["The animal came out of the box."] },
  exampleInOut5: { en: ["Let's go out and play nearby."] },
  exampleInOut6: { en: ["I want to go home."] },
  exampleInOut7: { en: ["Mom and Dad are back."] },
  exampleInOut8: { en: ["Did she go back?"] },
  vocabZuo: { en: ["sit"] },
  vocabZhan: { en: ["stand"] },
  vocabTang: { en: ["lie"] },
  vocabFei: { en: ["fly"] },
  proseBody: {
    en: [
      "**To say sit, stand, and lie down**, use {{word:zuo4}} (sit), {{word:zhan4}} (stand), and {{word:tang3}} (lie). Add direction words for the movement.",
      "",
      "**{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}}**",
      "",
      "To say where, add {{word:zai4}} and the place: {{word:zuo4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}, sit on the floor. {{word:fei1}} (fly) takes direction words too: {{word:fei1}}-{{word:shang4}}-{{word:qu4}}, fly up.",
    ],
    tldr: {
      en: [
        "{{word:zuo4}}-{{word:xia4}} is sit down, {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} is stand up, {{word:tang3}}-{{word:xia4}} is lie down.",
      ],
    },
    necessity: { en: ["Now you can sit down, stand up, and lie down."] },
  },
  exampleBody1: { en: ["Sit down!"] },
  exampleBody2: { en: ["I'm sitting on the floor."] },
  exampleBody3: { en: ["They all stood up."] },
  exampleBody4: { en: ["He's standing in front of me."] },
  exampleBody5: { en: ["I want to lie down."] },
  exampleBody6: { en: ["The animal is lying on the ground."] },
  exampleBody7: { en: ["The animal flew up."] },
  exampleBody8: { en: ["It flew back."] },
  proseMoveThing: {
    en: [
      "**To say which way you move a thing**, put the direction words right after the verb: {{word:shang4}}, {{word:xia4}}, {{word:jin4}}, {{word:chu1}}, {{word:hui2}}, or {{word:qi3}}, then {{word:lai2}} or {{word:qu4}}.",
      "",
      "**Who + {{word:ba3}} + thing + verb-direction-{{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:ba3}} puts the thing first, so the direction words stay together. {{word:na2}}-{{word:chu1}}-{{word:lai2}} is \"take out\", {{word:na2}}-{{word:qi3}}-{{word:lai2}} is \"pick up\", and {{word:fang4}}-{{word:xia4}} is \"put down\".",
    ],
    tldr: {
      en: [
        "Put direction words after the verb: {{word:na2}}-{{word:chu1}}-{{word:lai2}}, take out; {{word:fang4}}-{{word:xia4}}, put down.",
      ],
    },
    necessity: { en: ["Now you can say take out, put in, pick up, and put down."] },
  },
  exampleMoveThing1: { en: ["He took out the money."] },
  exampleMoveThing2: { en: ["Put the clothes in!"] },
  exampleMoveThing3: { en: ["I pick up the fruit."] },
  exampleMoveThing4: { en: ["Put the tool down!"] },
  exampleMoveThing5: { en: ["Take the box back."] },
  exampleMoveThing6: { en: ["He brought the stick up."] },
  proseResult: {
    en: [
      "**To say how an action ends**, join a result word to the verb. You know {{word:chi1}}-{{word:wan2}} (Lesson {{lesson:around-an-action}}).",
      "",
      "**verb-result**",
      "",
      "{{word:dao4}} says you reach it: {{word:kan4}}-{{word:dao4}} (see), {{word:ting1}}-{{word:dao4}} (hear), {{word:zhao3}}-{{word:dao4}} (find). {{word:nong4}}-{{word:hao3}} is \"fix\", {{word:nong4}}-{{word:huai4}} is \"break\", and {{word:xue2}}-{{word:hui4}} is \"learn until you can\". For \"didn't\", use {{word:mei2}} (Lesson {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
    ],
    tldr: {
      en: [
        "Join the result to the verb: {{word:zhao3}}-{{word:dao4}} is find, {{word:nong4}}-{{word:huai4}} is break.",
      ],
    },
    necessity: { en: ["Now you can say you found it, fixed it, or broke it."] },
  },
  exampleResult1: { en: ["I found my box."] },
  exampleResult2: { en: ["I didn't find it."] },
  exampleResult3: { en: ["Did you see him?"] },
  exampleResult4: { en: ["He broke the tool."] },
  exampleResult5: { en: ["I fixed the tool."] },
  exampleResult6: { en: ["Have you learned how?"] },
  proseCanCant: {
    en: [
      "**To say you can or can't get the result**, put {{word:de}} (can) or {{word:bu4}} (can't) between the verb and the result.",
      "",
      "**verb-{{word:de}}-result / verb-{{word:bu4}}-result**",
      "",
      "{{word:kan4}}-{{word:bu4}}-{{word:dao4}} is \"can't see\", {{word:chi1}}-{{word:bu4}}-{{word:wan2}} is \"can't finish eating\", and {{word:na2}}-{{word:bu4}}-{{word:dong4}} is \"can't lift\". It works with direction words too: {{word:jin4}}-{{word:bu4}}-{{word:qu4}}, \"can't get in\".",
    ],
    tldr: {
      en: [
        "verb-{{word:bu4}}-result is can't: {{word:kan4}}-{{word:bu4}}-{{word:dao4}}, can't see. verb-{{word:de}}-result is can.",
      ],
    },
    necessity: { en: ["Now you can say you can't see, can't hear, or can't finish."] },
  },
  exampleCanCant1: { en: ["I can't see it."] },
  exampleCanCant2: { en: ["Can you hear it?"] },
  exampleCanCant3: { en: ["I can't find my clothes."] },
  exampleCanCant4: { en: ["There's a lot of rice. I can't finish it."] },
  exampleCanCant5: { en: ["The box is too big. I can't lift it."] },
  exampleCanCant6: { en: ["The opening is small. We can't get in."] },
  proseSeems: {
    en: [
      "**To say how something seems**, put {{word:qi3}}-{{word:lai2}} after {{word:kan4}} (look), {{word:ting1}} (listen), or {{word:chi1}} (eat).",
      "",
      "**Thing + verb-{{word:qi3}}-{{word:lai2}} + {{word:hen3}} + adjective**",
      "",
      "Two more jobs: after a describing word, {{word:qi3}}-{{word:lai2}} means it starts to get that way: {{word:leng3}}-{{word:qi3}}-{{word:lai2}}. And verb-{{word:xia4}}-{{word:qu4}} means \"keep going\": {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}!",
    ],
    tldr: {
      en: [
        "{{word:kan4}}-{{word:qi3}}-{{word:lai2}} is looks, {{word:ting1}}-{{word:qi3}}-{{word:lai2}} is sounds. verb-{{word:xia4}}-{{word:qu4}} is keep going.",
      ],
    },
    necessity: { en: ["Now you can say how things look, sound, and taste."] },
  },
  exampleSeems1: { en: ["This fruit looks good."] },
  exampleSeems2: { en: ["It tastes sweet."] },
  exampleSeems3: { en: ["That sounds strange."] },
  exampleSeems4: { en: ["It's getting cold."] },
  exampleSeems5: { en: ["Go on, keep talking!"] },
  exampleSeems6: { en: ["I want to keep learning."] },
  infoDirectionResult: {
    title: { en: ["Direction and Result"] },
    items: [
      {
        en: [
          "verb-{{word:lai2}} / verb-{{word:qu4}}, toward you / away: {{Word:ba3}} {{word:shui3}} {{word:na2}}-{{word:lai2}}! (Bring the water!)",
        ],
      },
      {
        en: [
          "{{word:jin4}} / {{word:chu1}} / {{word:hui2}} + {{word:lai2}} / {{word:qu4}}, in / out / back: {{Word:ni3}} {{word:jin4}}-{{word:lai2}}! (Come in!) {{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}. (I want to go home.)",
        ],
      },
      {
        en: [
          "verb + direction words: {{Word:ta1}} {{word:ba3}} {{word:jin1}} {{word:na2}}-{{word:chu1}}-{{word:lai2}} {{word:le}}. (He took out the money.)",
        ],
      },
      {
        en: [
          "verb-result: {{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:le}}. (I found it.)",
        ],
      },
      {
        en: [
          "verb-{{word:de}}-result / verb-{{word:bu4}}-result, can / can't: {{Word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}}. (I can't see it.)",
        ],
      },
      {
        en: [
          "verb-{{word:qi3}}-{{word:lai2}}, seems: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}. (This looks good.) verb-{{word:xia4}}-{{word:qu4}}, keep going: {{Word:shuo1}}-{{word:xia4}}-{{word:qu4}}! (Keep talking!)",
        ],
      },
      {
        en: [
          "{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}}, sit down / stand up / lie down: {{Word:ni3}} {{word:zuo4}}-{{word:xia4}}! (Sit down!)",
        ],
      },
    ],
  },
  exercise1: { en: ["Bring the fruit!"] },
  exercise2: { en: ["Come in!"] },
  exercise3: { en: ["She went home."] },
  exercise4: { en: ["We went out."] },
  exercise5: { en: ["Take out the tool!"] },
  exercise6: { en: ["Put the box down!"] },
  exercise7: { en: ["I found the money."] },
  exercise8: { en: ["He broke the box."] },
  exercise9: { en: ["I can't hear it."] },
  exercise10: { en: ["Can you see it?"] },
  exercise11: { en: ["The rice tastes good."] },
  exercise12: { en: ["Keep writing!"] },
  exercise13: { en: ["Sit down!"] },
  exercise14: { en: ["Stand up!"] },
  exercise15: { en: ["I want to lie down."] },
  exercise16: { en: ["It flew out."] },
  answer1: { en: ["{{Word:ba3}} {{word:shui3guo3}} {{word:na2}}-{{word:lai2}}!"] },
  answer2: { en: ["{{Word:jin4}}-{{word:lai2}}!"] },
  answer3: { en: ["{{Word:ta1}} {{word:hui2}} {{word:jia1}} {{word:le}}."] },
  answer4: { en: ["{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:le}}."] },
  answer5: { en: ["{{Word:ba3}} {{word:gong1ju4}} {{word:na2}}-{{word:chu1}}-{{word:lai2}}!"] },
  answer6: { en: ["{{Word:ba3}} {{word:he2zi}} {{word:fang4}}-{{word:xia4}}!"] },
  answer7: { en: ["{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:jin1}} {{word:le}}."] },
  answer8: { en: ["{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:nong4}}-{{word:huai4}} {{word:le}}."] },
  answer9: { en: ["{{Word:wo3}} {{word:ting1}}-{{word:bu4}}-{{word:dao4}}."] },
  answer10: { en: ["{{Word:ni3}} {{word:kan4}}-{{word:de}}-{{word:dao4}} {{word:ma}}?"] },
  answer11: { en: ["{{Word:mi3fan4}} {{word:chi1}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}."] },
  answer12: { en: ["{{Word:xie3}}-{{word:xia4}}-{{word:qu4}}!"] },
  answer13: { en: ["{{Word:ni3}} {{word:zuo4}}-{{word:xia4}}!"] },
  answer14: { en: ["{{Word:zhan4}}-{{word:qi3}}-{{word:lai2}}!"] },
  answer15: { en: ["{{Word:wo3}} {{word:yao4}} {{word:tang3}}-{{word:xia4}}."] },
  answer16: { en: ["{{Word:ta1}} {{word:fei1}}-{{word:chu1}}-{{word:qu4}} {{word:le}}."] },
  faqLaiQu: {
    question: { en: ["How do I know whether to say {{word:lai2}} or {{word:qu4}}?"] },
    en: [
      "Think about where the speaker is. Toward the speaker is {{word:lai2}}, away is {{word:qu4}}. Someone outside calls {{Word:chu1}}-{{word:lai2}}! (Come out!). Someone inside says {{Word:chu1}}-{{word:qu4}}! (Go out!).",
    ],
  },
  faqBuNeng: {
    question: { en: ["Is {{word:kan4}}-{{word:bu4}}-{{word:dao4}} the same as {{word:bu4}} {{word:neng2}} {{word:kan4}}?"] },
    en: [
      "No. {{word:bu4}} {{word:neng2}} {{word:kan4}} is \"you can't look\" or \"you're not allowed to look\". {{word:kan4}}-{{word:bu4}}-{{word:dao4}} is \"you look, but you can't see it\": you try, and the result doesn't come.",
    ],
  },
  faqWithoutBa: {
    question: { en: ["Where does the thing go without {{word:ba3}}?"] },
    en: [
      "Usually before {{word:lai2}} or {{word:qu4}}: {{Word:ta1}} {{word:na2}}-{{word:chu1}} {{word:jin1}} {{word:lai2}} {{word:le}} (He took out the money). A place goes there too: {{Word:ta1}} {{word:hui2}} {{word:jia1}} {{word:qu4}} {{word:le}} (She went back home). With {{word:ba3}}, the direction words stay together, so it's easier.",
    ],
  },
};

export default en;
