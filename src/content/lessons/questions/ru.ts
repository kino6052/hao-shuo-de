// Russian text for questions, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Вопросы и ответы"] },
  summary: {
    ru: [
      "Без вопросов не обходится ни один разговор.",
      "В этом уроке вы научитесь спрашивать «Что это?», «Ты человек?», «Почему?» и «Как?», а также отвечать «да» или «нет».",
    ],
  },
  vocabMa: { ru: ["превращает предложение в вопрос «да или нет»"] },
  vocabGongju: { ru: ["инструмент"] },
  vocabHezi: { ru: ["коробка"] },
  proseYesNo: {
    ru: [
      "**Чтобы задать вопрос «да или нет»**, поставьте {{word:ma}} в конце.",
      "",
      "**предложение + {{word:ma}}?**",
      "",
      "Или скажите глагол, потом {{word:bu4}}, потом снова глагол: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? Для {{word:you3}}: {{word:you3}}-{{word:mei2}}-{{word:you3}}.",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:ma}} в конце, чтобы задать вопрос «да или нет».",
      ],
    },
    necessity: { ru: ["Теперь вы можете проверить, правда ли что-то."] },
  },
  exampleYesNo1: { ru: ["У тебя есть инструмент?"] },
  exampleYesNo2: { ru: ["Это коробка?"] },
  exampleYesNo3: { ru: ["Он ест фрукты?"] },
  exampleYesNo4: { ru: ["Ты слушаешься родителей?"] },
  exampleYesNo5: { ru: ["У неё есть деньги?"] },
  vocabShenme: { ru: ["что, какой"] },
  vocabWen: { ru: ["спрашивать"] },
  vocabZhao: { ru: ["искать"] },
  vocabMai: { ru: ["покупать"] },
  proseWhat: {
    ru: [
      "**Чтобы спросить «что?»**, поставьте {{word:shen2me}} туда, где стоял бы ответ.",
      "",
      "**Кто + глагол + {{word:shen2me}}?**",
      "",
      "Остальное предложение не меняется. {{word:shen2me}} {{word:ren2}} значит «кто».",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:shen2me}} (что) туда, где стоял бы ответ.",
      ],
    },
    necessity: {
      ru: [
        "Чтобы задать вопрос, не нужно переставлять слова.",
      ],
    },
  },
  exampleWhat1: { ru: ["Что ты ищешь?"] },
  exampleWhat2: { ru: ["Что это?"] },
  exampleWhat3: { ru: ["О чём он спрашивает?"] },
  exampleWhat4: { ru: ["Кто ест фрукты?"] },
  exampleWhat5: { ru: ["Я ищу коробку."] },
  exampleWhat6: { ru: ["Что ты покупаешь?"] },
  exampleWhat7: { ru: ["Я покупаю фрукты."] },
  exampleWhat8: { ru: ["Он покупает инструмент?"] },
  vocabWeishenme: { ru: ["почему"] },
  vocabZenme: { ru: ["как"] },
  proseWhyHow: {
    ru: [
      "**Чтобы спросить «почему?» или «как?»**, поставьте {{word:wei4shen2me}} (почему) или {{word:zen3me}} (как) перед глаголом.",
      "",
      "**Кто + {{word:wei4shen2me}} / {{word:zen3me}} + глагол?**",
      "",
      "{{word:wei4shen2me}} ставится и перед {{word:bu4}}: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}?",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:wei4shen2me}} (почему) или {{word:zen3me}} (как) перед глаголом.",
      ],
    },
    necessity: { ru: ["Теперь вы можете спрашивать о причинах и способах."] },
  },
  exampleWhyHow1: { ru: ["Почему ты не ешь?"] },
  exampleWhyHow2: { ru: ["Почему он ищет коробку?"] },
  exampleWhyHow3: { ru: ["Почему ты спрашиваешь?"] },
  exampleWhyHow4: { ru: ["Как это сказать?"] },
  exampleWhyHow5: { ru: ["Как это пишется?"] },
  exampleWhyHow6: { ru: ["Как его найти?"] },
  proseAnswer: {
    ru: [
      "**Чтобы ответить «да» или «нет»**, повторите глагол — это «да», или поставьте перед ним {{word:bu4}} — это «нет».",
      "",
      "**глагол. / {{word:bu4}} + глагол.**",
      "",
      "В китайском нет одного слова для «да» или «нет». Можно также ответить {{word:shi4}} («да, это так») или {{word:bu4}} {{word:shi4}} («нет, не так»).",
    ],
    tldr: {
      ru: [
        "Чтобы ответить «да», повторите глагол. Чтобы ответить «нет», поставьте перед ним {{word:bu4}}.",
      ],
    },
    necessity: {
      ru: ["В китайском нет одного слова для «да» или «нет»."],
    },
  },
  exampleAnswer1: { ru: ["Ты слушаешь? Да, слушаю."] },
  exampleAnswer2: { ru: ["Ты слушаешь? Нет, не слушаю."] },
  exampleAnswer3: { ru: ["У тебя есть фрукты? Да, есть."] },
  infoAskingQuestions: {
    title: { ru: ["Как задавать вопросы"] },
    items: [
      {
        ru: [
          "предложение + {{word:ma}}? — да или нет: {{Word:ni3}} {{word:you3}} {{word:gong1ju4}} {{word:ma}}? (У тебя есть инструмент?)",
        ],
      },
      {
        ru: [
          "глагол-{{word:bu4}}-глагол? — да или нет: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? (Ты слушаешь?)",
        ],
      },
      {
        ru: [
          "{{word:shen2me}} там, где стоит ответ: {{Word:ni3}} {{word:zhao3}} {{word:shen2me}}? (Что ты ищешь?)",
        ],
      },
      {
        ru: [
          "{{word:wei4shen2me}} + глагол — почему: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}? (Почему ты не ешь?)",
        ],
      },
      {
        ru: [
          "{{word:zen3me}} + глагол — как: {{Word:zhe4}}-ge {{word:zen3me}} {{word:shuo1}}? (Как это сказать?)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Какие у тебя есть инструменты?"] },
  exercise2: { ru: ["Спросите «Он слушает?» без {{word:ma}}."] },
  exercise3: { ru: ["Инструмент маленький?"] },
  exercise4: { ru: ["Это твоя коробка?"] },
  exercise5: { ru: ["Почему он ищет воду?"] },
  exercise6: { ru: ["Как это пишется?"] },
  exercise7: { ru: ["Кто спрашивает?"] },
  exercise8: { ru: ["Ты покупаешь рис?"] },
  answer1: {
    ru: [
      "{{Word:ni3}} {{word:you3}} {{word:shen2me}} {{word:gong1ju4}}?",
    ],
  },
  answer2: {
    ru: [
      "{{Word:ta1}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}?",
    ],
  },
  answer3: { ru: ["{{Word:gong1ju4}} {{word:xiao3}} {{word:ma}}?"] },
  answer4: {
    ru: [
      "{{Word:na4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:he2zi}} {{word:ma}}?",
    ],
  },
  answer5: {
    ru: [
      "{{Word:ta1}} {{word:wei4shen2me}} {{word:zhao3}} {{word:shui3}}?",
    ],
  },
  answer6: {
    ru: ["{{Word:zhe4}}-ge {{word:zen3me}} {{word:xie3}}?"],
  },
  answer7: { ru: ["{{Word:shen2me}} {{word:ren2}} {{word:wen4}}?"] },
  answer8: { ru: ["{{Word:ni3}} {{word:mai3}} {{word:mi3fan4}} {{word:ma}}?"] },
  faqMaAndVerbBuVerb: {
    question: { ru: ["Можно ли использовать {{word:ma}} и глагол-{{word:bu4}}-глагол вместе?"] },
    ru: [
      "Нет, выберите одно. {{Word:ni3}} {{word:ting1}} {{word:ma}}? и {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? — оба правильные, а {{word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:ma}}? — ошибка.",
      "Оба вопроса спрашивают одно и то же. {{word:ma}} подходит к любому предложению, так что с него проще начать.",
    ],
  },
  faqYouMeiYou: {
    question: { ru: ["Почему {{word:you3}}-{{word:mei2}}-{{word:you3}}, а не {{word:you3}}-{{word:bu4}}-{{word:you3}}?"] },
    ru: [
      "{{word:you3}} никогда не берёт {{word:bu4}}. Его «не» — это {{word:mei2}}: {{word:mei2}}-{{word:you3}}. Поэтому и в вопросе стоит {{word:mei2}}.",
    ],
  },
  faqWeishenmeFirst: {
    question: { ru: ["Можно ли поставить {{word:wei4shen2me}} в начало предложения?"] },
    ru: [
      "Да, {{Word:wei4shen2me}} {{word:ni3}} {{word:bu4}} {{word:chi1}}? — тоже правильный китайский. Но обычное место — перед глаголом, там же, где {{word:zen3me}}, поэтому в Hǎo-shuō-de его всегда ставят туда.",
    ],
  },
};

export default ru;
