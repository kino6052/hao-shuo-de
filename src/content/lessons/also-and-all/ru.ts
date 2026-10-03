// Russian text for also-and-all, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Уточнения 3 — Тоже и все"] },
  summary: {
    ru: [
      "Нам часто хочется добавить ещё кого-то или сказать обо всех сразу.",
      "В этом уроке вы научитесь говорить «Я тоже ем.», «Мы все едим.», «Я ем всё.» и «Большинство людей едят рис.»",
    ],
  },
  vocabYe: { ru: ["тоже, также"] },
  vocabZhiwu: { ru: ["растение"] },
  vocabHuo: { ru: ["огонь"] },
  vocabKongqi: { ru: ["воздух"] },
  vocabKai: { ru: ["открывать; включать"] },
  vocabGuan: { ru: ["закрывать; выключать"] },
  proseAlsoDo: {
    ru: [
      "**Чтобы сказать, что кто-то тоже что-то делает**, поставьте {{word:ye3}} (тоже) прямо перед глаголом.",
      "",
      "**Кто + {{word:ye3}} + глагол**",
      "",
      "{{word:ye3}} стоит после того, кто делает, и никогда — в начале предложения.",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:ye3}} прямо перед глаголом: {{Word:wo3}} {{word:ye3}} {{word:chi1}} — я тоже ем.",
      ],
    },
    necessity: { ru: ["Теперь вы можете добавить ещё одного человека или ещё одну вещь."] },
  },
  exampleAlsoDo1: { ru: ["Я тоже ем."] },
  exampleAlsoDo2: { ru: ["Ты тоже хочешь?"] },
  exampleAlsoDo3: { ru: ["Растениям тоже нужен воздух."] },
  exampleAlsoDo6: { ru: ["Я тоже рядом с ним."] },
  exampleAlsoDo7: { ru: ["Он тоже не двигается."] },
  exampleAlsoDo8: { ru: ["Другие люди тоже пришли."] },
  exampleAlsoDo9: { ru: ["Коробка открыта, и дверь тоже открыта."] },
  exampleAlsoDo10: { ru: ["Я выключил огонь, и он тоже."] },
  proseAlsoIs: {
    ru: [
      "**Чтобы сказать, что что-то тоже такое**, поставьте {{word:ye3}} перед {{word:hen3}} и прилагательным.",
      "",
      "**Вещь + {{word:ye3}} + {{word:hen3}} + прилагательное**",
    ],
    tldr: {
      ru: [
        "{{word:ye3}} {{word:hen3}} + прилагательное: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}} — ей тоже холодно.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что две вещи похожи."] },
  },
  exampleAlsoIs1: { ru: ["Мне холодно, и ему тоже холодно."] },
  exampleAlsoIs2: { ru: ["Воздух тоже холодный."] },
  exampleAlsoIs3: { ru: ["Огонь горячий, и солнце тоже горячее."] },
  exampleAlsoIs4: { ru: ["Солнце круглое, и луна тоже круглая."] },
  exampleAlsoIs5: { ru: ["Твой дом тоже далеко."] },
  vocabDou: { ru: ["все; shénme-dōu: всё"] },
  proseAll: {
    ru: [
      "**Чтобы сказать, что все что-то делают**, поставьте {{word:dou1}} (все) прямо перед глаголом, после людей или вещей.",
      "",
      "**Люди или вещи + {{word:dou1}} + глагол**",
      "",
      "{{word:dou1}}, как и {{word:ye3}}, стоит после того, о ком речь. Перед существительным оно не ставится никогда.",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:dou1}} перед глаголом: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}} — мы все едим.",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить обо всех сразу."] },
  },
  exampleAll1: { ru: ["Мы все едим."] },
  exampleAll2: { ru: ["Всем растениям нужна вода."] },
  exampleAll3: { ru: ["У них у всех всё хорошо."] },
  exampleAll4: { ru: ["Фрукты все съедены."] },
  exampleAll5: { ru: ["Воздух на улице хороший."] },
  exampleAll6: { ru: ["Где огонь?"] },
  exampleAll7: { ru: ["Двери все открыты."] },
  exampleAll8: { ru: ["Огонь везде выключен."] },
  proseEverything: {
    ru: [
      "**Чтобы сказать «всё»**, поставьте {{word:shen2me}}-{{word:dou1}} перед глаголом.",
      "",
      "**Кто + {{word:shen2me}}-{{word:dou1}} + глагол**",
      "",
      "С {{word:bu4}} или {{word:mei2}} это значит «ничего», как в русском «ничего не хочу»: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:bu4}} {{word:yao4}} — я ничего не хочу.",
      "{{word:na3li3}}-{{word:dou1}} значит «везде».",
    ],
    tldr: {
      ru: [
        "{{word:shen2me}}-{{word:dou1}} + глагол: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}} — я ем всё.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать «всё» и «ничего»."] },
  },
  exampleEverything1: { ru: ["Я ем всё."] },
  exampleEverything2: { ru: ["Он всё знает."] },
  exampleEverything3: { ru: ["Я ничего не хочу."] },
  exampleEverything4: { ru: ["Он ничего не увидел."] },
  exampleEverything5: { ru: ["Воздух есть везде."] },
  vocabBufen: { ru: ["часть"] },
  prosePart: {
    ru: [
      "**Чтобы сказать о части чего-то**, используйте {{word:bu4fen}} (часть).",
      "",
      "**{{word:zhe4}} / {{word:na4}} / {{word:da4}} + {{word:bu4fen}}**",
      "",
      "{{word:da4}} {{word:bu4fen}} («большая часть») значит «большинство»: {{Word:da4}} {{word:bu4fen}} {{word:ren2}} — большинство людей.",
    ],
    tldr: {
      ru: [
        "{{word:bu4fen}} значит «часть». {{word:da4}} {{word:bu4fen}} — «большинство».",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете говорить о части, а не обо всём."],
    },
  },
  examplePart1: { ru: ["Эта часть хорошая."] },
  examplePart2: { ru: ["Та часть горячая."] },
  examplePart3: { ru: ["Большинство людей едят рис."] },
  examplePart4: { ru: ["Большинство растений маленькие."] },
  infoAlsoAndAll: {
    title: { ru: ["Тоже и все"] },
    items: [
      {
        ru: [
          "{{word:ye3}} + глагол — тоже: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. (Я тоже ем.)",
        ],
      },
      {
        ru: [
          "{{word:ye3}} {{word:hen3}} + прилагательное: {{Word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}. (Ей тоже холодно.)",
        ],
      },
      {
        ru: [
          "{{word:dou1}} + глагол — все: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}. (Мы все едим.)",
        ],
      },
      {
        ru: [
          "{{word:shen2me}}-{{word:dou1}} + глагол — всё: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}. (Я ем всё.) С {{word:bu4}} — ничего. {{word:na3li3}}-{{word:dou1}} — везде.",
        ],
      },
      {
        ru: [
          "{{word:bu4fen}} — часть: {{Word:zhe4}} {{word:bu4fen}} {{word:hen3}} {{word:hao3}}. (Эта часть хорошая.) {{word:da4}} {{word:bu4fen}} — большинство.",
        ],
      },
    ],
  },
  exercise1: { ru: ["Я тоже хочу."] },
  exercise2: { ru: ["Вода тоже горячая."] },
  exercise3: { ru: ["Мы все хотим фруктов."] },
  exercise4: { ru: ["Я ем всё."] },
  exercise5: { ru: ["Большинство людей едят рис."] },
  exercise6: { ru: ["Растение маленькое."] },
  exercise7: { ru: ["Огонь правда горячий."] },
  exercise8: { ru: ["Воздух здесь холодный."] },
  exercise9: { ru: ["Коробка открыта?"] },
  exercise10: { ru: ["Выключи огонь!"] },
  answer1: { ru: ["{{Word:wo3}} {{word:ye3}} {{word:yao4}}."] },
  answer2: {
    ru: [
      "{{Word:shui3}} {{word:ye3}} {{word:hen3}} {{word:re4}}.",
    ],
  },
  answer3: {
    ru: [
      "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:yao4}} {{word:shui3guo3}}.",
    ],
  },
  answer4: {
    ru: [
      "{{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}.",
    ],
  },
  answer5: {
    ru: [
      "{{Word:da4}} {{word:bu4fen}} {{word:ren2}} {{word:chi1}} {{word:mi3fan4}}.",
    ],
  },
  answer6: { ru: ["{{Word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}."] },
  answer7: { ru: ["{{Word:huo3}} {{word:zhen1}} {{word:re4}}."] },
  answer8: {
    ru: [
      "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:kong1qi4}} {{word:hen3}} {{word:leng3}}.",
    ],
  },
  answer9: { ru: ["{{Word:he2zi}} {{word:kai1}} {{word:le}} {{word:ma}}?"] },
  answer10: { ru: ["{{Word:guan1}} {{word:huo3}}!"] },
  faqMeToo: {
    question: { ru: ["Как сказать «я тоже»?"] },
    ru: [
      "Скажите {{Word:wo3}} {{word:ye3}} {{word:shi4}} или повторите глагол: {{Word:wo3}} {{word:ye3}} {{word:chi1}}. После {{word:ye3}} обязательно что-то нужно, поэтому одно {{word:wo3}} {{word:ye3}} — ещё не предложение.",
    ],
  },
  faqMeiDidnt: {
    question: { ru: ["Почему здесь {{word:mei2}} стоит без {{word:you3}}?"] },
    ru: [
      "Перед глаголом {{word:mei2}} значит «не сделал»: {{Word:wo3}} {{word:mei2}} {{word:chi1}} (Я не ел). Поэтому {{word:shen2me}}-{{word:dou1}} {{word:mei2}} — это «ничего» о том, чего не случилось, а {{word:shen2me}}-{{word:dou1}} {{word:bu4}} — о том, что сейчас или вообще.",
    ],
  },
  faqAllPeople: {
    question: { ru: ["Как сказать «все люди», если {{word:dou1}} не может стоять перед существительным?"] },
    ru: [
      "Поставьте {{word:dou1}} после них, перед глаголом: {{Word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}} (Всем людям нужна вода).",
    ],
  },
};

export default ru;
