// Russian text for around-an-action, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Время 2 — Вокруг действия"] },
  summary: {
    ru: [
      "Мы часто говорим о том, что происходит вокруг действия: до него, после него или пока оно идёт.",
      "В этом уроке вы научитесь говорить «Когда я ем, …», «Я доел.», «после еды», «Я начал играть.» и «Он опять поел.»",
    ],
  },
  vocabWanr: { ru: ["играть"] },
  proseWhen: {
    ru: [
      "**Чтобы сказать «когда»**, скажите «время, когда»: поставьте -{{word:de}} {{word:shi2jian1}} после действия, а потом запятую.",
      "",
      "**Кто + глагол-{{word:de}} {{word:shi2jian1}}, остальное**",
      "",
      "Отдельного слова для «когда» нет. {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}} — это «время, когда я ем».",
    ],
    tldr: {
      ru: [
        "«Когда я ем» — это {{word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, «время, когда я ем».",
      ],
    },
    necessity: {
      ru: [
        "Теперь вы можете сказать, что происходит, когда происходит что-то другое.",
      ],
    },
  },
  exampleWhen1: { ru: ["Когда я ем, я не разговариваю."] },
  exampleWhen2: { ru: ["Когда ты говоришь, я слушаю."] },
  exampleWhen3: { ru: ["Когда он спит, я играю."] },
  vocabWan: { ru: ["закончить; после глагола: до конца"] },
  proseFinished: {
    ru: [
      "**Чтобы сказать, что вы закончили что-то делать**, присоедините {{word:wan2}} к глаголу и добавьте {{word:le}}.",
      "",
      "**Кто + глагол-{{word:wan2}} {{word:le}}**",
      "",
      "{{word:le}} говорит только, что дело сделано. {{word:wan2}} — что оно сделано до конца. Как «поел» и «доел».",
    ],
    tldr: {
      ru: [
        "глагол-{{word:wan2}} {{word:le}} значит, что вы закончили это делать.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что совсем закончили."] },
  },
  exampleFinished1: { ru: ["Я доел."] },
  exampleFinished2: { ru: ["Ты дописал?"] },
  exampleFinished3: { ru: ["Она дочитала."] },
  vocabHou: { ru: ["после; сзади"] },
  vocabLiu: { ru: ["оставаться, оставлять"] },
  proseAfter: {
    ru: [
      "**Чтобы сказать «после того как»**, поставьте {{word:hou4}} после законченного действия, а потом запятую.",
      "",
      "**глагол-{{word:wan2}} {{word:hou4}}, остальное**",
    ],
    tldr: {
      ru: [
        "глагол-{{word:wan2}} {{word:hou4}} значит «после того как сделал».",
      ],
    },
    necessity: { ru: ["Теперь вы можете расставить два действия по порядку."] },
  },
  exampleAfter1: { ru: ["После еды я сплю."] },
  exampleAfter2: { ru: ["Закончив писать, я играю."] },
  exampleAfter3: { ru: ["Дочитав, ты говоришь."] },
  exampleAfter4: { ru: ["Что случилось после еды?"] },
  exampleAfter5: { ru: ["Поев, она остаётся."] },
  exampleAfter6: { ru: ["Когда дочитаю, оставлю себе вот это."] },
  vocabKaishi: { ru: ["начинать"] },
  proseStart: {
    ru: [
      "**Чтобы сказать, что что-то начинается**, поставьте {{word:kai1shi3}} перед глаголом.",
      "",
      "**Кто + {{word:kai1shi3}} + глагол**",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:kai1shi3}} перед глаголом, чтобы сказать, что это начинается.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, когда что-то начинается."] },
  },
  exampleStart1: { ru: ["Я начал играть."] },
  exampleStart2: { ru: ["Он начинает есть."] },
  exampleStart3: { ru: ["Ты уже начал писать?"] },
  exampleStart4: { ru: ["Я сейчас начинаю писать."] },
  exampleStart5: { ru: ["Я начал учиться говорить."] },
  vocabYixia: { ru: ["мгновение; после глагола: на минутку"] },
  proseMoment: {
    ru: [
      "**Чтобы сделать что-то совсем недолго**, поставьте {{word:yi1xia4}} (мгновение) после глагола.",
      "",
      "**Кто + глагол + {{word:yi1xia4}}**",
      "",
      "Так просьба звучит мягче: {{Word:deng3}} {{word:yi1xia4}}! — «Подожди минутку!»",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:yi1xia4}} после глагола, чтобы сделать это на минутку: {{Word:deng3}} {{word:yi1xia4}}!",
      ],
    },
    necessity: {
      ru: [
        "Теперь вы можете попросить минутку или сделать что-то совсем чуть-чуть.",
      ],
    },
  },
  exampleMoment1: { ru: ["Подожди минутку!"] },
  exampleMoment2: { ru: ["Дай-ка я посмотрю."] },
  exampleMoment3: { ru: ["Останься на минутку."] },
  exampleMoment4: { ru: ["Давай немного поиграем."] },
  vocabYou: { ru: ["снова, опять"] },
  proseAgain: {
    ru: [
      "**Чтобы сказать, что что-то случилось снова**, поставьте {{word:you4}} (опять) перед глаголом, а {{word:le}} — после него.",
      "",
      "**Кто + {{word:you4}} + глагол + {{word:le}}**",
      "",
      "Чтобы сказать, что вы собираетесь сделать это снова, добавьте {{word:yao4}}: {{Word:wo3}} {{word:you4}} {{word:yao4}} {{word:chi1}} {{word:le}}.",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:you4}} перед глаголом, чтобы сказать, что это случилось опять.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что что-то случилось снова."] },
  },
  exampleAgain1: { ru: ["Он опять поел."] },
  exampleAgain2: { ru: ["Ты опять заснул!"] },
  exampleAgain3: { ru: ["Я посмотрел ещё раз."] },
  exampleAgain4: { ru: ["Я опять собираюсь поесть."] },
  vocabCi: { ru: ["раз, как в «много раз»"] },
  proseTimes: {
    ru: [
      "**Чтобы сказать, сколько раз**, поставьте {{word:ci4}} (раз) после {{word:hen3}} {{word:duo1}} или {{word:duo1}}-{{word:shao3}}.",
      "",
      "**глагол + {{word:hen3}} {{word:duo1}} {{word:ci4}} / {{word:duo1}}-{{word:shao3}} {{word:ci4}}?**",
      "",
      "{{word:zhe4}}-{{word:ci4}} — «в этот раз». С числами (урок {{lesson:numbers}}) {{word:ci4}} считает: два раза, три раза.",
    ],
    tldr: {
      ru: [
        "{{word:hen3}} {{word:duo1}} {{word:ci4}} — «много раз». {{word:zhe4}}-{{word:ci4}} — «в этот раз».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, как часто что-то бывает."] },
  },
  exampleTimes1: { ru: ["Я видел это много раз."] },
  exampleTimes2: { ru: ["Сколько раз ты это ел?"] },
  exampleTimes3: { ru: ["В этот раз я тебя подожду."] },
  exampleTimes4: { ru: ["Он говорил это много раз."] },
  infoAroundAnAction: {
    title: { ru: ["Вокруг действия"] },
    items: [
      {
        ru: [
          "глагол-{{word:de}} {{word:shi2jian1}} — когда: {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:shuo1}}. (Когда я ем, я не разговариваю.)",
        ],
      },
      {
        ru: [
          "глагол-{{word:wan2}} {{word:le}} — закончил: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. (Я доел.)",
        ],
      },
      {
        ru: [
          "глагол-{{word:wan2}} {{word:hou4}} — после: {{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}. (После еды я сплю.)",
        ],
      },
      {
        ru: [
          "{{word:kai1shi3}} + глагол — начать: {{Word:wo3}} {{word:kai1shi3}} {{word:wan2r}} {{word:le}}. (Я начал играть.)",
        ],
      },
      {
        ru: [
          "глагол + {{word:yi1xia4}} — на минутку: {{Word:deng3}} {{word:yi1xia4}}! (Подожди минутку!)",
        ],
      },
      {
        ru: [
          "{{word:you4}} + глагол + {{word:le}} — опять: {{Word:ta1}} {{word:you4}} {{word:chi1}} {{word:le}}. (Он опять поел.)",
        ],
      },
      {
        ru: [
          "{{word:hen3}} {{word:duo1}} {{word:ci4}} — много раз: {{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}. (Я видел это много раз.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Когда я пишу, я не ем."] },
  exercise2: { ru: ["Я дописал."] },
  exercise3: { ru: ["После чтения я сплю."] },
  exercise4: { ru: ["Она начала есть."] },
  exercise5: { ru: ["Хочешь поиграть?"] },
  exercise6: { ru: ["После еды я останусь."] },
  exercise7: { ru: ["Подожди минутку!"] },
  exercise8: { ru: ["Она опять заснула."] },
  exercise9: { ru: ["Я ел это много раз."] },
  answer1: {
    ru: [
      "{{Word:wo3}} {{word:xie3}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:chi1}}.",
    ],
  },
  answer2: {
    ru: [
      "{{Word:wo3}} {{word:xie3}}-{{word:wan2}} {{word:le}}.",
    ],
  },
  answer3: {
    ru: [
      "{{Word:kan4}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}.",
    ],
  },
  answer4: {
    ru: [
      "{{Word:ta1}} {{word:kai1shi3}} {{word:chi1}} {{word:le}}.",
    ],
  },
  answer5: {
    ru: [
      "{{Word:ni3}} {{word:yao4}} {{word:wan2r}} {{word:ma}}?",
    ],
  },
  answer6: { ru: ["{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:hui4}} {{word:liu2}}."] },
  answer7: { ru: ["{{Word:deng3}} {{word:yi1xia4}}!"] },
  answer8: { ru: ["{{Word:ta1}} {{word:you4}} {{word:shui4jiao4}} {{word:le}}."] },
  answer9: { ru: ["{{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}."] },
  faqWanOrWanr: {
    question: { ru: ["{{word:wan2}} и {{word:wan2r}} — одно и то же слово?"] },
    ru: [
      "Нет, это два разных слова. {{word:wan2}} — «закончить»: {{word:chi1}}-{{word:wan2}} {{word:le}}. {{word:wan2r}} — «играть», и -r на конце — часть слова.",
    ],
  },
  faqWanAndLe: {
    question: { ru: ["Нужны ли сразу и -{{word:wan2}}, и {{word:le}}?"] },
    ru: [
      "Чтобы сказать, что вы закончили, — да: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. Без {{word:le}} {{word:chi1}}-{{word:wan2}} — только часть предложения, как в {{word:chi1}}-{{word:wan2}} {{word:hou4}}, … (после еды …).",
    ],
  },
};

export default ru;
