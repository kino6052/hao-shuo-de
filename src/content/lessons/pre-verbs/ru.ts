// Russian text for pre-verbs, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Слова перед глаголом"] },
  summary: {
    ru: [
      "Нам часто нужно сказать, что мы хотим, можем, учимся или умеем делать.",
      "В этом уроке вы научитесь говорить «Я хочу есть.», «Я могу слышать.», «Я учусь писать.», «Я умею писать.» и «Я люблю поесть.»",
    ],
  },
  vocabYao: { ru: ["хотеть; хотеть что-то сделать"] },
  vocabDeng: { ru: ["ждать"] },
  vocabYifu: { ru: ["одежда"] },
  proseWant: {
    ru: [
      "**Чтобы сказать, что вы хотите что-то сделать**, поставьте {{word:yao4}} (хотеть) перед глаголом.",
      "",
      "**Кто + {{word:yao4}} + глагол**",
      "",
      "С вещью тоже работает: {{Word:wo3}} {{word:yao4}} {{word:shui3}} значит «Я хочу воды».",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:yao4}} перед глаголом, чтобы сказать, что хотите это сделать.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, чего хотите."] },
  },
  exampleWant1: { ru: ["Я хочу есть."] },
  exampleWant2: { ru: ["Я хочу тебя спросить."] },
  exampleWant3: { ru: ["Что ты хочешь сказать?"] },
  exampleWant4: { ru: ["Она хочет поискать одежду."] },
  exampleWant5: { ru: ["Ты хочешь подождать?"] },
  vocabNeng: { ru: ["мочь"] },
  proseCan: {
    ru: [
      "**Чтобы сказать, что вы можете что-то сделать**, поставьте {{word:neng2}} (мочь) перед глаголом.",
      "",
      "**Кто + {{word:neng2}} + глагол**",
      "",
      "Чтобы сказать, что не можете, поставьте {{word:bu4}} перед {{word:neng2}}.",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:neng2}} перед глаголом, чтобы сказать, что можете это сделать.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что вы можете и чего не можете."] },
  },
  exampleCan1: { ru: ["Я могу слышать."] },
  exampleCan2: { ru: ["Я могу подождать."] },
  exampleCan3: { ru: ["Он не может есть."] },
  exampleCan4: { ru: ["Ты видишь?"] },
  vocabXue: { ru: ["учиться; перед глаголом: учиться что-то делать"] },
  proseLearn: {
    ru: [
      "**Чтобы сказать, что вы учитесь что-то делать**, поставьте {{word:xue2}} (учиться) перед глаголом.",
      "",
      "**Кто + {{word:xue2}} + глагол**",
    ],
    tldr: {
      ru: ["Поставьте {{word:xue2}} перед глаголом, чтобы сказать, что учитесь это делать."],
    },
    necessity: { ru: ["Теперь вы можете сказать, чему учитесь."] },
  },
  exampleLearn1: { ru: ["Я учусь писать."] },
  exampleLearn2: { ru: ["Она учится говорить."] },
  exampleLearn3: { ru: ["Ты хочешь научиться писать?"] },
  vocabZhidao: { ru: ["знать; уметь (с zěnme)"] },
  proseKnowHow: {
    ru: [
      "**Чтобы сказать, что вы умеете что-то делать**, поставьте {{word:zhi1dao4}} {{word:zen3me}} (знать как) перед глаголом.",
      "",
      "**Кто + {{word:zhi1dao4}} {{word:zen3me}} + глагол**",
      "",
      "Само по себе {{word:zhi1dao4}} значит «знать»: {{Word:wo3}} {{word:zhi1dao4}} значит «Я знаю».",
    ],
    tldr: {
      ru: [
        "{{word:zhi1dao4}} {{word:zen3me}} перед глаголом значит «уметь».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что вы умеете делать."] },
  },
  exampleKnowHow1: { ru: ["Я умею писать."] },
  exampleKnowHow2: { ru: ["Ты знаешь, как это сказать?"] },
  exampleKnowHow3: { ru: ["Она умеет спрашивать."] },
  exampleKnowHow4: { ru: ["Он не знает, как это написать."] },
  vocabAi: { ru: ["любить; любить что-то делать"] },
  proseLove: {
    ru: [
      "**Чтобы сказать, что вы любите что-то делать**, поставьте {{word:ai4}} (любить) перед глаголом.",
      "",
      "**Кто + {{word:ai4}} + глагол**",
      "",
      "С человеком или вещью тоже работает: {{Word:wo3}} {{word:ai4}} {{word:ni3}} значит «Я тебя люблю».",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:ai4}} перед глаголом, чтобы сказать, что любите это делать.",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о том, что вам нравится."] },
  },
  exampleLove1: { ru: ["Я люблю поесть."] },
  exampleLove2: { ru: ["Я люблю слушать, как ты говоришь."] },
  exampleLove3: { ru: ["Она любит читать."] },
  exampleLove4: { ru: ["Я люблю смотреть на твою одежду."] },
  exampleLove5: { ru: ["Ты любишь писать?"] },
  vocabKeneng: { ru: ["может быть, возможно"] },
  proseMaybe: {
    ru: [
      "**Чтобы сказать «может быть»**, поставьте {{word:ke3neng2}} (может быть) перед глаголом.",
      "",
      "**Кто + {{word:ke3neng2}} + глагол**",
      "",
      "Само по себе {{Word:ke3neng2}}. значит «Может быть.»",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:ke3neng2}} перед глаголом, чтобы сказать, что так, возможно, и есть.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что не уверены."] },
  },
  exampleMaybe1: { ru: ["Он, может быть, знает."] },
  exampleMaybe2: { ru: ["Она, может быть, хочет есть."] },
  exampleMaybe3: { ru: ["Может быть, я не смогу подождать."] },
  exampleMaybe4: { ru: ["Может быть, я не буду есть."] },
  infoPreVerbs: {
    title: { ru: ["Слова перед глаголом"] },
    items: [
      {
        ru: [
          "{{word:yao4}} + глагол — хотеть: {{Word:wo3}} {{word:yao4}} {{word:chi1}}. (Я хочу есть.)",
        ],
      },
      {
        ru: [
          "{{word:neng2}} + глагол — мочь: {{Word:wo3}} {{word:neng2}} {{word:ting1}}. (Я могу слышать.)",
        ],
      },
      {
        ru: [
          "{{word:xue2}} + глагол — учиться: {{Word:wo3}} {{word:xue2}} {{word:xie3}}. (Я учусь писать.)",
        ],
      },
      {
        ru: [
          "{{word:zhi1dao4}} {{word:zen3me}} + глагол — уметь: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}. (Я умею писать.)",
        ],
      },
      {
        ru: [
          "{{word:ai4}} + глагол — любить: {{Word:wo3}} {{word:ai4}} {{word:chi1}}. (Я люблю поесть.)",
        ],
      },
      {
        ru: [
          "{{word:ke3neng2}} + глагол — может быть: {{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}. (Он, может быть, знает.)",
        ],
      },
      {
        ru: [
          "Чтобы сказать «не», поставьте {{word:bu4}} в начало: {{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:chi1}}. (Он не может есть.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Я хочу подождать."] },
  exercise2: { ru: ["Ты можешь писать?"] },
  exercise3: { ru: ["Она любит есть фрукты."] },
  exercise4: { ru: ["Я не знаю, как это сказать."] },
  exercise5: { ru: ["Что ты хочешь съесть?"] },
  exercise6: { ru: ["Он не может ждать."] },
  exercise7: { ru: ["Хочешь посмотреть на мою одежду?"] },
  exercise8: { ru: ["Может быть, она знает."] },
  exercise9: { ru: ["Он учится писать."] },
  answer1: { ru: ["{{Word:wo3}} {{word:yao4}} {{word:deng3}}."] },
  answer2: {
    ru: [
      "{{Word:ni3}} {{word:neng2}} {{word:xie3}} {{word:ma}}?",
    ],
  },
  answer3: {
    ru: [
      "{{Word:ta1}} {{word:ai4}} {{word:chi1}} {{word:shui3guo3}}.",
    ],
  },
  answer4: {
    ru: [
      "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:zen3me}} {{word:shuo1}}.",
    ],
  },
  answer5: {
    ru: [
      "{{Word:ni3}} {{word:yao4}} {{word:chi1}} {{word:shen2me}}?",
    ],
  },
  answer6: {
    ru: [
      "{{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:deng3}}.",
    ],
  },
  answer7: {
    ru: [
      "{{Word:ni3}} {{word:yao4}} {{word:kan4}} {{word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:ma}}?",
    ],
  },
  answer8: {
    ru: ["{{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}."],
  },
  answer9: { ru: ["{{Word:ta1}} {{word:xue2}} {{word:xie3}}."] },
  faqYaoGoingTo: {
    question: { ru: ["{{word:yao4}} значит только «хотеть»?"] },
    ru: [
      "Ещё оно значит «собираться». {{Word:wo3}} {{word:yao4}} {{word:chi1}} может быть «Я хочу есть» или «Я собираюсь поесть». Что именно — понятно из ситуации.",
    ],
  },
  faqBuYao: {
    question: { ru: ["Как сказать «не хочу»?"] },
    ru: [
      "Поставьте {{word:bu4}} перед {{word:yao4}}: {{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:chi1}} (Я не хочу есть). Осторожно: если не сказано, кто, то {{Word:bu4}} {{word:yao4}} + глагол значит «Не …!». Об этом — в уроке {{lesson:greetings-and-feelings}}.",
    ],
  },
  faqNengOrZhidao: {
    question: { ru: ["Когда говорить {{word:neng2}}, а когда {{word:zhi1dao4}} {{word:zen3me}}?"] },
    ru: [
      "{{word:neng2}} — это «мочь», иметь возможность: {{Word:wo3}} {{word:neng2}} {{word:deng3}} (Я могу подождать). {{word:zhi1dao4}} {{word:zen3me}} — это «уметь», знать, как делать то, чему вы научились: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}} (Я умею писать).",
    ],
  },
};

export default ru;
