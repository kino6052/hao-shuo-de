// Russian text for roles-of-a-word, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Слово в новой роли"] },
  summary: {
    ru: [
      "Одно слово может делать больше одной работы.",
      "В этом уроке вы научитесь говорить «еда» ({{word:chi1}}-{{word:de}}), «тот, кто пишет» и «хорошо говорить».",
    ],
  },
  vocabCi: { ru: ["слово"] },
  proseThing: {
    ru: [
      "**Чтобы назвать вещь, о которой идёт речь в действии**, поставьте -{{word:de}} после глагола.",
      "",
      "**глагол-{{word:de}}**",
      "",
      "Одно {{word:ci2}} (слово) может делать больше одной работы: {{word:chi1}} — «есть», а {{word:chi1}}-{{word:de}} — «еда».",
    ],
    tldr: {
      ru: [
        "глагол-{{word:de}} называет вещь: {{word:chi1}}-{{word:de}} — еда, то, что едят.",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете делать новые существительные из знакомых глаголов."],
    },
  },
  exampleThing1: { ru: ["Я хочу чего-нибудь поесть."] },
  exampleThing2: { ru: ["Это то, что я написал."] },
  exampleThing3: { ru: ["Что это за слово?"] },
  exampleThing4: { ru: ["Как сказать это слово?"] },
  exampleThing5: { ru: ["Я знаю это слово."] },
  exampleThing6: { ru: ["Вся еда — десять штук — испортилась."] },
  exampleThing7: { ru: ["То, что он ест, — жёлтый фрукт."] },
  prosePerson: {
    ru: [
      "**Чтобы назвать того, кто что-то делает**, поставьте -{{word:de}} {{word:ren2}} после глагола.",
      "",
      "**глагол-{{word:de}} {{word:ren2}}**",
    ],
    tldr: {
      ru: [
        "глагол-{{word:de}} {{word:ren2}} — тот, кто это делает: {{word:xie3}}-{{word:de}} {{word:ren2}} — тот, кто пишет.",
      ],
    },
    necessity: { ru: ["Теперь вы можете называть людей по тому, что они делают."] },
  },
  examplePerson1: { ru: ["Тот, кто пишет."] },
  examplePerson2: { ru: ["Тот, кто говорит, — мой родитель."] },
  examplePerson3: { ru: ["Кто знает, тот не говорит."] },
  proseHow: {
    ru: [
      "**Чтобы сказать, как кто-то что-то делает**, поставьте -{{word:de}} после глагола, а потом прилагательное.",
      "",
      "**Кто + глагол-{{word:de}} + прилагательное**",
      "",
      "В русском «хороший» превращается в «хорошо», а в китайском слово не меняется — эту работу делает -{{word:de}}.",
    ],
    tldr: {
      ru: [
        "глагол-{{word:de}} + прилагательное говорит «как»: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}} — она хорошо говорит.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, насколько хорошо что-то сделано."] },
  },
  exampleHow1: { ru: ["Она хорошо говорит."] },
  exampleHow2: { ru: ["Ты очень хорошо пишешь."] },
  exampleHow3: { ru: ["Он много ест."] },
  exampleHow4: { ru: ["Он говорит лучше меня."] },
  vocabFangfa: { ru: ["способ, метод"] },
  proseName: {
    ru: [
      "**Чтобы назвать то, для чего нет слова**, опишите это, а потом добавьте -{{word:de}} и существительное.",
      "",
      "**описание-{{word:de}} + существительное**",
      "",
      "Это -{{word:de}} вы уже знаете: {{word:hao3}}-{{word:de}} {{word:ren2}} (урок {{lesson:modifying-nouns}}), {{word:wo3}}-{{word:de}} {{word:bi2zi}} (урок {{lesson:pointing}}). Описание может быть сколь угодно длинным.",
    ],
    tldr: {
      ru: [
        "описание-{{word:de}} + существительное: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}} — животное в воде.",
      ],
    },
    necessity: {
      ru: [
        "Даже если для чего-то нет слова, вы всё равно можете это назвать.",
      ],
    },
  },
  exampleName1: { ru: ["Животное, которое живёт в воде."] },
  exampleName2: { ru: ["Сильный человек."] },
  exampleName3: { ru: ["Способ писать."] },
  exampleName4: { ru: ["У тебя есть хороший способ?"] },
  exampleName5: { ru: ["Этот способ хороший."] },
  exampleName12: { ru: ["Цвет, который я люблю, — синий."] },
  exampleName13: { ru: ["Это ценная вещь."] },
  vocabBizi: { ru: ["нос"] },
  vocabPifu: { ru: ["кожа"] },
  vocabMao: { ru: ["волосы, шерсть"] },
  proseParts: {
    ru: [
      "**Чтобы сказать, чья это часть**, поставьте -{{word:de}} между владельцем и частью: {{word:dong4wu4}}-{{word:de}} {{word:bi2zi}} — нос животного.",
      "",
      "**владелец-{{word:de}} + часть**",
      "",
      "{{word:mao2}} — это шерсть: {{word:tou2}}-{{word:shang4}}-{{word:de}} {{word:mao2}} («шерсть на голове») — это волосы.",
    ],
    tldr: {
      ru: [
        "владелец-{{word:de}} + часть: {{word:wo3}}-{{word:de}} {{word:bi2zi}} — мой нос.",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о частях тела людей и животных."] },
  },
  exampleName6: { ru: ["У меня большой нос."] },
  exampleName7: { ru: ["У тебя красный нос."] },
  exampleName8: { ru: ["У животного маленький нос."] },
  exampleName9: { ru: ["У животного твёрдая кожа."] },
  exampleName10: { ru: ["У меня горячая кожа."] },
  exampleHair1: { ru: ["Шерсть у этого животного белая."] },
  exampleHair2: { ru: ["У него чёрные волосы."] },
  exampleHair3: { ru: ["У животного жёсткая шерсть."] },
  infoJobsOfDe: {
    title: { ru: ["Что делает -de"] },
    items: [
      {
        ru: [
          "глагол-{{word:de}} — вещь: {{word:chi1}}-{{word:de}} (еда, то, что едят)",
        ],
      },
      {
        ru: [
          "глагол-{{word:de}} {{word:ren2}} — тот, кто: {{word:xie3}}-{{word:de}} {{word:ren2}} (тот, кто пишет)",
        ],
      },
      {
        ru: [
          "глагол-{{word:de}} + прилагательное — как: {{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}. (Она хорошо говорит.)",
        ],
      },
      {
        ru: [
          "прилагательное-{{word:de}} + существительное: {{word:hao3}}-{{word:de}} {{word:ren2}} (хороший человек). Чьё: {{word:wo3}}-{{word:de}} {{word:bi2zi}} (мой нос).",
        ],
      },
      {
        ru: [
          "более длинное описание-{{word:de}} + существительное: {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}} (животное в воде)",
        ],
      },
    ],
  },
  exercise1: { ru: ["У тебя есть что-нибудь поесть?"] },
  exercise2: { ru: ["тот, кто говорит"] },
  exercise3: { ru: ["Ты хорошо пишешь."] },
  exercise4: { ru: ["Как пишется это слово?"] },
  exercise5: { ru: ["У меня есть способ."] },
  exercise6: { ru: ["У меня маленький нос."] },
  exercise7: { ru: ["У неё белая кожа."] },
  exercise8: { ru: ["Шерсть у этого животного белая."] },
  answer1: {
    ru: [
      "{{Word:ni3}} {{word:you3}} {{word:chi1}}-{{word:de}} {{word:ma}}?",
    ],
  },
  answer2: { ru: ["{{Word:shuo1}}-{{word:de}} {{word:ren2}}."] },
  answer3: {
    ru: [
      "{{Word:ni3}} {{word:xie3}}-{{word:de}} {{word:hao3}}.",
    ],
  },
  answer4: {
    ru: [
      "{{Word:zhe4}}-ge {{word:ci2}} {{word:zen3me}} {{word:xie3}}?",
    ],
  },
  answer5: { ru: ["{{Word:wo3}} {{word:you3}} {{word:fang1fa3}}."] },
  answer6: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
    ],
  },
  answer7: {
    ru: [
      "{{Word:ta1}}-{{word:de}} {{word:pi2fu1}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
    ],
  },
  answer8: { ru: ["{{Word:zhe4}}-ge {{word:dong4wu4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}."] },
  faqWhichDe: {
    question: { ru: ["Как понять, какую работу делает -{{word:de}}?"] },
    ru: [
      "Посмотрите, что стоит прямо перед ним и после него. Перед существительным оно описывает это существительное: {{word:hao3}}-{{word:de}} {{word:ren2}}. После глагола, когда дальше ничего нет, это вещь: {{word:chi1}}-{{word:de}}. После глагола и перед прилагательным оно говорит «как»: {{word:shuo1}}-{{word:de}} {{word:hao3}}.",
    ],
  },
  faqDeSameWord: {
    question: { ru: ["Все эти -{{word:de}} — одно и то же слово?"] },
    ru: [
      "Звучат они одинаково, поэтому Hǎo-shuō-de пишет их все как -{{word:de}}. Иероглифами то -de, которое говорит «как» ({{word:shuo1}}-{{word:de}} {{word:hao3}}), пишется по-другому.",
    ],
  },
};

export default ru;
