// Russian text for who-does-what, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Глаголы 1 — Кто что делает"] },
  summary: {
    ru: [
      "Как и в любом языке, нам нужно говорить, что кто-то или что-то что-то делает.",
      "В этом уроке вы научитесь говорить «Я ем рис.», «Она не пишет.» и «У меня нет денег.»",
    ],
  },
  vocabChi: { ru: ["есть, пить"] },
  vocabKan: { ru: ["смотреть, читать"] },
  vocabTing: { ru: ["слушать, слышать"] },
  vocabShuo: { ru: ["говорить"] },
  vocabXie: { ru: ["писать"] },
  vocabMifan: { ru: ["рис"] },
  proseDo: {
    ru: [
      "**Чтобы сказать, что кто-то делает**, поставьте глагол после того, кто делает, а то, что делают, — после глагола.",
      "",
      "**Кто + глагол + что**",
      "",
      "Глагол — это слово-действие: {{word:chi1}} (есть), {{word:kan4}} (смотреть), {{word:shuo1}} (говорить).",
      "Порядок слов показывает, кто что делает. Поменяйте слова местами — и смысл поменяется: {{Word:wo3}} {{word:kan4}} {{word:ta1}} / {{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
      "В русском смысл держат окончания, а в китайском окончаний нет — эту работу делает порядок слов.",
    ],
    tldr: {
      ru: [
        "Сначала тот, кто делает, потом действие, потом то, над чем его совершают.",
      ],
    },
    necessity: {
      ru: ["Почти каждое ваше предложение строится в таком порядке."],
    },
  },
  exampleDo1: { ru: ["Я ем рис."] },
  exampleDo2: { ru: ["Я смотрю на него."] },
  exampleDo3: { ru: ["Он смотрит на меня."] },
  exampleDo4: { ru: ["Я слушаю тебя."] },
  exampleDo5: { ru: ["Она говорит."] },
  exampleDo6: { ru: ["Я пишу."] },
  proseNot: {
    ru: [
      "**Чтобы сказать «не»**, поставьте {{word:bu4}} прямо перед глаголом.",
      "",
      "**Кто + {{word:bu4}} + глагол**",
    ],
    tldr: { ru: ["Поставьте {{word:bu4}} перед глаголом, чтобы сказать «не»."] },
    necessity: { ru: ["Теперь вы можете сказать, чего кто-то не делает."] },
  },
  exampleNot1: { ru: ["Она не пишет."] },
  exampleNot2: { ru: ["Я не ем."] },
  exampleNot3: { ru: ["Ты не слушаешь."] },
  exampleNot4: { ru: ["Я не говорю."] },
  vocabYou: { ru: ["иметь; есть, имеется"] },
  vocabMei: {
    ru: [
      "не, но только с {{word:you3}}: {{word:mei2}}-{{word:you3}} значит «нет, не иметь»",
    ],
  },
  vocabJin: { ru: ["деньги"] },
  proseHave: {
    ru: [
      "**Чтобы сказать, что у вас что-то есть**, используйте {{word:you3}}. Чтобы сказать «нет», говорите {{word:mei2}}-{{word:you3}}.",
      "",
      "**Кто + {{word:you3}} / {{word:mei2}}-{{word:you3}} + вещь**",
      "",
      "В русском говорят «у меня есть», а в китайском — «я имею»: {{Word:wo3}} {{word:you3}} {{word:jin1}}.",
      "{{word:you3}} — единственный глагол, который не использует {{word:bu4}}.",
    ],
    tldr: {
      ru: [
        "{{word:you3}} — «иметь». Чтобы сказать «нет», говорите {{word:mei2}}-{{word:you3}}, но никогда {{word:bu4}} {{word:you3}}.",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете сказать, что у вас есть и чего нет."],
    },
  },
  exampleHave1: { ru: ["У меня есть фрукты."] },
  exampleHave2: { ru: ["У меня нет денег."] },
  exampleHave3: { ru: ["У него есть рис."] },
  exampleHave4: { ru: ["У неё есть деньги."] },
  exampleHave5: { ru: ["У него ничего нет."] },
  exampleHave6: { ru: ["У меня очень мало денег."] },
  infoWhoDoesWhat: {
    title: { ru: ["Кто что делает"] },
    items: [
      {
        ru: [
          "Кто + глагол + что: {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}}. (Я ем рис.)",
        ],
      },
      {
        ru: [
          "{{word:bu4}} + глагол — «не»: {{Word:ta1}} {{word:bu4}} {{word:xie3}}. (Она не пишет.)",
        ],
      },
      {
        ru: [
          "{{word:mei2}}-{{word:you3}} — «нет, не иметь»: {{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}. (У меня нет денег.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Я слушаю тебя."] },
  exercise2: { ru: ["Она ест рис."] },
  exercise3: { ru: ["У него нет денег."] },
  exercise4: { ru: ["Ты смотришь на меня."] },
  exercise5: { ru: ["Я не пишу."] },
  exercise6: { ru: ["Они говорят."] },
  answer1: { ru: ["{{Word:wo3}} {{word:ting1}} {{word:ni3}}."] },
  answer2: { ru: ["{{Word:ta1}} {{word:chi1}} {{word:mi3fan4}}."] },
  answer3: {
    ru: [
      "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
    ],
  },
  answer4: { ru: ["{{Word:ni3}} {{word:kan4}} {{word:wo3}}."] },
  answer5: { ru: ["{{Word:wo3}} {{word:bu4}} {{word:xie3}}."] },
  answer6: { ru: ["{{Word:ta1}}-{{word:men}} {{word:shuo1}}."] },
  faqPastFuture: {
    question: { ru: ["Как сказать «ел» или «буду есть»?"] },
    ru: [
      "Глагол никогда не меняется. {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}} может значить «Я ем рис», «Я ел рис» или «Я буду есть рис». Когда — понятно из ситуации, а в уроке {{lesson:when-it-happens}} появятся маленькие слова для этого.",
    ],
  },
  faqChiDrink: {
    question: { ru: ["Можно ли сказать {{word:chi1}}, когда пьёшь?"] },
    ru: [
      "В Hǎo-shuō-de — да: {{word:chi1}} {{word:shui3}}. В обычном китайском для «пить» обычно есть отдельное слово, но {{word:chi1}} поймут.",
    ],
  },
};

export default ru;
