// Russian text for comparing, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Уточнения 2 — Сравнение"] },
  summary: {
    ru: [
      "Мы часто сравниваем одно с другим.",
      "В этом уроке вы научитесь говорить «Я больше тебя.», «Они одинаковые.» и «Мне нужна другая одежда.»",
    ],
  },
  vocabBi: { ru: ["чем (при сравнении)"] },
  vocabYing: { ru: ["твёрдый"] },
  vocabYuan: { ru: ["круглый"] },
  vocabGunzi: { ru: ["палка"] },
  vocabXian: { ru: ["линия, верёвка, нитка"] },
  proseThan: {
    ru: [
      "**Чтобы сказать, что одно больше другого**, поставьте между ними {{word:bi3}} (чем), а потом прилагательное.",
      "",
      "**A + {{word:bi3}} + B + прилагательное**",
      "",
      "Прилагательное не меняется: в русском «большой» становится «больше», а в китайском остаётся {{word:da4}}.",
      "Не ставьте {{word:hen3}} в такие предложения: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}, а не {{word:hen3}} {{word:da4}}.",
    ],
    tldr: {
      ru: [
        "A {{word:bi3}} B + прилагательное: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}} — я больше тебя.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сравнить две вещи."] },
  },
  exampleThan1: { ru: ["Я больше тебя."] },
  exampleThan5: { ru: ["Что твёрже палки?"] },
  exampleThan6: { ru: ["У меня меньше денег, чем у тебя."] },
  exampleThan7: { ru: ["То место дальше, чем дом."] },
  exampleThan9: { ru: ["Люди ценнее денег."] },
  exampleThan11: { ru: ["Он старше меня."] },
  exampleThan12: { ru: ["Эта дорога длиннее той."] },
  exampleThan13: { ru: ["Коробка справа больше той, что слева."] },
  vocabZui: { ru: ["самый"] },
  proseMost: {
    ru: [
      "**Чтобы сказать «самый»**, поставьте {{word:zui4}} (самый) перед прилагательным.",
      "",
      "**Вещь + {{word:zui4}} + прилагательное**",
      "",
      "{{word:zui4}}-{{word:hou4}} («самый задний») — это «последний»: {{Word:ta1}} {{word:zui4}}-{{word:hou4}} {{word:lai2}} — он пришёл последним.",
    ],
    tldr: {
      ru: [
        "{{word:zui4}} + прилагательное — «самый»: {{word:zui4}} {{word:da4}} — самый большой.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что самое большое или самое лучшее."] },
  },
  exampleMost1: { ru: ["Этот самый большой."] },
  exampleMost2: { ru: ["Он самый быстрый."] },
  exampleMost3: { ru: ["Что лучше всего?"] },
  exampleMost4: { ru: ["Больше всего я люблю фрукты."] },
  exampleMost5: { ru: ["Он пришёл последним."] },
  vocabYiyang: { ru: ["одинаковый, такой же"] },
  proseSame: {
    ru: [
      "**Чтобы сказать, что вещи одинаковые**, используйте {{word:yi1yang4}}.",
      "",
      "**Вещи + {{word:yi1yang4}} / {{word:yi1yang4}}-{{word:de}} + существительное**",
    ],
    tldr: {
      ru: [
        "{{word:yi1yang4}} значит «одинаковый». {{word:yi1yang4}}-{{word:de}} {{word:he2zi}} — такая же коробка.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что две вещи совпадают."] },
  },
  exampleSame1: { ru: ["Они одинаковые."] },
  exampleSame2: { ru: ["У нас одинаковая одежда."] },
  exampleSame3: { ru: ["Мне нужна такая же нитка."] },
  vocabButong: { ru: ["разный, не такой"] },
  vocabBiede: { ru: ["другой, ещё какой-то"] },
  proseDifferent: {
    ru: [
      "**Чтобы сказать, что вещи разные**, используйте {{word:bu4tong2}}.",
      "",
      "**Вещи + {{word:bu4tong2}} / {{word:bu4tong2}}-{{word:de}} + существительное**",
      "",
      "Чтобы сказать «другой» или «что-то ещё», используйте {{word:bie2de}} (другой): {{Word:wo3}} {{word:yao4}} {{word:bie2de}} — мне нужно что-то другое.",
    ],
    tldr: {
      ru: [
        "{{word:bu4tong2}} значит «разный». {{word:bie2de}} — «другой»: {{word:bie2de}} {{word:ren2}} — другие люди.",
      ],
    },
    necessity: {
      ru: [
        "Теперь вы можете сказать, что вещи не совпадают, и попросить другую.",
      ],
    },
  },
  exampleDifferent1: { ru: ["Они разные."] },
  exampleDifferent2: { ru: ["Мне нужна другая одежда."] },
  exampleDifferent3: { ru: ["Это место совсем не такое."] },
  exampleDifferent4: { ru: ["Мне нужно что-то другое."] },
  exampleDifferent5: { ru: ["У тебя есть другая одежда?"] },
  exampleDifferent6: { ru: ["Другие люди больше меня."] },
  vocabZhong: { ru: ["вид, сорт"] },
  proseKind: {
    ru: [
      "**Чтобы сказать, какого вида что-то**, используйте {{word:zhong3}} (вид). Оно ставится после {{word:zhe4}} или {{word:na4}}, как {{word:ge4}}.",
      "",
      "**{{word:zhe4}}-{{word:zhong3}} / {{word:na4}}-{{word:zhong3}} + существительное**",
    ],
    tldr: {
      ru: [
        "{{word:zhe4}}-{{word:zhong3}} + существительное — «такой вид»: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} — такие фрукты.",
      ],
    },
    necessity: {
      ru: [
        "Теперь вы можете говорить о видах вещей и сравнивать их.",
      ],
    },
  },
  exampleKind1: { ru: ["Этот сорт фруктов сладкий."] },
  exampleKind2: { ru: ["Этот сорт лучше того."] },
  exampleKind3: { ru: ["Мне нужна палка вон такого вида."] },
  proseShapeFeel: {
    ru: [
      "**Чтобы сказать, как что-то выглядит или ощущается**, используйте прилагательные, например {{word:ying4}} (твёрдый) и {{word:yuan2}} (круглый).",
      "",
      "**Вещь + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}}**",
    ],
    tldr: {
      ru: [
        "{{word:ying4}} — «твёрдый», {{word:yuan2}} — «круглый». Они работают как любое прилагательное.",
      ],
    },
    necessity: { ru: ["Теперь вам есть что ещё сравнивать."] },
  },
  exampleShapeFeel1: { ru: ["Палка твёрдая."] },
  exampleShapeFeel2: { ru: ["Луна круглая."] },
  exampleShapeFeel3: { ru: ["Нитка в коробке."] },
  exampleShapeFeel4: { ru: ["У меня есть палка."] },
  exampleShapeFeel5: { ru: ["Это отверстие круглое."] },
  infoComparing: {
    title: { ru: ["Сравнение"] },
    items: [
      {
        ru: [
          "A {{word:bi3}} B + прилагательное: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}. (Я больше тебя.) Без {{word:hen3}}.",
        ],
      },
      {
        ru: [
          "{{word:yi1yang4}} — одинаковый: {{Word:ta1}}-{{word:men}} {{word:yi1yang4}}. (Они одинаковые.)",
        ],
      },
      {
        ru: [
          "{{word:bu4tong2}} — разный: {{Word:wo3}} {{word:yao4}} {{word:bu4tong2}}-{{word:de}} {{word:yi1fu}}. (Мне нужна другая одежда.)",
        ],
      },
      {
        ru: [
          "{{word:bie2de}} — другой: {{Word:wo3}} {{word:yao4}} {{word:bie2de}}. (Мне нужно что-то другое.)",
        ],
      },
      {
        ru: [
          "{{word:zhe4}}-{{word:zhong3}} + существительное — такой вид: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} (такие фрукты)",
        ],
      },
      {
        ru: [
          "{{word:zui4}} + прилагательное — самый: {{Word:zhe4}}-ge {{word:zui4}} {{word:da4}}. (Этот самый большой.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Эта палка твёрже той."] },
  exercise2: { ru: ["Ты больше меня."] },
  exercise3: { ru: ["Их дома одинаковые."] },
  exercise4: { ru: ["Мне нужна другая коробка."] },
  exercise5: { ru: ["Луна круглая."] },
  exercise6: { ru: ["Где верёвка?"] },
  exercise7: { ru: ["Палка твёрдая?"] },
  exercise8: { ru: ["Мне нужно что-то другое."] },
  exercise9: { ru: ["Этот сорт фруктов сладкий."] },
  exercise10: { ru: ["Этот самый большой."] },
  exercise11: { ru: ["Он старше меня."] },
  answer1: {
    ru: [
      "{{Word:zhe4}}-ge {{word:gun4zi}} {{word:bi3}} {{word:na4}}-ge {{word:ying4}}.",
    ],
  },
  answer2: {
    ru: ["{{Word:ni3}} {{word:bi3}} {{word:wo3}} {{word:da4}}."],
  },
  answer3: {
    ru: [
      "{{Word:ta1}}-{{word:men}}-{{word:de}} {{word:jia1}} {{word:yi1yang4}}.",
    ],
  },
  answer4: {
    ru: [
      "{{Word:wo3}} {{word:yao4}} {{word:bu4tong2}}-{{word:de}} {{word:he2zi}}.",
    ],
  },
  answer5: { ru: ["{{Word:yue4}} {{word:hen3}} {{word:yuan2}}."] },
  answer6: { ru: ["{{Word:xian4}} {{word:zai4}} {{word:na3li3}}?"] },
  answer7: { ru: ["{{Word:gun4zi}} {{word:ying4}} {{word:ma}}?"] },
  answer8: { ru: ["{{Word:wo3}} {{word:yao4}} {{word:bie2de}}."] },
  answer9: {
    ru: [
      "{{Word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} {{word:hen3}} {{word:tian2}}.",
    ],
  },
  answer10: { ru: ["{{Word:zhe4}}-ge {{word:zui4}} {{word:da4}}."] },
  answer11: { ru: ["{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:lao3}}."] },
  faqMuchBigger: {
    question: { ru: ["Как сказать «намного больше»?"] },
    ru: [
      "Поставьте {{word:hen3}} {{word:duo1}} после прилагательного: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}} {{word:hen3}} {{word:duo1}} (Я намного больше тебя).",
    ],
  },
  faqNotAsBig: {
    question: { ru: ["Как сказать «не такой большой, как»?"] },
    ru: [
      "Используйте {{word:mei2}}-{{word:you3}} вместо {{word:bi3}}: {{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:ni3}} {{word:da4}} (Я не такой большой, как ты).",
    ],
  },
  faqButongOrBiede: {
    question: { ru: ["Чем {{word:bu4tong2}} отличается от {{word:bie2de}}?"] },
    ru: [
      "{{word:bu4tong2}} сравнивает: эти вещи не одинаковые. {{word:bie2de}} выбирает другую: {{Word:wo3}} {{word:yao4}} {{word:bie2de}} (Мне нужно что-то другое).",
    ],
  },
};

export default ru;
