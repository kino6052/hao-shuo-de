// Russian text for everyday-patterns, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Обороты на каждый день"] },
  summary: {
    ru: [
      "Каждый день мы предлагаем помощь, просим дать попробовать и разрешаем другим что-то делать.",
      "В этом уроке вы научитесь говорить «Давай я!», «Дай посмотреть.», «Помоги мне!», «Родители не пускают меня гулять.» и «Давай выйдем, хорошо?»",
    ],
  },
  proseLetMe: {
    ru: [
      "**Чтобы вызваться что-то сделать**, скажите {{word:wo3}} {{word:lai2}} («я иду»), а потом глагол. Это значит «давай я сделаю».",
      "",
      "**{{word:wo3}} {{word:lai2}} + глагол**",
      "",
      "Одно {{Word:wo3}} {{word:lai2}}! — это «давай я!». {{word:wo3}}-{{word:men}} {{word:lai2}} + глагол — «давайте».",
    ],
    tldr: {
      ru: [
        "{{word:wo3}} {{word:lai2}} + глагол — «давай я»: {{Word:wo3}} {{word:lai2}} {{word:na2}} — давай я понесу.",
      ],
    },
    necessity: { ru: ["Теперь вы можете вызваться что-то сделать."] },
  },
  exampleLetMe1: { ru: ["Давай я!"] },
  exampleLetMe2: { ru: ["Давай я понесу."] },
  exampleLetMe3: { ru: ["Подожди, давай я сделаю."] },
  exampleLetMe4: { ru: ["Давай я его спрошу."] },
  exampleLetMe5: { ru: ["Давайте посмотрим."] },
  exampleLetMe6: { ru: ["Ничего страшного, давай я!"] },
  proseMyTurn: {
    ru: [
      "**Чтобы попросить дать попробовать**, скажите {{word:gei3}} {{word:wo3}} («дай мне»), потом глагол и {{word:yi1xia4}} (мгновение). Это значит «дай-ка я немножко …», совсем как русское «дай посмотреть».",
      "",
      "**{{word:gei3}} {{word:wo3}} + глагол + {{word:yi1xia4}}**",
      "",
      "{{word:yi1xia4}} делает просьбу маленькой и дружелюбной. Удвоенный глагол делает то же самое: {{word:gei3}} {{word:wo3}} {{word:kan4}}-kan (урок {{lesson:doubling-words}}).",
    ],
    tldr: {
      ru: [
        "{{word:gei3}} {{word:wo3}} + глагол + {{word:yi1xia4}} — «дай-ка я»: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете попросить посмотреть, послушать или попробовать."] },
  },
  exampleMyTurn1: { ru: ["Дай посмотреть."] },
  exampleMyTurn2: { ru: ["Дай послушать."] },
  exampleMyTurn3: { ru: ["Дай потрогать."] },
  exampleMyTurn4: { ru: ["Дай немного поиграть."] },
  exampleMyTurn5: { ru: ["Ты досмотрел? Дай посмотреть."] },
  exampleMyTurn6: { ru: ["Дай потрогать его шерсть."] },
  vocabBang: { ru: ["помогать"] },
  proseHelp: {
    ru: [
      "**Чтобы помочь кому-то что-то сделать**, поставьте {{word:bang1}} (помогать) и человека перед глаголом.",
      "",
      "**Кто + {{word:bang1}} + человек + глагол**",
      "",
      "Добавьте {{word:yi1xia4}}, чтобы попросить вежливо: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:yi1xia4}} — «поищешь это за меня?». «Помоги мне!» — это {{word:bang1}}-bang {{word:wo3}}!",
    ],
    tldr: {
      ru: [
        "{{word:bang1}} + человек + глагол — помочь кому-то это сделать: {{word:wo3}} {{word:bang1}} {{word:ni3}} {{word:na2}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете попросить о помощи и предложить её."] },
  },
  exampleHelp1: { ru: ["Помоги мне!"] },
  exampleHelp3: { ru: ["Подержишь это за меня?"] },
  exampleHelp7: { ru: ["Не смейся, помоги мне!"] },
  exampleHelp8: { ru: ["Дома беспорядок. Поможешь мне?"] },
  exampleHelp9: { ru: ["Давай я помогу тебе встать."] },
  exampleHelp10: { ru: ["Скорее, помоги мне!"] },
  exampleHelp11: { ru: ["Посчитаешь за меня?"] },
  exampleHelp12: { ru: ["Ты мне помогаешь, и я очень рад."] },
  vocabTeach: { ru: ["учить (кого-то)"] },
  proseTeach: {
    ru: [
      "**Чтобы научить кого-то что-то делать**, поставьте {{word:jiao1}} (учить) и человека перед глаголом, как с {{word:bang1}}.",
      "",
      "**Кто + {{word:jiao1}} + человек + глагол**",
      "",
      "{{word:jiao1}} произносится высоким ровным тоном. {{word:jiao4}}, с падающим тоном, — это «называться» или «пусть» (урок {{lesson:greetings-and-feelings}}). {{word:jiao1}} и {{word:xue2}} ходят парой, как «учить» и «учиться»: {{Word:ni3}} {{word:jiao1}}, {{word:wo3}} {{word:xue2}}.",
    ],
    tldr: {
      ru: [
        "{{word:jiao1}} + человек + глагол — научить: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете учить других и просить научить вас."] },
  },
  exampleTeach1: { ru: ["Я научу тебя писать."] },
  exampleTeach2: { ru: ["Ты можешь меня научить?"] },
  exampleTeach3: { ru: ["Ты учишь, а я учусь."] },
  exampleTeach4: { ru: ["Он хорошо учит."] },
  proseHaveSomeone: {
    ru: [
      "**Чтобы велеть кому-то что-то сделать или позволить это**, поставьте {{word:jiao4}} и человека перед глаголом.",
      "",
      "**Кто + {{word:jiao4}} / {{word:bu4}} {{word:jiao4}} + человек + глагол**",
      "",
      "{{word:jiao4}} вы знаете как «называться» (урок {{lesson:greetings-and-feelings}}). Если после него идут человек и глагол, оно значит «велеть, пусть, позволить». {{word:bu4}} {{word:jiao4}} — «не позволять».",
    ],
    tldr: {
      ru: [
        "{{word:jiao4}} + человек + глагол — велеть или позволить. {{word:bu4}} {{word:jiao4}} — не позволять.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, кто вам разрешает, а кто нет."] },
  },
  exampleHaveSomeone1: { ru: ["Пусть войдёт."] },
  exampleHaveSomeone2: { ru: ["Я велел им подождать."] },
  exampleHaveSomeone3: { ru: ["Родители не пускают меня гулять."] },
  exampleHaveSomeone4: { ru: ["Он не даёт мне посмотреть."] },
  exampleHaveSomeone5: { ru: ["Пусть говорит дальше."] },
  proseMayI: {
    ru: [
      "**Чтобы спросить, можно ли**, поставьте {{word:neng2}} (мочь) перед глаголом, а {{word:ma}} — в конце. **Чтобы что-то предложить или вежливо попросить**, добавьте в конце {{word:hao3}} {{word:ma}}? («хорошо?»).",
      "",
      "**Кто + {{word:neng2}} + глагол + {{word:ma}}? / …, {{word:hao3}} {{word:ma}}?**",
      "",
      "Чтобы ответить «да», скажите {{Word:neng2}}! или {{Word:hao3}}!. {{word:wo3}}-{{word:men}} + глагол, {{word:hao3}} {{word:ma}}? — это «давай …, хорошо?».",
    ],
    tldr: {
      ru: [
        "{{word:neng2}} … {{word:ma}}? — «можно?». Добавьте {{word:hao3}} {{word:ma}}?, чтобы сказать «давай» или «пожалуйста».",
      ],
    },
    necessity: { ru: ["Теперь вы можете вежливо просить и договариваться с людьми."] },
  },
  exampleMayI1: { ru: ["Можно войти?"] },
  exampleMayI2: { ru: ["Можно потрогать?"] },
  exampleMayI3: { ru: ["Здесь нельзя спать."] },
  exampleMayI4: { ru: ["Давай выйдем поиграть, хорошо?"] },
  exampleMayI5: { ru: ["Помоги мне, пожалуйста."] },
  exampleMayI6: { ru: ["Хорошо!"] },
  exampleMayI7: { ru: ["Сядь слева от меня, хорошо?"] },
  exampleMayI8: { ru: ["Хорошо, сейчас же приду!"] },
  infoEveryday: {
    title: { ru: ["Позволить и помочь"] },
    items: [
      {
        ru: [
          "{{word:wo3}} {{word:lai2}} + глагол — давай я: {{Word:wo3}} {{word:lai2}} {{word:na2}}. (Давай я понесу.)",
        ],
      },
      {
        ru: [
          "{{word:gei3}} {{word:wo3}} + глагол + {{word:yi1xia4}} — дай мне попробовать: {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}. (Дай посмотреть.)",
        ],
      },
      {
        ru: [
          "{{word:bang1}} + человек + глагол — помочь: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:na2}} {{word:yi1xia4}}. (Подержишь это за меня?)",
        ],
      },
      {
        ru: [
          "{{word:jiao4}} + человек + глагол — велеть или позволить: {{Word:jiao4}} {{word:ta1}} {{word:jin4}}-{{word:lai2}}. (Пусть войдёт.) {{word:bu4}} {{word:jiao4}} — не позволять: {{Word:fu4mu3}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:chu1}}-{{word:qu4}}. (Родители не пускают меня гулять.)",
        ],
      },
      {
        ru: [
          "{{word:neng2}} … {{word:ma}}? — можно ли: {{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}? (Можно войти?) …, {{word:hao3}} {{word:ma}}? — давай или пожалуйста: {{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}, {{word:hao3}} {{word:ma}}? (Давай выйдем поиграть, хорошо?)",
        ],
      },
      {
        ru: [
          "{{word:jiao1}} + человек + глагол — научить: {{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}. (Я научу тебя писать.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Давай я!"] },
  exercise2: { ru: ["Давай я спрошу."] },
  exercise3: { ru: ["Дай посмотреть."] },
  exercise4: { ru: ["Помоги мне!"] },
  exercise5: { ru: ["Я тебе помогу."] },
  exercise6: { ru: ["Поищешь это за меня?"] },
  exercise7: { ru: ["Пусть они войдут."] },
  exercise8: { ru: ["Он не даёт мне писать."] },
  exercise9: { ru: ["Можно войти?"] },
  exercise10: { ru: ["Давай поедим рис, хорошо?"] },
  exercise11: { ru: ["Спасибо, что помог мне."] },
  exercise12: { ru: ["Ты можешь меня научить?"] },
  exercise13: { ru: ["Я научу тебя писать."] },
  answer1: { ru: ["{{Word:wo3}} {{word:lai2}}!"] },
  answer2: { ru: ["{{Word:wo3}} {{word:lai2}} {{word:wen4}}."] },
  answer3: { ru: ["{{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}}."] },
  answer4: { ru: ["{{Word:bang1}}-bang {{word:wo3}}!"] },
  answer5: { ru: ["{{Word:wo3}} {{word:bang1}} {{word:ni3}}."] },
  answer6: { ru: ["{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:yi1xia4}}."] },
  answer7: { ru: ["{{Word:jiao4}} {{word:ta1}}-{{word:men}} {{word:jin4}}-{{word:lai2}}."] },
  answer8: { ru: ["{{Word:ta1}} {{word:bu4}} {{word:jiao4}} {{word:wo3}} {{word:xie3}}."] },
  answer9: { ru: ["{{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}?"] },
  answer10: { ru: ["{{Word:wo3}}-{{word:men}} {{word:chi1}} {{word:mi3fan4}}, {{word:hao3}} {{word:ma}}?"] },
  answer11: { ru: ["{{Word:xie4}}-xie {{word:ni3}} {{word:bang1}} {{word:wo3}}."] },
  answer12: { ru: ["{{Word:ni3}} {{word:neng2}} {{word:jiao1}} {{word:wo3}} {{word:ma}}?"] },
  answer13: { ru: ["{{Word:wo3}} {{word:jiao1}} {{word:ni3}} {{word:xie3}}."] },
  faqLetWord: {
    question: { ru: ["Разве нет слова для «пусть» или «позволить»?"] },
    ru: [
      "В обычном китайском есть, но Hǎo-shuō-de без него обходится. {{word:jiao4}} позволяет другим что-то сделать, {{word:wo3}} {{word:lai2}} предлагает, а {{word:gei3}} {{word:wo3}} просит дать попробовать. Все три понятны любому.",
    ],
  },
  faqJiaoName: {
    question: { ru: ["Как отличить {{word:jiao4}} «пусть» от {{word:jiao4}} «называться»?"] },
    ru: [
      'Посмотрите, что идёт после него. Имя: {{Word:ta1}} {{word:jiao4}} "Lisa" (Её зовут Лиза). Человек и глагол: {{Word:ta1}} {{word:jiao4}} {{word:wo3}} {{word:lai2}} (Она велела мне прийти).',
    ],
  },
  faqWhyYixia: {
    question: { ru: ["Зачем добавлять {{word:yi1xia4}}?"] },
    ru: [
      "Оно делает просьбу маленькой: «всего на минутку». {{Word:gei3}} {{word:wo3}} {{word:kan4}} звучит резко. {{Word:gei3}} {{word:wo3}} {{word:kan4}} {{word:yi1xia4}} звучит дружелюбно.",
    ],
  },
};

export default ru;
