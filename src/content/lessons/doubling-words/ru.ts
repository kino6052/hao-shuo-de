// Russian text for doubling-words, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Удвоение слов"] },
  summary: {
    ru: [
      "В китайском часто говорят слово два раза, чтобы изменить его смысл.",
      "В этом уроке вы научитесь говорить «Дай-ка я посмотрю.», «Луна круглая-круглая.» и «Учись хорошенько!»",
    ],
  },
  proseVerbs: {
    ru: [
      "**Чтобы сделать что-то немного или просто попробовать**, скажите глагол два раза. Второй раз — коротко и легко.",
      "",
      "**глагол-глагол**",
      "",
      "Так мягче, чем один глагол, — как глагол + {{word:yi1xia4}} (урок {{lesson:around-an-action}}): {{Word:wo3}} {{word:kan4}}-kan — «дай-ка я посмотрю». Одно такое слово вы уже знаете: {{word:xie4}}-xie (урок {{lesson:greetings-and-feelings}}).",
    ],
    tldr: {
      ru: [
        "Скажите глагол дважды, чтобы сделать это немного: {{word:kan4}}-kan — посмотреть.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сделать просьбу мягче."] },
  },
  exampleVerbs1: { ru: ["Дай-ка я посмотрю."] },
  exampleVerbs5: { ru: ["Я не знаю, так что спрошу."] },
  exampleVerbs6: { ru: ["Насекомое умерло? Дай-ка посмотрю."] },
  exampleVerbs7: { ru: ["Если у тебя есть время, давай немного поиграем."] },
  exampleVerbs9: { ru: ["Спасибо, дай-ка посмотрю."] },
  exampleVerbs10: { ru: ["Заходи, посмотри!"] },
  exampleVerbs11: { ru: ["Давай выйдем, немного поиграем."] },
  exampleVerbs12: { ru: ["Посмотри-ка, он такой радостный."] },
  proseDescribe: {
    ru: [
      "**Чтобы сделать описательное слово сильнее и живее**, скажите его два раза и добавьте -{{word:de}}.",
      "",
      "**прилагательное-прилагательное-{{word:de}}**",
      "",
      "В русском тоже так бывает: «белый-белый», «чуть-чуть».",
      "Не добавляйте {{word:hen3}}: повтор уже делает эту работу. {{word:hao3}}-{{word:hao3}} перед глаголом значит «хорошо, как следует»: {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! А {{word:yi1}}-{{word:dian3}}-{{word:dian3}} — «совсем чуть-чуть».",
    ],
    tldr: {
      ru: [
        "Скажите описательное слово дважды и добавьте -{{word:de}}, чтобы усилить: {{word:yuan2}}-{{word:yuan2}}-{{word:de}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете описывать вещи ярче."] },
  },
  exampleDescribe1: { ru: ["Луна круглая-круглая."] },
  exampleDescribe2: { ru: ["Я хочу горяченькой воды."] },
  exampleDescribe3: { ru: ["Фрукт маленький-маленький, но сладкий-сладкий."] },
  exampleDescribe4: { ru: ["Учись хорошенько!"] },
  exampleDescribe5: { ru: ["Мне кажется, этот вполне хороший."] },
  exampleDescribe6: { ru: ["Я хочу совсем чуть-чуть воды."] },
  exampleDescribe7: { ru: ["Растение живое и здоровое."] },
  proseEvery: {
    ru: [
      "**Чтобы сказать «каждый»**, скажите счётное слово или одно из немногих существительных два раза. Перед глаголом поставьте {{word:dou1}}.",
      "",
      "**{{word:ge4}}-{{word:ge4}} / {{word:ren2}}-{{word:ren2}} + {{word:dou1}} + глагол**",
      "",
      "{{word:ren2}}-{{word:ren2}} — все люди, {{word:jia1}}-{{word:jia1}} — каждый дом, {{word:ge4}}-{{word:ge4}} — каждый, а {{word:ci4}}-{{word:ci4}} — каждый раз. Большинство существительных удваивать нельзя.",
    ],
    tldr: {
      ru: [
        "Скажите {{word:ren2}} или {{word:ge4}} дважды, с {{word:dou1}}, — это «каждый»: {{word:ren2}}-{{word:ren2}} {{word:dou1}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать «каждый из них»."] },
  },
  exampleEvery1: { ru: ["Всем людям нужна вода."] },
  exampleEvery2: { ru: ["Каждый из них хороший."] },
  exampleEvery3: { ru: ["В каждом доме есть огонь."] },
  exampleEvery4: { ru: ["Каждый раз одно и то же."] },
  exampleEvery5: { ru: ["Все засмеялись."] },
  exampleEvery6: { ru: ["Как его зовут? Это все знают."] },
  infoDoubling: {
    title: { ru: ["Удвоение слов"] },
    items: [
      {
        ru: [
          "глагол-глагол — немного: {{Word:wo3}} {{word:kan4}}-kan. (Дай-ка я посмотрю.)",
        ],
      },
      {
        ru: [
          "прилагательное-прилагательное-{{word:de}} — сильнее: {{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}. (Луна круглая-круглая.) {{word:hao3}}-{{word:hao3}} + глагол — как следует: {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! (Учись хорошенько!)",
        ],
      },
      {
        ru: [
          "{{word:ren2}}-{{word:ren2}} / {{word:ge4}}-{{word:ge4}} + {{word:dou1}} — каждый: {{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}. (Всем людям нужна вода.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Дай-ка я послушаю."] },
  exercise2: { ru: ["Давай немного поговорим."] },
  exercise3: { ru: ["Вода холодненькая."] },
  exercise4: { ru: ["Спи хорошенько!"] },
  exercise5: { ru: ["У всех есть деньги."] },
  exercise6: { ru: ["Каждый раз по-другому."] },
  answer1: { ru: ["{{Word:wo3}} {{word:ting1}}-ting."] },
  answer2: { ru: ["{{Word:wo3}}-{{word:men}} {{word:shuo1}}-shuo."] },
  answer3: {
    ru: ["{{Word:shui3}} {{word:leng3}}-{{word:leng3}}-{{word:de}}."],
  },
  answer4: { ru: ["{{Word:hao3}}-{{word:hao3}} {{word:shui4jiao4}}!"] },
  answer5: {
    ru: [
      "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:you3}} {{word:jin1}}.",
    ],
  },
  answer6: {
    ru: ["{{Word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:bu4tong2}}."],
  },
  faqLight: {
    question: { ru: ["Вторая половина всегда звучит легко?"] },
    ru: [
      "У глагола — да: {{word:kan4}}-kan, {{word:xie4}}-xie. Удвоенное описательное слово сохраняет свой тон: {{word:da4}}-{{word:da4}}-{{word:de}}.",
    ],
  },
  faqWhichVerbs: {
    question: { ru: ["Любой ли глагол можно удвоить?"] },
    ru: [
      "Большинство глаголов действия — да: {{word:kan4}}-kan, {{word:ting1}}-ting, {{word:deng3}}-deng. Но не {{word:shi4}} и не {{word:you3}}: их нельзя сделать «немного».",
    ],
  },
  faqHaoHaoKan: {
    question: {
      ru: [
        "{{word:hao3}}-{{word:hao3}} {{word:kan4}} значит «посмотри внимательно»?",
      ],
    },
    ru: [
      "Может значить. Но ещё это «очень красивый»: {{word:hao3}} {{word:kan4}} («хорошо смотреть»), только сильнее. Что именно — понятно из ситуации.",
    ],
  },
};

export default ru;
