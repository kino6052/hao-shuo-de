// Russian text for modifying-nouns, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Описание существительных"] },
  summary: {
    ru: [
      "В языке нужно уметь описать вещь.",
      "В этом уроке вы научитесь говорить «Вода хорошая.», «большое место», «хорошие родители» и «много людей».",
    ],
  },
  vocabHen: { ru: ["очень"] },
  vocabHao: { ru: ["хороший"] },
  vocabDa: { ru: ["большой"] },
  vocabXiao: { ru: ["маленький"] },
  vocabShui: { ru: ["вода"] },
  vocabDifang: { ru: ["место"] },
  vocabFumu: { ru: ["родители"] },
  proseLike: {
    ru: [
      "**Чтобы сказать, какое что-то**, поставьте {{word:hen3}} перед прилагательным (например, «большой» или «хороший»).",
      "",
      "**СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} + прилагательное**",
      "",
      "{{word:shi4}} (урок {{lesson:words-and-sentences}}) говорит, что такое что-то. {{word:hen3}} говорит, какое оно. {{word:hen3}} также значит «очень».",
    ],
    tldr: {
      ru: [
        "Чтобы сказать, какое что-то, поставьте {{word:hen3}} перед прилагательным.",
      ],
    },
    necessity: {
      ru: ["Так описывают вещи целым предложением."],
    },
  },
  exampleLike1: { ru: ["Вода хорошая."] },
  exampleLike2: { ru: ["Место большое."] },
  exampleLike3: { ru: ["Животное маленькое."] },
  exampleLike4: { ru: ["Родители хорошие."] },
  exampleLike5: { ru: ["Фрукт большой."] },
  vocabDe: { ru: ["связывает прилагательное с существительным"] },
  proseBefore: {
    ru: [
      "**Чтобы поставить прилагательное перед существительным**, соедините их с помощью -{{word:de}} (например, «{{word:da4}}-{{word:de}} {{word:di4fang1}}»).",
      "",
      "**прилагательное-{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ**",
      "",
      "Носители китайского часто опускают -{{word:de}} после короткого прилагательного: {{word:da4}} {{word:di4fang1}}. В Hǎo-shuō-de его всегда сохраняют. С -{{word:de}} это всегда правильный китайский, так что это единственное правило, которое вам нужно.",
    ],
    tldr: {
      ru: [
        "Чтобы поставить прилагательное перед существительным, соедините их с помощью {{word:de}}.",
      ],
    },
    necessity: {
      ru: [
        "Теперь можно сказать «большое место», а не только «место большое».",
      ],
    },
  },
  exampleBefore1: { ru: ["Большое место."] },
  exampleBefore2: { ru: ["Хорошие родители."] },
  exampleBefore3: { ru: ["Это очень маленькое место."] },
  exampleBefore4: { ru: ["Это хорошая вода."] },
  exampleBefore5: { ru: ["Это очень большое животное."] },
  vocabDuo: { ru: ["много"] },
  vocabShao: { ru: ["мало"] },
  proseMany: {
    ru: [
      "**Чтобы сказать «много»**, поставьте {{word:hen3}}-{{word:duo1}}-{{word:de}} перед существительным.",
      "",
      "**{{word:hen3}}-{{word:duo1}}-{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ**",
      "",
      "{{word:duo1}} и {{word:shao3}} — особые слова. Другие прилагательные могут стоять перед -{{word:de}} сами по себе ({{word:da4}}-{{word:de}} {{word:di4fang1}}), а этим двум нужно {{word:hen3}} впереди: {{word:duo1}}-{{word:de}} {{word:ren2}} звучит неправильно.",
      "",
      "После существительного {{word:hen3}} {{word:duo1}} значит, что чего-то много: {{Word:shui3}} {{word:hen3}} {{word:duo1}}.",
      "{{word:shao3}} (мало) — противоположность: {{Word:shui3}} {{word:hen3}} {{word:shao3}}, воды очень мало.",
    ],
    tldr: {
      ru: [
        "{{word:hen3}}-{{word:duo1}}-{{word:de}} + существительное — это «много». {{word:hen3}} {{word:shao3}} — «очень мало».",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете сказать, сколько чего-то: много или очень мало."],
    },
  },
  exampleMany1: { ru: ["Много людей."] },
  exampleMany2: { ru: ["Много фруктов."] },
  exampleMany3: { ru: ["Воды много."] },
  exampleMany4: { ru: ["Воды очень мало."] },
  exampleMany5: { ru: ["Людей очень мало."] },
  exampleMany6: { ru: ["Фруктов очень мало."] },
  infoDescribing: {
    title: { ru: ["Как описать существительное"] },
    items: [
      {
        ru: [
          "СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} + прилагательное: {{Word:shui3}} {{word:hen3}} {{word:hao3}}. (Вода хорошая.)",
        ],
      },
      {
        ru: [
          "прилагательное + -{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ: {{word:da4}}-{{word:de}} {{word:di4fang1}} (большое место)",
        ],
      },
      {
        ru: [
          "{{word:hen3}}-{{word:duo1}}-{{word:de}} + СУЩЕСТВИТЕЛЬНОЕ: {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} (много людей)",
        ],
      },
      {
        ru: [
          "СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} {{word:shao3}}: {{Word:ren2}} {{word:hen3}} {{word:shao3}}. (Людей очень мало.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Место маленькое."] },
  exercise2: { ru: ["Вода хорошая."] },
  exercise3: { ru: ["большое место"] },
  exercise4: { ru: ["хорошие родители"] },
  exercise5: { ru: ["много людей"] },
  exercise6: { ru: ["Животное маленькое."] },
  exercise7: { ru: ["Фруктов много."] },
  exercise8: { ru: ["Людей очень мало."] },
  answer1: {
    ru: ["{{Word:di4fang1}} {{word:hen3}} {{word:xiao3}}."],
  },
  answer2: { ru: ["{{Word:shui3}} {{word:hen3}} {{word:hao3}}."] },
  answer3: { ru: ["{{Word:da4}}-{{word:de}} {{word:di4fang1}}"] },
  answer4: { ru: ["{{Word:hao3}}-{{word:de}} {{word:fu4mu3}}"] },
  answer5: {
    ru: ["{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}"],
  },
  answer6: {
    ru: ["{{Word:dong4wu4}} {{word:hen3}} {{word:xiao3}}."],
  },
  answer7: {
    ru: ["{{Word:shui3guo3}} {{word:hen3}} {{word:duo1}}."],
  },
  answer8: { ru: ["{{Word:ren2}} {{word:hen3}} {{word:shao3}}."] },
  faqHenDuo: {
    question: {
      ru: [
        "{{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} значит «очень много людей»?",
      ],
    },
    ru: [
      "Нет, просто «много людей». {{word:duo1}} не может стоять перед существительным само по себе, поэтому всегда берёт {{word:hen3}}, и здесь {{word:hen3}} почти ничего не добавляет.",
    ],
  },
  faqHen: {
    question: { ru: ["{{word:hen3}} всегда значит «очень»?"] },
    ru: [
      "Нет. В схеме СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} + прилагательное {{word:hen3}} стоит в основном потому, что без него предложение не обходится: {{Word:shui3}} {{word:hen3}} {{word:hao3}} — это просто «Вода хорошая».",
      "Без {{word:hen3}} звучит так, будто вы сравниваете: вода хорошая, а что-то другое — нет. Чтобы действительно сказать «очень», произнесите {{word:hen3}} чуть громче.",
    ],
  },
  faqShi: {
    question: { ru: ["Почему не {{word:shui3}} {{word:shi4}} {{word:hao3}}?"] },
    ru: [
      "{{word:shi4}} соединяет два существительных: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. С прилагательным {{word:shi4}} не ставят, поэтому вместо него используйте {{word:hen3}}: {{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
};

export default ru;
