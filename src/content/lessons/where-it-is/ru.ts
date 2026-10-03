// Russian text for where-it-is, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Пространство 1 — Где это"] },
  summary: {
    ru: [
      "Нам часто нужно сказать, где что находится.",
      "В этом уроке вы научитесь говорить «Коробка на полу.», «в доме», «передо мной» и «Где это?»",
    ],
  },
  vocabLi: { ru: ["в, внутри"] },
  proseWhere: {
    ru: [
      "**Чтобы сказать, где кто-то или что-то находится**, поставьте {{word:zai4}} (находиться) перед местом.",
      "",
      "**Кто + {{word:zai4}} + место**",
      "",
      "В уроке {{lesson:when-it-happens}} {{word:zai4}} перед глаголом значило «как раз сейчас». Перед местом оно значит «находится в».",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:zai4}} перед местом, чтобы сказать, где кто-то находится.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, где находятся люди и вещи."] },
  },
  exampleWhere1: { ru: ["Я дома."] },
  exampleWhere2: { ru: ["Твои родители дома?"] },
  exampleWhere3: { ru: ["Он здесь."] },
  exampleWhere4: { ru: ["Он остаётся дома."] },
  exampleWhere5: { ru: ["Она, может быть, дома."] },
  exampleWhere6: { ru: ["Он опять дома."] },
  vocabNali: { ru: ["где"] },
  proseWhereQuestion: {
    ru: [
      "**Чтобы спросить «где?»**, поставьте {{word:na3li3}} туда, где стояло бы место.",
      "",
      "**Кто + {{word:zai4}} {{word:na3li3}}?**",
      "",
      "Отвечайте {{word:zhe4}}-{{word:li3}} («здесь») или {{word:na4}}-{{word:li3}} («там»).",
    ],
    tldr: {
      ru: [
        "{{word:na3li3}} значит «где». Отвечайте {{word:zhe4}}-{{word:li3}} (здесь) или {{word:na4}}-{{word:li3}} (там).",
      ],
    },
    necessity: { ru: ["Теперь вы можете спросить, где что находится."] },
  },
  exampleWhereQuestion1: { ru: ["Где ты?"] },
  exampleWhereQuestion2: { ru: ["Где коробка?"] },
  exampleWhereQuestion3: { ru: ["Она вон там."] },
  vocabShang: { ru: ["на, вверх"] },
  vocabXia: { ru: ["под, вниз"] },
  vocabMian: { ru: ["сторона; присоединяется к слову места: lǐ-miàn, qián-miàn"] },
  vocabDi: { ru: ["пол, земля"] },
  proseInOnUnder: {
    ru: [
      "**Чтобы сказать «в» или «на» чём-то**, присоедините {{word:li3}} (в) или {{word:shang4}} (на) к месту.",
      "",
      "**Вещь + {{word:zai4}} + место-{{word:li3}} / место-{{word:shang4}}**",
      "",
      "В русском «в» и «на» стоят перед словом, а в китайском — после него: {{word:he2zi}}-{{word:li3}}, «коробка-в».",
      "Чтобы сказать «под», говорите {{word:xia4}}-{{word:mian4}} (нижняя сторона): {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
    ],
    tldr: {
      ru: [
        "Присоедините {{word:li3}} (в) или {{word:shang4}} (на) к месту: {{word:he2zi}}-{{word:li3}} — в коробке.",
      ],
    },
    necessity: { ru: ["Теперь вы можете точно сказать, где что-то находится."] },
  },
  exampleInOnUnder1: { ru: ["Вода в коробке."] },
  exampleInOnUnder2: { ru: ["Инструмент на полу."] },
  exampleInOnUnder3: { ru: ["Фрукт под коробкой."] },
  exampleInOnUnder4: { ru: ["Одежда в доме."] },
  exampleInOnUnder5: { ru: ["Моя одежда на полу."] },
  exampleInOnUnder6: { ru: ["Под коробкой вода."] },
  exampleInOnUnder7: { ru: ["Мои ноги в воде."] },
  vocabQian: { ru: ["перед; qián-miàn: впереди"] },
  vocabPang: { ru: ["рядом (в слове pángbiān)"] },
  vocabBian: { ru: ["сторона"] },
  vocabPangbian: { ru: ["рядом, возле"] },
  proseSides: {
    ru: [
      "**Чтобы сказать «перед», «за» или «рядом»**, присоедините {{word:mian4}} (сторона) к {{word:qian2}} (перед) или {{word:hou4}} (зад) или используйте {{word:pang2bian1}} (рядом).",
      "",
      "**Вещь + {{word:zai4}} + X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:pang2bian1}}**",
      "",
      "{{word:mian4}} присоединяется и к другим словам: {{word:li3}}-{{word:mian4}} (внутри), {{word:shang4}}-{{word:mian4}} (сверху), {{word:xia4}}-{{word:mian4}} (внизу).",
      "{{word:pang2bian1}} — это {{word:pang2}} (рядом) + {{word:bian1}} (сторона). {{word:zhe4}}-{{word:bian1}} — эта сторона, {{word:na4}}-{{word:bian1}} — та сторона.",
    ],
    tldr: {
      ru: [
        "Присоедините {{word:mian4}} к {{word:qian2}} или {{word:hou4}}: «впереди» или «сзади». {{word:pang2bian1}} значит «рядом».",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете расположить одни вещи вокруг других."],
    },
  },
  exampleSides1: { ru: ["Передо мной кто-то есть."] },
  exampleSides2: { ru: ["Животное за домом."] },
  exampleSides3: { ru: ["Я рядом с тобой."] },
  exampleSides5: { ru: ["Перед домом животное."] },
  exampleSides6: { ru: ["Мои родители рядом со мной."] },
  exampleSides7: { ru: ["Коробка на той стороне."] },
  exampleSides8: { ru: ["Он рядом со мной."] },
  exampleSides9: { ru: ["Фрукт рядом с коробкой."] },
  vocabZuobian: { ru: ["слева, левая сторона"] },
  vocabYoubian: { ru: ["справа, правая сторона"] },
  proseLeftRight: {
    ru: [
      "**Чтобы сказать «слева» или «справа»**, используйте {{word:zuo3bian1}} (слева) и {{word:you4bian1}} (справа). Они работают как {{word:pang2bian1}}.",
      "",
      "**Вещь + {{word:zai4}} + (X-{{word:de}}) {{word:zuo3bian1}} / {{word:you4bian1}}**",
    ],
    tldr: {
      ru: [
        "{{word:zuo3bian1}} — слева, {{word:you4bian1}} — справа: {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}} — слева от меня.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, с какой стороны что-то находится."] },
  },
  exampleSides10: { ru: ["Коробка слева от меня."] },
  exampleSides11: { ru: ["Он справа от тебя."] },
  exampleSides12: { ru: ["Вода справа?"] },
  exampleSides13: { ru: ["Коробка слева большая."] },
  infoWhereThingsAre: {
    title: { ru: ["Где что находится"] },
    items: [
      {
        ru: [
          "{{word:zai4}} + место: {{Word:wo3}} {{word:zai4}} {{word:jia1}}. (Я дома.)",
        ],
      },
      {
        ru: [
          "{{word:na3li3}} — где: {{Word:ni3}} {{word:zai4}} {{word:na3li3}}? (Где ты?)",
        ],
      },
      {
        ru: [
          "место-{{word:li3}} (в), место-{{word:shang4}} (на): {{Word:shui3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}. (Вода в коробке.)",
        ],
      },
      {
        ru: [
          "X-{{word:de}} {{word:qian2}}-{{word:mian4}} / {{word:hou4}}-{{word:mian4}} / {{word:xia4}}-{{word:mian4}} / {{word:pang2bian1}}: {{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}. (Я рядом с тобой.)",
        ],
      },
      {
        ru: [
          "{{word:zuo3bian1}} / {{word:you4bian1}} — слева / справа: {{Word:he2zi}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3bian1}}. (Коробка слева от меня.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Где мой инструмент?"] },
  exercise2: { ru: ["Фрукт в коробке."] },
  exercise3: { ru: ["Коробка на полу."] },
  exercise4: { ru: ["Животное под коробкой."] },
  exercise5: { ru: ["Я перед тобой."] },
  exercise6: { ru: ["Она рядом со мной."] },
  exercise7: { ru: ["Он на этой стороне."] },
  exercise8: { ru: ["Мужчина возле дома."] },
  exercise9: { ru: ["Инструмент слева."] },
  exercise10: { ru: ["Мой дом справа."] },
  answer1: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:gong1ju4}} {{word:zai4}} {{word:na3li3}}?",
    ],
  },
  answer2: {
    ru: [
      "{{Word:shui3guo3}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}.",
    ],
  },
  answer3: {
    ru: [
      "{{Word:he2zi}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ],
  },
  answer4: {
    ru: [
      "{{Word:dong4wu4}} {{word:zai4}} {{word:he2zi}}-{{word:de}} {{word:xia4}}-{{word:mian4}}.",
    ],
  },
  answer5: {
    ru: [
      "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
    ],
  },
  answer6: {
    ru: [
      "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:pang2bian1}}.",
    ],
  },
  answer7: {
    ru: [
      "{{Word:ta1}} {{word:zai4}} {{word:zhe4}}-{{word:bian1}}.",
    ],
  },
  answer8: {
    ru: [
      "{{Word:nan2ren2}} {{word:zai4}} {{word:jia1}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
    ],
  },
  answer9: { ru: ["{{Word:gong1ju4}} {{word:zai4}} {{word:zuo3bian1}}."] },
  answer10: { ru: ["{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:you4bian1}}."] },
  faqZaiSameWord: {
    question: { ru: ["{{word:zai4}} в {{word:zai4}} {{word:jia1}} — то же слово, что в {{word:zai4}} {{word:chi1}}?"] },
    ru: [
      "Да. {{word:zai4}} значит «находиться в». {{Word:wo3}} {{word:zai4}} {{word:chi1}} — это на самом деле «я нахожусь в еде», то есть вы как раз этим заняты.",
    ],
  },
  faqThingNeedsLi: {
    question: { ru: ["Почему {{word:zai4}} {{word:jia1}}, но {{word:zai4}} {{word:he2zi}}-{{word:li3}}?"] },
    ru: [
      "Дом — это уже место. Вещь вроде коробки становится местом только с -{{word:li3}} или -{{word:shang4}}: в коробке, на коробке. {{word:zai4}} {{word:he2zi}} само по себе звучит неправильно.",
    ],
  },
  faqLiOrLimian: {
    question: { ru: ["Чем -{{word:li3}} отличается от {{word:li3}}-{{word:mian4}}?"] },
    ru: [
      "-{{word:li3}} присоединяется к месту: {{word:he2zi}}-{{word:li3}}. {{word:li3}}-{{word:mian4}} может стоять и само по себе: {{Word:ta1}} {{word:zai4}} {{word:li3}}-{{word:mian4}} (Она внутри).",
    ],
  },
};

export default ru;
