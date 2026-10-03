// Russian text for pointing, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Указываем на людей и вещи"] },
  summary: {
    ru: [
      "Часто мы не называем вещи и людей, а просто указываем на них.",
      "В этом уроке вы научитесь говорить «вот этот», «вон тот», «Я человек.», «мы», «моя рука» и «твоя семья».",
    ],
  },
  vocabNa: { ru: ["тот, те"] },
  prosePointersAreNouns: {
    ru: [
      "Мы часто указываем на людей и вещи. В русском для этого есть слова «этот», «тот», «я» и «ты». Мы называем их словами-указателями (местоимениями).",
      '<audio-example zh="这">{{word:zhe4}}</audio-example> значит «это, этот», а <audio-example zh="那">{{word:na4}}</audio-example> — «то, тот».',
      "Местоимение работает так же, как существительное. Оно даже может само быть целым предложением.",
    ],
    necessity: { ru: ["Теперь вы можете указывать на вещи."] },
    tldr: {
      ru: ["{{word:zhe4}} (этот) и {{word:na4}} (тот) работают как существительные."],
    },
  },
  pointersExample01: { ru: ["Это."] },
  pointersExample02: { ru: ["То."] },
  proseMandarinMeasureWords: {
    ru: [
      "В китайском нельзя поставить число или местоимение прямо перед существительным (нельзя просто сказать «это яблоко»). Между ними ставится маленькое счётное слово.",
      "В полном китайском десятки таких счётных слов, для каждого вида вещей своё: для плоских вещей, для длинных, для животных и так далее.",
      "Те, кто учит китайский, годами учатся ставить их правильно.",
    ],
    tldr: {
      ru: [
        "В полном китайском для каждого вида вещей своё счётное слово.",
      ],
    },
    necessity: {
      ru: ["Так видно, сколько труда экономит Hǎo-shuō-de."],
    },
  },
  vocabGe: { ru: ["ставится между «этот / тот» или числом и существительным"] },
  proseGeIsUniversal: {
    ru: [
      "В Hǎo-shuō-de осталось только одно из них: `{{word:ge4}}`.",
      "Оно подходит для всего: человека, животного, инструмента, фрукта или мысли.",
      "Поставьте его после местоимения: `{{word:zhe4}}-ge` значит «вот этот», а `{{word:na4}}-ge` — «вон тот».",
      "Добавьте существительное, чтобы сказать, какая именно вещь: `{{word:zhe4}}-ge {{word:shui3guo3}}` значит «этот фрукт».",
    ],
    tldr: {
      ru: ["В Hǎo-shuō-de {{word:ge4}} подходит для всего."],
    },
    necessity: { ru: ["Нужно выучить всего одно счётное слово."] },
  },
  infoUniversalClassifier: {
    title: { ru: ["Одно счётное слово для всего"] },
    items: [
      {
        ru: [
          "{{word:zhe4}}, {{word:na4}} или число + ge + существительное. Одно и то же `{{word:ge4}}` подходит к любому существительному.",
        ],
      },
    ],
  },
  example1L11: { ru: ["Этот человек."] },
  example2L11: { ru: ["То животное."] },
  example3L11: { ru: ["Та женщина."] },
  example4L11: { ru: ["Этот фрукт хороший."] },
  example5L11: { ru: ["Та вещь — фрукт."] },
  vocabWo: { ru: ["я, меня"] },
  vocabNi: { ru: ["ты"] },
  vocabTa: { ru: ["он, она, оно, они"] },
  prosePointingToPeople: {
    ru: [
      "На людей тоже можно указывать: на того, кто говорит, на того, кто слушает, и на кого угодно ещё.",
      "{{word:wo3}} («я, меня») указывает на говорящего. {{word:ni3}} («ты») — на слушающего. {{word:ta1}} («он, она») — на кого-то другого.",
      "Как и {{word:zhe4}} и {{word:na4}}, они работают как существительные.",
    ],
    tldr: {
      ru: [
        "{{word:wo3}} — «я», {{word:ni3}} — «ты», {{word:ta1}} — «он» или «она».",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о себе и о других."] },
  },
  pointToPeopleExample01: { ru: ["Я. / Меня."] },
  pointToPeopleExample02: { ru: ["Ты."] },
  pointToPeopleExample03: { ru: ["Он, она."] },
  vocabMen: {
    ru: ["больше одного человека: {{word:wo3}}-{{word:men}} значит «мы»"],
  },
  prosePluralPointers: {
    ru: [
      "Чтобы указать на нескольких людей, добавьте {{word:men}}: {{word:wo3}}-{{word:men}} («мы, нас»), {{word:ni3}}-{{word:men}} («вы»), {{word:ta1}}-{{word:men}} («они, их»).",
      "{{word:men}} ставится только после местоимений и других слов о людях. После остальных существительных его не ставят.",
    ],
    tldr: {
      ru: ["Добавьте {{word:men}}, чтобы сказать «мы», «вы» и «они»."],
    },
    necessity: { ru: ["Теперь вы можете говорить о группах людей."] },
  },
  pluralPointersExample01: { ru: ["Мы, нас."] },
  pluralPointersExample02: { ru: ["Вы (все)."] },
  pluralPointersExample03: { ru: ["Они, их."] },
  vocabJia: { ru: ["дом, семья"] },
  vocabTou: { ru: ["голова"] },
  vocabShou: { ru: ["рука"] },
  vocabJiao: { ru: ["нога, ступня"] },
  prosePossessionDe: {
    ru: [
      'Чтобы сказать, чьё что-то, добавьте <code>-{{word:de}}</code> (из урока {{lesson:modifying-nouns}}): <audio-example zh="我的">{{word:wo3}}-{{word:de}}</audio-example> («мой»), <audio-example zh="你的">{{word:ni3}}-{{word:de}}</audio-example> («твой»).',
      "Это то же самое <code>-{{word:de}}</code>, которое связывает прилагательное с существительным.",
    ],
    tldr: {
      ru: [
        "Добавьте {{word:de}}, чтобы сказать, чьё это: {{word:wo3}}-{{word:de}} значит «мой».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, кому что-то принадлежит."] },
  },
  posessionDeExample01: { ru: ["Мой фрукт."] },
  posessionDeExample02: { ru: ["Твоя семья."] },
  posessionDeExample03: { ru: ["Мой хороший человек."] },
  posessionDeExample04: { ru: ["Моя голова."] },
  posessionDeExample05: { ru: ["У тебя большие ноги."] },
  posessionDeExample06: { ru: ["У меня большие руки."] },
  posessionDeExample07: { ru: ["У него маленькая голова."] },
  posessionDeExample08: { ru: ["У неё маленькие ноги."] },
  exercise1L03: { ru: ["Вот это — животное."] },
  exercise2L03: { ru: ["Вон та — женщина."] },
  exercise1L11: { ru: ["Скажите «этот человек» с помощью ge."] },
  exercise2L11: { ru: ["Скажите «это животное» с помощью ge."] },
  exercise3L11: { ru: ["Скажите «Тот фрукт хороший.» с помощью ge."] },
  exercise1: { ru: ["Твой фрукт хороший."] },
  exercise2: { ru: ["Это твоя семья."] },
  exercise3: { ru: ["Я хороший человек."] },
  exercise4: { ru: ["Они люди."] },
  exercise5: { ru: ["У тебя большая рука."] },
  exercise6: { ru: ["У неё большая голова."] },
  exercise7: { ru: ["У меня маленькие ноги."] },
  answer1L03: {
    ru: ["{{Word:zhe4}}-ge {{word:shi4}} {{word:dong4wu4}}."],
  },
  answer2L03: {
    ru: ["{{Word:na4}}-ge {{word:shi4}} {{word:nv3ren2}}."],
  },
  answer1L11: { ru: ["{{Word:zhe4}}-ge {{word:ren2}}."] },
  answer2L11: { ru: ["{{Word:zhe4}}-ge {{word:dong4wu4}}."] },
  answer3L11: {
    ru: ["{{Word:na4}}-ge {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}."],
  },
  answer1: {
    ru: [
      "{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer2: {
    ru: ["{{Word:na4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:jia1}}."],
  },
  answer3: {
    ru: ["{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}."],
  },
  answer4: {
    ru: ["{{Word:ta1}}-{{word:men}} {{word:shi4}} {{word:ren2}}."],
  },
  answer5: {
    ru: ["{{Word:ni3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:da4}}."],
  },
  answer6: {
    ru: ["{{Word:ta1}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:da4}}."],
  },
  answer7: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:xiao3}}.",
    ],
  },
  faqGeForEverything: {
    question: { ru: ["{{word:ge4}} правда подходит для всего?"] },
    ru: [
      "В полном китайском для некоторых видов вещей есть другие счётные слова. Но {{word:ge4}} — самое частое, и его поймут с любым существительным.",
    ],
  },
  faqTaHeOrShe: {
    question: { ru: ["{{word:ta1}} — это «он» или «она»?"] },
    ru: [
      "И то и другое, и ещё «оно». Звучат они совершенно одинаково. Кто имеется в виду, понятно из ситуации.",
    ],
  },
  faqDropDe: {
    question: { ru: ["Можно сказать {{word:wo3}} {{word:jia1}} без -{{word:de}}?"] },
    ru: [
      "Носители китайского часто так говорят о семье и доме: {{word:wo3}} {{word:jia1}}. С -{{word:de}} всегда правильно, поэтому в Hǎo-shuō-de его сохраняют.",
    ],
  },
};

export default ru;
